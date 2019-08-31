import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({

	typography: {
		fontFamily: [
			'Schoolbell',
			'sans-serif'
		].join(','),
	},
	palette: {
		type: 'light',
		primary: {
			// light: will be calculated from palette.primary.main,
			main: 'rgb(238, 111, 8)',
		},

		secondary: {
			main: 'rgb(194, 194, 194)',
		},

		error: {
			main: 'rgb(204, 13, 39)',
		},
		contrastThreshold: 3,
    // Used to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.0,
	},

})

export default theme;