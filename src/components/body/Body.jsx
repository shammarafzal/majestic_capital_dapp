import React from 'react'
import styled from "styled-components";

const Body = () => {
  return (
    <Container>
        <div>
          <a href="">Swap</a>
          <a href="">Limit</a>
        </div>
    </Container>
  )
}

export default Body

const Container = styled.div`
  height: 100vh;
  div{
    border-radius: 2rem;
    border: 1px solid green;
    a{
      color: white;
      font-weight: bold;
      font-size: 20px;
    }
  }
`;