import { Box, Card, Stack, Typography } from "@mui/material";
import React from "react";
import { FileRejection, useDropzone } from "react-dropzone";
import { ACCEPTABLE_FILES, MAX_FILE_SIZE } from "../constants";
import { DeleteIconIllustration, DropzoneUploadIllustration } from "./styles";

const SelectFiles = ({
  files,
  onChange,
}: {
  files: File[];
  onChange: (files: File[]) => void;
}) => {
  const [errorText, setErrorText] = React.useState<string>();

  const onDrop = React.useCallback(
    (acceptedFiles: File[]) => {
      if (acceptedFiles.length === 0) return;

      const oversizedFiles = acceptedFiles.filter(
        (file) => file.size > MAX_FILE_SIZE
      );

      if (oversizedFiles.length > 0) {
        setErrorText("Oops, some files are too large. Max size is 5MB.");
        return;
      }

      setErrorText(undefined); // Clear error if everything is fine
      onChange(acceptedFiles);
    },
    [onChange]
  );

  const onDropRejected = React.useCallback(
    (fileRejections: FileRejection[]) => {
      const errors = fileRejections.map((rejection) => {
        if (rejection.file.size > MAX_FILE_SIZE) {
          return "Oops, files must be 5MB and below.";
        }
        return (
          rejection.errors[0]?.message ||
          "Oops, only one audio file is accepted."
        );
      });

      setErrorText("Oops, only audio file types are accepted.");
    },
    []
  );

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    onDrop,
    onDropRejected,
    accept: ACCEPTABLE_FILES,
    maxSize: MAX_FILE_SIZE,
    multiple: false,
  });

  return (
    <Stack
      spacing={2}
      sx={{ width: "475px", padding: "15px" }}
      direction={"column"}
      component={Card}
    >
      <Box>
        <Typography style={{ font: "normal normal 600 16px/19px Montserrat" }}>
          Greeting Message
        </Typography>
        <Typography
          style={{ font: "normal normal normal 10px/13px Montserrat" }}
        >
          The greeting message is an intro text to explain or introduce the
          steps to follow.
        </Typography>
      </Box>
      {errorText && (
        <Box mb={2}>
          <Typography color="error">{errorText}</Typography>
        </Box>
      )}
      {files.length > 0 ? (
        <div className="number-container">
          <Stack
            sx={{ px: 1, width: "100%" }}
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography
              sx={{ font: "normal normal bold 13px/16px Montserrat" }}
            >
              {files[0].name}
            </Typography>{" "}
            <Box onClick={() => onChange([])}>
              <DeleteIconIllustration />
            </Box>
          </Stack>
        </div>
      ) : (
        <Stack
          {...getRootProps()}
          sx={{
            p: 4,
            borderColor: isDragReject
              ? "error.main"
              : isDragAccept
              ? "success.main"
              : "grey.500",
            backgroundColor: isDragActive ? "grey.100" : "white",
            textAlign: "center",
          }}
        >
          <input {...getInputProps()} />
          {isDragActive ? (
            isDragReject ? (
              <>
                <span>Audio files only</span>
              </>
            ) : (
              <span>Drop the file(s) here ...</span>
            )
          ) : (
            <>
              <DropzoneUploadIllustration />
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  color: "#307CD8",
                  gap: "2px",
                }}
              >
                <span
                  style={{ font: "normal normal bold 12px/15px Montserrat" }}
                >
                  {"Drag & drop "}
                </span>

                <span
                  style={{ font: "normal normal normal 12px/15px Montserrat" }}
                >
                  files to upload, or
                </span>
                <span>{"  "}</span>
                <span
                  style={{ font: "normal normal bold 12px/15px Montserrat" }}
                >
                  click to select
                </span>
              </div>
            </>
          )}
        </Stack>
      )}
    </Stack>
  );
};

export default SelectFiles;
