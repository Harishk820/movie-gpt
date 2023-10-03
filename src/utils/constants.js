export const LOGO = 'https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png';
export const USER_AVTAR = "https://avatars.githubusercontent.com/u/22270538?v=4";

export const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer ' + process.env.REACT_APP_TMDB_KEY
  }
};

export const BG_URL = 'https://assets.nflxext.com/ffe/siteui/vlv3/42df4e1f-bef6-499e-87ff-c990584de314/5e7c383c-1f88-4983-b4da-06e14c0984ba/IN-en-20230904-popsignuptwoweeks-perspective_alpha_website_medium.jpg';

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500/";
export const SUPPORTED_LANGUAGES = [
  { identifiers: "en", name: "English" },
  { identifiers: "hindi", name: "Hindi" },
  { identifiers: "spanish", name: "Spanish" },
];

//export const OPENAI_KEY = "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";
export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;