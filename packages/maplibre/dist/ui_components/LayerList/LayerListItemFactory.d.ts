/// <reference types="react" />
import { LayerConfig } from 'src/contexts/LayerContext';
export interface LayerListItemFactoryProps {
    mapId?: string;
    layers: LayerConfig[];
    setLayers?: (layers: LayerConfig[] | ((state: LayerConfig[]) => LayerConfig[])) => void;
    insertBeforeLayer?: string;
}
declare function LayerListItemFactory(props: LayerListItemFactoryProps): JSX.Element;
declare namespace LayerListItemFactory {
    var defaultProps: {
        mapId: undefined;
    };
}
export default LayerListItemFactory;
