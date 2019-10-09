import { fetchHtml } from './retrieve';

fetchHtml('https://2e.aonprd.com/Spells.aspx?Tradition=1', './src/data/spells/arcane.ts');
fetchHtml('https://2e.aonprd.com/Spells.aspx?Tradition=2', './src/data/spells/divine.ts');
fetchHtml('https://2e.aonprd.com/Spells.aspx?Tradition=3', './src/data/spells/occult.ts');
fetchHtml('https://2e.aonprd.com/Spells.aspx?Tradition=4', './src/data/spells/primal.ts');
fetchHtml('https://2e.aonprd.com/Spells.aspx?Focus=true&Tradition=0', './src/data/spells/focus.ts');
// fetchHtml('https://2e.aonprd.com/Rituals.aspx', './src/data/spells/rituals.ts');
