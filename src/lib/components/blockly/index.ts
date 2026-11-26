import * as Blockly from "blockly/core"


import BlocklyEditor from './BlocklyEditor.svelte';
// import "./Blocks";
// import "./BlockGenerator";
import { TokyoNightTheme } from './Theme';

import Toolbox from './Toolbox.xml?raw';
import { pluginInfo as FlagConnectionChecker } from './FlagConnectionChecker';


// import '@blockly/continuous-toolbox';
// import { ContinuousFlyout, ContinuousMetrics, ContinuousToolbox, registerContinuousToolbox } from '@blockly/continuous-toolbox';
// console.log( ContinuousMetrics )



// registerContinuousToolbox();
const Plugins = {
  ...FlagConnectionChecker,
  flyoutsVerticalToolbox: 'ContinuousFlyout',
  metricsManager: 'ContinuousMetrics',
  toolbox: 'ContinuousToolbox'
}

export { TokyoNightTheme, BlocklyEditor, Toolbox, Plugins };
