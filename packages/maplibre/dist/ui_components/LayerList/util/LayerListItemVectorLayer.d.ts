/// <reference types="react" />
import { MlVectorTileLayerProps } from '../../../components/MlVectorTileLayer/MlVectorTileLayer';
type Props = {
    id: string;
    configurable?: boolean;
    vtProps: MlVectorTileLayerProps;
    setVtProps: ((state: unknown) => void) | undefined;
    visibleMaster?: boolean;
};
declare function LayerListItemVectorLayer({ configurable, vtProps, setVtProps, id, ...props }: Props): JSX.Element;
declare namespace LayerListItemVectorLayer {
    var defaultProps: {
        configurable: boolean;
    };
}
export default LayerListItemVectorLayer;
