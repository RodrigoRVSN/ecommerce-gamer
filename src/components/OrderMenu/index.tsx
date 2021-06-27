import { Button, Menu, MenuItem } from "@material-ui/core";

import React from "react";
import { useCart } from "../../hooks/useCart";

export function OrderMenu() {
  const { NameToA, NameToZ } = useCart();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        variant="contained"
        size="large"
        color="primary"
      >
        <img src="/assets/arrow-down-icon.svg" alt="filtro" />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={NameToZ}>Ordem Alfabética (A-Z)</MenuItem>
        <MenuItem onClick={NameToA}>Ordem Alfabética (Z-A)</MenuItem>
        <MenuItem onClick={handleClose}>Preço (Maior)</MenuItem>
        <MenuItem onClick={handleClose}>Preço (Menor)</MenuItem>
        <MenuItem onClick={handleClose}>Pontuação (Maior)</MenuItem>
        <MenuItem onClick={handleClose}>Pontuação (Menor)</MenuItem>
      </Menu>
    </>
  );
}
