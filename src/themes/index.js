const helpemTheme = require(`./helpem/theme.json`);
const fotTheme = require('./fot/theme.json')
const blue = require('./blue/theme.json')

const themes = {
  helpem: helpemTheme,
  fot: fotTheme,
  blue:blue
};

export const getThemeConfig = () => {
  return themes[process.env.NEXT_PUBLIC_THEME];
};

