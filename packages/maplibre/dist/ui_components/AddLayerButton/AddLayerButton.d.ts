/// <reference types="react" />
import { SxProps } from '@mui/material';
import { LayerConfig } from '../../contexts/LayerContext';
export interface AddLayerButtonProps {
    sx?: SxProps;
    onComplete?: (config: LayerConfig) => void;
}
declare const AddLayerButton: {
    (props: AddLayerButtonProps): JSX.Element;
    defaultProps: {};
};
export default AddLayerButton;
