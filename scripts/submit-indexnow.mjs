const host = process.env.INDEXNOW_HOST;
const key = process.env.INDEXNOW_KEY;
const paths = [...new Set(process.argv.slice(2))];

if (host !== 'theskinstapler.com' || !/^[a-zA-Z0-9-]{8,128}$/.test(key ?? '')) {
  throw new Error('Set INDEXNOW_HOST and INDEXNOW_KEY for the production domain.');
}
if (!paths.length || paths.length > 10000 || paths.some((path) =>
  !/^\/(?:[a-z0-9-]+(?:\/[a-z0-9-]+)*)?$/.test(path) ||
  /^\/(api|preview|404)(\/|$)/.test(path)
)) {
  throw new Error('Pass the changed production content paths, for example / /guides/example.');
}

const origin = `https://${host}`;
const keyLocation = `${origin}/${key}.txt`;
const verification = await fetch(keyLocation, {
  redirect: 'error',
  signal: AbortSignal.timeout(15000),
});
if (verification.status !== 200 || (await verification.text()).trimEnd() !== key) {
  throw new Error(`The production key file must return the exact key with HTTP 200. Received HTTP ${verification.status}.`);
}

// 发布验收成功后传入本次变更路径，避免误提交整份 sitemap。
const response = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host, key, keyLocation, urlList: paths.map((path) => origin + path) }),
  signal: AbortSignal.timeout(20000),
});
if (![200, 202].includes(response.status)) {
  throw new Error(`IndexNow returned HTTP ${response.status} for ${paths.length} URL(s).`);
}
console.log(`IndexNow accepted ${paths.length} URL(s), HTTP ${response.status}.`);
