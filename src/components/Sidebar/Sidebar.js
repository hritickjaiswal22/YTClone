import React, { useState } from "react";

import { SidebarContainer, StyledMenu } from "./Sidebar.style";

function Sidebar({ items }) {
  const [activeItem, setActiveItem] = useState(null);

  function handleItemClick(e, { name }) {
    setActiveItem(name);
  }

  return (
    <SidebarContainer>
      <StyledMenu borderless fluid vertical>
        {items.map((text) => (
          <StyledMenu.Item
            name={text}
            key={text}
            active={activeItem === `${text}`}
            onClick={handleItemClick}
          />
        ))}
      </StyledMenu>
    </SidebarContainer>
  );
}

export default Sidebar;
