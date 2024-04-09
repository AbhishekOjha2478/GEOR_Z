import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { StyledNavbar, LogoTextContainer } from '../style/Styled_components'
export default function Navbar() {
  return (
    <>
    <StyledNavbar>
        <LogoTextContainer>GEOR_Z</LogoTextContainer>
        <AccountCircleIcon htmlColor= "white" fontSize='medium'/>
    </StyledNavbar>    
    </>
  )
}
