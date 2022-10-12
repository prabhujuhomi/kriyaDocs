import React from "react";
import PropTypes from "prop-types";
import MUIIconButton from "@mui/material/IconButton";

const IconButton = ({ children, backgroundColor, color, size, marginLeft, dataTestId, onClick }) => {
  return (
    <MUIIconButton
      sx={{
        backgroundColor: backgroundColor,
        color: color,
        marginLeft: marginLeft,
        "&:hover": {
          transition: "0.3s",
          opacity: "0.9",
          borderWidth: "2px",
          backgroundColor: backgroundColor,
        },
      }}
      size={size}
      data-testid={dataTestId}
      onClick={onClick}
    >
      {children}
    </MUIIconButton>
  );
};

IconButton.propTypes = {
  /**
   * What icon should to use
   */
  children: PropTypes.any,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * What color to use
   */
  color: PropTypes.string,
  /**
   * How large should the icone be
   */
  size: PropTypes.oneOf(["small", "medium", "large"]),
  /**
   * How much space need between left margin and element
   */
  marginLeft: PropTypes.string,
  dataTestId: PropTypes.string,
  onClick: PropTypes.func,
};

IconButton.defaultProps = {
  backgroundColor: "#6801d6",
  color: "white",
  size: "medium",
  marginLeft: "0px",
  onClick: undefined,
};
export default IconButton;
