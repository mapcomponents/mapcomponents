import React, { ReactNode, useEffect, useRef, useState } from 'react';
import { useMap } from '@mapcomponents/react-maplibre';
import { Deck, Layer } from '@deck.gl/core';
import {MapboxOverlay} from '@deck.gl/mapbox';
export interface DeckGlContextType {
	deckGl: Deck<null> | undefined;
	deckGlLayerArray: Layer[];
	setDeckGlLayerArray: React.Dispatch<React.SetStateAction<Layer[]>>;
}
interface DeckGlContextProviderProps {
	mapId: string;
	children: ReactNode;
}

const layerId = 'deckgl-layer';
const DeckGlContext = React.createContext({} as DeckGlContextType);

const DeckGlContextProvider = ({ mapId, children }: DeckGlContextProviderProps) => {
	const mapHook = useMap({ mapId });

	const [deckGl, setDeckGl] = useState<Deck | undefined>(undefined);
	const layerRef = useRef<MapboxOverlay | undefined>(undefined);
	const [deckGlLayerArray, setDeckGlLayerArray] = useState<Layer[]>([]);

	useEffect(() => {
		if (!mapHook.map) return;

		const deck = new Deck({
			gl: mapHook.map.painter.context.gl as WebGL2RenderingContext,
			layers: [],
		});

		layerRef.current = new MapboxOverlay({
			id: layerId,
		});

		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		mapHook.map.addLayer(layerRef.current);

		setDeckGl(deck);
		return () => {
			mapHook.map?.removeLayer(layerId);
			layerRef.current = undefined;
		};
	}, [mapHook.map]);

	useEffect(() => {
		if (!deckGl) return;
		deckGl.setProps({
			layers: [...deckGlLayerArray],
		});
	}, [deckGlLayerArray, deckGl]);

	const value = {
		deckGl,
		deckGlLayerArray,
		setDeckGlLayerArray,
	};
	return <DeckGlContext.Provider value={value}>{children}</DeckGlContext.Provider>;
};

export { DeckGlContextProvider };
export default DeckGlContext;
