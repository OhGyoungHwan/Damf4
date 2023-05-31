export type playerPostion =
  | "ST"
  | "CF"
  | "LF"
  | "RF"
  | "LW"
  | "RW"
  | "CM"
  | "CAM"
  | "CDM"
  | "LM"
  | "RM"
  | "CB"
  | "LB"
  | "RB"
  | "LWB"
  | "RWB"
  | "SW"
  | "GK";

export type postion =
  | "st"
  | "ls"
  | "rs"
  | "cf"
  | "lf"
  | "rf"
  | "lw"
  | "rw"
  | "cm"
  | "lcm"
  | "rcm"
  | "cam"
  | "lam"
  | "ram"
  | "cdm"
  | "ldm"
  | "rdm"
  | "lm"
  | "rm"
  | "cb"
  | "lcb"
  | "rcb"
  | "lb"
  | "rb"
  | "lwb"
  | "rwb"
  | "sw"
  | "gk";

export type engStats =
  | "sprintspeed"
  | "acceleration"
  | "finishing"
  | "shotpower"
  | "longshots"
  | "positioning"
  | "volleys"
  | "penalties"
  | "shortpassing"
  | "vision"
  | "crossing"
  | "longpassing"
  | "freekickaccuracy"
  | "curve"
  | "dribbling"
  | "ballcontrol"
  | "agility"
  | "balance"
  | "reactions"
  | "marking"
  | "standingtackle"
  | "interceptions"
  | "headingaccuracy"
  | "slidingtackle"
  | "strength"
  | "stamina"
  | "aggression"
  | "jumping"
  | "composure"
  | "gkdiving"
  | "gkhandling"
  | "gkkicking"
  | "gkreflexes"
  | "gkpositioning"
  | "height"
  | "weight"
  | "pay";

export interface navigation {
  name: string;
  href: string;
  current: boolean;
}

export interface player {
  _id: number;
  id: number;
  pid: number;
  imgsrc: string;
  name: string;
  season: string;
  LM: number;
  LW: number;
  ovr: number;
  pay: number;
  height: number;
  weight: number;
  physical: string;
  skillmove: string;
  mainfoot: string;
  subfoot: number;
  nation: string;
  trait: Array<string>;
  spr: number;
  speed: number;
  interceptions: number;
  acceleration: number;
  finishing: number;
  shotpower: number;
  sprintspeed: number;
  longshots: number;
  positioning: number;
  volleys: number;
  penalties: number;
  shortpassing: number;
  vision: number;
  crossing: number;
  longpassing: number;
  freekickaccuracy: number;
  curve: number;
  dribbling: number;
  ballcontrol: number;
  agility: number;
  balance: number;
  reactions: number;
  marking: number;
  standingtackle: number;
  erceptions: number;
  headingaccuracy: number;
  slidingtackle: number;
  strength: number;
  stamina: number;
  aggression: number;
  jumping: number;
  composure: number;
  gkdiving: number;
  gkhandling: number;
  gkkicking: number;
  gkreflexes: number;
  gkpositioning: number;
  club: Array<string>;
  CDM: number;
  CM: number;
  RM: number;
  ST: number;
  RB: number;
  GK: number;
  CAM: number;
  CF: number;
  CB: number;
  LB: number;
  RW: number;
  RWB: number;
  LWB: number;
  RF: number;
  LF: number;
  SW: number;
  simplayers: Array<number>;
  bp1: number;
  bp2: number;
  bp3: number;
  bp4: number;
  bp5: number;
  bp6: number;
  bp7: number;
  bp8: number;
  bp9: number;
  bp10: number;
  role?: postion;
}

export interface recommend {
  id: string;
  categories: string;
  tag: string;
  order: number;
  players: Array<player>;
}

export interface teamxpid {
  id: number;
  pids: Array<number>;
  category: string;
  type: string;
  name: string;
  ability: any;
}

export interface filter {
  club: { id: number; name: string };
  nation: { id: number; name: string };
  relation: { id: number; name: string };
  season: Array<string>;
  postion: Array<playerPostion>;
  physical: Array<string>;
  mainFoot: Array<string>;
  subFoot: { id: number; name: string };
  traits: { id: number; name: string };
  skillMove: { id: number; name: string };
  stats: { id: number; name: string; engName: engStats };
  maxValue: number;
  minValue: number;
}
