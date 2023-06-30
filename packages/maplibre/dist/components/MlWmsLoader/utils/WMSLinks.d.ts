/// <reference types="react" />
export interface wmsLinksProps {
    load: (str: string) => void;
    open: boolean;
    close: () => void;
}
export default function WMSLinks(props: wmsLinksProps): JSX.Element;
