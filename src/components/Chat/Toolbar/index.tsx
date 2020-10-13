import React from 'react';
import Lang from '../../Lang';
import './Toolbar.scss';

type ToolbarType = {
    title: string
    leftItems: Array<object>
    rightItems: Array<object>
}

export default function Toolbar(props:ToolbarType) {
    const { title, leftItems, rightItems } = props;
    return (
        <div className="toolbar">
            <div className="left-items">{ leftItems }</div>
            <h1 className="toolbar-title">{ title }</h1>
            <div className="right-items">
                { rightItems }
                <Lang />
            </div>
        </div>
    );
}
