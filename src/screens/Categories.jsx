
import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import categoriesData from '../data/Category.json';

export default function Categories({onCategorySelect}) {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        setCategories(categoriesData);
    }, []);

    const handleCategoryClick = (category)=>{
        onCategorySelect(category);
    }

    return (
        <div>
            <Session>
                <Category>
                    <Catbar></Catbar>
                    <CategoryName>Categories</CategoryName>
                </Category>
                <Browse>Browse By Category</Browse>
                <ItemContainer>
                    {categories.map((category) => (
                        <Item1 key={category.id} onClick={()=>handleCategoryClick(category)}>
                            <Phoneimg src={require(`../assests/images/${category.image}`)} alt={category.name} />
                            <Phonetext>{category.name}</Phonetext>
                        </Item1>
                    ))}
                </ItemContainer>
            </Session>
        </div>
    )
}
const Session = styled.div`
font-family: poppins;
margin: 40px 180px 40px 180px;
@media screen and (min-width: 360px) and (max-width: 480px) {
  margin: 20px 20px;
}
@media screen and (min-width: 480px) and (max-width: 540px) {
  margin: 20px 20px;
}
@media screen and (min-width: 540px) and (max-width: 640px) {
  margin: 20px 20px;
}
@media screen and (min-width: 640px) and (max-width: 768px) {
  margin: 20px 20px;
}
@media screen and (min-width: 768px) and (max-width: 980px) {
  margin: 20px 20px;
}
@media screen and (min-width: 980px) and (max-width: 1080px) {
  margin: 20px  20px;
}
@media screen and (min-width:1080px) and (max-width: 1280px) {
  margin: 20px  40px;
}
@media screen and (min-width:1280px) and (max-width: 1440px) {
  margin: 20px  40px;
}
`;

const Category = styled.div`
display:flex;
align-items: center;
@media screen and (min-width: 360px) and (max-width: 768px) {
  margin-left: 30px; 
}
@media screen and (min-width:768px) and (max-width: 1080px) {
 margin-left:40px;
}
@media screen and (min-width:1080px) and (max-width: 1440px) {
  margin-left: 30px;
}

`;

const Catbar = styled.div`
background-color: #DB4444;
border: 1px solid red;
border-radius: 5px;
width: 15px;
height: 30px;
`;

const CategoryName = styled.label`
margin-left:10px;
font-size:16px;
font-weight: 500;
color:#DB4444;

`;

const Browse = styled.h3`
font-size:36px;
font-weight:600;
line-height: 70px;
@media screen and (min-width: 360px) and (max-width: 480px) {
   line-height: 50px;
   font-size: 20px;
   margin-left: 30px; 
}
@media screen and (min-width: 480px) and (max-width: 540px) {
    line-height: 50px;
   font-size: 20px;
   margin-left: 30px; 
}
@media screen and (min-width: 540px) and (max-width: 640px) {
    line-height: 50px;
   font-size: 20px;
   margin-left: 30px; 
}
@media screen and (min-width: 640px) and (max-width: 768px) {
    line-height: 50px;
   font-size: 25px;
   margin-left: 30px; 
}
@media screen and (min-width:768px) and (max-width: 980px) {
    line-height: 50px;
   font-size: 25px;
   width: 89%;
  margin: 0px auto;
}
@media screen and (min-width:980px) and (max-width: 1080px) {
    line-height: 60px;
    font-size:30px;
    margin-left: 40px;
}
@media screen and (min-width:1080px) and (max-width: 1280px) {
  margin-left: 30px;
}
@media screen and (min-width:1280px) and (max-width: 1440px) {
  margin-left: 30px;
}
`;

const ItemContainer = styled.div`
display:flex;
gap:60px;
@media screen and (min-width: 360px) and (max-width: 540px) {
  flex-wrap: wrap;
  justify-content: space-around;
  gap:20px;
  margin-left: 30px;
}
@media screen and (min-width: 540px) and (max-width: 640px) {
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-left: 30px;
  gap:20px;
  
}
@media screen and (min-width: 640px) and (max-width: 768px) {
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-left: 0px auto;
  width: 89%;
  gap:20px;
  
}
@media screen and (min-width: 768px) and (max-width: 980px) {
  flex-wrap: wrap;
  gap:30px;
   width: 89%;
   justify-content: space-evenly;
  margin: 0px auto 0;
}
@media screen and (min-width: 980px) and (max-width: 1080px) {
  flex-wrap: wrap;
   width:85%;
   justify-content: space-between;
  margin: 0px auto 0;
}
@media screen and (min-width:1080px) and (max-width: 1280px) {
  flex-wrap: wrap;
  margin-left: 30px;
  width: 80%;
   justify-content: space-evenly;
}
@media screen and (min-width:1280px) and (max-width: 1440px) {
  flex-wrap: wrap;
  margin-left: 45px;
   
  margin-right: 20px;
}
`;

const Item1 = styled.div`
  border: 1px solid black;
  cursor: pointer;
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0px;
  background-color: ${(props) => (props.selected ? 'black' : 'transparent')};
  color: ${(props) => (props.selected ? 'white' : 'black')};
  transition: background-color 0.3s, color 0.3s;  // Add transition for smooth color change
`;

const Phoneimg = styled.img`
display: block;

`;

const Phonetext = styled.p`
 font-size:16px;
 text-align: center;
`;