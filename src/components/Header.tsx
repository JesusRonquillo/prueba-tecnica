import React from "react"
import {
  Navigation,
  HeaderNavigation,
  Wrapper,
  WrapperComunication,
} from "../styles/components/Header"
import logo from "../assets/logo.svg"
import telephoneIcon from "../assets/telephone.svg"

export const Header = () => {
  return (
    <HeaderNavigation>
      <Navigation>
        <img src={logo} alt="logo" />
        <Wrapper>
          <span>!Compra por este medio¡</span>
          <WrapperComunication>
            <img src={telephoneIcon} alt="" />
            <span>(01) 411 6001</span>
          </WrapperComunication>
        </Wrapper>
      </Navigation>
    </HeaderNavigation>
  )
}
