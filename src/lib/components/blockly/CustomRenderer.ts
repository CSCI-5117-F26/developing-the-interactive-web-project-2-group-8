
import * as Blockly from "blockly";


export class BlocklyRegexRenderer extends Blockly.thrasos.Renderer {
  constructor () {
    super( "regex_renderer" );
  }
}


export const registrationType = Blockly.registry.Type.RENDERER;
export const registrationName = 'regex_renderer';

if ( !Blockly.registry.getObject( registrationType, registrationName ) ) {

  Blockly.blockRendering.register( 'regex_renderer', BlocklyRegexRenderer );
}