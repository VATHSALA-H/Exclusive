import React from 'react'
import styled from 'styled-components';

export default function Delivery() {
  return (
    <div>
      <Session>
        <Container>
            <Top>
                <Iconimg src={require("../assests/images/icon-delivery.png")} alt='icon'/>
            </Top>
            <Bottom>
                <Boldtext>FREE AND FAST DELIVERY</Boldtext>
                <LiteText>Free delivery for all orders over $140</LiteText>
            </Bottom>
        </Container>
        <Container>
            <Top>
                <Iconimg src={require("../assests/images/deliver headset.png")} alt='icon'/>
            </Top>
            <Bottom>
                <Boldtext>24/7 CUSTOMER SERVICE</Boldtext>
                <LiteText>Friendly 24/7 customer support</LiteText>
            </Bottom>
        </Container>
        <Container>
            <Top>
                <Iconimg src={require("../assests/images/deliversecure.png")} alt='icon'/>
            </Top>
            <Bottom>
                <Boldtext>MONEY BACK GUARANTEE</Boldtext>
                <LiteText>We return money within 30 days</LiteText>
            </Bottom>
        </Container>
      </Session>
    </div>
  )
}
const Session = styled.div`
display:flex;
gap:200px;
margin: 50px 0px;
align-items: center;
justify-content: center;
font-family: poppins;

@media screen and (min-width: 1080px) and (max-width: 1280px) {
    gap:100px;
    padding: 0px 20px;
}

@media screen and (min-width: 980px) and (max-width: 1080px) {
 gap:100px;
 padding: 0px 20px;
}

@media screen and (min-width: 768px) and (max-width: 980px) {
    gap:70px;
    padding: 0px 20px;
}

@media screen and (min-width: 640px) and (max-width: 768px) {
    gap:30px;
    flex-wrap: wrap;
    padding: 0px 20px;
}

@media screen and (min-width: 540px) and (max-width: 640px) {
 gap:30px;
 flex-wrap: wrap;
 padding: 0px 20px;
}
@media screen and (min-width: 480px) and (max-width: 540px) {
 flex-wrap: wrap;
 gap:40px;
 padding: 0px 20px;
}
@media screen and (min-width: 360px) and (max-width: 480px) {
    flex-wrap: wrap; 
    gap:50px;
    padding: 0px 20px;
}
`;

const Container = styled.div`
display: flex;
flex-direction:column;
align-items: center;
text-align: center;
`;

const Top = styled.div`
background-color:black;
border: 10px solid #bebebe;
border-radius: 50%;
width: 0px;
height: 0px;
padding: 30px;
display: flex;
text-align: center;
align-items: center;
justify-content: center;
`;

const Iconimg = styled.img`

`;

const Bottom = styled.div``;

const Boldtext = styled.p`
font-size: 20px;
font-weight: 600;
@media screen and (min-width: 1080px) and (max-width: 1280px) {
    font-size: 20px;
}

@media screen and (min-width: 980px) and (max-width: 1080px) {
    font-size: 20px;
}

@media screen and (min-width: 768px) and (max-width: 980px) {
    font-size: 18px;
}

@media screen and (min-width: 640px) and (max-width: 768px) {
    font-size: 17px;
}

@media screen and (min-width: 540px) and (max-width: 640px) {
    font-size: 15px;
}
@media screen and (min-width: 480px) and (max-width: 540px) {
    font-size: 15px;
}
@media screen and (min-width: 360px) and (max-width: 480px) {
   font-size: 15px;
}
`;

const LiteText = styled.p`
font-weight:400;
font-size:14px;

@media screen and (min-width: 640px) and (max-width: 768px) {
  font-size: 13px;
}

@media screen and (min-width: 540px) and (max-width: 640px) {
    font-size: 13px;
}
@media screen and (min-width: 480px) and (max-width: 540px) {
    font-size: 13px;
}
@media screen and (min-width: 360px) and (max-width: 480px) {
   font-size: 13px;
}
`;
