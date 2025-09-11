import { default as React } from '../../../../node_modules/.pnpm/react@19.1.0/node_modules/react';
import { InputProps } from 'react-admin';
import { MapLibreMap } from '@mapcomponents/react-maplibre';
export interface GeospatialInputMapProps extends InputProps<any> {
    MapLibreMapProps?: React.ComponentProps<typeof MapLibreMap>;
    geometrytype?: 'point' | 'line' | 'polygon';
    embeddedMap?: boolean;
    mapId?: string;
}
declare function GeospatialInputMap(props: GeospatialInputMapProps): import("react/jsx-runtime").JSX.Element;
declare namespace GeospatialInputMap {
    var defaultProps: {
        type: string;
        embeddedMap: boolean;
    };
}
export default GeospatialInputMap;
//# sourceMappingURL=GeospatialInputMap.d.ts.map