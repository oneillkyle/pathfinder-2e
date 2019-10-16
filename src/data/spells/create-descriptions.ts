import cheerio from 'cheerio';
import { readFileSync, readdirSync } from 'fs';
import { createFile } from '../create';

interface IDescription {
  traits: Array<{
    title: string;
    description: string;
    id: string;
    url: string;
  }>;
  source: string;
  traditions: string[];
  actions: string;
  cast: string[];
  description: string;
  range?: string;
  targets?: string;
  savingThrow?: string;
  duration?: string;
  area?: string;
}

export function readDirectory() {
  // const dir = './src/data/spells/descriptions-html/';
  const dir = './src/data/spells/descriptions-test/';
  const descriptions: {[id: string]: IDescription} = {};
  readdirSync(dir).forEach(file => {
    const html = readFileSync(`${dir}${file}`);
    const id = file.split('.')[0];
    const $ = cheerio.load(html);
    const description: IDescription = {
      traits: [],
      source: '',
      traditions: [],
      actions: '',
      cast: [],
      description: '',
    };

    $('.trait').each((i, t) => {
      const trait = $(t);
      description.traits.push({
        title: trait.find('a').text(),
        description: trait.attr('title'),
        id: trait.find('a').attr('href').split('ID=')[1],
        url: trait.find('a').attr('href')
      });
    });
    $('b:contains(Traditions)').nextAll('a').each((i, x) => {
      description.traditions.push($(x).text());
    });
    description.source = $('.external-link').find('i').text();
    description.actions = $('.actiondark').attr('alt');
    description.cast = ($('.actionlight').get(0).nextSibling.nodeValue.trim() || '').split(', ');
    description.range = ($('b:contains(Range)').get(0).nextSibling.nodeValue || '').replace(';', '');
    description.targets = ($('b:contains(Targets)').get(0).nextSibling.nodeValue || '').trim();
    description.savingThrow = ($('b:contains(Saving Throw)').get(0).nextSibling.nodeValue || '').trim();
    const hrSplit = $.html().split('<hr>');
    let htmlStr = '';
    hrSplit.slice(1).forEach(t => htmlStr = htmlStr + t);
    description.description = $(`<p>${htmlStr}</p>`).text();
    descriptions[id] = description;
  });
  createFile('./src/data/spells/descriptions/descriptions.ts', descriptions);
}

readDirectory();
