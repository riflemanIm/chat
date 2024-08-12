/// <reference types="react" />
import { AlertColor } from '@mui/material';
declare type AlertDialogProps = {
    children: JSX.Element | JSX.Element[] | string;
    open: boolean;
    setOpen: (value: boolean) => void;
    severity: AlertColor;
};
export default function AlertDialog({ children, open, setOpen, severity, }: AlertDialogProps): JSX.Element;
export {};
