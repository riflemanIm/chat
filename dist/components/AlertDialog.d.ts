import { AlertColor } from '@mui/material';
import { default as React } from 'react';
type AlertDialogProps = {
    children: React.JSX.Element | React.JSX.Element[] | string;
    open: boolean;
    setOpen: (value: boolean) => void;
    severity: AlertColor;
};
export default function AlertDialog({ children, open, setOpen, severity, }: AlertDialogProps): import("@emotion/react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=AlertDialog.d.ts.map