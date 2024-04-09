import React from 'react'
import LoginIcon from '@mui/icons-material/Login';
import { StyledNavbar, LogoTextContainer } from '../style/Styled_components'
export default function Navbar() {
  return (
    <>
    <StyledNavbar>
        <LogoTextContainer>GEOR_Z</LogoTextContainer>
        <LoginIcon htmlColor= "white" fontSize='medium'/>
    </StyledNavbar>    
    </>
  )
}
