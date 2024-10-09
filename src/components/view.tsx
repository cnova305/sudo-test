import { Stack } from "@mui/material";
import { InteractiveVoiceRecording, MenuOption } from "../types";
import {
  CallIconIllustration,
  DialPadIconIllustration,
  Hline,
  VLine,
} from "./styles";
import ViewCard from "./view-card";

const View = ({
  recording,
  name,
  files,
  options,
}: {
  recording: InteractiveVoiceRecording | null;
  name: string;
  files: File[];
  options: MenuOption[];
}) => {
  let multiple = false;
  if (recording && recording?.options.length > 1) {
    multiple = true;
  }

  const length = recording?.options.length;
  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{ width: "100%", height: "100%" }}
    >
      {recording && (
        <Stack direction="column" justifyContent="center" alignItems="center">
          <ViewCard
            icon={<CallIconIllustration />}
            text="Greeting message after initial call"
          />
          <VLine />
          {multiple && <Hline length={length || 0} />}
          <Stack
            direction="row"
            justifyContent="space-around"
            sx={{
              width: `${length ? length * 200 : 120}px`,
            }}
          >
            {recording.options.map((option) => (
              <>
                {option.label && (
                  <ViewCard
                    key={option.id}
                    icon={<DialPadIconIllustration />}
                    menuOption={option}
                    multiple={multiple}
                  />
                )}
              </>
            ))}
          </Stack>
        </Stack>
      )}
    </Stack>
  );
};

export default View;
