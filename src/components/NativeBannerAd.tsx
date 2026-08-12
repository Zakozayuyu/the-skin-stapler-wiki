import Script from 'next/script';

const adContainerId = 'container-f65b47b66de3f10c35de956ab8a7cc73';
const adScriptUrl = 'https://pl30808092.effectivecpmnetwork.com/f65b47b66de3f10c35de956ab8a7cc73/invoke.js';

export default function NativeBannerAd() {
  return (
    <section className="native-ad-slot" aria-label="Advertisement">
      <span className="native-ad-label">Advertisement</span>
      <div id={adContainerId} className="native-ad-container" />
      <Script
        id="effective-cpm-native-banner"
        src={adScriptUrl}
        strategy="lazyOnload"
        async
        data-cfasync="false"
      />
    </section>
  );
}
