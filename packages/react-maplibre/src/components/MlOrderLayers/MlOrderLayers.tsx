import MlLayer from '../MlLayer/MlLayer';
import { useLayerProps } from '../../hooks/useLayer';

export interface MlOrderLayersProps {
	/**
	 * Id of the target MapLibre instance in mapContext
	 */
	mapId?: string;
	layerIds: string[];
	insertBeforeLayer?: string;
}

/**
 * Creates an invisible layer for each entry in props.layerIds with the id `order-{entry}` and a reliable order
 *
 */
const MlOrderLayers = (props: MlOrderLayersProps) => {
	return (
		<>
			{props?.layerIds?.map((layer, idx) => (
				<MlLayer
					layerId={layer}
					options={
						{
							display: 'none',
						} as useLayerProps['options']
					}
					key={layer}
					insertBeforeLayer={ idx < props.layerIds.length -1
						? props?.layerIds?.[idx + 1]
						: props.insertBeforeLayer }
				/>
			))}
		</>
	);
};

export default MlOrderLayers;
