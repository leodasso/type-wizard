import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
	typography: {
		fontFamily: [
			'Raleway',
			'sans-serif'
		].join(','),
	},
	palette: {
		type: 'dark',
		primary: {
		  // light: will be calculated from palette.primary.main,
		  main: 'rgb(255, 79, 187)',
		},

		secondary: {
		  main: 'rgb(194, 194, 194)',
		},

		error: {
			main: 'rgb(204, 13, 39)',
		},
	  },

})

export default theme;