import * as Blockly from "blockly"
const assertion = [ "#f7768e", "#f7768e", "#ffabbb" ];
const flags = [ "#7aa2f7", '#afc6fa', '#afc6fa' ]
const character = [ "#9ece6a", '#9ece6a', '#b2dc85' ]
const atom = [ "#73daca", '#73daca', '#73daca' ]



const thm = {
  name: "tokyo_night",
  base: Blockly.Themes.Classic,
  categoryStyles: {
    atom_category: { colour: atom[ 0 ] },
    assertion_category: { colour: assertion[ 0 ] },
    character_category: { colour: character[ 0 ] },
    flags_category: { colour: flags[ 0 ] }
  },
  blockStyles: {
    flag: {
      colourPrimary: flags[ 0 ],
      colourSecondary: flags[ 1 ],
      colourTertiary: flags[ 2 ],
    },
    assertion: {
      colourPrimary: assertion[ 0 ],
      colourSecondary: assertion[ 1 ],
      colourTertiary: assertion[ 2 ],
    },
    character: {
      colourPrimary: character[ 0 ],
      colourSecondary: character[ 1 ],
      colourTertiary: character[ 2 ],
    },
    atom: {
      colourPrimary: atom[ 0 ],
      colourSecondary: atom[ 1 ],
      colourTertiary: atom[ 2 ],
    },
    regex_def: {
      colourPrimary: "#494c6f",
      colourSecondary: "#494c6f",
      colourTertiary: "#747796",
    },
  },
  componentStyles: {
    workspaceBackgroundColour: '#20212a',
    toolboxBackgroundColour: '#1c1c23',
    toolboxForegroundColour: '#a9b1d6',
    flyoutBackgroundColour: '#22232d',
    // flyoutForegroundColour: '#ccc',
    // flyoutOpacity: 1,
    scrollbarColour: '#292b3f',
    // insertionMarkerColour: '#fff',
    // insertionMarkerOpacity: 0.3,
    // scrollbarOpacity: 0.4,
    // cursorColour: '#d0d0d0',
    // blackBackground: '#333',


    markerColour: "#3d59a1",
    selectedGlowColour: "#3d59a1",
    selectedGlowOpacity: 0.8,
  },
  fontStyle: {
    family: "Noto Sans",
    weight: "400",
    size: 10
  }
};


export const TokyoNightTheme = Blockly.Theme.defineTheme( 'tokyo_night', thm );