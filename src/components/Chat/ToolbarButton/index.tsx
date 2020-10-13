import * as React from 'react';
import './ToolbarButton.scss';

type ToolbarButtonType = {
    icon: string
    type?: string
    onSubmit?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export default function ToolbarButton(props: ToolbarButtonType) {
    const { icon, type, onSubmit } = props;
    if (type === 'submit') {
        return (
            <button type="submit">
                <i className={`toolbar-button ${icon}`} />
            </button>
        );
    }
    if (type === 'file') {
        return (
            <>
                <label htmlFor="file">
                    <input
                        type="file"
                        id="file"
                        name="file"
                        style={{
                            position: 'fixed', left: -100, top: -100, zIndex: -1, visibility: 'hidden',
                        }}
                        onChange={onSubmit}
                    />
                    <i className={`toolbar-button ${icon}`} />
                </label>
            </>
        );
    }
    return (
        <i className={`toolbar-button ${icon}`} />
    );
}
