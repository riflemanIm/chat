import * as React from 'react';
declare type ConfirmDialogSlideProps = {
    open: boolean;
    contentText: string;
    setOpen: (open: boolean) => void;
    callback: () => void;
};
export default function ConfirmDialogSlide({ open, setOpen, contentText, callback, }: ConfirmDialogSlideProps): React.JSX.Element;
export {};
