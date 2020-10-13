import React from "react";
import cn from "classnames";

import "./ChatRooms.scss";

export default ({ list, accessToken }) => (
  <ul className="chat-rooms">
    {list.map((item) => (
      <li key={item._id}>
        <button
          onClick={() => {
            window.location.href = `/?access_token=${accessToken}&target_token=${item.targetToken}`;
          }}
          className={cn({ active: item.active })}
        >
          {item.name}
        </button>
      </li>
    ))}
  </ul>
);
