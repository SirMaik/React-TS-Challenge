import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/fxdigitallogo.png";
import { Button } from "@mantine/core";

export const Header = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <header>
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
