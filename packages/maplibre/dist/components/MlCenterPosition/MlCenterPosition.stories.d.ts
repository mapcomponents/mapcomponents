/// <reference types="react" />
declare const storyoptions: {
    title: string;
    component: {
        (props: import("./MlCenterPosition").MlCenterPositionProps): JSX.Element;
        defaultProps: {
            mapId: undefined;
            onColor: string;
            offColor: string;
        };
    };
    argTypes: {};
    decorators: ((Story: any, context: any) => JSX.Element)[];
    parameters: {
        docs: {
            source: {
                type: string;
            };
        };
    };
};
export default storyoptions;
export declare const ExampleConfig: any;
