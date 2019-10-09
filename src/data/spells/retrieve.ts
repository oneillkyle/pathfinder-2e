import fetch from 'node-fetch';
import cheerio from 'cheerio';
import { createFile } from '../create';
const spellRegex = /^([\w\s]+)(?:\(([\w]+)\))?([\w]*):\s([\w\s.]+)/g;

function getSpellAnchors($: CheerioStatic, nodeList: Cheerio) {
  const anchorMap: { [x: string]: string } = {};
  nodeList.each((i, anchor) => {
    const $anchor = $(anchor);
    const spellName = $anchor
      .text()
      .split('(')[0]
      .trim();
    anchorMap[spellName] = `https://2e.aonprd.com/${$anchor.attr('href')}`;
  });
  return anchorMap;
}

export function formatSpells(
  str: string,
  spellAnchors: { [x: string]: string }
) {
  const arr = str.split('\n');
  console.log(arr);
  let currentType: string;
  return arr.reduce((spells: { [x: string]: { [k: string]: {} } }, cur) => {
    if (!cur) return spells;
    const m = spellRegex.exec(cur);
    if (m) {
      spells[currentType][m[1].trim()] = {
        name: m[1].trim(),
        school: m[2],
        flags: m[3],
        description: m[4],
        href: spellAnchors[m[1].trim()]
      };
    } else {
      currentType = cur;
      spells[currentType] = {};
    }
    return spells;
  }, {});
}

export function newSpellFormatter($: CheerioStatic, doc: Cheerio) {
  const anchorSpellRegex = /^([\w\s]+)(?:\(([\w]+)\))?([\w]*)/g;
  const spells: { [x: string]: { [k: string]: {} } } = {};
  doc.find('h2').each((i, el) => {
    const header = $(el);
    const headerText = header.text();
    spells[headerText] = {};
    header.siblings('a').each((ix, elx) => {
      const e = $(elx);
      const str = e.text();
      const m = anchorSpellRegex.exec(str);
      if (m) {
        const d = {
          name: m[1].trim(),
          school: m[2],
          flags: m[3],
          description: elx.nextSibling.nodeValue.replace(': ', '').replace('\n', ' '),
          href: `https://2e.aonprd.com/${e.attr('href')}`
        };
        spells[headerText][m[1].trim()] = d;
      }
    });
  });
  return spells;
}

export function fetchHtml(url: string, filePath: string) {
  fetch(url)
    .then(response => {
      // When the page is loaded convert it to text
      return response.text();
    })
    .then(html => {
      const $ = cheerio.load(html);
      const spells = newSpellFormatter(
        $,
        $('#ctl00_MainContent_DetailedOutput')
      );
      // const spellAnchors = getSpellAnchors($, $('#ctl00_MainContent_DetailedOutput').find('a'));
      // $('#ctl00_MainContent_DetailedOutput > h2').after('<br />');
      // $('#ctl00_MainContent_DetailedOutput').find('br').replaceWith('\n');
      // // console.log($('#ctl00_MainContent_DetailedOutput').text());
      // const spells = formatSpells($('#ctl00_MainContent_DetailedOutput').text(), spellAnchors);
      createFile(filePath, spells);
    })
    .catch(err => {
      // tslint:disable-next-line:no-console
      console.log(err);
    });
}
