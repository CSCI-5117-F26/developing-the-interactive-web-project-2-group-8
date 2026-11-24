import * as Blockly from "blockly"

export class FlagConnectionChecker extends Blockly.ConnectionChecker {
  /**
   * Constructor for the connection checker.
   */
  constructor () {
    super();
  }


  doDragChecks ( from: Blockly.RenderedConnection, to: Blockly.RenderedConnection, distance: number ): boolean {

    let reg_block = undefined;
    if ( to.getSourceBlock().type == "regex_definition" ) {
      reg_block = to.getSourceBlock();
    }
    else if ( to.getSourceBlock().getSurroundParent()?.type == "regex_definition" ) {
      reg_block = to.getSourceBlock().getSurroundParent();
    }

    if ( !reg_block ) return true

    // get every flag in the flags
    var f = reg_block.getInputTargetBlock( "flags" );
    if ( !f ) return true;

    let b = [];
    do {
      b.push( f.type )
    }
    while ( f.getNextBlock() instanceof Blockly.Block, f = f.getNextBlock() )

    if ( b.includes( from.getSourceBlock().type ) ) return false;

    return super.doDragChecks( from, to, distance );
  }
}

export const registrationType = Blockly.registry.Type.CONNECTION_CHECKER;
export const registrationName = 'FlagConnectionChecker';


if ( !Blockly.registry.getObject( registrationType, registrationName ) ) {
  // Register the checker so that it can be used by name.
  Blockly.registry.register(
    registrationType,
    registrationName,
    FlagConnectionChecker,
  );
}

export const pluginInfo = {
  connectionChecker: registrationName,
};