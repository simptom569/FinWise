import { useState, useRef } from "react"
import styled from "styled-components"
import Slider from "react-slick";
import Accordion from 'react-bootstrap/Accordion';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import logo from './img/logo.png'
import particles from './img/particles.png'
import particles1 from './img/particles1.png'
import particles2 from './img/particles2.png'
import particles3 from './img/particles3.png'
import block1 from './img/block1.png'
import block2 from './img/block2.png'
import block3 from './img/block3.png'
import block4 from './img/block4.png'
import iPhone from './img/iPhone.png'
import block5 from './img/block5.png'
import block6 from './img/block6.png'
import block7 from './img/block7.png'
import block8 from './img/block8.png'
import sponsor1 from './img/sponsor1.png'
import sponsor2 from './img/sponsor2.png'
import sponsor3 from './img/sponsor3.png'
import sponsor4 from './img/sponsor4.png'
import sponsor5 from './img/sponsor5.png'
import sponsor6 from './img/sponsor6.png'
import block9 from './img/block9.png'
import block10 from './img/block10.png'
import block11 from './img/block11.png'
import block12 from './img/block12.png'
import block13 from './img/block13.png'
import block14 from './img/block14.png'
import block15 from './img/block15.png'
import reviewava1 from './img/reviewava1.png'
import reviewava2 from './img/reviewava2.png'
import reviewava3 from './img/reviewava3.png'
import reviewbuttonbackground from './img/reviewbuttonbackground.svg'
import reviewline from './img/reviewline.svg'
import reviewlinecolor from './img/reviewlinecolor.svg'
import FAQline from './img/FAQline.svg'
import FAQsupport from './img/FAQsupport.svg'
import FAQphone from './img/FAQphone.svg'
import instagram from './img/instagram.svg'
import facebook from './img/facebook.svg'
import twitter from './img/twitter.svg'
import youtube from './img/youtube.svg'
import linked from './img/linked.svg'


const Warper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
`

const Container = styled.div`
    max-width: 1280px;
    padding: 0px 20px;
    width: 100%;
    position: relative;
`

const Block1 = styled.div`
    width: 100%;
    height: 1129px;
    background-color: rgb(35, 36, 38);
    padding-top: 32px;
    display: flex;
    justify-content: center;
    overflow: hidden;
    position: relative;
`

const Header = styled.header`
    display: flex;
    height: 58px;
    align-items: center;
    justify-content: space-between;
`

const LogoBlock = styled.div`
    display: flex;
    align-items: center;
`

const Logo = styled.img`
    width: 46px;
`

const Name = styled.span`
    color: #ffffff;
    font-size: 24px;
    line-height: 32.78px;
    font-weight: 600;
    font-family: 'Manrope', sans-serif;
    margin-left: 8px;
`

const MenuBlock = styled.div`
    display: flex;
    gap: 12px;
`

const MenuItem = styled.div<{selected: boolean}>`
    padding: ${({ selected }) => (selected ? '18px 40px' : '18px 24px')};
    line-height: 21.86px;
    font-weight: 600;
    font-family: 'Manrope';
    letter-spacing: -.005em;
    font-size: 16px;
    color: ${({ selected }) => (selected ? 'transparent' : 'rgba(255, 255, 255, 0.8)')};
    background: ${({ selected }) => (selected ? 'linear-gradient(92.65deg, #FDA060 0.68%, #ED4C4C 51.12%, #E8789D 110.33%)' : 'none')};
    background-clip: ${({ selected }) => (selected ? 'text': 'none')};
    text-align: center;
    cursor: pointer;
    transition: all .3s ease-in-out;
`

const HeaderButton = styled.button`
    border: none;
    background: linear-gradient(92.65deg, #FDA060 0.68%, #ED4C4C 51.12%, #E8789D 110.33%);
    color: #ffffff;
    border-radius: 100px;
    padding: 18px 40px;
    line-height: 21.86px;
    font-weight: 600;
    font-family: 'Manrope';
    letter-spacing: -.005em;
    font-size: 16px;
    cursor: pointer;
`

const BannerBlock = styled.div`
    margin-top: 110px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const BannerExplanation = styled.div`
    padding: 8px 24px;
    border: 1px solid rgba(255, 255, 255, 0.6);
    border-radius: 100px;
    color: rgba(255, 255, 255, 0.8);
    font-family: 'Manrope';
    font-weight: 500;
    font-size: 16px;
    line-height: 21.86px;
    letter-spacing: -.005em;
    text-align: center;
`

const BannerTitle = styled.span`
    font-family: 'TestSohne';
    font-weight: 500;
    font-size: 64px;
    line-height: 81.54px;
    letter-spacing: -.005em;
    text-align: center;
    margin-top: 16px;
    color: #ffffff;

    @media screen and (max-width: 590px) {
        & {
            font-size: 48px;
            line-height: 61.3px;
        }
    }
`

const BannerDescription = styled.span`
    color: rgb(255, 255, 255, 0.8);
    font-family: 'Poppins';
    font-weight: 500;
    font-size: 16px;
    letter-spacing: -.005em;
    line-height: 24px;
    text-align: center;
    margin-top: 24px;
`

const BannerButtonsBlock = styled.div`
    margin-top: 40px;
    display: flex;
    gap: 24px;

    @media screen and (max-width: 420px) {
        flex-direction: column;
    }
`

const BannerButtonStart = styled.button`
    background-color: #ffffff;
    color: rgb(35, 36, 38);
    font-family: 'Manrope';
    font-size: 16px;
    font-weight: 500;
    line-height: 21.86px;
    letter-spacing: -.005em;
    text-align: center;
    border: none;
    border-radius: 100px;
    padding: 18px 40px;
    cursor: pointer;
`

const BannerButtonDemo = styled.button`
    background-color: transparent;
    color: #ffffff;
    border: 1px solid #ffffff;
    padding: 18px 40px;
    border-radius: 100px;
    font-family: 'Manrope';
    font-size: 16px;
    font-weight: 500;
    line-height: 21.86px;
    letter-spacing: -.005em;
    text-align: center;
    cursor: pointer;
    transition: all .3s ease-in-out;

    &:hover {
        background-color: #ffffff;
        color: rgb(35, 36, 38);
    }
`

const BannerParticle = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url(${particles});
    background-size: cover;
    background-position-y: bottom;
    background-position-x: center;
    pointer-events: none;
    bottom: -150px;
    z-index: 3;
`

const BannerBlock1 = styled.img`
    position: absolute;
    left: 40px;
    bottom: 170px;
    width: 330px;
    height: auto;

    @media screen and (max-width: 700px) {
        & {
            display: none;
        }
    }
`

const BannerBlock2 = styled.img`
    position: absolute;
    right: 40px;
    bottom: 140px;
    width: 310px;
    height: auto;
    z-index: 4;

    @media screen and (max-width: 700px) {
        & {
            display: none;
        }
    }
`

const BannerBlockIPhone = styled.img`
    width: 360px;
    position: absolute;
    height: auto;
    z-index: 4;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0 auto;

    @media screen and (max-width: 590px) {
        & {
            width: 60%;
        }
    }
`

const BannerBlock3 = styled.img`
    width: 244px;
    bottom: 70px;
    left: 88px;
    position: absolute;
    z-index: 4;

    @media screen and (max-width: 700px) {
        & {
            display: none;
        }
    }
`

const BannerBlock4 = styled.img`
    width: 586px;
    height: auto;
    position: absolute;
    z-index: 4;
    bottom: 10px;
    left: 0;
    right: 0;
    margin: 0 auto;

    @media screen and (max-width: 586px) {
        & {
            width: 100%;
        }
    }
`

const Block2 = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    overflow: hidden;
    position: relative;
    padding-top: 100px;
`

const Block2Block= styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`

const Block2Description = styled.div`
    font-family: 'Poppins';
    font-weight: 400;
    font-size: 16px;
    line-height: 21.86px;
    letter-spacing: -.005em;
    text-align: center;
    padding: 8px 24px;
    position: relative;
    border: 1px solid transparent;
    background: linear-gradient(#ffffff, #ffffff) padding-box, linear-gradient(92.65deg, #FDA060 0.68%, #ED4C4C 51.12%, #E8789D 110.33%) border-box;
    border-radius: 100px;

    & span {
        background: linear-gradient(92.65deg, #FDA060 0.68%, #ED4C4C 51.12%, #E8789D 110.33%);
        background-clip: text;
        -webkit-text-fill-color: transparent;
    }
`

const Block2Title = styled.span`
    font-family: 'TestSohne';
    font-weight: 400;
    font-size: 48px;
    margin-top: 16px;
    letter-spacing: -.005em;
    line-height: 61.15px;
    text-align: center;
    color: rgb(29, 29, 29);
`

const Block2ContainerStats = styled.div`
    display: flex;
    justify-content: center;
    gap: 40px;
    margin-top: 60px;
    width: 100%;
    flex-wrap: wrap;
`

const Block2BlockStat = styled.div`
    width: 600px;
    height: 720px;
    padding: 40px;
    border-radius: 40px;
    background: rgb(242, 242, 242);
    display: flex;
    flex-direction: column;
`

const Block2BlockStatLogo = styled.img`
    height: 62px;
    width: 62px;
`

const Block2BlockStatTitle = styled.span`
    font-family: 'TestSohne';
    font-weight: 400;
    font-size: 36px;
    line-height: 45.86px;
    letter-spacing: -.005em;
    margin-top: 16px;
    color: rgb(35, 36, 38);
`

const Block2BlockStatDescription = styled.span`
    font-family: 'Poppins';
    font-weight: 400px;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -.005em;
    color: rgb(79, 80, 81);
    margin-top: 16px;
    word-break: word-break;
`

const Block2BlockStatImg = styled.img`
    width: 520px;
    height: 342px;
    margin-top: 40px;

    @media screen and (max-width: 520px) {
        & {
            width: 100%;
            height: auto;
        }
    }
`

const Block3 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 177px;
    margin-top: 100px;
    margin-bottom: 100px;
    background: #ffffff;
`

const Block3Block= styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`

const Block3Title = styled.span`
    font-family: 'Manrope';
    font-weight: 500;
    font-size: 24px;
    line-height: 32.78px;
    letter-spacing: -.005em;
    text-align: center;
    color: rgb(35, 36, 38);
`

const Block3TitleColor = styled.span`
    background: linear-gradient(92.65deg, #FDA060 0.68%, #ED4C4C 51.12%, #E8789D 110.33%);
    background-clip: text;
    -webkit-text-fill-color: transparent;
`

const Block3Sponsors = styled.div`
    display: flex;
    min-height: 120px;
    column-gap: 80px;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 24px;
`

const Block3SponsorImg = styled.img`
    width: 120px;
    height: 120px;
`

const Block4 = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    background: rgb(242, 242, 242);
    padding: 100px 0px;
`

const Block4Block = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 120px;
`

const Block4Ads = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    @media screen and (max-width: 1190px) {
        & {
            flex-direction: column;
            gap: 20px;
        }
    }
`

const Block4AdsImg1 = styled.img`
    width: 612px;
    height: 496px;
    filter: drop-shadow(0px 24px 80px rgba(0, 0, 0, 0.09));

    @media screen and (max-width: 780px) {
        & {
            max-width: 612px;
            width: 100%;
            height: auto;
        }
    }
`

const Block4AdsText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 556px;

    @media screen and (max-width: 1190px) {
        & {
            align-items: center;
        }
    }

    @media screen and (max-width: 556px) {
        & {
            width: 100%;
        }
    }
`

const Block4AdsTextExplanation = styled.div`
    padding: 8px 24px;
    position: relative;
    font-family: 'Poppins';
    font-weight: 400;
    font-size: 16px;
    letter-spacing: -.005em;
    text-align: center;
    line-height: 24px;
    border: 1px solid transparent;
    background: linear-gradient(rgb(242, 242, 242), rgb(242, 242, 242)) padding-box, linear-gradient(92.65deg, #FDA060 0.68%, #ED4C4C 51.12%, #E8789D 110.33%) border-box;
    border-radius: 100px;

    & span {
        background: linear-gradient(92.65deg, #FDA060 0.68%, #ED4C4C 51.12%, #E8789D 110.33%);
        background-clip: text;
        -webkit-text-fill-color: transparent;
    }
`

const Block4AdsTextTitle = styled.span`
    font-family: 'TestSohne';
    font-weight: 400;
    font-size: 48px;
    line-height: 61.15px;
    letter-spacing: -.005em;
    color: rgb(35, 36, 38);
    margin-top: 16px;

    @media screen and (max-width: 1190px) {
        & {
            text-align: center;
        }
    }
`

const Block4AdsTextDescriptions = styled.div`
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    gap: 24px;
`

const Block4AdsTextDescription = styled.div`
    gap: 20px;
    display: flex;
`

const Block4AdsTextDescriptionImg = styled.img`
    width: 62px;
    height: 62px;
`

const Block4AdsTextDescriptionText = styled.div`
    max-width: 420px;
    gap: 16px;
    display: flex;
    flex-direction: column;
`

const Block4AdsTextDescriptionTitle = styled.span`
    font-family: 'TestSohne';
    font-weight: 400;
    font-size: 24px;
    line-height: 30.58px;
    letter-spacing: -.005em;
    color: rgb(35, 36, 38);
`

const Block4AdsTextDescriptionDescription = styled.span`
    font-family: 'Poppins';
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -.005em;
    color: rgb(79, 80, 81);
`

const Block4AdsImg2 = styled.img`
    width: 600px;
    height: 491px;

    @media screen and (max-width: 780px) {
        & {
            max-width: 600px;
            width: 100%;
            height: auto;
        }
    }
`

const Block4AdsDescription2 = styled.span`
    margin-top: 24px;
    font-family: 'Manrope';
    font-weight: 500;
    font-size: 16px;
    line-height: 21.86px;
    letter-spacing: -.005em;
    color: rgb(79, 80, 81);

    @media screen and (max-width: 1190px) {
        & {
            text-align: center;
        }
    }
`

const Block4AdsDownloads = styled.div`
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    gap: 20px;
`

const Block4AdsDownloadTitle = styled.span`
    font-family: 'Manrope';
    font-weight: 600;
    font-size: 20px;
    line-height: 27.32px;
    letter-spacing: -.005em;
    color: rgb(35, 36, 38);

    @media screen and (max-width: 1190px) {
        & {
            text-align: center;
        }
    }
`

const Block4AdsDownloadImgs = styled.div`
    display: flex;
    gap: 20px;
    justify-content: center;
    flex-wrap: wrap;
`

const Block4AdsDownloadImg = styled.img`
    height: 64px;
`

const Block5 = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    background: rgb(35, 36, 38);
    padding: 60px 0px;
    position: relative;
`

const Block5Block = styled.div`
    display: flex;
    flex-direction: column;
    z-index: 1;
    position: relative;
`

const Block5BlockText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Block5Explanation = styled.div`
    padding: 8px 24px;
    position: relative;
    font-family: 'Poppins';
    font-weight: 400;
    font-size: 16px;
    letter-spacing: -.005em;
    text-align: center;
    line-height: 24px;
    border: 1px solid transparent;
    background: linear-gradient(rgb(35, 36, 38), rgb(35, 36, 38)) padding-box, linear-gradient(92.65deg, #FDA060 0.68%, #ED4C4C 51.12%, #E8789D 110.33%) border-box;
    border-radius: 100px;

    & span {
        background: linear-gradient(92.65deg, #FDA060 0.68%, #ED4C4C 51.12%, #E8789D 110.33%);
        background-clip: text;
        -webkit-text-fill-color: transparent;
    }
`

const Block5Title = styled.span`
    font-family: 'TestSohne';
    font-weight: 400;
    font-size: 48px;
    line-height: 57.6px;
    letter-spacing: -0.02em;
    text-align: center;
    color: #ffffff;
    margin-top: 16px;
`

const Block5Description = styled.span`
    margin-top: 16px;
    font-family: 'Poppins';
    font-weight: 400;
    font-size: 18px;
    text-align: center;
    line-height: 27px;
    color: rgba(255, 255, 255, 0.8);
`

const Block5Slider = styled.div`
    margin-top: 60px;
    width: 100vw;
    margin-left: calc(-50vw + 50%);

    & .slick-track {
        display: flex;
        height: 345.88px;
        transition: width .3s ease-in-out, height .3s ease-in-out;
    }

    & .slick-slide {
        display: flex !important;
        align-items: flex-end;
    }

    & .slick-list {
        padding-top: 60px !important;
    }

    @media screen and (max-width: 600px) {
        & {
            margin-top: 0px;
        }

        & .slick-list {
            padding-top: 0px !important;
        }
    }
`

const Block5ReviewBlock = styled.div`
    width: 584px !important;
    height: 320px;
    display: inline-flex !important;
    justify-content: center;
    align-items: flex-end;
    transition: all .3s ease-in-out;
    margin: 0px 6.5px;
    bottom: 0px;
    position: relative;

    .slick-center & {
        bottom: 25.88px;
    }

    @media screen and (max-width: 600px) {
        & {
            width: 320px !important;
            height: 175.342px !important;
        }
    }
`

const Block5Review = styled.div`
    width: 510.04px !important;
    height: 279.48px;
    background-color: #ffffff;
    border-radius: 20.96px;
    transition: all .3s ease-in-out;
    position: relative;
    display: flex;
    flex-direction: column;

    .slick-center & {
        width: 584px !important;
        height: 320px !important;
        border-radius: 24px;
        transition: all .3s ease-in-out;
    }

    @media screen and (max-width: 600px) {
        & {
            width: 279.476px !important;
            height: 153.137px;
        }

        .slick-center & {
            width: 320px !important;
            height: 175.342px !important;
        }
    }
`

const Block5ReviewAvatar = styled.img`
    width: 87.34px;
    height: 87.34px;
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    top: -52.4px;
    transition: all .3s ease-in-out;

    .slick-center & {
        width: 100px;
        height: 100px;
        top: -60px;
    }

    @media screen and (max-width: 600px) {
        & {
            width: 60px;
            height: 60px;
            top: -40px;
        }
        
        .slick-center & {
            width: 68.7px;
            height: 68.7px;
            top: -50px;
        }
    }
`

const Block5ReviewText = styled.div`
    margin-top: 75.11px;
    padding: 0px 34.94px;
    transition: all .3s ease-in-out;
    text-align: center;
    display: flex;
    flex-direction: column;

    .slick-center & {
        margin-top: 86px;
        padding: 0px 40px;
    }

    @media screen and (max-width: 600px) {
        & {
            margin-top: 26px;
            padding: 0px 4.37px;
        }

        .slick-center & {
            margin-top: 28px;
            padding: 0px 5px;
        }
    }
`

const Block5ReviewDescription = styled.span`
    font-family: 'Poppins';
    font-size: 17.47px;
    line-height: 26.2px;
    text-align: center;
    font-weight: 400;
    color: rgb(79, 80, 81);
    transition: all .3s ease-in-out;

    .slick-center & {
        font-size: 20px;
        line-height: 30px;
        color: rgb(35, 36, 38);
    }

    @media screen and (max-width: 600px) {
        & {
            font-size: 11px;
            line-height: 16px;
        }

        .slick-center & {
            font-size: 13px;
            line-height: 18px;
        }
    }
`

const Block5ReviewName = styled.span`
    margin-top: 28.82px;
    font-family: 'Poppins';
    font-weight: 500;
    line-height: 28.82px;
    text-align: center;
    font-size: 19.21px;
    transition: all .3s ease-in-out;

    .slick-center & {
        margin-top: 33px;
        font-size: 22px;
        line-height: 33px;
    }

    @media screen and (max-width: 600px) {
        & {
           margin-top: 8px;
           font-size: 15.72px;
           line-height: 15.72px;
        }

        .slick-center & {
            margin-top: 10px;
            font-size: 18px;
            line-height: 18px;
        }
    }
`

const Block5ReviewProfession = styled.span`
    font-family: 'Poppins';
    font-weight: 400;
    font-size: 13.97px;
    line-height: 20.96px;
    text-align: center;
    color: rgb(79, 80, 81);
    transition: all .3s ease-in-out;

    .slick-center & {
        font-size: 16px;
        line-height: 24px;
    }

    @media screen and (max-width: 600px) {
        & {
            margin-top: 3px;
            font-size: 16px;
        }

        .slick-center & {
            margin-top: 5px;
            font-size: 14px;
        }
    }
`

const Block5ReviewsButtons = styled.div`
    display: flex;
    justify-content: center;
    gap: 24px;
`

const Block5ReviewsButton = styled.div`
    width: 60px;
    height: 60px;
    position: relative;
    cursor: pointer;
    transition: all .3s ease-in-out;

    &::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        background: linear-gradient(92.65deg, #FDA060 0.68%, #ED4C4C 51.12%, #E8789D 110.33%);
        opacity: 0;
        transition: all .3s ease-in-out;
        border-radius: 50%;
        z-index: 0;
    }

    &:hover::before {
        opacity: 1;
    }
`

const Block5ReviewsButtonBackground = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 50%;
`

const Block5ReviwsButtonLine = styled.img<{left: boolean}>`
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto 0;
    left: ${({left}) => (left ? '25.59px': '')};
    right: ${({left}) => (left ? '': '25.59px')};
    transform: rotate(${({left}) => (left ? '180deg': '')});
    transition: all .3s ease-in-out;
`

const Block5Particle = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url(${particles1});
    background-size: cover;
    background-position-y: bottom;
    background-position-x: center;
    pointer-events: none;
    z-index: 0;
    top: 0;
`

const Block6 = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    position: relative;
    background: #ffffff;
    padding: 100px 0px;
`

const Block6Block = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: center;
`

const Block6Explanation = styled.div`
    padding: 8px 24px;
    position: relative;
    font-family: 'Poppins';
    font-weight: 400;
    font-size: 16px;
    letter-spacing: -.005em;
    text-align: center;
    line-height: 24px;
    border: 1px solid transparent;
    background: linear-gradient(rgb(255, 255, 255), rgb(255, 255, 255)) padding-box, linear-gradient(92.65deg, #FDA060 0.68%, #ED4C4C 51.12%, #E8789D 110.33%) border-box;
    border-radius: 100px;

    & span {
        background: linear-gradient(92.65deg, #FDA060 0.68%, #ED4C4C 51.12%, #E8789D 110.33%);
        background-clip: text;
        -webkit-text-fill-color: transparent;
    }
`

const Block6Text = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 14px;
`

const Block6Title = styled.span`
    font-family: 'TestSohne';
    font-weight: 400;
    font-size: 48px;
    line-height: 61.15px;
    letter-spacing: -.005em;
    color: rgb(35, 36, 38);
    text-align: center;
`

const Block6Description = styled.span`
    font-family: 'Poppins';
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    text-align: center;
    color: rgb(79, 80, 81);
`

const Block6FAQBlocks = styled.div`
    margin-top: 60px;
    display: flex;
    justify-content: center;
    gap: 44px;
    min-height: 624px;
    width: 100%;

    @media screen and (max-width: 864px) {
        & {
            flex-direction: column;
            align-items: center;
        }
    }
`

const Block6FAQBlock = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;

    &:last-child {
        width: 100%;
    }

    & .accordion-item {
        border: 0;
        border: 1px solid rgb(232, 232, 232) !important;
        border-radius: 12px;
        padding: 30px 24px;
        transition: padding .15s ease-in-out, background-color .15s ease-in-out;
    }

    & .accordion-item:not(:first-child) {
        margin-top: 24px;
    }

    & .accordion-item:has(div.show) {
        padding: 24px;
        background-color: rgb(242, 242, 242);
    }

    & .accordion-button {
        padding: 0px;
        font-family: 'TestSohne';
        font-weight: 400;
        font-size: 20px;
        line-height: 25px;
        color: rgb(79, 80, 81);
        transition: all .15s ease-in-out;
        border-radius: 100px !important;
        box-shadow: none;
        background-color: transparent !important;
    }

    & .accordion-button:not(.collapsed) {
        color: rgb(35, 36, 38);
    }

    & .accordion-body {
        padding: 0px !important;
        margin-top: 0px;
        transition: margin-top .15s ease-in-out;
        font-family: 'Poppins';
        font-weight: 400;
        font-size: 18px;
        line-height: 27px;
        color: rgb(79, 80, 81);
        max-width: 734px;
    }

    & .accordion-item:has(div.show) .accordion-body {
        margin-top: 24px;
    }
`

const Block6FAQBlockCategory = styled.div<{selected: boolean}>`
    display: flex;
    width: 370px;
    height: 85px;
    padding: 30px 24px;
    background: ${({selected}) => (selected ? 'rgb(242, 242, 242)': 'rgb(255, 255, 255)')};
    border: 1px solid rgb(232, 232, 232);
    justify-content: space-between;
    align-items: center;
    border-radius: 12px;
    transition: all .3s ease-in-out;
    cursor: pointer;

    @media screen and (max-width: 430px) {
        & {
            width: 100%;
        }
    }
`

const Block6FAQBlockCategoryTitle = styled.span<{selected: boolean}>`
    color: ${({selected}) => (selected ? 'rgb(35, 36, 38)' : 'rgb(79, 80, 81)')};
    font-family: 'TestSohne';
    font-weight: 400;
    font-size: 20px;
    line-height: 25.48px;
`

const Block6FAQBlockCategoryImg = styled.img`
    width: 10px;
`

const Block6FAQBlockSupport = styled.div`
    padding: 30px 24px;

    @media screen and (max-width: 420px) {
        & {
            padding: 0px;
        }
    }
`

const Block6FAQBlockSupportContainer = styled.div`
    gap: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 305px;
    height: 323px;
`

const Block6FAQBlockSupportImg = styled.img`
    width: 90px;
    height: 90px;
`

const Block6FAQBlockSupportTextBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
`

const Block6FAQBlockSupportText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
`

const Block6FAQBlockSupportTitle = styled.span`
    font-family: 'TestSohne';
    font-weight: 400;
    font-size: 20px;
    line-height: 25.48px;
    color: rgb(35, 36, 38);
`

const Block6FAQBlockSupportDescription = styled.span`
    text-align: center;
    font-family: 'Poppins';
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: rgb(79, 80, 81);
`

const Block6FAQSupportButton = styled.div`
    border-radius: 100px;
    width: 273px;
    height: 56px;
    padding: 16px 35px;
    gap: 6px;
    display: flex;
    background: rgb(239, 99, 68);
    cursor: pointer;
`

const Block6FAQSupportButtonImgBlock = styled.div`
    width: 24px;
    height: 24px;
    display: flex;
`

const Block6FAQSupportButtonImg = styled.img`
    width: 18px;
    height: 17px;
    position: relative;
    left: 4px;
    top: 2px;
`

const Block6FAQSupportButtonText = styled.span`
    font-family: 'Manrope';
    font-weight: 600;
    font-size: 16px;
    line-height: 21.86px;
    color: #ffffff;
`

const Block7 = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    position: relative;
    background: rgb(35, 36, 38);
    padding-top: 60px;
    padding-bottom: 40px;
`

const Block7Block = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid rgba(255, 255, 255, 0.16);
    padding-bottom: 40px;

    @media screen and (max-width: 940px) {
        & {
            flex-direction: column;
            align-items: center;
        }
    }
`

const Block7TextBlock = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;

    @media screen and (max-width: 940px) {
        & {
            text-align: center;
            align-items: center;
        }
    }
`

const Block7TextBlockImg = styled.img`
    width: 62px;
    height: 62px;
`

const Block7TextBlockText = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`

const Block7TextBlockTextTitle = styled.span`
    font-family: 'Manrope';
    font-weight: 700;
    font-size: 48px;
    color: #ffffff;
    line-height: 59.52px;
    letter-spacing: -.005em;
`

const Block7TextBlockTextDescription = styled.span`
    font-family: 'Poppins';
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: rgba(255, 255, 255, 0.9);
`

const Block7FormBlocks = styled.div`
    margin-top: 57px;
    display: flex;
    flex-direction: column;
    gap: 32px;

    @media screen and (max-width: 940px) {
        & {
            text-align: center;
        }
    }
`

const Block7FormBlockTitle = styled.span`
    font-family: 'Manrope';
    font-weight: 600;
    font-size: 24px;
    line-height: 32.78px;
    letter-spacing: -.005em;
    color: #ffffff;
`

const Block7FormBlock = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`

const Block7Form = styled.div`
    display: flex;
    gap: 12px;

    @media screen and (max-width: 550px) {
        & {
            flex-direction: column;
        }
    }
`

const Block7FormInput = styled.input`
    width: 356px;
    padding: 18px 24px;
    border: 1px solid rgba(255, 255, 255, 0.15);
    background: rgba(255, 255, 255, 0.1);
    font-family: 'Manrope';
    font-weight: 500;
    font-size: 16px;
    line-height: 21.86px;
    letter-spacing: -.005em;
    color: rgba(255, 255, 255, 0.9);
    border-radius: 100px;

    &::placeholder {
        color: rgba(255, 255, 255, 0.9);
    }

    &:focus {
        outline: none;
    }

    @media screen and (max-width: 360px) {
        & {
            width: 100%;
        }
    }
`

const Block7FormButton = styled.button`
    padding: 18px 40px;
    background: linear-gradient(92.65deg, #FDA060 0.68%, #ED4C4C 51.12%, #E8789D 110.33%);
    border-radius: 100px;
    font-family: 'Manrope';
    font-weight: 500;
    font-size: 16px;
    line-height: 21.86px;
    letter-spacing: -.005em;
    color: #ffffff;
    border: none;
`

const Block7FormDescription = styled.span`
    font-family: 'Poppins';
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    color: rgba(255, 255, 255, 0.9);
`

const Block7FormDescriptionUnderline = styled.span`
    color: rgb(255, 255, 255);
`

const Block8 = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    position: relative;
    background: rgb(35, 36, 38);
    padding-top: 60px;
    padding-bottom: 32px;
`

const Footer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding-bottom: 40px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.16);
    flex-wrap: wrap;
    gap: 20px;
`

const FooterBlock = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
`

const FooterCompanyBlock = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
`

const FooterCompanyLogo = styled.img`
    width: 68.99px;
    height: 57px;
`

const FooterCompanyName = styled.span`
    font-family: 'Manrope';
    font-weight: 700;
    font-size: 36px;
    line-height: 49.17px;
    color: #ffffff;
`

const FooterCompanyDescription = styled.span`
    font-family: 'Poppins';
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    letter-spacing: -.01em;
    color: rgb(154, 154, 154);
`

const FooterCompanySocials = styled.div`
    display: flex;
    gap: 24px;
`

const FooterCompanySocialImg = styled.img`
    width: 32px;
    height: 32px;
`

const FooterCompanyTitle = styled.span`
    font-family: 'Manrope';
    font-weight: 600;
    font-size: 20px;
    line-height: 27.32px;
    letter-spacing: -.01em;
    color: #ffffff;
`

const FooterCompanyText = styled.span`
    font-family: 'Poppins';
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    letter-spacing: -.01em;
    color: rgb(154, 154, 154);
    cursor: pointer;
`

const FooterCopyright = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 30px;
`

const FooterCopyrightText = styled.span`
    font-family: 'Poppins';
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -.01em;
    color: rgb(154, 154, 154);
`

const FooterParticle1 = styled.div`
    position: absolute;
    width: 50%;
    height: 100%;
    background-image: url(${particles3});
    background-size: cover;
    background-position-y: center;
    background-position-x: left;
    pointer-events: none;
    z-index: 0;
    top: 0;
    left: 0;
`

const FooterParticle2 = styled.div`
    position: absolute;
    width: 50%;
    height: 100%;
    background-image: url(${particles2});
    background-size: cover;
    background-position-y: center;
    background-position-x: right;
    pointer-events: none;
    z-index: 0;
    top: 0;
    right: 0;
`

const FooterAndForm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    position: relative;
`

function App() {
    const [selectedItem, setSelectedItem] = useState(0)
    const [selectedCategory, setSelectedCategory] = useState(0)
    const [overLeft, setOverLeft] = useState(false);
    const [overRight, setOverRight] = useState(false);

    const sliderRef = useRef<Slider>(null);

    return (
        <Warper>
            <Block1>
                <Container>
                    <Header>
                        <LogoBlock>
                            <Logo src={logo} />
                            <Name>FinWise</Name>
                        </LogoBlock>
                        <MenuBlock>
                            {['Home', 'About Us', 'Services', 'Pricing', 'Contact'].map((item, index) => (
                                <MenuItem key={index} selected={selectedItem === index} onClick={() => {setSelectedItem(index)}}>
                                    {item}
                                </MenuItem>
                            ))}
                        </MenuBlock>
                        <HeaderButton>Login</HeaderButton>
                    </Header>
                    <BannerBlock>
                        <BannerExplanation>Solutions for Smarter Finances</BannerExplanation>
                        <BannerTitle>Empowering Your Finance,<br/>One Click at a Time</BannerTitle>
                        <BannerDescription>Innovating finance with scalable, user-friendly solutions. Drive efficiency, mitigate<br/>risk, and enhance customer experiences for sustainable growth.</BannerDescription>
                        <BannerButtonsBlock>
                            <BannerButtonStart>Get Started</BannerButtonStart>
                            <BannerButtonDemo>Start A Demo</BannerButtonDemo>
                        </BannerButtonsBlock>
                    </BannerBlock>
                    <BannerBlock1 src={block1} />
                    <BannerBlock2 src={block2} />
                    <BannerBlock3 src={block3} />
                    <BannerBlockIPhone src={iPhone} />
                    <BannerBlock4 src={block4} />
                </Container>
                <BannerParticle />
            </Block1>
            <Block2>
                <Container>
                    <Block2Block>
                        <Block2Description>
                            <span>Features & Services</span>
                        </Block2Description>
                        <Block2Title>Shaping the Future of Finance,<br/>One Innovation at a Time!</Block2Title>
                        <Block2ContainerStats>
                            <Block2BlockStat>
                                <Block2BlockStatLogo src={block5} />
                                <Block2BlockStatTitle>Safe Transfers, Seamless<br/>Transactions!</Block2BlockStatTitle>
                                <Block2BlockStatDescription>It implies the presence of robust security measures such as encryption, authentication protocols, and fraud detection systems to safeguard transactions.</Block2BlockStatDescription>
                                <Block2BlockStatImg src={block7} />
                            </Block2BlockStat>
                            <Block2BlockStat>
                                <Block2BlockStatLogo src={block6} />
                                <Block2BlockStatTitle>Safeguarding Your Wealth,<br/>Securing Your Future!</Block2BlockStatTitle>
                                <Block2BlockStatDescription>Seamless transactions often involve user-friendly interfaces, automated processes, and interoperability between different financial systems or platforms.</Block2BlockStatDescription>
                                <Block2BlockStatImg src={block8} />
                            </Block2BlockStat>
                        </Block2ContainerStats>
                    </Block2Block>
                </Container>
            </Block2>
            <Block3>
                <Container>
                    <Block3Block>
                        <Block3Title>Trusted by <Block3TitleColor>150+ top industry</Block3TitleColor> leading companies</Block3Title>
                        <Block3Sponsors>
                            <Block3SponsorImg src={sponsor1} />
                            <Block3SponsorImg src={sponsor2} />
                            <Block3SponsorImg src={sponsor3} />
                            <Block3SponsorImg src={sponsor4} />
                            <Block3SponsorImg src={sponsor5} />
                            <Block3SponsorImg src={sponsor6} />
                        </Block3Sponsors>
                    </Block3Block>
                </Container>
            </Block3>
            <Block4>
                <Container>
                    <Block4Block>
                        <Block4Ads>
                            <Block4AdsImg1 src={block9} />
                            <Block4AdsText>
                                <Block4AdsTextExplanation>
                                    <span>Data Analytics</span>
                                </Block4AdsTextExplanation>
                                <Block4AdsTextTitle>Advanced Data Analytics at Your Service!</Block4AdsTextTitle>
                                <Block4AdsTextDescriptions>
                                    <Block4AdsTextDescription>
                                        <Block4AdsTextDescriptionImg src={block10} />
                                        <Block4AdsTextDescriptionText>
                                            <Block4AdsTextDescriptionTitle>Personalized Financial Services</Block4AdsTextDescriptionTitle>
                                            <Block4AdsTextDescriptionDescription>Analyzing habits and tolerance enables tailored advice, empowering financial goals.</Block4AdsTextDescriptionDescription>
                                        </Block4AdsTextDescriptionText>
                                    </Block4AdsTextDescription>
                                    <Block4AdsTextDescription>
                                        <Block4AdsTextDescriptionImg src={block11} />
                                        <Block4AdsTextDescriptionText>
                                            <Block4AdsTextDescriptionTitle>Enhanced Customer Experience</Block4AdsTextDescriptionTitle>
                                            <Block4AdsTextDescriptionDescription>Analyzing interactions yields insights, optimizing services for satisfaction.</Block4AdsTextDescriptionDescription>
                                        </Block4AdsTextDescriptionText>
                                    </Block4AdsTextDescription>
                                </Block4AdsTextDescriptions>
                            </Block4AdsText>
                        </Block4Ads>
                        <Block4Ads>    
                            <Block4AdsText>
                                <Block4AdsTextExplanation>
                                    <span>Mobile App</span>
                                </Block4AdsTextExplanation>
                                <Block4AdsTextTitle>Feel the best experience with our features</Block4AdsTextTitle>
                                <Block4AdsDescription2>Streamline your team’s workflow, track progress, and collaborate effectively. Streamline your team’s workflow, track progress, and collaborate effectively.</Block4AdsDescription2>
                                <Block4AdsDownloads>
                                    <Block4AdsDownloadTitle>Download Our Mobile App For Free</Block4AdsDownloadTitle>
                                    <Block4AdsDownloadImgs>
                                        <Block4AdsDownloadImg src={block13} />
                                        <Block4AdsDownloadImg src={block14} />
                                    </Block4AdsDownloadImgs>
                                </Block4AdsDownloads>
                            </Block4AdsText>
                            <Block4AdsImg2 src={block12} />
                        </Block4Ads>
                    </Block4Block>
                </Container>
            </Block4>
            <Block5>
                <Container>
                    <Block5Block>
                        <Block5BlockText>
                            <Block5Explanation>
                                <span>Client Feedback</span>
                            </Block5Explanation>
                            <Block5Title>What Our Users Say About Us</Block5Title>
                            <Block5Description>From glowing reviews to insightful feedback, learn how our services<br/>have made an impact and why users trust us.</Block5Description>
                        </Block5BlockText>
                        <Block5Slider>
                            <Slider ref={sliderRef} arrows={false} variableWidth={true} slidesToShow={3} slidesToScroll={1} infinite={true} centerMode={true} speed={500}>
                                <Block5ReviewBlock>
                                    <Block5Review>
                                        <Block5ReviewAvatar src={reviewava1} />
                                        <Block5ReviewText>
                                            <Block5ReviewDescription>Outstanding creativity and innovation showcased in every aspect of our project. Truly remarkable work! Thank you for making our digital dreams a reality.</Block5ReviewDescription>
                                            <Block5ReviewName>Ethan Johnson</Block5ReviewName>
                                            <Block5ReviewProfession>Marketing Manager</Block5ReviewProfession>
                                        </Block5ReviewText>
                                    </Block5Review>
                                </Block5ReviewBlock>
                                <Block5ReviewBlock>
                                    <Block5Review>
                                        <Block5ReviewAvatar src={reviewava2} />
                                        <Block5ReviewText>
                                            <Block5ReviewDescription>Impressed by the strategic approach to our digital marketing campaign. Results exceeded expectations! Incredible attention to detail! Our app is not only user-friendly.</Block5ReviewDescription>
                                            <Block5ReviewName>Jacob Carter</Block5ReviewName>
                                            <Block5ReviewProfession>Software Engineer</Block5ReviewProfession>
                                        </Block5ReviewText>
                                    </Block5Review>
                                </Block5ReviewBlock>
                                <Block5ReviewBlock>
                                    <Block5Review>
                                        <Block5ReviewAvatar src={reviewava3} />
                                        <Block5ReviewText>
                                            <Block5ReviewDescription>Thank you for going above and beyond to ensure our project's success. Highly recommend! Responsive, reliable, and results-driven. Our partnership with your agency has</Block5ReviewDescription>
                                            <Block5ReviewName>Kevin Davis</Block5ReviewName>
                                            <Block5ReviewProfession>Financial Advisor</Block5ReviewProfession>
                                        </Block5ReviewText>
                                    </Block5Review>
                                </Block5ReviewBlock>
                                <Block5ReviewBlock>
                                    <Block5Review>
                                        <Block5ReviewAvatar src={reviewava1} />
                                        <Block5ReviewText>
                                            <Block5ReviewDescription>Outstanding creativity and innovation showcased in every aspect of our project. Truly remarkable work! Thank you for making our digital dreams a reality.</Block5ReviewDescription>
                                            <Block5ReviewName>Ethan Johnson</Block5ReviewName>
                                            <Block5ReviewProfession>Marketing Manager</Block5ReviewProfession>
                                        </Block5ReviewText>
                                    </Block5Review>
                                </Block5ReviewBlock>
                                <Block5ReviewBlock>
                                    <Block5Review>
                                        <Block5ReviewAvatar src={reviewava2} />
                                        <Block5ReviewText>
                                            <Block5ReviewDescription>Impressed by the strategic approach to our digital marketing campaign. Results exceeded expectations! Incredible attention to detail! Our app is not only user-friendly.</Block5ReviewDescription>
                                            <Block5ReviewName>Jacob Carter</Block5ReviewName>
                                            <Block5ReviewProfession>Software Engineer</Block5ReviewProfession>
                                        </Block5ReviewText>
                                    </Block5Review>
                                </Block5ReviewBlock>
                                <Block5ReviewBlock>
                                    <Block5Review>
                                        <Block5ReviewAvatar src={reviewava3} />
                                        <Block5ReviewText>
                                            <Block5ReviewDescription>Thank you for going above and beyond to ensure our project's success. Highly recommend! Responsive, reliable, and results-driven. Our partnership with your agency has</Block5ReviewDescription>
                                            <Block5ReviewName>Kevin Davis</Block5ReviewName>
                                            <Block5ReviewProfession>Financial Advisor</Block5ReviewProfession>
                                        </Block5ReviewText>
                                    </Block5Review>
                                </Block5ReviewBlock>
                            </Slider>
                        </Block5Slider>
                        <Block5ReviewsButtons>
                            <Block5ReviewsButton onMouseOver={() => {setOverLeft(true)}} onMouseOut={() => {setOverLeft(false)}} onClick={() => {sliderRef.current?.slickPrev()}}>
                                <Block5ReviewsButtonBackground src={reviewbuttonbackground} />
                                <Block5ReviwsButtonLine src={overLeft ? reviewline : reviewlinecolor} left={true} />
                            </Block5ReviewsButton>
                            <Block5ReviewsButton onMouseOver={() => {setOverRight(true)}} onMouseOut={() => {setOverRight(false)}} onClick={() => {sliderRef.current?.slickNext()}}>
                                <Block5ReviewsButtonBackground src={reviewbuttonbackground} />
                                <Block5ReviwsButtonLine src={overRight ? reviewline : reviewlinecolor} left={false} />
                            </Block5ReviewsButton>
                        </Block5ReviewsButtons>
                    </Block5Block>
                </Container>
                <Block5Particle />
            </Block5>
            <Block6>
                <Container>
                    <Block6Block>
                        <Block6Explanation>
                            <span>FAQ</span>
                        </Block6Explanation>
                        <Block6Text>
                            <Block6Title>Frequently Asked Questions</Block6Title>
                            <Block6Description>Building an effective finance website requires careful planning,<br/>attention to detail, and a focus on user experience.</Block6Description>
                        </Block6Text>
                        <Block6FAQBlocks>
                            <Block6FAQBlock>
                                {['General Questions', 'Support Team'].map((item, index) => (
                                    <Block6FAQBlockCategory selected={index === selectedCategory} key={index} onClick={() => {setSelectedCategory(index)}}>
                                        <Block6FAQBlockCategoryTitle selected={index === selectedCategory}>{item}</Block6FAQBlockCategoryTitle>
                                        <Block6FAQBlockCategoryImg src={FAQline} />
                                    </Block6FAQBlockCategory>
                                ))}
                                <Block6FAQBlockSupport>
                                    <Block6FAQBlockSupportContainer>
                                        <Block6FAQBlockSupportImg src={FAQsupport} />
                                        <Block6FAQBlockSupportTextBlock>
                                            <Block6FAQBlockSupportText>
                                                <Block6FAQBlockSupportTitle>You have different questions?</Block6FAQBlockSupportTitle>
                                                <Block6FAQBlockSupportDescription>Our team will answer all your questions. We ensure a quick response.</Block6FAQBlockSupportDescription>
                                            </Block6FAQBlockSupportText>
                                            <Block6FAQSupportButton>
                                                <Block6FAQSupportButtonImgBlock>
                                                    <Block6FAQSupportButtonImg src={FAQphone} />
                                                </Block6FAQSupportButtonImgBlock>
                                                <Block6FAQSupportButtonText>Contact Support Team</Block6FAQSupportButtonText>
                                            </Block6FAQSupportButton>
                                        </Block6FAQBlockSupportTextBlock>
                                    </Block6FAQBlockSupportContainer>
                                </Block6FAQBlockSupport>
                            </Block6FAQBlock>
                            <Block6FAQBlock>
                                <Accordion defaultActiveKey="0">
                                    <Accordion.Item eventKey="0" >
                                        <Accordion.Header>What are the benefits of using SaaS?</Accordion.Header>
                                        <Accordion.Body>Some benefits of using SaaS include cost-effectiveness, scalability, accessibility from anywhere with an internet connection, automatic updates, and reduced IT overhead.</Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>What are the benefits of using SaaS?</Accordion.Header>
                                        <Accordion.Body>Some benefits of using SaaS include cost-effectiveness, scalability, accessibility from anywhere with an internet connection, automatic updates, and reduced IT overhead.</Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header>What are the benefits of using SaaS?</Accordion.Header>
                                        <Accordion.Body>Some benefits of using SaaS include cost-effectiveness, scalability, accessibility from anywhere with an internet connection, automatic updates, and reduced IT overhead.</Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="3">
                                        <Accordion.Header>What are the benefits of using SaaS?</Accordion.Header>
                                        <Accordion.Body>Some benefits of using SaaS include cost-effectiveness, scalability, accessibility from anywhere with an internet connection, automatic updates, and reduced IT overhead.</Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="4">
                                        <Accordion.Header>What are the benefits of using SaaS?</Accordion.Header>
                                        <Accordion.Body>Some benefits of using SaaS include cost-effectiveness, scalability, accessibility from anywhere with an internet connection, automatic updates, and reduced IT overhead.</Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </Block6FAQBlock>
                        </Block6FAQBlocks>
                    </Block6Block>
                </Container>
            </Block6>
            <FooterAndForm>
                <Block7>
                    <Container>
                        <Block7Block>
                            <Block7TextBlock>
                                <Block7TextBlockImg src={block15} />
                                <Block7TextBlockText>
                                    <Block7TextBlockTextTitle>Stay updated, stay<br/>connected</Block7TextBlockTextTitle>
                                    <Block7TextBlockTextDescription>Subscribe to newsletters from reputable news outlets or<br/>websites covering topics of interest to you.</Block7TextBlockTextDescription>
                                </Block7TextBlockText>
                            </Block7TextBlock>
                            <Block7FormBlocks>
                                <Block7FormBlockTitle>Get Our News And Updates</Block7FormBlockTitle>
                                <Block7FormBlock>
                                    <Block7Form>
                                        <Block7FormInput placeholder={'Enter your email'} />
                                        <Block7FormButton>Subscribe</Block7FormButton>
                                    </Block7Form>
                                    <Block7FormDescription>By subscribing you agree to our <u><Block7FormDescriptionUnderline>Privacy Policy</Block7FormDescriptionUnderline></u></Block7FormDescription>
                                </Block7FormBlock>
                            </Block7FormBlocks>
                        </Block7Block>
                    </Container>
                </Block7>
                <Block8>
                    <Container>
                        <Footer>
                            <FooterBlock>
                                <FooterCompanyBlock>
                                    <FooterCompanyLogo src={logo} />
                                    <FooterCompanyName>FinWise</FooterCompanyName>
                                </FooterCompanyBlock>
                                <FooterCompanyDescription>Seamless transactions, personalized<br/>insights, and innovative solutions for<br/>a smarter tomorrow.</FooterCompanyDescription>
                                <FooterCompanySocials>
                                    <FooterCompanySocialImg src={instagram} />
                                    <FooterCompanySocialImg src={youtube} />
                                    <FooterCompanySocialImg src={facebook} />
                                    <FooterCompanySocialImg src={linked} />
                                    <FooterCompanySocialImg src={twitter} />
                                </FooterCompanySocials>
                            </FooterBlock>
                            <FooterBlock>
                                <FooterCompanyTitle>About</FooterCompanyTitle>
                                <FooterCompanyText>Company</FooterCompanyText>
                                <FooterCompanyText>Leadership</FooterCompanyText>
                                <FooterCompanyText>Press</FooterCompanyText>
                                <FooterCompanyText>Careers</FooterCompanyText>
                            </FooterBlock>
                            <FooterBlock>
                            <FooterCompanyTitle>Help</FooterCompanyTitle>
                                <FooterCompanyText>Help Center</FooterCompanyText>
                                <FooterCompanyText>Support Team</FooterCompanyText>
                                <FooterCompanyText>Community</FooterCompanyText>
                                <FooterCompanyText>FAQs</FooterCompanyText>
                            </FooterBlock>
                            <FooterBlock>
                            <FooterCompanyTitle>Product</FooterCompanyTitle>
                                <FooterCompanyText>Overview</FooterCompanyText>
                                <FooterCompanyText>Business Account</FooterCompanyText>
                                <FooterCompanyText>Credit Card</FooterCompanyText>
                                <FooterCompanyText>Financial Modelling</FooterCompanyText>
                            </FooterBlock>
                            <FooterBlock>
                            <FooterCompanyTitle>Company</FooterCompanyTitle>
                                <FooterCompanyText>About Finwise</FooterCompanyText>
                                <FooterCompanyText>Contact</FooterCompanyText>
                                <FooterCompanyText>News & Blogs</FooterCompanyText>
                            </FooterBlock>
                        </Footer>
                        <FooterCopyright>
                            <FooterCopyrightText>Copyright © 2024 FinWise All Rights Reserved.</FooterCopyrightText>
                            <FooterCopyrightText>Privacy Policy</FooterCopyrightText>
                        </FooterCopyright>
                    </Container>
                </Block8>
                <FooterParticle1 />
                <FooterParticle2 />
            </FooterAndForm>
        </Warper>
    );
}

export default App;