import styled from "@emotion/styled";
import { ReactComponent as AddIllustration } from "../assets/add-icon.svg";
import { ReactComponent as CloseIllustration } from "../assets/close-icon.svg";
import { ReactComponent as UploadIllustration } from "../assets/cloud-upload.svg";
import { ReactComponent as DeleteIllustration } from "../assets/delete-icon.svg";

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
