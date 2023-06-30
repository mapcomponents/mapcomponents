declare module '@mui/material/Button' {
    interface ButtonPropsVariantOverrides {
        navtools: true;
    }
}
declare module '@mui/material' {
    interface ListItemTextProps {
        variant?: "layerlist";
    }
}
declare const getTheme: (mode: 'light' | 'dark') => import("@mui/material").Theme;
export default getTheme;
