import { Box, Card, Stack, Typography } from "@mui/material";
import React from "react";
import "../App.css";

interface NameProps {
  onNameChange: (name: string) => void;
}

const Name: React.FC<NameProps> = ({ onNameChange }) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onNameChange(event.target.value);
  };

  return (
    <Stack
      spacing={2}
      sx={{ width: "475px", padding: "15px" }}
      direction={"column"}
      component={Card}
    >
      <Box>
        <Typography style={{ font: "normal normal 600 16px/19px Montserrat" }}>
          IVR Name
        </Typography>
        <Typography
          style={{ font: "normal normal normal 10px/13px Montserrat" }}
        >
          Please give your IVR a name to ensure you can identify it.
        </Typography>
      </Box>
      <div className="input-container">
        <input
          type="text"
          className="custom-input"
          placeholder="Eg, Instagram Campaign"
          required
          onChange={handleInputChange}
        />
      </div>
    </Stack>
  );
};

export default Name;
