/// <reference types="react" />
export interface WmsLayerConfig {
    url: string;
}
export interface WmsLayerFormProps {
    onSubmit: (config: WmsLayerConfig) => void;
    onCancel: () => void;
}
export default function WmsLayerForm(props: WmsLayerFormProps): JSX.Element;
