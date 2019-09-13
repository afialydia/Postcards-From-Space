import React from "react";
import "./App.css";
import Header from "./Components/Header";
import ApiInfo from "./Components/APIcards/ApiInfo";
import styled from "styled-components";

const AppStyling = styled.div`
    background-image: linear-gradient(to bottom right,rgb(48,57,125),rgb(208,136,10));

background-size: cover;
color: rgb(253,255,152);
text-align:center;
padding-bottom: 3%;
width:80%;
height: 70vh;
display: flex;
flex-direction: column;
margin: 10vh auto;
border-radius: 12px;
border: 3px solid rgb(252,169,15)
`;

function App() {
  return (
    <AppStyling>

      <Header />
      <ApiInfo />
      
    </AppStyling>
  );
}

export default App;
