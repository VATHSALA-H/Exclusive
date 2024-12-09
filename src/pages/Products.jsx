import React, { useState, useEffect,useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import productData from '../data/Product.json';
import { useNavigate } from 'react-router-dom';

export default function Products() {
    const [products, setProducts] = useState([]);

    const [filteredProducts, setFilteredProducts] = useState([]); 
    const [searchQuery, setSearchQuery] = useState('');
    const productRef = useRef(null);

    const navigate = useNavigate();

    const handleProductClick = (id) => {
      
        navigate(`/products/${id}`);
      };

    useEffect(() => {
        setProducts(productData); 
        setFilteredProducts(productData);  
    }, []);

    const handleSearchChange = (query) => {
        setSearchQuery(query);

       
        const filtered = products.filter((product) =>
            product.name.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredProducts(filtered); 
    };
 
    const scrollToProducts = () => {
        if (productRef.current) {
            productRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div>
            <Header searchQuery={searchQuery} onSearchChange={handleSearchChange} onSearchSubmit={scrollToProducts} />
            <Section>
                <Linkpage>
                    <Homelink to="/">Home&nbsp;/ </Homelink>  &nbsp;
                    <Product to="/products">Products</Product>
                </Linkpage>
                <Productmap ref = {productRef}>
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
                    <p>No products found for "{searchQuery}"</p>
                )}
            </Productmap>
            </Section>
            <Footer />
        </div>
    );
}

const Section = styled.div`
    font-family: poppins;
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
    padding: 40px 50px 0px 40px;
}
`;

const Homelink = styled(Link)`
    text-decoration: none;
    color: gray;

    &:active {
        color: black;  /* Ensure it stays black when clicked (active state) */
    }


`;
const Product = styled(Link)`
    text-decoration: none;
    color: #000000;
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