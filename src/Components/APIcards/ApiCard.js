import React from "react";
import styled from"styled-components";

const SpaceImg = styled.img`
 width: 70%;
 height: auto;
 margin: 2% auto;
 align-self: center;
 border-radius: 15px;
 @media (max-width: 800px) {
width: 90%;}
 `;

const SpaceContainer = styled.div`

display:flex;
flex-direction: column;
max-width:1250px;
width:80%;
height:auto;
margin: auto;
align-self: center;
color: rgb(46,31,124);
background: rgb(217,207,206, 0.3);
/* border: 2px solid rgb(252,169,15); */
border-radius: 12px;
background-color: transparent;
  border: 1px solid #f1f1f1;
  perspective: 1000px;
  :hover{transform: rotateY(180deg);}

`;


const SpacedContainer = styled.div`
/* background: rgb(252,169,15); */
/* display:flex;
width:100%;
color:rgb(46,31,124);
flex-direction: column;  */
position: relative;
width: 100%;
height: 100%;
text-align: center;
transition: transform 1s;
transform-style: preserve-3d;

:hover{transform: rotateY(180deg);}`


const SpaceDiv = styled.div`
width:100%;
margin: 0 auto;
display: flex;
flex-direction:column;
position: absolute;
  height: 100%;
  backface-visibility: hidden;
  /* color: white; */
  transform: rotateY(180deg);
padding-top:5%;

`;

const SpaceDiv1 = styled.div`
width:100%;
margin: 0 auto;
display: flex;
flex-direction:column;
position: absolute;
height: 100%;
backface-visibility: hidden;


`;

const Para = styled.p`
width:60%;
text-align: justify;
margin: 3% auto;
transform: rotateY(180deg);
@media (max-width: 800px) {
width: 80%;}
`;

const Date= styled.h2`
margin: 2% auto;
transform: rotateY(180deg);
` 


const Title =styled.h3`
margin: 0 auto;
width:70%;
transform: rotateY(180deg);

/* border: 3px solid green; */
`;


 const ApiCard= props =>{

    return(
        <SpaceContainer key={props.index}>
           <SpacedContainer key={props.index}>
             
        
                <SpaceDiv>
                    <Date>{props.date}</Date>    
                    <Title>{props.title}</Title> 
                    <Para>{props.explanation}</Para>
                </SpaceDiv>   
                <SpaceDiv1>
                    <SpaceImg src={props.url} alt='galaxy'/>

                </SpaceDiv1>
            </SpacedContainer>

        </SpaceContainer>
    )
}

export default ApiCard;