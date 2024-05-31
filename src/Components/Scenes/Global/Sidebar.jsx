import React, { useState } from "react";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../../theme";
import HomeOutlined from "@mui/icons-material/HomeOutlined";
import PeopleOutlined from "@mui/icons-material/PeopleOutlined";
import ContactsOutlined from "@mui/icons-material/ContactsOutlined";
import PersonOutlined from "@mui/icons-material/PersonOutlined";
import MapOutlined from "@mui/icons-material/MapOutlined";
import MenuOutlined from "@mui/icons-material/MenuOutlined";
import ReciptOutlined from "@mui/icons-material/LightModeOutlined";

const SideBar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <Box
      sx={{
        "& .pro-sidebar": {
          width: "80px",
          height: "100vh",
        },
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-sidebar-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "20px 15px 20px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#869dfb !important",
          background: `${colors.sidebarhover[1]} !important`,
        },
        "& .pro-inner-list-item": {
          background: `${colors.sidebarhover[1]} !important`,
        },
        "& .pro-inner-item:active": {
          background: `${colors.grey[400]} !important`,
        },
        "& .popper-inner": {
          background: `${colors.primary[400]} !important`,
          margin: "110px 0px 0px -3px",
          padding: "5px 0px 5px 0px !important",
          boxShadow: `0px 2px 30px rgba(0, 0, 0, 0.4), inset 0px 0px 0px 1px ${colors.sidebarhover[1]}`,
        },
        "& .pro-icon": {
          color: `${colors.grey[300]} !important`,
        },
        "& .pro-menu a": {
          color: `${colors.grey[300]} !important`,
        },
        "& .pro-menu a:hover": {
          color: `${colors.grey[100]} !important`,
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu>
          {/* logo and menu items */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlined /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography variant="h3" color={colors.grey[300]}>
                  Admin
                </Typography>
                <IconButton>
                  <MenuOutlined onClick={() => setIsCollapsed(!isCollapsed)} />
                </IconButton>
              </Box>
            )}
          </MenuItem>
          <MenuItem icon={<HomeOutlined />}>
            <Link to={"/Dashboard"}> Dashboard</Link>
          </MenuItem>
          <MenuItem icon={<MapOutlined />}>
            <Link to={"/Invoices"}>Invoices</Link>
          </MenuItem>
          <MenuItem icon={<ReciptOutlined />}>
            <Link to={"/Reports"}>Reports</Link>
          </MenuItem>
          <SubMenu title="People" icon={<PeopleOutlined />}>
            <MenuItem>
              <Link to={"/ManageTeam"}>Manage Team</Link>
            </MenuItem>
            <MenuItem>
              <Link to={"/Team"}>Teams</Link>
            </MenuItem>
          </SubMenu>
          <MenuItem icon={<ContactsOutlined />}>
            <Link to={"/Contacts"}>Contacts</Link>
          </MenuItem>
          <MenuItem icon={<PersonOutlined />}>
            <Link to={"/Profiles"}>Profiles</Link>
          </MenuItem>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default SideBar;
