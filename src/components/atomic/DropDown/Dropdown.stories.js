import React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";

const Drop = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Fab
        color="secondary"
        onClick={handleClick}
        size={props.size}
        sx={{
          top: (theme) => theme.spacing(2),
          left: (theme) => theme.spacing(2),
        }}
      >
        <AddIcon />
      </Fab>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
      >
        <MenuItem>
          <ListItemIcon>
            <PriorityHighIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary={props.text} />
        </MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </div>
  );
};

export default {
  title: "components/DropDown",
  component: Drop,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    size: {
      control: "select",
      options: ["small", "medium", "large"],
    },
  },
};

const Template = (args) => <Drop {...args} />;

export const Dropdown = Template.bind({});
Dropdown.args = {
  text: "Profile",
};
