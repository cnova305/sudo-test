import { Card, Stack, Typography } from "@mui/material";
import { IoAddCircle } from "react-icons/io5";
import { MenuOption } from "../types";
import MenuOptionCard from "./menu-option";

const AddMenuOption = ({
  options,
  setOptions,
}: {
  options: MenuOption[];
  setOptions: (options: MenuOption[]) => void;
}) => {
  const handleAddOption = () => {
    setOptions([...options, { id: options.length + 1, label: "", number: [] }]);
  };
  return (
    <Stack
      sx={{ width: "475px", padding: "15px" }}
      direction={"row"}
      alignItems="center"
      component={Card}
      spacing={1}
      onClick={handleAddOption}
      style={{
        cursor: "pointer",
      }}
    >
      <IoAddCircle size={30} color="#307CD8" />
      <Typography
        style={{
          font: "normal normal 600 16px/19px Montserrat",
          color: "#307CD8",
        }}
      >
        Add Option
      </Typography>
    </Stack>
  );
};

const MenuOptions = ({
  options,
  setOptions,
}: {
  options: MenuOption[];
  setOptions: (options: MenuOption[]) => void;
}) => {
  return (
    <Stack direction="column" spacing={2}>
      {options.map((option) => (
        <MenuOptionCard
          key={option.label}
          option={option}
          options={options}
          setOptions={setOptions}
        />
      ))}
      <AddMenuOption options={options} setOptions={setOptions} />
    </Stack>
  );
};

export default MenuOptions;
