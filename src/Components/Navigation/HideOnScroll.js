import React from "react";
import PropTypes from "prop-types";
import { useScrollTrigger, Slide } from "@material-ui/core";

const HideOnScroll = ({ children }) => {
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

export default HideOnScroll;
