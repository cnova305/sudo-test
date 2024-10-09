import { Card, Stack, Typography } from "@mui/material";
import React from "react";
import { MenuOption } from "../types";
import { SmallCallIconIllustration, VLine } from "./styles";

const ViewCard = ({
  icon,
  text,
  menuOption,
  multiple,
}: {
  icon: React.ReactNode;
  text?: string;
  menuOption?: MenuOption;
  multiple?: boolean;
}) => {
  return (
    <Stack direction="column" alignItems="center">
      {multiple && <VLine />}
      <Stack
        sx={{ width: "120px", padding: "15px" }}
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        component={Card}
      >
        {icon}
        {text && (
          <Typography
            sx={{
              font: "normal normal normal 10px/13px Montserrat",
              textAlign: "center",
            }}
          >
            {text}
          </Typography>
        )}

        {menuOption && (
          <Stack direction="column">
            <Typography
              sx={{
                font: "normal normal bold 13px/16px Montserrat",
                textAlign: "center",
              }}
            >
              {menuOption.label}
            </Typography>
            <Typography
              sx={{
                font: "normal normal normal 10px/13px Montserrat",
                textAlign: "center",
              }}
            >
              & target numbers
            </Typography>
          </Stack>
        )}
      </Stack>
      <Stack direction="column" spacing={1}>
        {menuOption?.number.map((num) => (
          <Stack
            sx={{
              padding: "5px",
              background: "rgba(48, 124, 216, 0.5) 0% 0% no-repeat padding-box",
            }}
            spacing={1}
            direction="row"
            justifyContent="center"
            alignItems="center"
            component={Card}
          >
            <SmallCallIconIllustration />
            <Typography
              sx={{
                font: "normal normal normal 10px/13px Montserrat",
                textAlign: "center",
                color: "#0B1C34",
              }}
            >
              {num}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default ViewCard;
