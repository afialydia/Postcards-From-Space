import React from "react";
import styled from "styled-components";

const Intro = styled.h1`
margin: 1.5% 0 0 .5%;
font-family: 'Press Start 2P', cursive;


`;

export default function Header(){
    return(
        
        <div>
         <Intro> Greetings, From Space...</Intro>   
        </div>


    );
}