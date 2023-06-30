/// <reference types="react" />
type Props = {
    visible: boolean;
    name?: string;
    children: JSX.Element | JSX.Element[];
    setVisible?: (visible: boolean | ((val: unknown) => boolean)) => void;
};
export default function LayerListFolder({ visible, name, children, setVisible }: Props): JSX.Element;
export {};
