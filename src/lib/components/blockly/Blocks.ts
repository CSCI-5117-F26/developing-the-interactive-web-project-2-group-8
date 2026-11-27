import * as Blockly from 'blockly';

// color



// character escape
// modifiers
// negation
// character class

// \X, \u, \q, \p, \c backspace ????

// disjunction
// quantifier

// all of assertion

// this is the top-level block that defines the regex
Blockly.Blocks[ "regex_definition" ] = {
  init: function ( this: Blockly.Block ) {
    this.appendDummyInput( 'regex_label' )
      .setAlign( Blockly.inputs.Align.RIGHT )
      .appendField( 'Regular Expression' );
    this.appendStatementInput( 'regex' )
      .setCheck( 'Atom' );
    this.appendDummyInput( 'flag_label' )
      .setAlign( Blockly.inputs.Align.RIGHT )
      .appendField( 'Flags' );
    this.appendStatementInput( 'flags' )
      .setCheck( 'Flag' );
    this.setInputsInline( true )
    this.setTooltip( 'Connect blocks to this to define your Regular Expression' );
    this.setHelpUrl( '' );
    this.setColour( 225 );
    this.setDeletable( false );
    this.setMovable( false );
    this.setStyle( "regex_def" )
  }
};


/* ----- Atoms ----- */
// Atoms are the most basic units of a regular expression. Each atom consumes zero 
// or more characters in the string, and either fails the match or allows the pattern 
// to continue matching with the next atom.

Blockly.Blocks[ "atom_literal" ] = {
  init: function () {
    this.appendDummyInput( 'str' )
      // .setCheck( 'String' )
      .appendField( new Blockly.FieldLabelSerializable( 'Literal' ), 'name' )
      .appendField( new Blockly.FieldTextInput( 'hello, world!' ), 'v' );
    this.setPreviousStatement( true, null );
    this.setNextStatement( true, null );
    this.setTooltip( 'Matches a string, automatically escaping problematic characters' );
    this.setHelpUrl( '' );
    this.setColour( 225 );
    this.setStyle( "atom" )

  }
};

Blockly.Blocks[ "atom_digit" ] = {
  init: function () {
    this.appendDummyInput( 'label' )
      .appendField( 'Digit' );
    this.setPreviousStatement( true, 'Atom' );
    this.setNextStatement( true, 'Atom' );
    this.setTooltip( 'Matches any digit character' );
    this.setHelpUrl( '' );
    this.setColour( 225 );
    this.setStyle( "character" );
  }
};

Blockly.Blocks[ "atom_word" ] = {
  init: function () {
    this.appendDummyInput( 'label' )
      .appendField( 'Word' );
    this.setPreviousStatement( true, 'Atom' );
    this.setNextStatement( true, 'Atom' );
    this.setTooltip( 'Matches any word character, where a word character includes letters (A–Z, a–z), numbers (0–9), and underscore (_)' );
    this.setHelpUrl( '' );
    this.setColour( 225 );
    this.setStyle( "character" );
  }
};

Blockly.Blocks[ "atom_whitespace" ] = {
  init: function () {
    this.appendDummyInput( 'label' )
      .appendField( 'Whitespace' );
    this.setPreviousStatement( true, 'Atom' );
    this.setNextStatement( true, 'Atom' );
    this.setTooltip( 'Matches any whitespace or line terminator character' );
    this.setHelpUrl( '' );
    this.setColour( 225 );
    this.setStyle( "character" );
  }
};

Blockly.Blocks[ "atom_capturing_group" ] = {
  init: function () {
    this.appendDummyInput( 'label' )
      .appendField( 'Capturing Group' );
    this.appendStatementInput( 'capture' )
      .setCheck( 'Atom' );
    this.setPreviousStatement( true, 'Atom' );
    this.setNextStatement( true, 'Atom' );
    this.setTooltip( 'A capturing group groups a subpattern, allowing you to apply a quantifier to the entire group or use disjunctions within it. It memorizes information about the subpattern match, so that you can refer back to it later with a backreference, or access the information through the match results' );
    this.setHelpUrl( '' );
    this.setColour( 225 );
    this.setStyle( "atom" );
  }
};

Blockly.Blocks[ "atom_named_capturing_group" ] = {
  init: function () {
    this.appendDummyInput( 'label' )
      .appendField( 'Named Capturing Group' )
      .appendField( new Blockly.FieldTextInput( 'name' ), 'back_name' );
    this.appendStatementInput( 'capture' )
      .setCheck( 'Atom' );
    this.setPreviousStatement( true, 'Atom' );
    this.setNextStatement( true, 'Atom' );
    this.setTooltip( 'A named capturing group is a particular kind of capturing group that allows you to give a name to the group. The group\'s matching result can later be identified by this name instead of by its index in the pattern' ); this.setHelpUrl( '' );
    this.setColour( 225 );
    this.setStyle( "atom" );
  }
};


Blockly.Blocks[ "atom_non_capturing_group" ] = {
  init: function () {
    this.appendDummyInput( 'label' )
      .appendField( 'Non-Capturing Group' );
    this.appendStatementInput( 'capture' )
      .setCheck( 'Atom' );
    this.setPreviousStatement( true, 'Atom' );
    this.setNextStatement( true, 'Atom' );
    this.setTooltip( 'A non-capturing group groups a subpattern, allowing you to apply a quantifier to the entire group or use disjunctions within it. It acts like the grouping operator in JavaScript expressions, and unlike capturing groups, it does not memorize the matched text, allowing for better performance and avoiding confusion when the pattern also contains useful capturing groups' ); this.setHelpUrl( '' );
    this.setColour( 225 );
    this.setStyle( "atom" );
  }
};

Blockly.Blocks[ "atom_backreference" ] = {
  init: function () {
    this.appendDummyInput( 'label' )
      .appendField( 'Backreference' )
      .appendField( new Blockly.FieldNumber( 1, 1, Infinity, 1 ), 'backref' );
    this.setPreviousStatement( true, 'Atom' );
    this.setNextStatement( true, 'Atom' );
    this.setTooltip( 'A backreference is a way to match the same text as previously matched by a capturing group' );
    this.setHelpUrl( '' );
    this.setColour( 225 );
    this.setStyle( "atom" );
  }
};

Blockly.Blocks[ "atom_named_backreference" ] = {
  init: function () {
    this.appendDummyInput( 'label' )
      .appendField( 'Named Backreferene' )
      .appendField( new Blockly.FieldTextInput( 'name' ), 'back_name' );
    this.setPreviousStatement( true, 'Atom' );
    this.setNextStatement( true, 'Atom' );
    this.setTooltip( 'A named backreference refers to the submatch of a previous named capturing group and matches the same text as that group' );
    this.setHelpUrl( '' );
    this.setColour( 225 );
    this.setStyle( "atom" );

  }
};

Blockly.Blocks[ "atom_wildcard" ] = {
  init: function () {
    this.appendDummyInput( 'label' )
      .appendField( 'Wildcard' );
    this.setPreviousStatement( true, 'Atom' );
    this.setNextStatement( true, 'Atom' );
    this.setTooltip( 'Matches any character except line terminators' );
    this.setHelpUrl( '' );
    this.setColour( 225 );
    this.setStyle( "character" );
  }
};

/* ----- Assertions ----- */
// Assertions are constructs that test whether the string meets a certain condition at 
// the specified position, but do not consume characters. Assertions cannot be quantified.

Blockly.Blocks[ "assertion_start" ] = {
  init: function () {
    this.appendDummyInput( 'label' )
      .appendField( 'Start Of Line' );
    this.setInputsInline( true )
    this.setPreviousStatement( true, [ 'Assertion', 'Atom' ] );
    this.setNextStatement( true, [ 'Assertion', 'Atom' ] );
    this.setTooltip( 'Assert that the position has to be at the start of the line' );
    this.setHelpUrl( '' );
    this.setColour( 225 );
    this.setStyle( "assertion" );

  }
};

Blockly.Blocks[ "assertion_end" ] = {
  init: function () {
    this.appendDummyInput( 'label' )
      .appendField( 'End Of Line' );
    this.setInputsInline( true )
    this.setPreviousStatement( true, [ 'Assertion', 'Atom' ] );
    this.setNextStatement( true, [ 'Assertion', 'Atom' ] );
    this.setTooltip( 'Assert that the position has to be at the end of the line' );
    this.setHelpUrl( '' );
    this.setColour( 225 );
    this.setStyle( "assertion" );

  }
};

Blockly.Blocks[ "assertion_lookahead" ] = {
  init: function () {
    this.appendDummyInput( 'label' )
      .appendField( 'Lookahead' );
    this.appendStatementInput( 'capture' );
    this.setPreviousStatement( true, [ 'Assertion', 'Atom' ] );
    this.setNextStatement( true, [ 'Assertion', 'Atom' ] );
    this.setTooltip( 'A lookahead assertion "looks ahead": it attempts to match the subsequent input with the given pattern, but it does not consume any of the input — if the match is successful, the current position in the input stays the same' );
    this.setHelpUrl( '' );
    this.setColour( 225 );
    this.setStyle( "assertion" );
  }
};

Blockly.Blocks[ "assertion_lookbehind" ] = {
  init: function () {
    this.appendDummyInput( 'label' )
      .appendField( 'Lookbehind' );
    this.appendStatementInput( 'capture' );
    this.setPreviousStatement( true, [ 'Assertion', 'Atom' ] );
    this.setNextStatement( true, [ 'Assertion', 'Atom' ] );
    this.setTooltip( 'A lookbehind assertion "looks behind": it attempts to match the previous input with the given pattern, but it does not consume any of the input — if the match is successful, the current position in the input stays the same. It matches each atom in its pattern in the reverse order' ); this.setHelpUrl( '' );
    this.setColour( 225 );
    this.setStyle( "assertion" );

  }
};

Blockly.Blocks[ "assertion_word_boundary" ] = {
  init: function () {
    this.appendDummyInput( 'label' )
      .appendField( 'Word Boundary' );
    this.setPreviousStatement( true, [ 'Assertion', 'Atom' ] );
    this.setNextStatement( true, [ 'Assertion', 'Atom' ] );
    this.setTooltip( 'Assert that the position is a word boundary' );
    this.setHelpUrl( '' );
    this.setColour( 225 );
    this.setStyle( "assertion" );
  }
};


/* ----- "Other Features" ----- */
// These features do not specify any pattern themselves, but are used to compose patterns.
// Blockly.Blocks[ 'atom_disjunction' ] = {


// }
Blockly.Blocks[ 'quantifier_range' ] = {
  init: function () {
    this.appendDummyInput( 'val' )
      .appendField( new Blockly.FieldDropdown( [
        [ 'Optional', 'OPT' ],
        [ 'One or More', 'OOM' ],
        [ 'Zero or More', 'ZOM' ],
        [ 'Between', 'BT' ],
        [ 'At Least', 'ATL' ],
        [ 'Exactly', 'EX' ]
      ], this.validate.bind( this ) ), 'q_type' );
    this.appendStatementInput( 'capture' );
    this.setInputsInline( false )
    this.setPreviousStatement( true, 'Atom' );
    this.setNextStatement( true, 'Atom' );
    this.setTooltip( '' );
    this.setHelpUrl( '' );
    this.setColour( 225 );
  },

  validate: function ( this: Blockly.Block, newValue: string ) {
    var inp = this.getInput( 'val' )!;
    inp.removeField( "mn", true );
    inp.removeField( "mx", true );
    inp.removeField( "and_lbl", true );
    var mn = new Blockly.FieldNumber( 0, 0, Infinity, 1 );
    var mx = new Blockly.FieldNumber( 0, 0, Infinity, 1 );


    switch ( newValue ) {
      case "ZOM":
      case "OOM":
      case "OPT":
        break;

      case "ATL":
      case "EX":
        inp.appendField( mn, 'mn' );
        break;

      case "BT":
        inp.appendField( mn, 'mn' )
          .appendField( 'and', 'and_lbl' )
          .appendField( mx, 'mx' );
        break;
    }
  }
}

/* ----- Flags ----- */
// Flags are special parameters that can change the way a regular expression is interpreted 
// or the way it interacts with the input text. Each flag corresponds to one accessor property 
// on the RegExp object.

Blockly.Blocks[ 'flag_generate_indices' ] = {
  init: function () {
    this.appendDummyInput( 'label' )
      .appendField( 'Generate Indices' );
    this.setInputsInline( true )
    this.setPreviousStatement( true, 'Flag' );
    this.setNextStatement( true, 'Flag' );
    this.setTooltip( 'Adds start and end info of any match to a search' );
    this.setHelpUrl( '' );
    this.setColour( 225 );
    this.setStyle( "flag" );
  }
};

Blockly.Blocks[ 'flag_global' ] = {
  init: function () {
    this.appendDummyInput( 'label' )
      .appendField( 'Global' );
    this.setInputsInline( true )
    this.setPreviousStatement( true, 'Flag' );
    this.setNextStatement( true, 'Flag' );
    this.setTooltip( 'Test all possible matches, instead of just one' );
    this.setHelpUrl( '' );
    this.setColour( 225 );
    this.setStyle( "flag" );
  }
};

Blockly.Blocks[ 'flag_case_insensitive' ] = {
  init: function () {
    this.appendDummyInput( 'label' )
      .appendField( 'Case-Insensitive' );
    this.setInputsInline( true )
    this.setPreviousStatement( true, [ 'Flag', 'FlagModifier' ] );
    this.setNextStatement( true, [ 'Flag', 'FlagModifier' ] );
    this.setTooltip( 'Ignore the case of the characters' );
    this.setHelpUrl( '' );
    this.setColour( 225 );
    this.setStyle( "flag" );
  }
};

Blockly.Blocks[ 'flag_multiline' ] = {
  init: function () {
    this.appendDummyInput( 'label' )
      .appendField( 'Multiline' );
    this.setInputsInline( true )
    this.setPreviousStatement( true, [ 'Flag', 'FlagModifier' ] );
    this.setNextStatement( true, [ 'Flag', 'FlagModifier' ] );
    this.setTooltip( 'Allows the Start and End blocks to reference multiple lines' );
    this.setHelpUrl( '' );
    this.setColour( 225 );
    this.setStyle( "flag" );
  }
};

Blockly.Blocks[ 'flag_wildcard_all' ] = {
  init: function () {
    this.appendDummyInput( 'label' )
      .appendField( 'Wildcard All' );
    this.setInputsInline( true )
    this.setPreviousStatement( true, [ 'Flag', 'FlagModifier' ] );
    this.setNextStatement( true, [ 'Flag', 'FlagModifier' ] );
    this.setTooltip( 'Allows the Wildcard block to see newline characters' );
    this.setHelpUrl( '' );
    this.setColour( 225 );
    this.setStyle( "flag" );
  }
};

Blockly.Blocks[ 'flag_unicode' ] = {
  init: function () {
    this.appendDummyInput( 'label' )
      .appendField( 'Unicode' );
    this.setInputsInline( true )
    this.setPreviousStatement( true, 'Flag' );
    this.setNextStatement( true, 'Flag' );
    this.setTooltip( 'Allows Unicode blocks' );
    this.setHelpUrl( '' );
    this.setColour( 225 );
    this.setStyle( "flag" );
  }
};

Blockly.Blocks[ 'flag_modern_unicode' ] = {
  init: function () {
    this.appendDummyInput( 'label' )
      .appendField( 'Modern Unicode' );
    this.setInputsInline( true )
    this.setPreviousStatement( true, 'Flag' );
    this.setNextStatement( true, 'Flag' );
    this.setTooltip( 'Enables more Unicode features, but disables some others from the Unicode Flag. These flags cannot be used together.' );
    this.setHelpUrl( '' );
    this.setColour( 225 );
    this.setStyle( "flag" );
  }
};

Blockly.Blocks[ 'flag_sticky' ] = {
  init: function () {
    this.appendDummyInput( 'label' )
      .appendField( 'Sticky' );
    this.setInputsInline( true )
    this.setPreviousStatement( true, 'Flag' );
    this.setNextStatement( true, 'Flag' );
    this.setTooltip( 'When searching, start at the last indexed spot' );
    this.setHelpUrl( '' );
    this.setColour( 225 );
    this.setStyle( "flag" );
  }
};

/* ----- Escape sequences ----- */
// Escape sequences in regexes refer to any kind of syntax formed by \ followed by one or more characters.
Blockly.Blocks[ 'character_form_feed' ] = {
  init: function () {
    this.appendDummyInput( 'label' )
      .appendField( 'Form Feed' );
    this.setPreviousStatement( true, 'Atom' );
    this.setNextStatement( true, 'Atom' );
    this.setTooltip( '' );
    this.setHelpUrl( '' );
    this.setColour( 225 );
    this.setStyle( "character" );
  }
}

Blockly.Blocks[ 'character_new_line' ] = {
  init: function () {
    this.appendDummyInput( 'label' )
      .appendField( 'New Line' );
    this.setPreviousStatement( true, 'Atom' );
    this.setNextStatement( true, 'Atom' );
    this.setTooltip( '' );
    this.setHelpUrl( '' );
    this.setColour( 225 );
    this.setStyle( "character" );
  }
}

Blockly.Blocks[ 'character_carriage_return' ] = {
  init: function () {
    this.appendDummyInput( 'label' )
      .appendField( 'Carriage Return' );
    this.setPreviousStatement( true, 'Atom' );
    this.setNextStatement( true, 'Atom' );
    this.setTooltip( '' );
    this.setHelpUrl( '' );
    this.setColour( 225 );
    this.setStyle( "character" );
  }
}

Blockly.Blocks[ 'character_tab' ] = {
  init: function () {
    this.appendDummyInput( 'label' )
      .appendField( 'Tab' );
    this.setPreviousStatement( true, 'Atom' );
    this.setNextStatement( true, 'Atom' );
    this.setTooltip( '' );
    this.setHelpUrl( '' );
    this.setColour( 225 );
    this.setStyle( "character" );
  }
}

Blockly.Blocks[ 'character_line_tab' ] = {
  init: function () {
    this.appendDummyInput( 'label' )
      .appendField( 'Line Tab' );
    this.setPreviousStatement( true, 'Atom' );
    this.setNextStatement( true, 'Atom' );
    this.setTooltip( '' );
    this.setHelpUrl( '' );
    this.setColour( 225 );
    this.setStyle( "character" );
  }
}

Blockly.Blocks[ 'character_null' ] = {
  init: function () {
    this.appendDummyInput( 'label' )
      .appendField( 'Null' );
    this.setPreviousStatement( true, 'Atom' );
    this.setNextStatement( true, 'Atom' );
    this.setTooltip( '' );
    this.setHelpUrl( '' );
    this.setColour( 225 );
    this.setStyle( "character" );
  }
}

Blockly.Blocks[ 'character_control' ] = {
  init: function () {
    this.appendDummyInput( 'label' )
      .appendField( 'Control Character' )
      .appendField( new Blockly.FieldTextInput( 'A' ), 'cc' );
    this.setPreviousStatement( true, 'Atom' );
    this.setNextStatement( true, 'Atom' );
    this.setTooltip( '' );
    this.setHelpUrl( '' );
    this.setColour( 225 );
    this.setStyle( "character" );
  }
}

// Blockly.Blocks[ 'character_unicode' ] = {
//   init: function () {
//     this.appendDummyInput( 'label' )
//       .appendField( 'Unicode' )
//       // TODO, custom 4 character hex input, can be array
//       .appendField( new Blockly.FieldTextInput( 'A' ), 'cc' );
//     this.setPreviousStatement( true, 'Atom' );
//     this.setNextStatement( true, 'Atom' );
//     this.setTooltip( '' );
//     this.setHelpUrl( '' );
//     this.setColour( 225 );
//   }
// }



export default Blockly.Blocks;