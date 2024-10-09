import styled from "@emotion/styled";
import { ReactComponent as AddIllustration } from "../assets/add-icon.svg";
import { ReactComponent as CallIllustration } from "../assets/call-icon.svg";
import { ReactComponent as CloseIllustration } from "../assets/close-icon.svg";
import { ReactComponent as UploadIllustration } from "../assets/cloud-upload.svg";
import { ReactComponent as DeleteIllustration } from "../assets/delete-icon.svg";
import { ReactComponent as DialPadIllustration } from "../assets/dialpad-icon.svg";
import { ReactComponent as HLineIllustration } from "../assets/horizontal-line.svg";
import { ReactComponent as VLineIllustration } from "../assets/vertical-line.svg";

export const DropzoneUploadIllustration = styled(UploadIllustration)`
  && {
    stroke: none;
    width: auto;
    height: 25px;
    padding-bottom: 5px;
  }
`;

export const AddIconIllustration = styled(AddIllustration)`
  && {
    stroke: none;
    width: 30px;
  }
`;

export const DeleteIconIllustration = styled(DeleteIllustration)`
  && {
    stroke: none;
    width: 30px;
  }
`;

export const CloseIconIllustration = styled(CloseIllustration)`
  && {
    stroke: none;
    width: 30px;
  }
`;

export const DialPadIconIllustration = styled(DialPadIllustration)`
  && {
    stroke: none;
    width: 30px;
  }
`;

export const SmallCallIconIllustration = styled(CallIllustration)`
  && {
    stroke: none;
    width: 10px;
  }
`;

export const CallIconIllustration = styled(CallIllustration)`
  && {
    stroke: none;
    width: 30px;
  }
`;

export const VLine = styled(VLineIllustration)`
  && {
    stroke: none;
    height: 50px;
  }
`;

export const Hline = styled(HLineIllustration)<{ length: number }>`
  && {
    stroke: none;
    width: ${({ length }) => length * 100}px;
  }
`;
