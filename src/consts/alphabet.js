import { calculateUnicode } from '../utils/calcuateUnicode';

const { getIncrements } = calculateUnicode;

const unicodeS = 83;
const unicodea = 97;
const unicoden = 110;
const unicodet = 116;
const unicodes = 115;
const unicodeh = 104;
const unicodeo = 111;
const unicodel = 108;
const unicodei = 105;
const unicoded = 100;
const unicodey = 121;
const unicodep = 112;
const unicodeUpperstrophe = 39;

const SIncrement = getIncrements(unicodeS);
const aIncrement = getIncrements(unicodea);
const nIncrement = getIncrements(unicoden);
const tIncrement = getIncrements(unicodet);
const sIncrement = getIncrements(unicodes);
const hIncrement = getIncrements(unicodeh);
const oIncrement = getIncrements(unicodeo);
const lIncrement = getIncrements(unicodel);
const iIncrement = getIncrements(unicodei);
const dIncrement = getIncrements(unicoded);
const yIncrement = getIncrements(unicodey);
const pIncrement = getIncrements(unicodep);
const upperstropheIncrement = getIncrements(unicodeUpperstrophe);

export const alphabetIncrements = {
  SIncrement,
  aIncrement,
  nIncrement,
  tIncrement,
  sIncrement,
  hIncrement,
  oIncrement,
  lIncrement,
  iIncrement,
  dIncrement,
  yIncrement,
  pIncrement,
  upperstropheIncrement,
};

export const alphabetUnicode = {
  unicodeS,
  unicodea,
  unicoden,
  unicodet,
  unicodes,
  unicodeh,
  unicodeo,
  unicodel,
  unicodei,
  unicoded,
  unicodey,
  unicodep,
  unicodeUpperstrophe,
};
