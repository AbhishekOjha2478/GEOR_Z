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
        <TextMessageBox
          dangerouslySetInnerHTML={{
            __html: message.replace(/\n/g, "<br />"),
          }}
        />
      </StyledQueryBox>
    </>
  );
}
