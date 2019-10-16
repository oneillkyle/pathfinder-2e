import fetch from 'node-fetch';
import cheerio from 'cheerio';
import { existsSync } from 'fs';

import { createHtmlFile } from '../create';

import { data as arcane } from './lists/arcane';
import { data as divine } from './lists/divine';
import { data as focus } from './lists/focus';
import { data as occult } from './lists/occult';
import { data as primal } from './lists/primal';
import { data as rituals } from './lists/rituals';

interface IData {
  [topKey: string]: {
    [key: string]: {
      name: string;
      school?: string;
      flags: string;
      description: string;
      href: string;
    };
  };
}

function fetchDescription(url: string) {
  fetch(url)
    .then(response => {
      // When the page is loaded convert it to text
      return response.text();
    })
    .then(html => {
      const id = url.split('?ID=')[1];
      const $ = cheerio.load(html);
      createHtmlFile(
        `./src/data/spells/descriptions-html/${id}.html`,
        $('#ctl00_MainContent_DetailedOutput').html()
      );
    })
    .catch(err => {
      // tslint:disable-next-line:no-console
      console.log(err);
    });
}

function createSpellDescriptions(spellData: IData) {
  // fetchDescription(spellData['Arcane Cantrips']['Acid Splash'].href);
  Object.keys(spellData).forEach(topKey => {
    Object.keys(spellData[topKey]).forEach(key => {
      const url = spellData[topKey][key].href;
      const id = url.split('?ID=')[1];
      if (!existsSync(`./src/data/spells/descriptions-html/${id}.html`)) {
        fetchDescription(spellData[topKey][key].href);
      }
    });
  });
}

createSpellDescriptions(arcane);
createSpellDescriptions(divine);
createSpellDescriptions(focus);
createSpellDescriptions(occult);
createSpellDescriptions(primal);
createSpellDescriptions(rituals);
