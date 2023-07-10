import { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import PageTopButtonImg from "../../../images/pagetop_button.svg";

const PageTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // スクロールの位置
      const threshold = 200;

      if (scrollY > threshold) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {showButton && (
        <Button href="#" onClick={handleScrollToTop}>
          <Img src={PageTopButtonImg} alt="上" />
        </Button>
      )}
    </>
  );
};

export default PageTopButton;

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Button = styled.a`
  display: block;

  position: fixed;
  bottom: 3rem;
  right: 3rem;

  padding: 1rem;
  border-radius: 50%;

  text-align: center;
  background-color: #85a389;
  animation: ${fadeIn} 0.5s ease-in-out;

  @media (max-width: 600px) {
    transform: translateX(50%);
    right: 50%;
  }
`;

const Img = styled.img`
  width: 40px;
  height: 40px;
`;
