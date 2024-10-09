import { Stack, Typography } from "@mui/material";
import React from "react";
import "./App.css";
import MenuDesign from "./components/menu-design";
import Message from "./components/message";
import Name from "./components/name";

import { CloseIconIllustration } from "./components/styles";
import View from "./components/view";
import { InteractiveVoiceRecording, MenuOption } from "./types";

function App() {
  const [recording, setRecording] =
    React.useState<InteractiveVoiceRecording | null>(null);
  const [name, setName] = React.useState("");
  const [files, setFiles] = React.useState<File[]>([]);
  const [options, setOptions] = React.useState<MenuOption[]>([
    { id: 1, label: "", number: [] },
  ] as MenuOption[]);

  // Functions
  const handleNameChange = (newName: string) => {
    setName(newName);
  };

  const handleFileChange = (files: File[]) => {
    setFiles(files);
  };

  React.useEffect(() => {
    if (!files?.length) {
      setRecording(null);
    } else {
      setRecording({
        name,
        options,
      });
    }
  }, [files, name, options]);

  return (
    <div className="App">
      <div className="title-block">
        <Typography
          sx={{
            color: "#ffffff",
            font: "normal normal bold 20px/24px Montserrat",
          }}
        >
          {"INTERACTIVE VOICE RECORDING (IVR)"}
        </Typography>
        <CloseIconIllustration />
      </div>
      <div className="container">
        <div className="design-container">
          <Stack direction="column" spacing={2}>
            <Name onNameChange={handleNameChange} />
            <Message files={files} onChange={handleFileChange} />
            <MenuDesign options={options} setOptions={setOptions} />
          </Stack>
        </div>
        <div className="view-container">
          <View
            recording={recording}
            name={name}
            files={files}
            options={options}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
