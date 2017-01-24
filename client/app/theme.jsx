import {
    blueGrey400,
    orange900,
    blue800,
    cyan500,
    cyan700,
    pinkA200,
    grey100,
    grey300,
    grey400,
    grey500,
    white,
    darkBlack,
    fullBlack
} from 'material-ui/styles/colors';
import {fade} from 'material-ui/utils/colorManipulator';
import spacing from 'material-ui/styles/spacing';

export default {
    spacing : spacing,
    fontFamily : 'Roboto, sans-serif',
    card: {
        subtitleColor: "#425957"
    },
    palette : {
        backgroundColor: grey100,

        // App bar
        primary1Color: "#D96666",
        primary2Color: cyan700,
        primary3Color: grey400,
        subtitleColor: cyan700,

        sectionHeader: fade(darkBlack, 0.3),

        // Action button
        // accent1Color: "#81AC8B",
        accent1Color: "#81AC8B",
        accent2Color: grey100,
        accent3Color: grey500,

        // text colour
        textColor: blueGrey400,
        selectedTextColor: darkBlack,
        alternateTextColor: white,

        canvasColor: white,
        borderColor: grey300,
        disabledColor: fade(darkBlack, 0.3),
        pickerHeaderColor: cyan500,
        clockCircleColor: fade(darkBlack, 0.07),
        shadowColor: fullBlack
    }
};
