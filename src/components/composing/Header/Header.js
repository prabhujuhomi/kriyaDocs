import React from "react";
// import Typography from "@mui/material/Typography";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
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
      <AppBar sx={{ bgcolor: "white" }} position="static">
        <Container maxWidth="xl" sx={{mt: 0, my: 0}}>
          <Toolbar disableGutters>
            {/* <Typography
              sx={{ color: "black", paddingLeft: "10px", paddingRight: "10px" }}
            >
              kDox
            </Typography> */}
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex' }, mt: 0, my: 0 }}>
              <img src={KdoxLogo} alt="kodox logo not found" style={{marginRight: '15px'}}/>
              <Stack direction="row">
                <IconButton>
                  <AddIcon />
                </IconButton>
                <IconButton backgroundColor="white" marginLeft='15px'>
                  <img
                    src={ImgIcon}
                    alt="imageIcon not found"
                  />
                </IconButton>
                <IconButton backgroundColor="white">
                  <img
                    src={ReferenceIcon}
                    alt="ReferenceIcon not found"
                  />
                </IconButton>
                <IconButton backgroundColor="white">
                  <img
                    src={EquationIcon}
                    alt="EquationIcon not found"
                  />
                </IconButton>
                <IconButton backgroundColor="white">
                  <img
                    src={SymbolIcon}
                    alt="SymbolIcon not found"
                  />
                </IconButton>
                <IconButton backgroundColor="white">
                  <img
                    src={ChatIcon}
                    alt="ChatIcon not found"
                  />
                </IconButton>
              </Stack>
              <Divider
                orientation="vertical"
                flexItem
                sx={{mr:"20px", ml:"20px"}}
              />
              <Stack direction="row">
                <IconButton backgroundColor="white" color="#898585">
                  {/* <UndoIcon /> */}
                  <img
                    src={UndoIcon}
                    alt="UndoIcon not found"
                  />
                </IconButton>
                <IconButton backgroundColor="white" color="#898585">
                  {/* <RedoIcon /> */}
                  <img
                    src={RedoIcon}
                    alt="RedoIcon not found"
                  />
                </IconButton>
              </Stack>
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex' }, justifyContent: "flex-end", mt: 0, mb: 0 }}>
            <Stack direction="row">
                <Avatar size="33px" fontSize="12px">
                  MP
                </Avatar>
                <Avatar src={person} alt="John" size="32px" />
                <Avatar src={person} alt="John" size="32px" />
                <IconButton backgroundColor="white" >
                  <img
                    src={GroupIcon}
                    alt="GroupIcon not found"
                  />
                </IconButton>
                <IconButton backgroundColor="white">
                  <img
                    src={ActionIcon}
                    alt="ActionIcon not found"
                  />
                </IconButton>
              </Stack>
              <Button radius="20px">
                Submit
              </Button>
              <Divider
                orientation="vertical"
                flexItem
                sx={{mr: '12px', ml: '20px' }}
              />
              <IconButton backgroundColor="white">
                <img
                  src={NotificationIcon}
                  alt="NotificationIcon not found"
                />
              </IconButton>
              <Avatar src={person} alt="John" size="32px" />
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
  );
};

export default Header;
