import * as Blockly from 'blockly';

export const regularExpressionGenerator = new Blockly.Generator( 'RegEx' );
regularExpressionGenerator.INDENT = '';
const Order = {
  ATOMIC: 0,
};

regularExpressionGenerator.scrub_ = function ( block, code, thisOnly ) {
  const nextBlock = block.nextConnection && block.nextConnection.targetBlock();
  if ( nextBlock && !thisOnly ) {
    return code + regularExpressionGenerator.blockToCode( nextBlock );
  }
  return code;
};

regularExpressionGenerator.forBlock[ 'regex_definition' ] = function ( block: Blockly.Block, generator: Blockly.CodeGenerator ) {
  const regexValue = generator.statementToCode( block, 'regex' );
  const flagValue = generator.statementToCode( block, 'flags' );
  // console.log( regexValue, flagValue )

  let returnValue = '';
  returnValue += "/";
  if ( regexValue != " " )
    returnValue += regexValue
  returnValue += "/";
  if ( flagValue != " " )
    returnValue += flagValue;

  return returnValue;
}

/* ----- Atoms ----- */
regularExpressionGenerator.forBlock[ 'atom_literal' ] = function ( block: Blockly.Block, generator: Blockly.CodeGenerator ) {
  const literal = block.getFieldValue( 'v' );
  // TODO, escape bad characters

  // The following characters are syntax characters in regular expressions, and they cannot appear as literal characters:

  //   ^, $
  //   \
  //   .
  //   *, +, ?, {, }
  //   (, )
  //   [, ]
  //   |

  return literal;
}

regularExpressionGenerator.forBlock[ 'quantifier_range' ] = function ( block: Blockly.Block, generator: Blockly.CodeGenerator ) {
  const capture = generator.statementToCode( block, 'capture' );
  var drpdwn = block.getFieldValue( 'q_type' );
  const mn = block.getFieldValue( 'mn' );
  const mx = block.getFieldValue( 'mx' );

  var v = "";

  // if ( mn == 0 && mx == 1 ) drpdwn = "OPT";
  // if ( mn == 0 ) drpdwn = "ZOM";
  // if ( mn == 1 ) drpdwn = "OOM";


  switch ( drpdwn ) {
    case "ZOM": v = "*"; break;
    case "OOM": v = "+"; break;
    case "OPT": v = "?"; break;

    case "ATL": v = `{${ mn },}`; break;
    case "EX": v = `{${ mn }}`; break;

    case "BT": v = `{${ mn },${ mx }}`; break;
  }
  return `${ capture }${ v }`;

}


regularExpressionGenerator.forBlock[ 'atom_digit' ] = ( block: Blockly.Block ) => "\\d";
regularExpressionGenerator.forBlock[ 'atom_word' ] = ( block: Blockly.Block ) => "\\w";
regularExpressionGenerator.forBlock[ 'atom_whitespace' ] = ( block: Blockly.Block ) => "\\s";

regularExpressionGenerator.forBlock[ 'atom_capturing_group' ] = function ( block: Blockly.Block, generator: Blockly.CodeGenerator ) {
  const capture = generator.statementToCode( block, 'capture' );
  return `(${ capture })`;
}

regularExpressionGenerator.forBlock[ 'atom_named_capturing_group' ] = function ( block: Blockly.Block, generator: Blockly.CodeGenerator ) {
  const back_name = block.getFieldValue( 'back_name' );
  const capture = generator.statementToCode( block, 'capture' );
  return `(?<${ back_name }>${ capture })`;
}

regularExpressionGenerator.forBlock[ 'atom_non_capturing_group' ] = function ( block: Blockly.Block, generator: Blockly.CodeGenerator ) {
  const capture = generator.statementToCode( block, 'capture' );
  return `(?:${ capture })`;
}

regularExpressionGenerator.forBlock[ 'atom_backreference' ] = function ( block: Blockly.Block, generator: Blockly.CodeGenerator ) {
  const ref = block.getFieldValue( 'backref' );
  return `\\${ ref }`;
}
regularExpressionGenerator.forBlock[ 'atom_named_backreference' ] = function ( block: Blockly.Block, generator: Blockly.CodeGenerator ) {
  const back_name = block.getFieldValue( 'back_name' );
  return `\\k<${ back_name }>`;
}

regularExpressionGenerator.forBlock[ 'atom_wildcard' ] = ( block: Blockly.Block ) => ".";


/* ----- Assertions ----- */

/* ----- Flags ----- */
regularExpressionGenerator.forBlock[ 'flag_generate_indices' ] = ( block: Blockly.Block ) => "d";
regularExpressionGenerator.forBlock[ 'flag_global' ] = ( block: Blockly.Block ) => "g";
regularExpressionGenerator.forBlock[ 'flag_case_insensitive' ] = ( block: Blockly.Block ) => "i";
regularExpressionGenerator.forBlock[ 'flag_multiline' ] = ( block: Blockly.Block ) => "m";
regularExpressionGenerator.forBlock[ 'flag_wildcard_all' ] = ( block: Blockly.Block ) => "s";
regularExpressionGenerator.forBlock[ 'flag_unicode' ] = ( block: Blockly.Block ) => "u";
regularExpressionGenerator.forBlock[ 'flag_modern_unicode' ] = ( block: Blockly.Block ) => "v";
regularExpressionGenerator.forBlock[ 'flag_sticky' ] = ( block: Blockly.Block ) => "y";

/* ----- "Other Features" ----- */


export default regularExpressionGenerator;
