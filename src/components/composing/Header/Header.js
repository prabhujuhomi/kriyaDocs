import React from "react";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Divider from "@mui/material/Divider";
import AddIcon from "@mui/icons-material/Add";
// import RedoIcon from "@mui/icons-material/Redo";
// import UndoIcon from "@mui/icons-material/Undo";
import IconButton from "../../atomic/IconButton/IconButton";
import ImgIcon from "../../atomic/IconButton/icons/imageIcon.png";
import EquationIcon from "../../atomic/IconButton/icons/omega.png";
import SymbolIcon from "../../atomic/IconButton/icons/sigma.png";
import GroupIcon from "../../atomic/IconButton/icons/people.png";
import NotificationIcon from "../../atomic/IconButton/icons/bell.png";
import ActionIcon from "../../atomic/IconButton/icons/dots.png";
import ReferenceIcon from "../../atomic/IconButton/icons/bookmark.png";
import ChatIcon from "../../atomic/IconButton/icons/chat.png";
import UndoIcon from "../../atomic/IconButton/icons/undo.png";
import RedoIcon from "../../atomic/IconButton/icons/redo.png";
import Button from "../../atomic/Button/Button";
import Avatar from "../../atomic/Avatar/Avatar";
import person from "../../atomic/Avatar/images/AvatarImage2.png";
import KdoxLogo from "./images/kdox.png";

const Header = () => {
  return (
    <Box>
      <AppBar sx={{ bgcolor: "white" }} position="static">
        <Toolbar disableGutters>
          <img src={KdoxLogo} alt="kodox logo not found" />
          <IconButton size="medium">
            <AddIcon />
          </IconButton>
          <IconButton backgroundColor="white" marginLeft="5px">
            <img
              src={ImgIcon}
              alt="imageIcon not found"
              width="20px"
              height="20px"
            />
          </IconButton>
          <IconButton backgroundColor="white">
            <img
              src={ReferenceIcon}
              alt="ReferenceIcon not found"
              width="20px"
              height="20px"
            />
          </IconButton>
          <IconButton backgroundColor="white">
            <img
              src={EquationIcon}
              alt="EquationIcon not found"
              width="20px"
              height="20px"
            />
          </IconButton>
          <IconButton backgroundColor="white">
            <img
              src={SymbolIcon}
              alt="SymbolIcon not found"
              width="25x"
              height="25px"
            />
          </IconButton>
          <IconButton backgroundColor="white">
            <img
              src={ChatIcon}
              alt="ChatIcon not found"
              width="20x"
              height="20px"
            />
          </IconButton>
          <Divider
            orientation="vertical"
            flexItem
            sx={{ marginLeft: "25px" }}
          />
          <IconButton backgroundColor="white" color="#898585" marginLeft="25px">
            {/* <UndoIcon /> */}
            <img
              src={UndoIcon}
              alt="UndoIcon not found"
              width="25px"
              height="25px"
            />
          </IconButton>
          <IconButton backgroundColor="white" color="#898585">
            {/* <RedoIcon /> */}
            <img
              src={RedoIcon}
              alt="RedoIcon not found"
              width="25x"
              height="25px"
            />
          </IconButton>
          <Avatar size="32px" fontSize="12px" marginLeft="350px">
            MP
          </Avatar>
          <Avatar src={person} alt="John" size="32px" />
          <Avatar src={person} alt="John" size="32px" />
          <IconButton backgroundColor="white" marginLeft="10px">
            <img
              src={GroupIcon}
              alt="GroupIcon not found"
              width="20x"
              height="20px"
            />
          </IconButton>
          <IconButton backgroundColor="white">
            <img
              src={ActionIcon}
              alt="ActionIcon not found"
              width="20x"
              height="20px"
            />
          </IconButton>
          <Button radius="20px" size="large">
            Submit
          </Button>
          <Divider
            orientation="vertical"
            flexItem
            sx={{ marginLeft: "12px" }}
          />
          <IconButton backgroundColor="white" marginLeft="12px">
            <img
              src={NotificationIcon}
              alt="NotificationIcon not found"
              width="20x"
              height="20px"
            />
          </IconButton>
          <Avatar src={person} alt="John" size="32px" />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
