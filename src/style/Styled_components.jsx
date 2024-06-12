import styled from "styled-components";
const StyledNavbar = styled.div`
  display: flex;
  justify-content: space-between;
  position: sticky;
  top: 0px;
  align-items: center;
  background: linear-gradient(90.18deg, #190039 0%, #bb54ff 100%);
  color: white;
  padding: 0 0.7rem;
  height: 56px;
  box-shadow: 0px 4px 4px 0px #00000040;
`;
const LogoTextContainer = styled.div`
  font-size: 20px;
`;

const FlexContainer = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const StyledSpan = styled.span`
  font-size: 35px;
  color: #3300ff;
  font-weight: 700;
  line-height: 44.4px;
  text-align: center;
  font-family: IM FELL English SC;
`;

const ImageContainer = styled.div`
  height: 140px;
  width: 140px;
  border-radius: 50%;
  border: 2px solid #3300ff;
`;
const HeadingContainer = styled.div`
  text-align: center;
  flex-direction: column;
  margin-bottom: 100px;
`;
const StyledHeading = styled.h1`
  font-family: Inika;
  font-size: 30px;
  font-weight: 700;
  line-height: 39.09px;
  text-align: center;
  color: white;
`;
const StyledSubheading = styled.h1`
  font-family: Inika;
  font-size: 29px;
  font-weight: 700;
  line-height: 32.57px;
  text-align: center;
`;
const ButtonContainer = styled.div`
  display: flex;
`;
const ButtonText = styled.div`
  width: 253px;
  height: 82px;

  background: #00000082;
  border-radius: 54px 0px 0px 54px;
  opacity: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyledButtonText = styled.p`
  font-family: Inika;
  color: White;
  font-family: Inter;
  font-size: 24px;
  font-weight: 700;
`;
const StyledButton = styled.button`
  width: 69px;
  height: 82px;
  border-radius: 0px 53px 53px 0px;
  background: black;
  font-size: 71px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const FooterContainer = styled.div`
  width: 100%;
  min-height: 100px;
  position: fixed;
  bottom: 0px;
  background: #00000087;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const StyledBulletIcon = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin: 0 75px;
  padding: 20px;
  background: #00000080;
  border: none;
`;
const StyledMic = styled.button`
  width: 60px;
  height: 61px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 46px;
  padding: 5px;
  background: #a80032;
  cursor: pointer;
  border: none;
`;
const StyledInput = styled.textarea`
  width: 88%;
  height: 25px;
  border: none;
  outline: none;
  font-family: Inika;
  font-size: 18px;
  font-weight: 400;
  padding: 6px 20px;
  background-color: #6b7a7a00;
  resize: none;
  overflow-y: hidden;
`;
const StyledQues = styled.div`
  width: 60%;
  min-height: 50%;
  border-radius: 46px;
  background: #d9d9d9d1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  margin: 10px;
`;
const StyledSearchButton = styled.button`
  border: none;
  cursor: pointer;
  background-color: #6b7a7a00;
`;
const StyledActiveMic = styled.button`
  width: 60px;
  height: 61px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  padding: 5px;
  background: #a80032;
  cursor: pointer;
  border: 2px solid white;
`;

const StyledMessageBox = styled.div`
height: 78.5%;
overflow-y: auto;
`;

const StyledQueryBox = styled.div`
  display: flex;
  width: 60%;
  margin: 10px;
`;
const UserDpContainer = styled.div`
  height: 46px;
  width: 46px;
  min-width: 46px;
  max-width: 46px;
  border-radius: 50%;
  background: white;
  margin: 0 10px;
`;

const AiDpContainer = styled.div`
  height: 46px;
  width: 46px;
  min-width: 46px;
  max-width: 46px;
  border-radius: 50%;
  background: white;
  margin: 0 10px;
  border: 2px solid #0068ff !important;  
`;
const TextMessageBox = styled.div`
  border-radius: 22px;
  background: #00000070;
  word-wrap: break-word;
  color: white;
  font-size: 18px;
  padding: 15px 25px;
  line-height: 23px;
  > p {
    margin-block-start: 0;
    margin-block-end: 0
  }
`;

const StyledResponseBox = styled.div`
  display: flex;
  width: 60%;
  margin: 10px;
  justify-content: flex-end;
  float: right;
`;
const StyledSpeakerButton = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 20px;
  background: #6b7a7a00;
  border: none;
  margin-right: 5px;
`;
export {
  StyledNavbar,
  LogoTextContainer,
  FlexContainer,
  ImageContainer,
  HeadingContainer,
  StyledSpan,
  StyledHeading,
  StyledSubheading,
  ButtonContainer,
  ButtonText,
  StyledButtonText,
  StyledButton,
  FooterContainer,
  StyledBulletIcon,
  StyledMic,
  StyledInput,
  StyledQues,
  StyledSearchButton,
  StyledActiveMic,
  StyledMessageBox,
  StyledQueryBox,
  TextMessageBox,
  UserDpContainer,
  AiDpContainer,
  StyledResponseBox,
  StyledSpeakerButton
};
