import { type Extension } from '@codemirror/state';
import {
	Decoration,
	ViewPlugin,
	WidgetType,
	type EditorView,
	type DecorationSet
} from '@codemirror/view';

class WhitespaceWidget extends WidgetType {
	toDOM(): HTMLElement {
		const marker = document.createElement('span');
		marker.textContent = '\u2022';
		marker.setAttribute('aria-hidden', 'true');
		marker.style.opacity = '0.5';
		marker.style.pointerEvents = 'none';
		return marker;
	}

	ignoreEvent(): boolean {
		return true;
	}
}

const whitespaceWidget = new WhitespaceWidget();

function CreateWhitespaceDecorations(view: EditorView): DecorationSet {
	const decorations = [];
	const { doc } = view.state;

	for (const { from, to } of view.visibleRanges) {
		const firstLine = doc.lineAt(from).number;
		const lastLine = doc.lineAt(to).number;

		for (let lineNumber = firstLine; lineNumber <= lastLine; lineNumber++) {
			const line = doc.line(lineNumber);

			// i use REGEX to match the REGEX
			const whitespace = /\s/g;
			let match: RegExpExecArray | null;

			while ((match = whitespace.exec(line.text)) !== null) {
				const position = line.from + match.index;
				decorations.push(
					Decoration.replace({ widget: whitespaceWidget }).range(position, position + 1)
				);
			}
		}
	}

	return Decoration.set(decorations, true);
}

export const viewWhitespace: Extension = ViewPlugin.fromClass(
	class {
		decorations: DecorationSet;

		constructor(view: EditorView) {
			this.decorations = CreateWhitespaceDecorations(view);
		}

		update(update: { docChanged: boolean; viewportChanged: boolean; view: EditorView }) {
			if (update.docChanged || update.viewportChanged) {
				this.decorations = CreateWhitespaceDecorations(update.view);
			}
		}
	},
	{
		decorations: (plugin) => plugin.decorations
	}
);
