import React from "react";

import ScrolledFeedComponent from "components/ScrolledFeed/ScrolledFeed";

function ScrolledFeed() {
  return (
    <ScrolledFeedComponent
      items={[
        "popular",
        "Games",
        "News",
        "Sports",
        "Movies",
        "Software Engineering",
        "Frontend Developer",
        "Reactjs",
        "Angularjs",
      ]}
    />
  );
}

export default ScrolledFeed;
