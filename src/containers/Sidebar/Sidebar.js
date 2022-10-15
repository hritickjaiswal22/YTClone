import React, { useState } from "react";

import SidebarComponent from "components/Sidebar/Sidebar";

function Sidebar() {
  const [items, setItems] = useState(["Home", "Subscriptions", "Explore"]);

  return <SidebarComponent items={items} />;
}

export default Sidebar;
