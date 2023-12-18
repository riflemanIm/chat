import React from "react";
import { AlertColor } from "@mui/material";
declare type AlertDialogProps = {
    children: JSX.Element | JSX.Element[] | string;
    open: boolean;
    setOpen: (value: boolean) => void;
    severity: AlertColor;
};
export default function AlertDialog({ children, open, setOpen, severity }: AlertDialogProps): React.JSX.Element;
export {};
