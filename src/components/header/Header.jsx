import React from 'react'
import './header.css'
import Logo from '../../assets/logo.png'
import styled from "styled-components";
import {FiSettings} from 'react-icons/fi'
const Header = () => {
  return (
   <Container>
       <a>
        <img src={Logo} alt="" width={200} height={100}/>
      </a>
       <Menu>
       <a href="#">Trade</a>
      <a href="#">Mansions</a>
      <a href="#">Earn</a>
      <a href="#">Districts</a>
      <a href="#">Majestic Trust</a>
      <a href="#">Treasure</a>
       </Menu>
       <RightMenu>
       <a href="https://github.com/shammarafzal" className='btn' target='_blank'>Etherium</a>
        <a href="https://dribbble.com/alien_pixels" className='btn btn-primary' target='_blank'>Connect Wallet</a>
        <FiSettings size={35} color={'#BE6DF0'}/>
        </RightMenu>
       </Container>
  )
}

export default Header


const Container = styled.div`
  min-height: 120px;

  display: flex;
  align-items: center;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  background: black;
  color: white
`;
const Menu = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: center;
  a {
    font-weight: 500;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: no-wrap;
    color: white;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 500;
    text-transform: uppercase;
    margin-right: 10px;
    flex-wrap: no-wrap;
    background: #BE6DF0;
    padding: 10px;
    border-radius: 5px;
    color: white
  }
`;
// const CustomMenu = styled(MenuIcon)``;
