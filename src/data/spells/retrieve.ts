import { createFile } from '../create';

function getSpellAnchors(output: HTMLElement) {
  const anchors = output.querySelectorAll('a');
  const anchorMap: { [x: string]: string } = {};
  anchors.forEach(a => {
    const spellName = a.innerText.split('(')[0].trim();
    anchorMap[spellName] = a.href;
  });
  return anchorMap;
}

export function formatSpells(
  str: string,
  spellAnchors: { [x: string]: string }
) {
  const arr = str.split('\n');
  let currentType: string;
  return arr.reduce((spells: { [x: string]: { [k: string]: {} } }, cur) => {
    if (!cur) return spells;
    const spellRegex = /^([\w\s]+)\(([\w]+)\)([\w]*):\s([\w\s.]+)/g;
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

export function fetchHtml(url: string, filePath: string) {
  fetch(url)
    .then(response => {
      // When the page is loaded convert it to text
      return response.text();
    })
    .then(html => {
      // Initialize the DOM parser
      const parser = new DOMParser();

      // Parse the text
      const doc = parser.parseFromString(html, 'text/html');
      const output = document.getElementById(
        'ctl00_MainContent_DetailedOutput'
      ) as HTMLElement;
      const spellAnchors = getSpellAnchors(output);
      const spells = formatSpells(output.innerText, spellAnchors);
      createFile(filePath, spells);
    })
    .catch(err => {
      // tslint:disable-next-line:no-console
      console.log(err);
    });
}
