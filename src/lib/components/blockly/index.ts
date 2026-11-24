import BlocklyEditor from './BlocklyEditor.svelte';
import "./Blocks";
import "./BlockGenerator";
import { TokyoNightTheme } from './Theme';

import Toolbox from './Toolbox.xml?raw';
import { pluginInfo as FlagConnectionChecker } from './FlagConnectionChecker';
console.log( FlagConnectionChecker )
const Plugins = {
  ...FlagConnectionChecker
  // flyoutsVerticalToolbox: 'ContinuousFlyout',
  // metricsManager: 'ContinuousMetrics',
  // toolbox: 'ContinuousToolbox'
}

export { TokyoNightTheme, BlocklyEditor, Toolbox, Plugins };