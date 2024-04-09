import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import {
  FlexContainer,
  HeadingContainer,
  ImageContainer,
  StyledHeading,
  StyledSpan,
  StyledSubheading,
  ButtonContainer,
  ButtonText,
  StyledButtonText,
  StyledButton,
} from "../style/Styled_components";
export default function LandingPage() {
  const navigate = useNavigate();
  const loadMainPage = () => {
    navigate("/mainpage");
  };
  return (
    <>
      <Navbar></Navbar>
      <FlexContainer>
        <ImageContainer></ImageContainer>
        <HeadingContainer>
          <StyledHeading>
            Hi I am <StyledSpan>Geor_Z</StyledSpan>, your smart friend
          </StyledHeading>
          <StyledSubheading>What’s cookin’...?</StyledSubheading>
        </HeadingContainer>
        <ButtonContainer>
          <ButtonText>
            <StyledButtonText>Get started</StyledButtonText>
          </ButtonText>
          <StyledButton onClick={loadMainPage}>
            <ArrowRightIcon htmlColor="#BB1FFF" fontSize="inherit" />
          </StyledButton>
        </ButtonContainer>
      </FlexContainer>
    </>
  );
}
