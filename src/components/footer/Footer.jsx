import React from 'react'
import Logo from '../../assets/logo.png'
import styled from "styled-components";
import {BsLinkedin, BsTwitter} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
const Footer = () => {
  return (
    <Container>
        <LeftMenu>
        <a>
        <img src={Logo} alt="" width={200} height={100}/>
      </a>
        <p>Sed aliquam neque magna, vel pharetra eros auctor id. Curabitur et erat quis nulla sollicitudin ultrices. Sed molestie ut nunc et vehicula.</p>
        <div className='header__socials'>
        <a href="https://linkedin.com/in/shammarafzal" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com/shammarafzal" target="_blank"><FaGithub /></a>
        <a href="https://twitter.com/shammarafzal" target="_blank"><BsTwitter /></a>
    </div>
        </LeftMenu>
        <CenterMenu>
          <div>
          <h4>Majestic Capital Links</h4>

<a href="#">Trade</a>
<a href="#">Mansions</a>
<a href="#">Earn</a>
<a href="#">Districts</a>
<a href="#">Majestic Trust</a>
<a href="#">Treasure</a>
          </div>
         
          <div>
          <h4>Contact US</h4>

<p>+1 123 400 5467</p>
<p>ammarafzal075@gmail.com</p>
<p>Address goes here</p>

          </div>
        </CenterMenu>
        <RightMenu>
            <h4>Majestic Capital Instagram</h4>
            <a>
        <img src={Logo} alt="" width={100} height={100}/>
      </a>
      <a>
        <img src={Logo} alt="" width={100} height={100}/>
      </a>
      <a>
        <img src={Logo} alt="" width={100} height={100}/>
      </a>
      <a>
        <img src={Logo} alt="" width={100} height={100}/>
      </a>
      <a>
        <img src={Logo} alt="" width={100} height={100}/>
      </a>
      <a>
        <img src={Logo} alt="" width={100} height={100}/>
      </a>
      <a>
        <img src={Logo} alt="" width={100} height={100}/>
      </a>
      <a>
        <img src={Logo} alt="" width={100} height={100}/>
      </a>
        </RightMenu>
    </Container>
  )
}

export default Footer

const Container = styled.div`
  min-height: 250px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  background: black;
  color: white  
`;

const RightMenu = styled.div`
  width: 30%;
  text-align: center;
`;
const LeftMenu = styled.div`

  width: 30%;
  text-align: center;
  div{
    a{
      margin: 10px;
      color: silver
    };
  }
  p{
    font-size: 12px
    text-align: left;
    color: silver;
  }
`;
const CenterMenu = styled.div`
  width: 40%;
  text-align: center;
  display: flex;
  justify-content: space-around;
  h4{
    text-align: left;
  }
  a{
    display: flex;
    color: silver;
    font-size: 14px
  }
  p{
    text-align:left;
    justify-content: left;
    align-items:left;
    color: silver
  }
`;