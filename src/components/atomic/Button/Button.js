import React from "react";
import PropTypes from "prop-types";
import MUIButton from "@mui/material/Button";
import { createTheme } from "@mui/material/styles";
// import { makeStyles } from "@mui/material/styles";

const Button = ({
  variantType,
  children,
  backgroundColor,
  color,
  radius,
  size,
  borderColor,
  dataTestId,
  ...props
}) => {
  const containedTheme = createTheme({
    components: {
      MuiButton: {
        styleOverrides: {
          contained: {
            backgroundColor: "red",
            color: color ? color : "white",
            borderRadius: radius ? radius : "10px",
            textTransform: "none",
          },
          root: {
            "&:hover": {
              transition: "0.3s",
              opacity: "0.9",
              borderWidth: "2px",
              backgroundColor: "#6801d6",
            },
          },
        },
      },
    },
  });

  const outlinedTheme = createTheme({
    components: {
      MuiButton: {
        override: {
          root: {
            "&:hover": {
              transition: "0.3s",
              opacity: "0.9",
              borderWidth: "2px",
            },
          },
        },
        styleOverrides: {
          outlined: {
            backgroundColor: backgroundColor ? backgroundColor : "white",
            color: color ? color : "black",
            borderRadius: radius ? radius : "0px",
            borderColor: borderColor ? borderColor : "black",
            textTransform: "none",
          },
        },
      },
    },
  });

  return (
    <MUIButton
      theme={variantType === "contained" ? containedTheme : outlinedTheme}
      // className={classes.root}
      variant={variantType}
      size={size}
      data-testid={dataTestId}
      {...props}
    >
      {children}
    </MUIButton>
  );
};

Button.defaultProps = {
  children: "Submit",
  variantType: "contained",
  size: "medium",
  onClick: undefined,
};

Button.propTypes = {
  /**
   * Button child or contents
   */
  children: PropTypes.any,
  /**
   * what styles the component should have
   */
  variantType: PropTypes.oneOf(["contained", "outlined"]),
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * What border color to use
   */
  borderColor: PropTypes.string,
  /**
   * What content color to use
   */
  color: PropTypes.string,
  /**
   * Define the radius of the element corners.
   */
  radius: PropTypes.string,
  /**
   * How large should the button be
   */
  size: PropTypes.oneOf(["small", "medium", "large"]),
  onClick: PropTypes.func,
  dataTestId: PropTypes.string,
};

export default Button;
