import React from 'react';
import useMap from '../../hooks/useMap';
import PrinterIcon from '@mui/icons-material/Print';
import Button from '@mui/material/Button';
import { CircularProgress } from '@mui/material';
import useExportMap from '../../hooks/useExportMap';
import { BBox } from '@turf/turf';
import { createExportOptions } from 'src/hooks/useExportMap/lib';

export interface MlCreatePdfButtonProps {
	/**
	 * Id of the target MapLibre instance in mapContext
	 */
	mapId?: string;
	/**
	 * Option overrides for the createExport function
	 */
	exportOptions?: createExportOptions
}

/**
 * Renders a button that will create a PDF version of the current map view (dimensions adjusted to fit Din A4 Paper).
 */
const MlCreatePdfButton = (props: MlCreatePdfButtonProps) => {
	const mapHook = useMap({
		mapId: props.mapId,
	});
	const exportMap = useExportMap({ mapId: props.mapId });
	const [loading, setLoading] = React.useState(false);

	return (
		<>
			<Button
				color="primary"
				variant="contained"
				onClick={() => {
					if (mapHook.map && exportMap?.createExport) {
						setLoading(true);
						const bounds = mapHook.map.getBounds();
						const bbox: BBox = [
							bounds.getWest(),
							bounds.getSouth(),
							bounds.getEast(),
							bounds.getNorth(),
						];
						exportMap
							.createExport({
								width: 595 * 1.4,
								height: 842 * 1.4,
								bbox: bbox,
								bboxUnrotated: bbox,
								bearing: mapHook.map.getBearing(),
								format: 'a4',
								orientation: 'portrait',
								...props.exportOptions
							})
							.then((res) => res.createPdf())
							.then((res) => {
								setLoading(false);
								return res.downloadPdf();
							})
							.catch((error) => {
								console.log(error);
								setLoading(false);
							});
					}
				}}
			>
				{loading ? (
					<CircularProgress
						size={24}
						sx={{
							color: 'text.contrast',
						}}
					/>
				) : (
					<PrinterIcon />
				)}
			</Button>
		</>
	);
};

MlCreatePdfButton.defaultProps = {
	mapId: undefined,
};

export default MlCreatePdfButton;