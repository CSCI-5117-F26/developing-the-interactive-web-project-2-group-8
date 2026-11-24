
import * as Blockly from "blockly";


export class BlocklyRegexRenderer extends Blockly.thrasos.Renderer {
  constructor () {
    super( "regex_renderer" );
  }
}



Blockly.blockRendering.register( 'regex_renderer', BlocklyRegexRenderer );