import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function Footer() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [isExclusiveVisible, setIsExclusiveVisible] = useState(false);
    const [isSupportVisible, setIsSupportVisible] = useState(false);
    const [isAccountVisible, setIsAccountVisible] = useState(false);
    const [isQuicklinkVisible, setIsQuicklinkVisible] = useState(false);
    const [isDownloadVisible, setIsDownloadVisible] = useState(false);

    // Update windowWidth on resize
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        
        window.addEventListener('resize', handleResize);
        
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // Only toggle sections if the screen width is between 360px and 540px
    const handleToggle = (section) => {
        if (windowWidth >= 360 && windowWidth <= 540) {
            switch (section) {
                case 'exclusive':
                    setIsExclusiveVisible(prev => !prev);
                    break;
                case 'support':
                    setIsSupportVisible(prev => !prev);
                    break;
                case 'account':
                    setIsAccountVisible(prev => !prev);
                    break;
                case 'quicklink':
                    setIsQuicklinkVisible(prev => !prev);
                    break;
                case 'download':
                    setIsDownloadVisible(prev => !prev);
                    break;
                default:
                    break;
            }
        }
    };
    return (
        <div>
            <Footter>
                <Exclusive>
                    <ExHeading onClick={() => handleToggle('exclusive')}>Exclusive</ExHeading>
                    {(windowWidth >= 360 && windowWidth <= 540 ? isExclusiveVisible : true) && (
                        <ExclusiveDetails>
                            <Subscribe>Subscribe</Subscribe>
                            <Offer>Get 10% off your first order</Offer>
                            <EmailCont>
                                <Email placeholder='Enter your email' />
                                <Emailicon src={require("../assests/images/send-icon.png")} alt='email' />
                            </EmailCont>
                        </ExclusiveDetails>
                    )}
                </Exclusive>
                <Support>
                    <SupportHead onClick={() => handleToggle('support')}>Support</SupportHead>
                    {(windowWidth >= 360 && windowWidth <= 540 ?  isSupportVisible : true) && (
                        <ExclusiveDetails>
                            <Address>111 Bijay sarani.Dhaka,<br /> DH 1515, Bangladesh</Address>
                            <SupportEmail>exclusive@gmail.com</SupportEmail>
                            <Phone>+88015-88888-9999</Phone>
                        </ExclusiveDetails>
                    )}
                </Support>
                <Account>
                    <AccountHead onClick={() => handleToggle('account')}>Account</AccountHead>
                    {(windowWidth >= 360 && windowWidth <= 540 ? isAccountVisible : true) && (
                        <ExclusiveDetails>
                            <Myacc>My Account</Myacc>
                            <Login>Login / Register</Login>
                            <Cart>Cart</Cart>
                            <Wishlist>Wishlist</Wishlist>
                            <Shop>Shop</Shop>
                        </ExclusiveDetails>
                    )}
                </Account>
                <Quicklink>
                    <QuickHead onClick={() => handleToggle('quicklink')}>Quick Link</QuickHead>
                    {(windowWidth >= 360 && windowWidth <= 540 ? isQuicklinkVisible : true) && (
                        <ExclusiveDetails>
                            <Privacy>Privacy Policy</Privacy>
                            <Terms>Terms of Use</Terms>
                            <Faq>FAQ</Faq>
                            <Contact>Contact</Contact>
                        </ExclusiveDetails>
                    )}
                </Quicklink>
                <Download>
                    <DownName onClick={() => handleToggle('download')}>Download App</DownName>
                    {(windowWidth >= 360 && windowWidth <= 540 ? isDownloadVisible : true) && (
                        <ExclusiveDetails>
                            <Save>Save 43 with App New User only</Save>
                            <Socialicon>
                                <Qrscanner src={require("../assests/images/Qrcode 1.png")} alt='scanner' />
                                <Socialmedia>
                                    <Playstore src={require("../assests/images/png-transparent-google-play-store-logo-google-play-app-store-android-wallets-text-label-logo.png")} alt='Playstore' />
                                    <Apple src={require("../assests/images/download-appstore.png")} alt='Apple' />
                                </Socialmedia>
                            </Socialicon>
                            <Apps>
                                <Facebook src={require("../assests/images/Icon-Facebook.png")} alt='Facebook' />
                                <Twitter src={require("../assests/images/Group.png")} alt='Twitter' />
                                <Insta src={require("../assests/images/Group (1).png")} alt='Insta' />
                                <Linkdin src={require("../assests/images/Vector (1).png")} alt='Linkdin' />
                            </Apps>
                        </ExclusiveDetails>
                    )}
                </Download>
            </Footter>
            <Copy>© Copyright Rimel 2022. All right reserved</Copy>
        </div>
    );
}

const Footter = styled.div`
display:flex;
color:#fff;
justify-content: space-around;
background-color: black;
font-family: poppins;
padding: 90px;


  @media screen and (min-width: 1280px) and (max-width: 1440px) {
    
  }

  @media screen and (min-width: 1080px) and (max-width: 1280px) {
    gap:20px;
    flex-wrap: wrap;
 
  }

  @media screen and (min-width: 980px) and (max-width: 1080px) {
    flex-wrap: wrap;
    gap:20px;
  }

  @media screen and (min-width: 768px) and (max-width: 980px) {
    flex-wrap: wrap;
    gap:50px;
  }

  @media screen and (min-width: 640px) and (max-width: 768px) {
     flex-wrap:wrap;
     gap:30px;
  }

  @media screen and (min-width: 540px) and (max-width: 640px) {
    flex-wrap: wrap;
    gap:30px;
  }
@media screen and (min-width: 360px) and (max-width: 540px) {
 flex-direction:  column;
 gap:40px 80px;
 align-items: center;
 justify-content: center;
 text-align: center;
 height: fit-content;
 padding:10px;
 padding-top: 20px;
}

`;


const Exclusive = styled.div`
font-size:20px;
line-height: 40px;

@media screen and (min-width: 360px) and (max-width: 540px) {
    font-size:16px;
    line-height: 20px;
}
`;
const ExclusiveDetails = styled.div`
    font-size: 16px;
    line-height: 26px;
    color: #fff;
    display: flex;
    flex-direction: column;
    @media screen and (min-width: 360px) and (max-width:540px) {
        font-size: 14px;
        /* padding:20px; */
    }
`;
const ExHeading = styled.p`
font-size:28px;
font-weight: 600;

@media screen and (min-width: 360px) and (max-width: 540px) {
    font-size:18px;
    font-weight: 500;
}
`;

const Subscribe = styled.p`
`;

const Offer = styled.p`
font-size: 16px;
font-weight: 200;
@media screen and (min-width: 360px) and (max-width: 540px) {
    font-size:14px;
}
`;

const Email = styled.input`
font-size:20px;
background-color:black;
outline: none;
border: none;
color:#fff;
@media screen and (min-width: 360px) and (max-width: 540px) {
    font-size:10px;
    /* width:fit-content; */
}

`;

const EmailCont = styled.div`
display: flex;
border: 1px solid #fff;
padding: 10px;
width:fit-content;
color:#fff;
`;

const Emailicon = styled.img`
cursor: pointer;
`;


const Support = styled.div`
font-weight: 200;
`;

const SupportHead = styled.p`
font-size:18px;
font-weight: 500;
/* line-height: 40px; */
@media screen and (min-width: 360px) and (max-width: 540px) {
    font-size:18px;

}
`;

const Address = styled.p`
font-size:18px;
font-weight: 200;
line-height: 26px;
@media screen and (min-width: 360px) and (max-width: 540px) {
    font-size:14px;
}
`;

const SupportEmail = styled.p`
line-height: 40px;
@media screen and (min-width: 360px) and (max-width: 540px) {
    font-size:14px;
}
`;

const Phone = styled.p`
@media screen and (min-width: 360px) and (max-width: 540px) {
    font-size:14px;
}`;

const Account = styled.div`
display: flex;
flex-direction: column;
gap:10px;

`;

const AccountHead = styled.div`
font-size:18px;
font-weight: 500;
`;

const Myacc = styled(Link)`
font-size:16px;
/* margin-top: -15px; */
font-weight: 200;
color:#fff;
text-decoration: none;
@media screen and (min-width: 360px) and (max-width: 540px) {
    font-size:14px;
}
`;

const Login = styled(Link)`
font-size:16px;
font-weight: 200;
color:#fff;
text-decoration: none;
@media screen and (min-width: 360px) and (max-width: 540px) {
    font-size:14px;
}
`;

const Cart = styled(Link)`
font-size:16px;
font-weight: 200;
color:#fff;
text-decoration: none;
@media screen and (min-width: 360px) and (max-width: 540px) {
    font-size:14px;
}
`;

const Wishlist = styled(Link)`
font-size:16px;
font-weight: 200;
color:#fff;
text-decoration: none;
@media screen and (min-width: 360px) and (max-width: 540px) {
    font-size:14px;
}
`;

const Shop = styled(Link)`
font-size:16px;
font-weight: 200;
color:#fff;
text-decoration: none;
@media screen and (min-width: 360px) and (max-width: 540px) {
    font-size:14px;
}
`;

const Quicklink = styled.div`
display:flex;
flex-direction: column;
gap:10px;

`;

const QuickHead = styled.p`
font-size:18px;
font-weight: 500;
`;

const Privacy = styled(Link)`
font-size:16px;
font-weight: 200;
color:#fff;
text-decoration: none;
@media screen and (min-width: 360px) and (max-width: 540px) {
    font-size:14px;
}
`;

const Terms = styled(Link)`
font-size:16px;
font-weight: 200;
color:#fff;
text-decoration: none;
@media screen and (min-width: 360px) and (max-width: 540px) {
    font-size:14px;
}
`;

const Faq = styled(Link)`
font-size:16px;
font-weight: 200;
color:#fff;
text-decoration: none;
@media screen and (min-width: 360px) and (max-width: 540px) {
    font-size:14px;
}
`;

const Contact = styled(Link)`
font-size:16px;
font-weight: 200;
color:#fff;
text-decoration: none;
@media screen and (min-width: 360px) and (max-width: 540px) {
    font-size:14px;
}
`;

const Download = styled.div`
@media screen and (min-width: 360px) and (max-width: 540px) {
    display: none;
}`;

const DownName = styled.p`
font-size:18px;
font-weight: 500;
`;

const Save = styled.p`
font-size:13px;
font-weight: 100;

`;

const Socialicon = styled(Link)`
display:flex;
align-items: center;
justify-content: space-between;
color:#fff;
`;

const Qrscanner = styled.img``;

const Socialmedia = styled(Link)`
display:flex;
flex-direction: column;
color:#fff;
gap:6px;
`;

const Playstore = styled.img``;

const Apple = styled.img``;

const Apps = styled(Link)`
display:flex;
color:#fff;
justify-content: space-between;
padding-top:20px;


`;

const Facebook = styled.img`
display:block;
`;

const Twitter = styled.img`
display:block;
`;

const Insta = styled.img`
display:block;
`;

const Linkdin = styled.img`
display:block;
`;

const Copy = styled.label`
font-size:16px;
display: flex;
justify-content: center;
font-weight:100;
color:#aaa2a2;
background-color: black;
`;



