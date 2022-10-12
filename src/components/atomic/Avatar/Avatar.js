import React from "react";
import PropTypes from "prop-types";
import MUIAvatar from "@mui/material/Avatar";

const Avatar = ({
  children,
  alt,
  src,
  size,
  fontSize,
  marginLeft,
  backgroundColor,
  color,
}) => {
  return (
    <MUIAvatar
      sx={{
        bgcolor: backgroundColor,
        color: color,
        height: size,
        width: size,
        fontSize: fontSize,
        marginLeft: marginLeft,
      }}
      alt={alt}
      src={src}
    >
      {children}
    </MUIAvatar>
  );
};

Avatar.propTypes = {
  /**
   * Avatar content
   */
  children: PropTypes.string,
  /**
   * Which avatar going to use
   */
  src: PropTypes.string,
  /**
   * What is the alternate message
   */
  alt: PropTypes.string,
  /**
   * How large should the avatar be
   */
  size: PropTypes.string,
  /**
   * What is the content font size
   */
  fontSize: PropTypes.string,
  /**
   * How much space need between left margin and element
   */
  marginLeft: PropTypes.string,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * What  color to use
   */
  color: PropTypes.string,
};

Avatar.defaultProps = {
  size: "56px",
  fontSize: "16px",
  marginLeft: "5px",
  backgroundColor: "#6801d6",
  color: "white",
};

export default Avatar;
