import { Stack } from "@mui/material";
import React from "react";
import "./App.css";
import MenuDesign from "./components/menu-design";
import Message from "./components/message";
import Name from "./components/name";

function App() {
  // States
  const [files, setFiles] = React.useState<File[]>([]);

  // Functions

  const handleFileChange = (files: File[]) => {
    setFiles(files);
  };
  return (
    <div className="App">
      <div className="container">
        <Stack direction="column" spacing={2}>
          <Name />
          <Message files={files} onChange={handleFileChange} />
          <MenuDesign />
        </Stack>
      </div>
    </div>
  );
}

export default App;
