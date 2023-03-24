import React, { useMemo } from 'react';

import { MapComponentsProvider } from '../index';
import './style.css';
import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
import getTheme from '../ui_components/MapcomponentsTheme';

const decorators = [
	(Story, context) => {
		const theme = useMemo(() => getTheme(context?.globals?.theme), [context?.globals?.theme]);

		return (
			<div className="fullscreen_map">
				<MapComponentsProvider>
					<MUIThemeProvider theme={theme}>
						<Story />
					</MUIThemeProvider>
				</MapComponentsProvider>
			</div>
		);
	},
];

export default decorators;
