import { fetchHtml } from './retrieve-lists';

fetchHtml('https://2e.aonprd.com/Spells.aspx?Tradition=1', './src/data/spells/lists/arcane.ts');
fetchHtml('https://2e.aonprd.com/Spells.aspx?Tradition=2', './src/data/spells/lists/divine.ts');
fetchHtml('https://2e.aonprd.com/Spells.aspx?Tradition=3', './src/data/spells/lists/occult.ts');
fetchHtml('https://2e.aonprd.com/Spells.aspx?Tradition=4', './src/data/spells/lists/primal.ts');
fetchHtml('https://2e.aonprd.com/Spells.aspx?Focus=true&Tradition=0', './src/data/spells/lists/focus.ts');
fetchHtml('https://2e.aonprd.com/Rituals.aspx', './src/data/spells/lists/rituals.ts');
