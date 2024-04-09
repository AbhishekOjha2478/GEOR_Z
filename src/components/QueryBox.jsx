import React from "react";
import {
  StyledQueryBox,
  TextMessageBox,
  UserDpContainer,
} from "../style/Styled_components";

export default function QueryBox({ message }) {
  return (
    <>      
        <StyledQueryBox>
          <UserDpContainer></UserDpContainer>
          <TextMessageBox>{message}</TextMessageBox>
        </StyledQueryBox>
    </>
  );
}
