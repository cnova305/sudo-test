import { Box, Stack, Typography } from "@mui/material";
import { MenuOption } from "../types";
import MenuOptions from "./menu-options";

const MenuDesign = ({
  options,
  setOptions,
}: {
  options: MenuOption[];
  setOptions: (options: MenuOption[]) => void;
}) => {
  return (
    <Stack direction="column" spacing={2}>
      <Box>
        <Typography style={{ font: "normal normal 600 16px/19px Montserrat" }}>
          Menu Design
        </Typography>
        <Box sx={{ p: 0.5 }} />
        <Typography
          style={{
            font: "normal normal normal 10px/13px Montserrat",
          }}
        >
          {
            "Let's design your menu options! Here, you can specify what options the caller will have"
          }
          <br />
          {
            "caller will have to choose from, and where each menu option will lead."
          }
        </Typography>
      </Box>

      <MenuOptions options={options} setOptions={setOptions} />
    </Stack>
  );
};

export default MenuDesign;
