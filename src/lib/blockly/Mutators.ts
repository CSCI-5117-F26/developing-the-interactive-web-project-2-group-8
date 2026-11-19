import * as Blockly from "blockly"

/** Type of a block that has QUANTIFIER_MUTATOR_MIXIN */
type QuantifierBlock = Blockly.Block & QuantifierMixin;
interface QuantifierMixin extends DivisiblebyMixinType { }
type DivisiblebyMixinType = typeof IS_DIVISIBLEBY_MUTATOR_MIXIN;


/**
 * Mixin for mutator functions in the 'math_is_divisibleby_mutator'
 * extension.
 *
 * @mixin
 * @augments Block
 * @package
 */
export const IS_DIVISIBLEBY_MUTATOR_MIXIN = {
  /**
   * Create XML to represent whether the 'divisorInput' should be present.
   * Backwards compatible serialization implementation.
   *
   * @returns XML storage element.
   */
  mutationToDom: function ( this: QuantifierBlock ): Element {
    console.log( "AAA" )
    const container = Blockly.utils.xml.createElement( 'mutation' );
    const divisorInput = this.getFieldValue( 'PROPERTY' ) === 'DIVISIBLE_BY';
    container.setAttribute( 'divisor_input', String( divisorInput ) );
    return container;
  },
  /**
   * Parse XML to restore the 'divisorInput'.
   * Backwards compatible serialization implementation.
   *
   * @param xmlElement XML storage element.
   */
  domToMutation: function ( this: QuantifierBlock, xmlElement: Element ) {
    console.log( "BBB" )

    const divisorInput = xmlElement.getAttribute( 'divisor_input' ) === 'true';
    this.updateShape_( divisorInput );
  },

  // This block does not need JSO serialization hooks (saveExtraState and
  // loadExtraState) because the state of this object is already encoded in the
  // dropdown values.
  // XML hooks are kept for backwards compatibility.

  /**
   * Modify this block to have (or not have) an input for 'is divisible by'.
   *
   * @param divisorInput True if this block has a divisor input.
   */
  updateShape_: function ( this: QuantifierBlock, divisorInput: boolean ) {
    // Add or remove a Value Input.
    console.log( "CCC" )

    const inputExists = this.getInput( 'DIVISOR' );
    if ( divisorInput ) {
      if ( !inputExists ) {
        this.appendValueInput( 'DIVISOR' ).setCheck( 'Number' );
      }
    } else if ( inputExists ) {
      this.removeInput( 'DIVISOR' );
    }
  },
};


/**
 * 'math_is_divisibleby_mutator' extension to the 'math_property' block that
 * can update the block shape (add/remove divisor input) based on whether
 * property is "divisible by".
 */
const IS_DIVISIBLE_MUTATOR_EXTENSION = function ( this: QuantifierBlock ) {
  this.getField( 'PROPERTY' )!.setValidator(
    /** @param option The selected dropdown option. */
    function ( this: Blockly.FieldDropdown, option: string ) {
      const divisorInput = option === 'DIVISIBLE_BY';
      ( this.getSourceBlock() as QuantifierBlock ).updateShape_( divisorInput );
      return undefined; // FieldValidators can't be void.  Use option as-is.
    },
  );
};

// if ( !Blockly.registry.getObject( Blockly.registry.Type., "math_is_divisibleby_mutator" ) ) {
//   Blockly.Extensions.registerMutator(
//     'math_is_divisibleby_mutator',
//     IS_DIVISIBLEBY_MUTATOR_MIXIN,
//     IS_DIVISIBLE_MUTATOR_EXTENSION,
//   );
// }