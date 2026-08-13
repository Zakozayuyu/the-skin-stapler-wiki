import Link from 'next/link';
import PillarArticlePage from './PillarArticlePage';

const chapters = [
  ['00:03:06', 'The Night Before at the Burrows Apartments', 'Fefe', 'Full-game opening and apartment sequence'],
  ['00:18:18', 'Carrion City Police Department', 'Dick Slater', 'Case setup, station interactions, and investigation'],
  ['00:37:17', 'The Quick Fix', 'Hexy', 'Convenience-store shift and the hot dog scene'],
  ['00:54:13', 'Gutters End Bowling Alley', 'Blair', 'Bowling-alley shift and survival sequence'],
  ['01:15:37', "Luna's Cream Filled Donut Holes", 'Luna', 'A new full-game workplace perspective'],
  ['01:34:10', 'Underworld VHS', 'Scaroline', 'Video-store chapter and story clues'],
  ['01:58:34', "Lazar's Blood Bank", 'Nurse Layna', 'Blood-bank chapter and late-game escalation'],
  ['02:18:29', 'Closing In', 'Dick Slater', 'Final investigation before the finale'],
  ['02:34:00', 'The Flesh Pit', 'Finale', 'Ending chapter and closing scenes']
] as const;

const video = 'https://www.youtube.com/watch?v=7uZjD1LTOOc';

export default function WalkthroughPage() {
  return (
    <PillarArticlePage
      path="/walkthrough"
      title="The Skin Stapler Walkthrough: Full Game Chapter Guide"
      description="The Skin Stapler walkthrough follows the complete full-game route from Fefe’s apartment through CCPD, workplace chapters, Closing In, and The Flesh Pit."
      keyword="the skin stapler walkthrough"
      label="Walkthrough"
      image="police"
    >
      <aside className="card answer-box">
        <strong>Quick answer</strong>
        <p>The full game starts with Fefe’s apartment, moves through CCPD and five workplace locations, then returns to Slater for Closing In and The Flesh Pit. Complete conversations, shift tasks, crime-scene checks, and damaged-tape interactions to move forward; there is no verified universal password that skips those objectives.</p>
      </aside>

      <nav className="card article-toc" aria-label="On this page">
        <strong>On this page</strong>
        <a href="#chapter-order">Full chapter order</a>
        <a href="#how-to-progress">How to avoid getting stuck</a>
        <a href="#demo-vs-full-game">Demo vs. full game</a>
        <a href="#playtime">Playtime and achievements</a>
        <a href="#finale">Reaching the ending</a>
        <a href="#faq">Walkthrough FAQ</a>
      </nav>

      <h2 id="chapter-order">The Skin Stapler full walkthrough chapter order</h2>
      <p>The table below uses the chapter names and timestamps published with a complete no-commentary playthrough. Select a time to jump to that part of the video. The four <strong>Aftermath</strong> interludes and the <strong>Final Aftermath</strong> connect the playable locations, so do not skip them if you are following the story.</p>
      <p>Two independent full-game videos show the same broad route: opening apartment, CCPD, Quick Fix, Gutters End, later workplace viewpoints, the final investigation, and the Flesh Pit confrontation. Exact timestamps vary by player, but the location order is consistent.</p>

      <div className="table-scroll">
        <table className="walkthrough-table">
          <thead><tr><th>Time</th><th>Chapter</th><th>Viewpoint</th><th>What to expect</th></tr></thead>
          <tbody>{chapters.map(([time, chapter, viewpoint, focus]) => {
            const [hours, minutes, seconds] = time.split(':').map(Number);
            const total = hours * 3600 + minutes * 60 + seconds;
            return <tr key={chapter}><td><a href={`${video}&t=${total}s`} target="_blank" rel="noreferrer">{time}</a></td><td><strong>{chapter}</strong></td><td>{viewpoint}</td><td>{focus}</td></tr>;
          })}</tbody>
        </table>
      </div>

      <h2 id="how-to-progress">How to avoid getting stuck</h2>
      <p>The Skin Stapler is a linear, story-led game. Progress usually comes from completing the current interaction rather than searching a large map or winning a long combat encounter.</p>
      <ol className="step-list">
        <li><strong>Check the current objective.</strong> Use the on-screen objective prompt whenever a scene stops moving forward.</li>
        <li><strong>Finish nearby dialogue.</strong> Let conversations end before leaving the room; the next interaction may not activate early.</li>
        <li><strong>Sweep the active room.</strong> Look at desks, counters, doors, evidence, and highlighted objects before backtracking.</li>
        <li><strong>Complete the shift task.</strong> The workplace chapters use ordinary jobs to gate the next horror beat.</li>
        <li><strong>Follow the newly opened route.</strong> Once the objective changes, a door, corridor, or interaction that was unavailable may become active.</li>
      </ol>
      <blockquote><p>You do not need to grind levels, collect ammunition for a final boss, or explore an open world. The game is built around observation, dialogue, light puzzles, and scripted danger.</p></blockquote>

      <h2>What each part of the route is doing</h2>
      <p><Link href="/guides/the-skin-stapler-fefe">Fefe’s apartment opening</Link> is part of the full game and is not listed in the free demo. The police-station chapter then establishes Dick Slater, Robbie Knox, and the investigation. Quick Fix shifts control to Hexy and contains the <Link href="/guides/the-skin-stapler-hot-dog">hot dog scene</Link>, while Gutters End follows Blair before the detectives review what happened.</p>
      <p>Luna’s shop, <Link href="/guides/the-skin-stapler-scaroline">Scaroline’s Underworld VHS</Link>, and <Link href="/guides/the-skin-stapler-layna">Nurse Layna at Lazar’s Blood Bank</Link> extend that pattern with additional locations and cast members. Each workplace is a story chapter, not an optional side business or separate game mode. The Aftermath scenes reconnect those events to the case and move Slater closer to the killer.</p>
      <p>Closing In is the last investigation section before the ending. By this point, the detectives have the killer’s name, location, and revenge motive. The Flesh Pit resolves that thread in a linear confrontation rather than opening a new area for free exploration.</p>

      <h2>Crime scenes, tapes, and shift tasks</h2>
      <p>The official store description separates the game into crime-scene investigation, grisly puzzles, and unusual work shifts. Those activities are also the practical progression gates. If an objective does not update, the most likely cause is an unfinished conversation, an unchecked piece of evidence, a tape interaction, or one missing step in the current shift.</p>
      <p>Damaged tapes must be fixed or reviewed during the route, but there is no verified reusable code that solves every tape or puzzle. Claims about a master password, secret redeem code, or universal chapter skip are not supported by the game footage checked for this guide.</p>
      <p>During workplace scenes, complete the task in the order shown by the game. The Quick Fix demo, for example, uses a serving sequence before the scene can advance. The exact interactions change by location, so follow the objective text instead of assuming every chapter uses the same checklist.</p>

      <h2 id="demo-vs-full-game">Demo walkthrough vs. full game</h2>
      <p>The free demo samples three verified locations: <strong>Carrion City Police Department</strong>, <strong>The Quick Fix</strong>, and <strong>Gutters End Bowling Alley</strong>. The released full game adds the Burrows Apartments opening, Luna’s shop, Underworld VHS, Lazar’s Blood Bank, the later detective sequence, and The Flesh Pit finale.</p>
      <p>If you have only played the demo, start the full game from the beginning. The full release has a broader story order and additional perspectives; the demo’s three scenes are not the whole investigation. See the <Link href="/guides/the-skin-stapler-demo">demo guide</Link> for download and save-transfer notes.</p>

      <h2 id="playtime">How long the full walkthrough takes</h2>
      <p>Tainted Pact describes The Skin Stapler as a short horror game designed for one sitting. The two no-commentary or complete-story runs checked for this guide last about 2 hours 46 minutes and 3 hours 5 minutes. Those are observed video lengths, not a guaranteed completion time for every player.</p>
      <p>A first run can take longer if you inspect every room, pause during dialogue, retry a dangerous scene, or hunt achievements. One streamer estimated five to six hours, but clean recorded runs are closer to three hours. A careful description is “about three hours for a direct route, longer with exploration.”</p>
      <p>Steam lists <strong>16 achievements</strong> for the released game. Not every unlock condition has been verified chapter by chapter, so this walkthrough does not label achievements as missable without proof.</p>

      <h2 id="finale">How to reach The Flesh Pit ending</h2>
      <p>Complete the <strong>Final Aftermath</strong> and <strong>Closing In</strong> chapters without quitting to the menu. The final named section is <strong>The Flesh Pit (Ending)</strong>. It begins at 02:34:00 in the referenced full playthrough and contains the final story reveals.</p>
      <div className="card warning-card spoiler-card"><strong>Heavy spoilers ahead</strong><p>For the finale structure, ending status, and spoiler discussion, continue to <Link href="/ending">The Skin Stapler ending guide</Link>.</p></div>

      <h2>What this walkthrough can and cannot confirm</h2>
      <p>The route, named locations, principal viewpoints, Steam achievement count, and final confrontation are supported by official store information or full-game footage. The chapter timestamps come from a published playthrough and are provided as navigation aids. They should not be treated as target speedrun splits.</p>
      <p>A fan wiki reports minor epilogue differences based on the tapes heard, but matched runs showing those variants were not available. Multiple ending routes, secret moral choices, and a fixed collectible threshold have not been confirmed. This walkthrough therefore follows the single verified main route.</p>
      <p>Spelling also varies in automated captions, especially Fefe/Fifi and Kain/Kane. Cast-poster spelling is used for Fefe, while Silus Kain is used for the killer’s brother. Any future patch that changes chapter order or adds scenes will require a fresh check.</p>

      <h2 id="faq">The Skin Stapler walkthrough FAQ</h2>
      <div className="faq-cards">
        <section className="card"><h3>How long is The Skin Stapler?</h3><p>The creator describes it as a short game designed for one sitting. The full runs checked here last 2:46–3:05, while player time varies with exploration, dialogue pacing, and retries.</p></section>
        <section className="card"><h3>How many chapters are in the full game?</h3><p>The complete reference playthrough labels nine major playable scene chapters, plus five Aftermath story sections, an introduction, and a short beginning segment.</p></section>
        <section className="card"><h3>Does the game have chapter select?</h3><p>The game records unlocked chapters, but community reports around the demo noted confusing chapter-menu behavior. Treat chapter select as a replay tool and finish the active run normally when possible.</p></section>
        <section className="card"><h3>Is this walkthrough for the demo?</h3><p>No. This is the August 2026 full-game route. The demo includes only the police station, Quick Fix, and Gutters End sample sections.</p></section>
      </div>

      <p className="source-note">Route reference: <a href={video} target="_blank" rel="noreferrer">HollowPoiint’s full-game chaptered walkthrough</a>. Official game details: <a href="https://store.steampowered.com/app/4310610/The_Skin_Stapler/" target="_blank" rel="noreferrer">The Skin Stapler on Steam</a>.</p>
    </PillarArticlePage>
  );
}
