import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Categories from '../screens/Categories';
import Delivery from '../screens/Delivery';
import { Link } from 'react-router-dom';
import productData from '../data/Product.json'; // Import product data
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const [products, setProducts] = useState([]); // All products
    const [filteredProducts, setFilteredProducts] = useState([]); // Filtered products based on search
    const [searchQuery, setSearchQuery] = useState(''); // Track search input
    const navigate = useNavigate();
    const productRef = useRef(null);
    const [selectedCategory, setSelectedCategory] = useState(null);

    const handleProductClick = (id) => {
        navigate(`/products/${id}`);
    };

  

    useEffect(() => {
        setProducts(productData.slice(0, 8)); // Set the imported data to state
        setFilteredProducts(productData.slice(0, 8)); // Initial filter (show all products)
    }, []);

    const handleSearchChange = (query) => {
        setSearchQuery(query);

        // Filter products based on search query (case-insensitive)
        const filtered = products.filter((product) =>
            product.name.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredProducts(filtered); // Update filtered products
    };

    const scrollToProducts = () => {
        if (productRef.current) {
            productRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleCategorySelect = (category) => {
        setSelectedCategory(category); // Set selected category
    };

    useEffect(() => {
        let filtered = products;

        if (selectedCategory) {
            filtered = filtered.filter((allproducts) => allproducts.categoryId === selectedCategory.id);

        }
        if (searchQuery) {
            filtered = filtered.filter((allproducts) =>
                allproducts.name.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        setFilteredProducts(filtered); // Update the filtered products list
    }, [searchQuery, selectedCategory, products]);
    return (
        <div>
            <Header searchQuery={searchQuery} onSearchChange={handleSearchChange} onSearchSubmit={scrollToProducts} />
            <SpotlightCont>
                <SpotInfo>
                    <AppleCont>
                        <Appleicon
                            src={require("../assests/images/1200px-Apple_gray_logo 1.png")}
                            alt="icon"
                        />
                        <Appletext>iPhone 14 Series</Appletext>
                    </AppleCont>
                    <Upto>Up to 10% off Voucher</Upto>
                    <ShopCont>
                        <Shopnow>Shop Now</Shopnow>
                        <Shopicon
                            src={require("../assests/images/arrow.png")}
                            alt="icon"
                        />
                    </ShopCont>
                </SpotInfo>
                <Spotimg
                    src={require("../assests/images/hero_endframe__cvklg0xk3w6e_large 2.png")}
                    alt="Spotlight"
                />
            </SpotlightCont>

            <Categories onCategorySelect={handleCategorySelect} />

            <Productmap ref={productRef}>
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                        <ProductSection key={product.id}>
                            <ProductTop onClick={() => handleProductClick(product.id)}>
                                {product.new && <New>New</New>}
                                {product.off && <Off>-{product.offer}%</Off>}
                                <Productselect>
                                    <Backg>
                                        <Like
                                            src={require("../assests/images/eye.png")}
                                            alt="like icon"
                                        />
                                    </Backg>
                                    <Backg>
                                        <Heart
                                            src={require("../assests/images/Vector.png")}
                                            alt="heart icon"
                                        />
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
                                <ProductName>{product.name}</ProductName>
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

            <ButtonContainer>
                <ViewProducts to="/Products">View All Products</ViewProducts>
            </ButtonContainer>

            <Delivery />
            <Footer />
        </div>
    );
}

// Styled Components here


const SpotlightCont = styled.div`
background-color:black;
color:White;
display: flex;
justify-content: space-around;
font-family: poppins;
/* width:1500px ; */
margin: 40px 100px 40px 180px;
border-radius: 10px;
@media screen and (min-width: 640px) and (max-width: 1440px) {
  margin: 40px 60px
}
@media screen and (min-width: 540px) and (max-width: 640px) {
 flex-wrap: wrap;
 margin: 40px 30px;
 justify-content: space-between;
 gap:30px;
}
@media screen and (min-width: 480px) and (max-width: 540px) {
 margin: 40px 30px;
 flex-wrap:wrap;
 gap:30px;
}
@media screen and (min-width: 360px) and (max-width: 480px) {
margin:40px 30px;
flex-wrap:wrap;
gap:30px;
}
`;

const SpotInfo = styled.div`
/* width: 400px; */
display: flex;
flex-direction: column;
gap:20px;
justify-content: center;
padding-left: 20px;
@media screen and (min-width: 540px) and (max-width: 640px) {
  margin-top: 30px;
  gap:10px;
}
@media screen and (min-width: 480px) and (max-width: 540px) {
 margin-top: 40px;
 gap:10px;
padding-left: 0px;
}
@media screen and (min-width: 360px) and (max-width: 480px) {
 gap:10px;
 margin-top: 20px;
 padding-left: 40px;
}
`;

const AppleCont = styled.div`
display: flex;
align-items: center;
`;

const Appleicon = styled.img`
display:block;
`;

const Appletext = styled.p`
font-weight:400;
font-size:20px;
margin-left: 15px;
@media screen and (min-width: 980px) and (max-width: 1440px) {
  font-size: 18px;
}
@media screen and (min-width: 640px) and (max-width: 980px) {
  font-size: 15px;
}
@media screen and (min-width: 480px) and (max-width: 540px) {
    font-size: 13px;
}
@media screen and (min-width: 360px) and (max-width:480px) {
    font-size: 13px;
}
`;

const Upto = styled.h3`
font-weight:600;
font-size:56px;

@media screen and (min-width: 1080px) and (max-width: 1440px) {
  font-size: 50px;
}
@media screen and (min-width: 980px) and (max-width: 1080px) {
  font-size: 35px;
}
@media screen and (min-width: 768px) and (max-width: 980px) {
  font-size: 32px;
}
@media screen and (min-width: 540px) and (max-width: 768px) {
  font-size: 32px;
}
@media screen and (min-width: 480px) and (max-width: 540px) {
  font-size: 32px;
}
@media screen and (min-width: 360px) and (max-width: 480px) {
  font-size: 30px;
}
`;

const ShopCont = styled.div`
display:flex;
align-items: center;

`;

const Shopnow = styled.p`
font-weight:500;
font-size:20px;
@media screen and (min-width: 1080px) and (max-width: 1440px) {
  font-size: 15px;
}
@media screen and (min-width: 980px) and (max-width: 1080px) {
  font-size: 13px;
}
@media screen and (min-width: 768px) and (max-width: 980px) {
  font-size: 13px;
}
@media screen and (min-width: 640px) and (max-width: 768px) {
   font-size: 12px;
}
@media screen and (min-width: 480px) and (max-width: 540px) {
  font-size: 12px;
}
@media screen and (min-width: 360px) and (max-width: 480px) {
  font-size: 12px;
}
`;

const Shopicon = styled.img`
display:block;
margin-left: 7px;
@media screen and (min-width: 1080px) and (max-width: 1440px) {
   width: 18px;
   margin-top: 4px;
}
@media screen and (min-width: 768px) and (max-width: 1080px) {
   width: 15px;
}
@media screen and (min-width: 360px) and (max-width: 768px) {
   width: 15px;
}
`;

const Spotimg = styled.img`
@media screen and (min-width: 768px) and (max-width: 980px) {
   width: 60%;
}
@media screen and (min-width: 640px) and (max-width: 768px) {
  width: 60%;
}
@media screen and (min-width: 540px) and (max-width: 640px) {
width: 60%;
margin:0px 50px;
}
@media screen and (min-width: 480px) and (max-width: 540px) {
width: 70%;
margin:0px 0px;
}
@media screen and (min-width: 360px) and (max-width: 480px) {
width: 70%;
margin:0px 0px;
}

`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;  
  align-items: center;      
  margin-top: 40px;         
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
}`;

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

const ProductName = styled.div`
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

const ViewProducts = styled(Link)`
text-decoration:none;
background-color: #DB4444;
color:#ffff;
padding:15px;
`;
