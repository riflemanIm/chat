import { AlertColor } from "@mui/material";
import React from "react";
declare type AlertDialogProps = {
    children: React.JSX.Element | React.JSX.Element[] | string;
    open: boolean;
    setOpen: (value: boolean) => void;
    severity: AlertColor;
};
export default function AlertDialog({ children, open, setOpen, severity, }: AlertDialogProps): React.JSX.Element;
export {};
