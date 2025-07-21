import { MapComponentsProvider, MapLibreMap } from '@mapcomponents/react-maplibre';
import { FC, ReactElement } from 'react';

export const PrimaryDecorator = (Story: FC): ReactElement => (
	<MapComponentsProvider>
		<MapLibreMap
			mapId="map_1"
			options={{
				zoom: 14.5,
				style:
					'https://wms.wheregroup.com/tileserver/style/klokantech-basic.json',
				center: [7.080590113226776, 50.740545567043426],
			}}
			style={{
				position: 'absolute',
				height: '100vh',
				width: '100vw',
				top: 0,
				right: 0,
				left: 0,
				bottom: 0,
			}}
		/>
		<Story/>
	</MapComponentsProvider>
);
