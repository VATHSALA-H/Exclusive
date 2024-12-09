import React, { useState, useEffect, useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';
import productData from '../data/Product.json';
import { useNavigate } from 'react-router-dom';

export default function ProductDetail() {
  const [product, setProduct] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const { id } = useParams(); 
  const [searchQuery, setSearchQuery] = useState('');
  const productRef = useRef(null);
  const navigate = useNavigate();

  const handleProductClick = (id) => {
    navigate(`/products/${id}`);
  };

  useEffect(() => {
    const selectedProduct = productData.find((product) => product.id === parseInt(id));
    setProduct(selectedProduct);

    const shuffledProducts = shuffleArray([...productData]).slice(0, 4);
    setFilteredProducts(shuffledProducts);
  }, [id]);

  
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; 
    }
    return array;
  };

 
  const handleSearchChange = (query) => {
    setSearchQuery(query);
    const filtered = productData.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
  };


  const scrollToProducts = () => {
    if (productRef.current) {
      productRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Header searchQuery={searchQuery} onSearchChange={handleSearchChange} onSearchSubmit={scrollToProducts} />
      <Detail>
        <Linkpage>
          <Homelink to="/">Home&nbsp;/ </Homelink>  &nbsp;
          <Homelink to="/products">Products&nbsp;/</Homelink>  &nbsp;
          <ProductLink to={`/products/${product.id}`}>{product.name}</ProductLink>
        </Linkpage>
        <ProductDetailContainer>
          <ProductImgContainer>
            <Imageadjust><ProImg src={require(`../assests/images/${product.img}`)} alt={product.name} /></Imageadjust>
          </ProductImgContainer>
          <ProductInfo>
            <ProductName>{product.name}</ProductName>
            <ProRate>
              <ProRatings src={require(`../assests/images/${product.rating}`)} alt={product.name} />
              <ProReviews>{product.rev}</ProReviews>|
              <Stock status={`${product.stock}`}>&nbsp; {product.stock} </Stock>
              <ProLabel></ProLabel>
            </ProRate>
            <ProPrice>${product.cost}</ProPrice>
            <ProDesc>{product.description}</ProDesc>
            <ProLinee></ProLinee>
            <ProColor>Colors:
              {product.color1 && <ColorBox color={product.color1} />}
              {product.color2 && <ColorBox color={product.color2} />}
            </ProColor>
            <ProBox>
              <ProDeliver>
                <ProDeliverIcon src={require("../assests/images/icon-deliveryfree.png")} alt='icon' />
                <DeliverInfo>
                  <Free>Free Delivery</Free>
                  <Enter>Enter your postal code for Delivery Availabilty</Enter>
                </DeliverInfo>
              </ProDeliver>
              <ProLine></ProLine>
              <ProDeliver>
                <ProDeliverIcon src={require("../assests/images/Icon-return.png")} alt='icon' />
                <DeliverInfo>
                  <Free>Return Delivery</Free>
                  <Enterr>Free 30 Days Delivery Returns.<Span>Details</Span></Enterr>
                </DeliverInfo>
              </ProDeliver>
            </ProBox>
          </ProductInfo>
        </ProductDetailContainer>

        <Category>
          <Catbar></Catbar>
          <CategoryName>Related Item</CategoryName>
        </Category>

        <Productmap ref={productRef}>
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductSection key={product.id}>
                <ProductTop onClick={() => handleProductClick(product.id)}>
                  {product.new && <New>New</New>}
                  {product.off && <Off>-{product.offer}%</Off>}
                  <Productselect>
                    <Backg>
                      <Like src={require("../assests/images/eye.png")} alt="like icon" />
                    </Backg>
                    <Backg>
                      <Heart src={require("../assests/images/Vector.png")} alt="eye icon" />
                    </Backg>
                  </Productselect>
                  <ImgContainer>
                    <Productimg
                      src={require(`../assests/images/${product.img}`)}
                      alt={product.name}
                    />
                  </ImgContainer>
                  <AddToCartButton>ADD TO CART</AddToCartButton>
                </ProductTop>
                <ProductBottom>
                  <ProducttName>{product.name}</ProducttName>
                  <PriceSect>
                    <Price>${product.cost}</Price>
                    <Ratings
                      src={require(`../assests/images/${product.rating}`)}
                      alt={`${product.rating} stars`}
                    />
                    <Count>({product.buyed})</Count>
                  </PriceSect>
                  {product.color && (
                    <ColorSection>
                      {product.color1 && <ColorBox color={product.color1} />}
                      {product.color2 && <ColorBox color={product.color2} />}
                    </ColorSection>
                  )}
                </ProductBottom>
              </ProductSection>
            ))
          ) : (
            <h3>No products found for "{searchQuery}"</h3>
          )}
        </Productmap>
      </Detail>

      <Footer />
    </div>
  );
}

const Detail = styled.div`
font-family:  poppins;

`;

const Linkpage = styled.div`
  font-size: 14px;
  padding: 50px 100px;
  margin: 10px 100px;
  @media screen and (min-width: 1280px) and (max-width: 1440px) {
    display: flex;
    margin: 0px;
    padding: 40px 50px 0px 80px;
}
@media screen and (min-width: 980px) and (max-width: 1280px) {
    display: flex;
    margin: 0px;
    padding: 40px 50px 0px 60px;
}
@media screen and (min-width: 540px) and (max-width: 980px) {
    display: flex;
    margin: 0px;
    padding: 40px 50px 0px 40px;
}
@media screen and (min-width: 360px) and (max-width: 540px) {
    display: flex;
    margin: 0px;
    padding: 40px 0px 0px 60px;
    font-size: 12px;
}
`;

const Homelink = styled(Link)`
  text-decoration: none;
  color: gray;

  &:active {
    color: black;  /* Ensure it stays black when clicked (active state) */
  }
`;

const ProductLink = styled(Link)`
  text-decoration: none;
  color: #000000;
`;

const ProductDetailContainer = styled.div`
  display: flex;
  width: 70%;
  margin: 30px auto 0;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 1280px) and (max-width: 1440px) {
   width: 90%;
}
  @media screen and (min-width: 1080px) and (max-width: 1280px) {
   width: 90%;
}
  @media screen and (min-width: 980px) and (max-width: 1080px) {
   width: 90%;
}
  @media screen and (min-width: 360px) and (max-width: 980px) {
    flex-wrap: wrap;
}

`;

const ProductImgContainer = styled.div`
  background: #F5F5F5;
  border-radius: 4px 0px 0px 0px;
  align-content: center;
  padding: 60px 20px 60px 60px;
   flex:1 ;
   @media screen and (min-width: 980px) and (max-width: 1080px) {
   padding: 10px 0px;
  }
   @media screen and (min-width: 360px) and  (max-width: 980px) {    
    justify-content: center;
    padding: 10px 50px;
   
}

 
`;
const Imageadjust = styled.div`
width: 400px;

@media screen and (min-width: 360px) and (max-width: 540px) {
 width:200px;
}
`;

const ProImg = styled.img`
   width: 100%;
   display: block;
   border-radius: 8px;
`;

const ProductInfo = styled.div`
  padding: 30px 0px 30px 100px;
  flex:2;

  @media screen and (min-width: 980px) and (max-width: 1080px) {
   padding: 30px 0px 30px 20px;
  }
  @media screen and (min-width: 360px) and  (max-width: 980px) {    
    padding: 30px 0px;
  }
`;

const ProductName = styled.h1`
font-size: 24px;
font-weight: 600;
line-height: 40px;
@media screen and (min-width: 360px) and (max-width: 1280px) {
   font-size:22px;
}
`;

const ProRate = styled.div`
  display: flex;
  align-items: center;
  line-height: 40px;
  align-items: center;
  text-align: center;

`;

const ProRatings = styled.img`
  font-size: 16px;
  margin-right: 10px;
`;

const ProReviews = styled.span`
font-size: 14px;
font-weight: 400;
color: gray;
margin-right: 10px;
`;

const ProLabel = styled.span`
  font-size: 16px;
  margin-left: 10px;
`;

const Stock = styled.span`
 color: ${props => props.status === 'In-Stock' ? '#00FF66' : '#FF0000'};
font-size: 14px;
`;

const ProLinee = styled.div`
 margin-top: 10px;
 border: 1px solid #ccc;
 width: 70%;
 @media screen and (min-width: 1280px) and (max-width: 1440px) {
    width: 90%;
}
@media screen and (min-width: 360px) and (max-width: 1280px) {
  width: 100%;
}  
`;

const ProPrice = styled.div`
font-size: 23px;
font-weight: 400;
line-height: 50px;
@media screen and (min-width: 360px) and (max-width: 1280px) {
   font-size:21px;
}
`;

const ProDesc = styled.div`
font-size: 14px;
font-weight: 400;
line-height: 20px;
width: 70%;
@media screen and (min-width: 1280px) and (max-width: 1440px) {
    width: 90%;
}
@media screen and (min-width: 360px) and (max-width: 1280px) {
  width: 100%;
}   
`;

const ProLine = styled.hr`
  margin-top: 10px;
  border: 1px solid #ccc;
  width: 100%;
`;

const ProColor = styled.span`
 display: flex;
 align-items: center;
  gap:9px;
  margin-top: 10px;
  font-size: 20px;
  font-weight:400;
  @media screen and (min-width: 360px) and (max-width: 1280px) {
   font-size:18px;
}
`;

const ColorBox = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 2px solid #ccc;
  background-color: ${(props) => props.color || "#fff"};

  &:hover {
    border: 2.5px solid black;
  }
`;

const ProBox = styled.div`
  margin-top: 20px;
  border:1px solid black;
  width: 70%;
  @media screen and (min-width: 360px) and (max-width: 1280px) {
    width: 100%;
}
`;

const ProDeliver = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 0;
 
`;

const ProDeliverIcon = styled.img`
 padding:10px;
`;

const DeliverInfo = styled.div``;

const Free = styled.div`
  font-weight: bold;
`;

const Enter = styled(Link)`
  font-size: 14px;
  color: gray;
  text-decoration:underline;
`;
const Enterr = styled(Link)`
  font-size: 14px;
  color: gray;
  text-decoration:none;
 
`;
const Span = styled.span`
 text-decoration:underline; 
`;
const Category = styled.div`
display:flex;
align-items: center;
width:25%;
padding-top: 30px;
justify-content: center;
@media screen and (min-width: 640px) and  (max-width: 768px) { 
 width: 40%;
}
@media screen and (min-width: 360px) and  (max-width: 640px) { 
 width: 40%;
}

`;

const Catbar = styled.div`
background-color: #DB4444;
border: 1px solid red;
border-radius: 5px;
width: 12px;
height: 30px;
`;

const CategoryName = styled.label`
margin-left:10px;
font-size:16px;
font-weight: 500;
color:#DB4444;

`;


const Productmap = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 100px;
    justify-content: space-between;
    padding: 50px 150px;
    @media screen and (min-width: 1280px) and (max-width: 1440px) {
    gap:30px;
    padding:50px 50px;
}
@media screen and (min-width: 1080px) and (max-width: 1280px) {
    gap:20px;
    padding:50px 50px;
}
@media screen and (min-width: 980px) and (max-width: 1080px) {
    gap:20px;
    padding:50px 30px;
}
@media screen and (min-width: 580px) and (max-width: 980px) {
    gap:20px;
    padding:50px 30px;
    justify-content: center;
}
@media screen and (min-width: 480px) and (max-width: 540px) {
    gap:20px;
    padding:50px 30px;
    justify-content: center;
}
@media screen and (min-width: 360px) and (max-width: 480px) {
    justify-content: center;
    padding:50px 30px;
    gap:0px;
}
`;



const ProductSection = styled.div`
    width: 290px; 
    margin-bottom: 20px;
    box-sizing: border-box; /* Ensure padding doesn't break the layout */
    @media screen and (min-width: 768px) and (max-width: 980px) {
     width: 250px;
}
`;

const ProductTop = styled.div`
    background-color: #F5F5F5;
    width: 100%;
    height: 250px;
    border-radius: 5px;
    position: relative;

    &:hover {
        cursor: pointer;
    }

    /* When hovering over ProductTop, make AddToCartButton visible */
    &:hover > button {
        opacity: 1;
    }
`;


const New = styled.p`
  position: absolute;
  font-size: 12px;
  left: 10px;
  top: 12px;
  background-color: #00ff66;
  color: white;
  padding: 4px 12px;
  border-radius: 4px;
`;

const Off = styled.p`
  position: absolute;
  left: 10px;
  top: 12px;
  background-color: #db4444;
  color: white;
  padding: 4px 12px;
  border-radius: 5px;
  font-size: 12px;
`;

const Productselect = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    right: 10px;
    top: 20px;
    gap: 15px;
`;

const Backg = styled.div`
    background-color: white;
    border-radius: 50%;
    padding: 8px;
`;

const Like = styled.img`
    display: block;
    cursor: pointer;
`;

const Heart = styled.img`
    display: block;
    cursor: pointer;
`;

const ImgContainer = styled.div`
display:flex;
justify-content:center;
align-items: center;
padding:40px;
`;

const Productimg = styled.img`
    display: block;
`;
const AddToCartButton = styled.button`
    position: absolute;
    left: 50%;
    bottom:2px;
    transform: translateX(-50%);
    background-color: #000000;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    font-weight: 600;
    opacity: 0;
    transition: all 0.3s ease;
    width: 290px;
    &:hover {
        background-color: #000000;
    }
`;
const ProductBottom = styled.div``;

const ProducttName = styled.div`
    font-size: 16px;
    font-weight: 500;
`;

const PriceSect = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
`;

const Price = styled.label`
    text-align: center;
`;

const Ratings = styled.img`
    display: block;
    cursor: pointer;
`;

const Count = styled.label``;

const ColorSection = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 5px;
  position: absolute;
  z-index: 1;
  flex-wrap: wrap;
`;


