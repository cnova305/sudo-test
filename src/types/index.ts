export type MenuOption = {
  id: number;
  label: string;
  number: string[];
};

export type InteractiveVoiceRecording = {
  name: string;
  options: MenuOption[];
};
