import { type Extension } from '@codemirror/state';
import {
  Decoration,
  ViewPlugin,
  WidgetType,
  type EditorView,
  type DecorationSet
} from '@codemirror/view';

class EOLWidget extends WidgetType {
  toDOM (): HTMLElement {
    const marker = document.createElement( 'span' );
    marker.textContent = '↵';
    marker.setAttribute( 'aria-hidden', 'true' );
    marker.style.opacity = '0.5';
    marker.style.pointerEvents = 'none';
    return marker;
  }

  ignoreEvent (): boolean {
    return true;
  }
}

const eolWidget = new EOLWidget();

function CreateEOLDecorations ( view: EditorView ): DecorationSet {
  const decorations = [];
  const { doc } = view.state;
  const visibleLines = new Set<number>();

  for ( const { from, to } of view.visibleRanges ) {
    const firstLine = doc.lineAt( from ).number;
    const lastLine = doc.lineAt( to ).number;

    for ( let lineNumber = firstLine; lineNumber <= lastLine; lineNumber++ ) {
      visibleLines.add( lineNumber );
    }
  }

  for ( const lineNumber of [ ...visibleLines ].sort( ( a, b ) => a - b ) ) {
    if ( lineNumber < doc.lines ) {
      decorations.push(
        Decoration.widget( { widget: eolWidget, side: -1 } ).range( doc.line( lineNumber ).to )
      );
    }
  }

  return Decoration.set( decorations, true );
}

export const viewEOL: Extension = ViewPlugin.fromClass(
  class {
    decorations: DecorationSet;

    constructor ( view: EditorView ) {
      this.decorations = CreateEOLDecorations( view );
    }

    update ( update: { docChanged: boolean; viewportChanged: boolean; view: EditorView } ) {
      if ( update.docChanged || update.viewportChanged ) {
        this.decorations = CreateEOLDecorations( update.view );
      }
    }
  },
  {
    decorations: ( plugin ) => plugin.decorations
  }
);
