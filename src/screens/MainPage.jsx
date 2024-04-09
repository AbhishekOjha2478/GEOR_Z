import React, { useEffect, useRef } from "react";
import LoggedInNavbar from "../components/LoggedInNavbar";
import { useState } from "react";
import logo from '../images/ai_logo.jpg'
import {
  FlexContainer,
  HeadingContainer,
  ImageContainer,
  StyledHeading,
  StyledSubheading,
  StyledMessageBox,
} from "../style/Styled_components";
import Footer from "../components/Footer";
import QueryBox from "../components/QueryBox";
import ResponseBox from "../components/ResponseBox";
export default function MainPage() {
  const [chatArrayData, setChatArrayData] = useState([]);
  const messageRef = useRef(null);
  useEffect(() => {
    if (messageRef.current) {
      messageRef.current.lastChild.scrollIntoView({ behavior: 'smooth' });
    }
  }, [chatArrayData]);
  
  return (
    <>
      <LoggedInNavbar></LoggedInNavbar>
      {chatArrayData.length === 0 ? (
        <FlexContainer>
          <ImageContainer><img src={logo} style={{objectFit:'cover', width:'140px', borderRadius: '50%'}}/></ImageContainer>
          <HeadingContainer>
            <StyledHeading>Ask me anything...</StyledHeading>
            <StyledSubheading>
              Tap that mic button and fire your questions!
            </StyledSubheading>
          </HeadingContainer>
        </FlexContainer>
      ) : (
        <StyledMessageBox id="messageBox" ref={messageRef}>
          {
            chatArrayData.map((element, ind)=>{
              return(
                element.type === "user"
                ?
                <QueryBox key={ind} message={element.message}></QueryBox>
                :
                <ResponseBox key={ind} message={element.message}></ResponseBox>
              )
            })
          }
        </StyledMessageBox>
      )}
      <Footer updateChatArray={setChatArrayData}></Footer>
    </>
  );
}
