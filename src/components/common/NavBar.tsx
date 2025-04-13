"use client";
import { useState } from "react";
import Image from "next/image";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Favorite as FavoriteIcon,
} from "@mui/icons-material";
import favicon from "../../assets/icons/favicon.svg";

const NavBar = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="sticky"
      sx={{ backgroundColor: "#48896D", boxShadow: "none" }}
    >
      <Toolbar className="flex flex-row justify-between p-[10px]">
        <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
          <Image
            src={favicon}
            alt="Logo"
            style={{ height: "32px", width: "120px" }}
          />
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton color="inherit">
            <FavoriteIcon />
          </IconButton>
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={handleMenuOpen}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            sx={{ mt: 5 }}
          >
            <MenuItem onClick={handleMenuClose}>Ваш аккаунт</MenuItem>
            <MenuItem onClick={handleMenuClose}>
              Кабінет/Список притулку
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>Уподобані оголошення</MenuItem>
            <MenuItem onClick={handleMenuClose}>Сповіщення</MenuItem>
            <MenuItem onClick={handleMenuClose}>Чат</MenuItem>
            <MenuItem onClick={handleMenuClose}>Донати</MenuItem>
            <MenuItem onClick={handleMenuClose}>Звіт</MenuItem>
            <MenuItem onClick={handleMenuClose}>Служба підтримки</MenuItem>
            <MenuItem onClick={handleMenuClose}>Налаштування</MenuItem>
            <MenuItem onClick={handleMenuClose}>Додати акаунт</MenuItem>
            <MenuItem onClick={handleMenuClose}>Вийти</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
