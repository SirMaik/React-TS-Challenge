import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/fxdigitallogo.png";
import { Button, useMantineTheme } from "@mantine/core";

export const Header = (): JSX.Element => {
  const navigate = useNavigate();
  const theme = useMantineTheme();

  return (
    <header style={{ background: theme.colors.myColor[3] }}>
      <nav>
        <img src={logo} alt="logo" />
        <Button
          onClick={() => {
            navigate("/");
          }}
        >
          Home
        </Button>
      </nav>
    </header>
  );
};

export default Header;
