/* eslint-disable @typescript-eslint/naming-convention */
export interface Movie {
  id:        number;
  url:       string;
  name:      string;
  season:    number;
  // eslint-disable-next-line id-blacklist
  number:    number | null;
  type:      MovieType;
  airdate:   Date;
  airtime:   string;
  airstamp:  Date;
  runtime:   number | null;
  rating:    Rating;
  image:     Image | null;
  summary:   null | string;
  _links:    MovieLinks;
  _embedded: Embedded;
}

export interface Embedded {
  show: Show;
}

export interface Show {
  id:             number;
  url:            string;
  name:           string;
  type:           ShowType;
  language:       Language | null;
  genres:         Genre[];
  status:         Status;
  runtime:        number | null;
  averageRuntime: number | null;
  premiered:      Date;
  ended:          Date | null;
  officialSite:   null | string;
  schedule:       Schedule;
  rating:         Rating;
  weight:         number;
  network:        Network | null;
  webChannel:     Network | null;
  dvdCountry:     Country | null;
  externals:      Externals;
  image:          Image | null;
  summary:        null | string;
  updated:        number;
  _links:         ShowLinks;
}

export interface ShowLinks {
  self:             Self;
  previousepisode?: Self;
  nextepisode?:     Self;
}

export interface Self {
  href: string;
}

export interface Country {
  name:     Name;
  code:     Code;
  timezone: Timezone;
}

export enum Code {
  AE = 'AE',
  At = 'AT',
  Au = 'AU',
  Be = 'BE',
  Bg = 'BG',
  Br = 'BR',
  By = 'BY',
  CA = 'CA',
  CN = 'CN',
  De = 'DE',
  Dk = 'DK',
  Es = 'ES',
  Fi = 'FI',
  Fr = 'FR',
  GB = 'GB',
  Hk = 'HK',
  Hu = 'HU',
  IL = 'IL',
  It = 'IT',
  Jp = 'JP',
  Kr = 'KR',
  Nl = 'NL',
  No = 'NO',
  Nz = 'NZ',
  Ph = 'PH',
  Pl = 'PL',
  Pt = 'PT',
  Ru = 'RU',
  SE = 'SE',
  Sk = 'SK',
  Th = 'TH',
  Tr = 'TR',
  Ua = 'UA',
  Us = 'US',
}

export enum Name {
  Australia = 'Australia',
  Austria = 'Austria',
  Belarus = 'Belarus',
  Belgium = 'Belgium',
  Brazil = 'Brazil',
  Bulgaria = 'Bulgaria',
  Canada = 'Canada',
  China = 'China',
  Denmark = 'Denmark',
  Finland = 'Finland',
  France = 'France',
  Germany = 'Germany',
  HongKong = 'Hong Kong',
  Hungary = 'Hungary',
  Israel = 'Israel',
  Italy = 'Italy',
  Japan = 'Japan',
  KoreaRepublicOf = 'Korea, Republic of',
  Netherlands = 'Netherlands',
  NewZealand = 'New Zealand',
  Norway = 'Norway',
  Philippines = 'Philippines',
  Poland = 'Poland',
  Portugal = 'Portugal',
  RussianFederation = 'Russian Federation',
  Slovakia = 'Slovakia',
  Spain = 'Spain',
  Sweden = 'Sweden',
  Thailand = 'Thailand',
  Turkey = 'Turkey',
  Ukraine = 'Ukraine',
  UnitedArabEmirates = 'United Arab Emirates',
  UnitedKingdom = 'United Kingdom',
  UnitedStates = 'United States',
}

export enum Timezone {
  AmericaHalifax = 'America/Halifax',
  AmericaNewYork = 'America/New_York',
  AmericaNoronha = 'America/Noronha',
  AsiaBangkok = 'Asia/Bangkok',
  AsiaDubai = 'Asia/Dubai',
  AsiaHongKong = 'Asia/Hong_Kong',
  AsiaJerusalem = 'Asia/Jerusalem',
  AsiaKamchatka = 'Asia/Kamchatka',
  AsiaManila = 'Asia/Manila',
  AsiaSeoul = 'Asia/Seoul',
  AsiaShanghai = 'Asia/Shanghai',
  AsiaTokyo = 'Asia/Tokyo',
  AustraliaSydney = 'Australia/Sydney',
  EuropeAmsterdam = 'Europe/Amsterdam',
  EuropeBratislava = 'Europe/Bratislava',
  EuropeBrussels = 'Europe/Brussels',
  EuropeBudapest = 'Europe/Budapest',
  EuropeBusingen = 'Europe/Busingen',
  EuropeCopenhagen = 'Europe/Copenhagen',
  EuropeHelsinki = 'Europe/Helsinki',
  EuropeIstanbul = 'Europe/Istanbul',
  EuropeLisbon = 'Europe/Lisbon',
  EuropeLondon = 'Europe/London',
  EuropeMadrid = 'Europe/Madrid',
  EuropeMinsk = 'Europe/Minsk',
  EuropeOslo = 'Europe/Oslo',
  EuropeParis = 'Europe/Paris',
  EuropeRome = 'Europe/Rome',
  EuropeSofia = 'Europe/Sofia',
  EuropeStockholm = 'Europe/Stockholm',
  EuropeVienna = 'Europe/Vienna',
  EuropeWarsaw = 'Europe/Warsaw',
  EuropeZaporozhye = 'Europe/Zaporozhye',
  PacificAuckland = 'Pacific/Auckland',
}

export interface Externals {
  tvrage:  number | null;
  thetvdb: number | null;
  imdb:    null | string;
}

export enum Genre {
  Action = 'Action',
  Adult = 'Adult',
  Adventure = 'Adventure',
  Anime = 'Anime',
  Children = 'Children',
  Comedy = 'Comedy',
  Crime = 'Crime',
  Diy = 'DIY',
  Drama = 'Drama',
  Espionage = 'Espionage',
  Family = 'Family',
  Fantasy = 'Fantasy',
  Food = 'Food',
  History = 'History',
  Horror = 'Horror',
  Legal = 'Legal',
  Medical = 'Medical',
  Music = 'Music',
  Mystery = 'Mystery',
  Nature = 'Nature',
  Romance = 'Romance',
  ScienceFiction = 'Science-Fiction',
  Sports = 'Sports',
  Supernatural = 'Supernatural',
  Thriller = 'Thriller',
  Travel = 'Travel',
  War = 'War',
  Western = 'Western',
}

export interface Image {
  medium:   string;
  original: string;
}

export enum Language {
  Arabic = 'Arabic',
  Bulgarian = 'Bulgarian',
  Chinese = 'Chinese',
  Danish = 'Danish',
  Dutch = 'Dutch',
  English = 'English',
  Finnish = 'Finnish',
  French = 'French',
  German = 'German',
  Hebrew = 'Hebrew',
  Hindi = 'Hindi',
  Hungarian = 'Hungarian',
  Irish = 'Irish',
  Italian = 'Italian',
  Japanese = 'Japanese',
  Korean = 'Korean',
  Latin = 'Latin',
  Norwegian = 'Norwegian',
  Polish = 'Polish',
  Portuguese = 'Portuguese',
  Russian = 'Russian',
  ScottishGaelic = 'Scottish Gaelic',
  Slovak = 'Slovak',
  Spanish = 'Spanish',
  Swedish = 'Swedish',
  Tagalog = 'Tagalog',
  Thai = 'Thai',
  Turkish = 'Turkish',
  Ukrainian = 'Ukrainian',
  Vietnamese = 'Vietnamese',
}

export interface Network {
  id:           number;
  name:         string;
  country:      Country | null;
  officialSite: null | string;
}

export interface Rating {
  average: number | null;
}

export interface Schedule {
  time: string;
  days: Day[];
}

export enum Day {
  Friday = 'Friday',
  Monday = 'Monday',
  Saturday = 'Saturday',
  Sunday = 'Sunday',
  Thursday = 'Thursday',
  Tuesday = 'Tuesday',
  Wednesday = 'Wednesday',
}

export enum Status {
  Ended = 'Ended',
  InDevelopment = 'In Development',
  Running = 'Running',
  ToBeDetermined = 'To Be Determined',
}

export enum ShowType {
  Animation = 'Animation',
  AwardShow = 'Award Show',
  Documentary = 'Documentary',
  GameShow = 'Game Show',
  News = 'News',
  PanelShow = 'Panel Show',
  Reality = 'Reality',
  Scripted = 'Scripted',
  Sports = 'Sports',
  TalkShow = 'Talk Show',
  Variety = 'Variety',
}

export interface MovieLinks {
  self: Self;
}

export enum MovieType {
  InsignificantSpecial = 'insignificant_special',
  Regular = 'regular',
  SignificantSpecial = 'significant_special',
}
