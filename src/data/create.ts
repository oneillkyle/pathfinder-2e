
import { writeFileSync } from 'fs';

export function createFile(filePath: string, data: {}) {
  const spells = {};
  writeFileSync(filePath, `export const data = ${JSON.stringify(data)}`);
}

export function createHtmlFile(filePath: string, data: any) {
  writeFileSync(filePath, data);
}
