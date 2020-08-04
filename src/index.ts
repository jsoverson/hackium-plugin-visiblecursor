import { Plugin } from 'hackium';
import findRoot from 'find-root';

const path = require('path');

const injectionPath = path.join(findRoot(__dirname), 'src', 'injection.js');

const plugin: Plugin = {
  preInit: (hackium, options) => {
    if (options.inject) options.inject.push(injectionPath);
    else options.inject = [injectionPath];
  },
};

export default plugin;
