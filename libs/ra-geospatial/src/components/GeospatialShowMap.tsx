import React, { useEffect, useState } from 'react';
import { InputProps, useRecordContext } from 'react-admin';
import { parse as wellknownParse } from 'wellknown';
import { MapLibreMap, MlGeoJsonLayer, useMap } from '@mapcomponents/react-maplibre';
import { LngLatLike } from 'maplibre-gl';
import { feature, centroid } from '@turf/turf';
import { Feature } from '@turf/helpers';

export interface GeospatialShowMapProps extends InputProps<any> {
	MapLibreMapProps?: React.ComponentProps<typeof MapLibreMap>;
	embeddedMap?: boolean;
	mapId?: string;
}

function GeospatialShowMap(props: GeospatialShowMapProps) {
	const source = props.source;
	const record = useRecordContext();
	const mapHook = useMap();

	const [geojson, setGeojson] = useState<typeof feature>({
		"type": "FeatureCollection",
		"features": [
			{
				"type": "Feature",
				"properties": {
					"Bes": "Jannik"
				},
				"geometry": {
					"coordinates": [
						7.842864926634604,
						47.9889552873029
					],
					"type": "Point"
				},
				"id": 0
			},
			{
				"type": "Feature",
				"properties": {
					"Bes": "Lena"
				},
				"geometry": {
					"coordinates": [
						7.842859394578397,
						47.98894496529036
					],
					"type": "Point"
				},
				"id": 1
			},
			{
				"type": "Feature",
				"properties": {
					"Bes": "Bregitte"
				},
				"geometry": {
					"coordinates": [
						7.8428864,
						47.9889541
					],
					"type": "Point"
				},
				"id": 2
			},
			{
				"type": "Feature",
				"properties": {
					"Bes": "Phillip"
				},
				"geometry": {
					"coordinates": [
						7.8428896,
						47.9889433
					],
					"type": "Point"
				},
				"id": 3
			},
			{
				"type": "Feature",
				"properties": {
					"Bes": "Thorsten"
				},
				"geometry": {
					"coordinates": [
						7.8427993,
						47.9889581
					],
					"type": "Point"
				},
				"id": 4
			},
			{
				"type": "Feature",
				"properties": {
					"Bes": "pascal"
				},
				"geometry": {
					"coordinates": [
						7.8427733,
						47.9889621
					],
					"type": "Point"
				},
				"id": 5
			},
			{
				"type": "Feature",
				"properties": {
					"Bes": "Martin"
				},
				"geometry": {
					"coordinates": [
						7.8427718,
						47.9889487
					],
					"type": "Point"
				},
				"id": 6
			},
			{
				"type": "Feature",
				"properties": {
					"Bes": "Tina"
				},
				"geometry": {
					"coordinates": [
						7.8427958,
						47.9889477
					],
					"type": "Point"
				},
				"id": 7
			},
			{
				"type": "Feature",
				"properties": {
					"Bes": "Stefan"
				},
				"geometry": {
					"coordinates": [
						7.8429064,
						47.9889854
					],
					"type": "Point"
				},
				"id": 8
			},
			{
				"type": "Feature",
				"properties": {
					"Bes": "None"
				},
				"geometry": {
					"coordinates": [
						7.8429081,
						47.9889951
					],
					"type": "Point"
				},
				"id": 9
			}
		]
	});  // todo: remove this default value
	useEffect(() => {
		if (!record?.[source]) return;

		const _geometry = wellknownParse(record[source]);

		if (_geometry) {
			setGeojson({
				type: 'Feature',
				properties: {},
				geometry: _geometry,
			} as unknown as typeof feature);
		}
	}, [record]);

	useEffect(() => {
		if (!mapHook.map || !geojson) return;

		const _center = centroid(geojson as typeof Feature);

		if (_center?.geometry?.coordinates) {
			mapHook.map.setCenter(_center.geometry.coordinates as LngLatLike);
		}
	}, [mapHook.map, geojson]);

	return (
		<>
			{props.embeddedMap && (
				<MapLibreMap
					{...props?.MapLibreMapProps}
					options={{
						zoom: 14,
						style: 'https://wms.wheregroup.com/tileserver/style/klokantech-basic.json',
						center: [0, 0],
						...props?.MapLibreMapProps?.options,
					}}
					style={{
						width: '100%',
						height: '400px',
						...props?.MapLibreMapProps?.style,
					}}
				/>
			)}

			{geojson && <MlGeoJsonLayer geojson={geojson}></MlGeoJsonLayer>}
		</>
	);
}

export default GeospatialShowMap;
