import MlLayerMagnify from './MlLayerMagnify';

import React, { useContext, useState } from 'react';
import { mount } from 'enzyme';
import MapContext, { MapComponentsProvider } from '../../contexts/MapContext';
import MapLibreMap from './../MapLibreMap/MapLibreMap';
// we need to import this explicitly, because otherwise it gets mixed up with cypress expect
import { expect } from '@jest/globals';
// Mapbox sync-move mockup
const mockSyncMoveMethods = {
	cleanup: jest.fn(),
};

jest.mock('@mapbox/mapbox-gl-sync-move', () => {
	const originalModule = jest.requireActual('@mapbox/mapbox-gl-sync-move');
	return {
		__esModule: true,
		...originalModule,
		default: () => mockSyncMoveMethods.cleanup,
	};
});

const TestComponent = () => {
	const [layerVisible, setLayerVisible] = useState(true);
	const [refreshTrigger, setRefreshTrigger] = useState(0);
	const mapContext = useContext(MapContext);

	return (
		<>
			<MapLibreMap mapId="map_1" />
			<MapLibreMap mapId="map_2" />

			{layerVisible && <MlLayerMagnify map1Id="map_1" map2Id="map_2" />}

			<button
				className="toggle_layer_visible"
				onClick={() => {
					setLayerVisible(!layerVisible);
				}}
			>
				toggle layer visible
			</button>
			<button
				className="trigger_refresh"
				onClick={() => {
					setRefreshTrigger(refreshTrigger + 1);
				}}
			>
				refresh
			</button>
			<div className="layers_json">
				{mapContext.map && refreshTrigger && JSON.stringify(mapContext.map.layers)}
			</div>
		</>
	);
};

const createWrapper = () =>
	mount(
		<MapComponentsProvider>
			<TestComponent />
		</MapComponentsProvider>
	);

describe('<MlLayerMagnify/>', () => {
	//it("should add a MlLayerMagnify Component to that calls syncMaps with both available MapLibre instances once", async () => {
	//	const spy = jest.spyOn(syncMoveObj, "syncMove");
	//	const wrapper = createWrapper(TestComponent);

	//	expect(spy).toHaveBeenCalledTimes(1);
	//});

	it('should call the syncMaps cleanup function once when it is removed from reactDOM', async () => {
		const wrapper = createWrapper();

		//expect(syncMove).toHaveBeenCalledTimes(1);

		wrapper.find('.toggle_layer_visible').simulate('click');

		//TODO: Fix cleanup test
		expect(mockSyncMoveMethods.cleanup).toHaveBeenCalledTimes(1);
	});
});
