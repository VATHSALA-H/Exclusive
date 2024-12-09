import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Header({ searchQuery, onSearchChange, onSearchSubmit }) {
  const [isOpen, setIsOpen] = useState(false); // State to toggle the dropdown visibility
  const [selectedLanguage, setSelectedLanguage] = useState('English'); // Track selected language
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen); // Toggle dropdown state
  };

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language); // Update selected language
    setIsOpen(false); // Close the dropdown after selecting a language
  };

  const handleSearchChange = (e) => {
    onSearchChange(e.target.value); // Pass the search query to the parent component (Home.js)
  };
  const handleSearchSubmit = (e) => {
    e.preventDefault(); // Prevent page reload on submit
    onSearchChange(searchQuery);
    onSearchSubmit() // Trigger the search filter action on submit
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <NavContainer>
        <NavTop>
          <TopLeft>
            <Summer>Summer Sale For All Swim Suits And Express Delivery - OFF 50%</Summer>
            <Shopnow>Shopnow</Shopnow>
          </TopLeft>
          <TopRight>
            <English>
              {selectedLanguage}
              <Dropdown
                src={require('../assests/images/DropDown.png')}
                alt="icon"
                onClick={toggleDropdown}
              />
            </English>
            {isOpen && (
              <DropdownMenu>
                <DropdownItem onClick={() => handleLanguageChange('Spanish')}>Spanish</DropdownItem>
                <DropdownItem onClick={() => handleLanguageChange('French')}>French</DropdownItem>
                <DropdownItem onClick={() => handleLanguageChange('English')}>English</DropdownItem>
              </DropdownMenu>
            )}
          </TopRight>
        </NavTop>
        <NavBottom>
          {/* Hamburger Icon */}
          <HamburgerMenu onClick={toggleMenu}>
            <div></div>
            <div></div>
            <div></div>
          </HamburgerMenu>

          {/* Mobile Menu */}
          <MobileMenu isOpen={isMenuOpen}>
            <MobileLink to="/">Home</MobileLink>
            <MobileLink>Contact</MobileLink>
            <MobileLink>About</MobileLink>
            <MobileLink>Signup</MobileLink>
          </MobileMenu>

          <LogoName>Exclusive</LogoName>
          <Menus>
            <Home to="/">Home</Home>
            <Contact>Contact</Contact>
            <About>About</About>
            <Signup>Signup</Signup>
          </Menus>
          <Navside>
            <Navcont>
              {/* Search Form */}
              <form onSubmit={(e) => e.preventDefault()} style={{display:"flex",alignItems:'center'}}>
                <Input
                  placeholder="What are you looking for?" value={searchQuery}
                  onChange={handleSearchChange}
                />
                <SearchIcon
                  src={require('../assests/images/Component 2.png')}
                  alt="search" onClick={handleSearchSubmit}
                />
              </form>
            </Navcont>
            <Wishlist src={require('../assests/images/Vector.png')} alt="icon" />
            <AddCart src={require('../assests/images/Cart1.png')} alt="icon" />
          </Navside>
        </NavBottom>
      </NavContainer>
      <Line />
    </>
  );
}

// Styled Components here

const NavContainer = styled.div`
  font-family: poppins;
  font-size: 16px;

`;

const NavTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  background-color: black;
  color: #fff;
  padding: 10px 0px;

  @media screen and (min-width: 350px) and (max-width: 768px) {
   display: none;
  }

`;

const TopLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const TopRight = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const Summer = styled.p`

`;

const Shopnow = styled(Link)`
  text-decoration: none;
  color: #fff;
  @media screen and (min-width: 540px) and (max-width: 768px) {
  font-size: 12px;
}

`;

const English = styled.div`
  font-size: 16px;
  display: flex;
  align-items: center;
  cursor: pointer;

  @media screen and (min-width: 540px) and (max-width: 768px) {
  font-size: 12px;
}

`;

const Dropdown = styled.img`
  cursor: pointer;
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 40px; /* Adjust this based on your layout */
  right: 0px;
  background-color: black;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  min-width: 120px;
  z-index: 10;
`;

const DropdownItem = styled.div`
  padding: 8px 12px;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
    color: black;
  }
`;

const NavBottom = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 40px 0px 10px 0px;

  @media screen and (min-width: 640px) and (max-width: 768px) {
    justify-content: space-between;
    padding: 30px 30px 10px 30px;
    gap:20px;
  }
  @media screen and (min-width: 540px) and (max-width: 640px) {
    justify-content: space-between;
    padding:40px 5px 10px 5px;
    gap:0px;
  }
  @media screen and (min-width: 480px) and (max-width: 540px) {
    padding: 30px 5px 10px 5px;
    
  }
  @media screen and (min-width: 350px) and (max-width: 480px) {
    padding: 30px 5px 10px 5px;
    justify-content :space-between;
    gap:0px;
  }
`;

const LogoName = styled.h3`
  font-size: 24px;
 
    @media screen and (min-width: 640px) and (max-width: 768px) {
      font-size:20px;
    }
    @media screen and (min-width: 540px) and (max-width: 640px) {
      font-size:20px;   
    }
    @media screen and (min-width: 480px) and (max-width: 540px) {
      font-size:16px;
    }
    @media screen and (min-width: 350px) and (max-width: 480px) {
      font-size:18px;
    }

`;

const Menus = styled.ul`
  list-style-type: none;
  display: flex;
  gap: 20px;
  align-items: center;
  cursor: pointer;
  @media screen and (min-width: 350px) and (max-width: 768px)  {
     display: none;
  }
`;

const Home = styled(Link)`
  text-decoration: none;
  color: black;
  &:hover {
    border-bottom: 1px solid gray;
  }
`;

const Contact = styled.li`
  &:hover {
    border-bottom: 1px solid gray;
  }
`;

const About = styled.li`
  &:hover {
    border-bottom: 1px solid gray;
  }
`;

const Signup = styled.li`
  &:hover {
    border-bottom: 1px solid gray;
  }
`;

const HamburgerMenu = styled.div`
  display: none;
  @media screen and (min-width: 350px) and (max-width: 768px)  {
    display: block;
    cursor: pointer;
  }
 
  div {
    width: 25px;
    height: 3px;
    background-color: black;
    margin: 5px;
    @media screen and (min-width: 350px) and (max-width: 540px)  {
      width: 20px;
      height: 2px;
  }}
`;

const MobileMenu = styled.div`
  display: none;
  flex-direction: column;
  /* align-items: center; */
  background-color: #fff;
  position: absolute;
  top: 80px;
  left: 0;
  width: 100%;
  padding: 20px;
  gap: 10px;
  @media screen and (min-width: 350px) and (max-width: 768px)  {
    display: ${(props) => (props.isOpen ? 'flex' : 'none')};
  }
`;

const MobileLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 18px;
  @media screen and (min-width: 350px) and (max-width: 540px)  {
    font-size: 12px;
  }
 

`;


const Navside = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
 
  @media screen and (min-width: 640px) and (max-width: 768px) {
     
     gap:7px;
    }

    @media screen and (min-width: 540px) and (max-width: 640px) {
   gap:7px;
   margin-left: 40px;
  }
  @media screen and (min-width: 350px) and (max-width: 480px) {
   gap:0px;
   margin-left: 0px;
  }
  
`;

const Navcont = styled.div`
  display: flex;
  border-radius: 5px;
  padding: 8px;
  background-color: #f5f5f5;
  justify-content: center;
  text-align: center;
  
  @media screen and (min-width: 640px) and (max-width: 768px) {
    padding: 4px;
   
  }

  @media screen and (min-width: 540px) and (max-width: 640px) {
  padding: 4px;
  
  }
  @media screen and (min-width: 350px) and (max-width: 540px) {
    padding: 4px;
  }
`;

const Input = styled.input`
  border: none;
  outline: none;
  background-color: #f5f5f5;
`;

const SearchIcon = styled.img`
  cursor: pointer;
`;

const Wishlist = styled.img`
  cursor: pointer;
  @media screen and (min-width: 350px) and (max-width: 640px) {
display: none;
}
`;

const AddCart = styled.img`
  cursor: pointer;
  @media screen and (min-width: 350px) and (max-width: 640px) {
display: none;
}
`;

const Line = styled.hr``;


export default Header;
