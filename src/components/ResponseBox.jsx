import React, { useEffect } from "react";
import { useSpeechSynthesis } from "react-speech-kit";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import ReactMarkdown from 'react-markdown';
import { useState } from "react";
import logo from '../images/ai_logo.jpg';
import {
  AiDpContainer,
  StyledResponseBox,
  StyledSpeakerButton,
  TextMessageBox,
} from "../style/Styled_components";

export default function ResponseBox({ message }) {
  const { speak, speaking, cancel } = useSpeechSynthesis();
  const [speakerColor, setSpeakerColor] = useState("#ffffff99")

  useEffect(()=>{
    speaking?
    setSpeakerColor("white")
    :
    setSpeakerColor("#ffffff99")
  },
  [speaking]
);
  return (
    <>
      <StyledResponseBox>
        <StyledSpeakerButton
          onClick={() => {
            speaking ?
              cancel() :
              speak({
                text: message,
              });
          }}
        >
          <VolumeUpIcon htmlColor={speakerColor}></VolumeUpIcon>
        </StyledSpeakerButton>
        <TextMessageBox>
          <ReactMarkdown>{message}</ReactMarkdown>
        </TextMessageBox>
        <AiDpContainer><img src={logo} style={{objectFit:'cover', width:'46px', borderRadius: '50%'}}></img></AiDpContainer>
      </StyledResponseBox>
    </>
  );
}
