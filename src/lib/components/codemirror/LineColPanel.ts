import { type Extension } from '@codemirror/state';
import { ViewPlugin, showPanel, type EditorView } from '@codemirror/view';

export const lineColPanel: Extension = ViewPlugin.fromClass(
  class {
    dom: HTMLElement;

    constructor ( view: EditorView ) {
      this.dom = document.createElement( 'div' );
      this.dom.className = 'cm-status-bar';
      this.updatePosition( view );
    }

    update ( update: { selectionSet: boolean; docChanged: boolean; view: EditorView } ) {
      if ( update.selectionSet || update.docChanged ) {
        this.updatePosition( update.view );
      }
    }

    updatePosition ( view: EditorView ) {
      const selection = view.state.selection;
      const pos = selection.main.head;
      const line = view.state.doc.lineAt( pos );
      const column = pos - line.from + 1;
      const selectedCharacters = selection.ranges.reduce(
        ( count, range ) => count + range.to - range.from,
        0
      );
      const selectedText =
        selectedCharacters > 0
          ? ` \u2022 ${ selectedCharacters } character${ selectedCharacters === 1 ? '' : 's' }`
          : '';

      this.dom.textContent = `Line ${ line.number }, Column ${ column }${ selectedText }`;
    }
  },
  {
    provide: ( plugin ) =>
      showPanel.of( ( view ) => {
        const value = view.plugin( plugin );
        if ( !value ) {
          throw new Error( 'The line and column panel plugin is unavailable.' );
        }

        return { dom: value.dom, top: false };
      } )
  }
);
