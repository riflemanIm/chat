import React, { useEffect } from 'react';
import shave from 'shave';

import './ConversationListItem.scss';

export default function ConversationListItem({ data }) {
    useEffect(() => {
        shave('.conversation-snippet', 20);
    });

    const { photo, name, text } = data;

    return (
        <div className="conversation-list-item">
            <img className="conversation-photo" src={photo} alt="conversation" />
            <div className="conversation-info">
                <h1 className="conversation-title">{ name }</h1>
                <p className="conversation-snippet">{ text }</p>
            </div>
        </div>
    );
}
