import React, { useRef, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { StyledSecondaryMenu, Nav } from "./ScrolledFeed.style";
import Button from "components/Button/Button";
import { Divider } from "semantic-ui-react";
import { resetVideos, updateCategory } from "slices/videoSlice";

function ScrolledFeed({ items }) {
  const dispatch = useDispatch();
  const ref = useRef(null);
  const { selectedCategory } = useSelector((state) => state.videosState);

  function makeChanges(category) {
    dispatch(resetVideos());
    dispatch(updateCategory(category));
  }

  useEffect(() => {
    const wheelHandler = (event) => {
      const scrollFeed = document.getElementById("scrollFeed");
      if (event.deltaY > 0) scrollFeed.scrollLeft += 30;
      if (event.deltaY < 0) scrollFeed.scrollLeft -= 30;
    };
    const element = ref.current;
    element.addEventListener("wheel", wheelHandler);
    return () => {
      element.removeEventListener("wheel", wheelHandler);
    };
  }, []);

  return (
    <Nav ref={ref}>
      <StyledSecondaryMenu id="scrollFeed" secondary>
        {items.map((text) => (
          <StyledSecondaryMenu.Item key={text}>
            <Button
              data-active={selectedCategory === text ? "active" : "inactive"}
              onClick={() => makeChanges(text)}
            >
              {text}
            </Button>
          </StyledSecondaryMenu.Item>
        ))}
      </StyledSecondaryMenu>
      <Divider fitted />
    </Nav>
  );
}

export default ScrolledFeed;
