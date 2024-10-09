import "../App.css";

import { Box, Card, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { IoAddCircle, IoChevronDown, IoChevronUp } from "react-icons/io5";
import { MenuOption } from "../types";
import {
  AddIconIllustration,
  CloseIconIllustration,
  DeleteIconIllustration,
} from "./styles";

const MenuOptionCard = ({
  option,
  options,
  setOptions,
}: {
  option: MenuOption;
  options: MenuOption[];
  setOptions: (options: MenuOption[]) => void;
}) => {
  const [viewOptions, setViewOptions] = useState(true);
  const [newNumber, setNewNumber] = useState("");

  const [label, setLabel] = useState(option.label);

  const handleDeleteOption = () => {
    const updatedOptions = options.filter((opt) => opt.id !== option.id);
    setOptions(updatedOptions);
  };

  const handleAddNumber = (option: MenuOption, newNumber: string) => {
    if (newNumber.trim()) {
      const updatedOption: MenuOption = {
        ...option,
        number: [...option.number, newNumber],
      };

      const updatedOptions = options.map((opt) =>
        opt.id === option.id ? updatedOption : opt
      );

      setOptions(updatedOptions);
      setNewNumber("");
    }
  };

  const handleDeleteNumber = (numberToDelete: string) => {
    const updatedOption: MenuOption = {
      ...option,
      number: option.number.filter((num) => num !== numberToDelete),
    };

    const updatedOptions = options.map((opt) =>
      opt.id === option.id ? updatedOption : opt
    );

    setOptions(updatedOptions);
  };

  const handleLabelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLabel(e.target.value);
  };

  const handleLabelBlur = () => {
    const updatedOption: MenuOption = {
      ...option,
      label,
    };

    const updatedOptions = options.map((opt) =>
      opt.id === option.id ? updatedOption : opt
    );

    setOptions(updatedOptions);
  };

  return (
    <Stack
      sx={{ width: "475px", padding: "15px" }}
      direction={"column"}
      component={Card}
    >
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Typography style={{ font: " normal normal 600 16px/19px Montserrat" }}>
          Menu Option {option.id}
        </Typography>
        <Box onClick={() => setViewOptions(!viewOptions)}>
          {viewOptions ? <IoChevronUp /> : <IoChevronDown />}
        </Box>
      </Stack>
      {viewOptions && (
        <>
          <label style={{ font: "normal normal normal 11px/14px Montserrat" }}>
            Label
          </label>
          <Box sx={{ p: 0.5 }} />
          <div className="input-container">
            <input
              type="text"
              className="custom-input"
              placeholder="This is for you to identify the menu option. Eg, Sales Menu"
              value={label}
              onChange={handleLabelChange}
              onBlur={handleLabelBlur}
              required
            />
          </div>
          <Box sx={{ p: 0.5 }} />
          <Stack direction={"column"} spacing={2}>
            <Typography
              style={{ font: "normal normal 600 12px/15px Montserrat" }}
            >
              Target Numbers
            </Typography>
            <Typography
              style={{ font: "normal normal normal 11px/14px Montserrat" }}
            >
              What number should this menu option ring to?
            </Typography>

            {option.number.map((number, index) => (
              <Stack
                key={index}
                direction={"row"}
                alignItems="center"
                className="number-stack"
                sx={{ width: "100%" }}
              >
                <div className="number-container">
                  <AddIconIllustration />
                  <span>{number}</span>
                </div>
                <div className="close-icon-container">
                  <CloseIconIllustration
                    onClick={() => handleDeleteNumber(number)}
                  />
                </div>
              </Stack>
            ))}
            {option.number.length < 9 && (
              <>
                <div className="input-container">
                  <AddIconIllustration />
                  <input
                    type="text"
                    className="custom-input"
                    placeholder="Eg, 1234567890"
                    value={newNumber}
                    onChange={(e) => setNewNumber(e.target.value)}
                    required
                  />
                </div>

                <Stack
                  direction="row"
                  spacing={1}
                  alignItems="center"
                  style={{
                    cursor: "pointer",
                  }}
                  onClick={() => handleAddNumber(option, newNumber)}
                >
                  <IoAddCircle size={30} color="#307CD8" />
                  <Typography
                    style={{
                      font: "normal normal 600 11px/14px Montserrat",
                      color: "#307CD8",
                    }}
                  >
                    ADD TARGET NUMBERS
                  </Typography>
                </Stack>
              </>
            )}
            {options.length !== 1 && (
              <Stack
                direction="row"
                justifyContent="flex-end"
                onClick={handleDeleteOption}
              >
                <DeleteIconIllustration />
              </Stack>
            )}
          </Stack>
        </>
      )}
    </Stack>
  );
};

export default MenuOptionCard;
