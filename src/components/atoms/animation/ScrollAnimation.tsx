import { useRef, ReactNode, useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

type AnimatedContainerProps = {
  children: ReactNode;
  animationType: 'left' | 'right' | 'fadeIn' | 'bottomTop';
}

const ScrollAnimation = ({ children, animationType }: AnimatedContainerProps) => {
  const [showAnimation, setShowAnimation] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        setShowAnimation(true);
      }
    });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  let Container: React.ElementType | null = null;
  if (animationType === 'left') {
    Container = SlideInFromLeftContainer;
  } else if (animationType === 'right') {
    Container = SlideInFromRightContainer;
  } else if (animationType === 'fadeIn') {
    Container = FadeInContainer;
  } else if (animationType === 'bottomTop') {
    Container = SlideInFromBottomContainer;
  }

  return (
    <>
      {Container && (
        <Container ref={containerRef} className={showAnimation ? 'show' : ''}>
          {children}
        </Container>
      )}
    </>
  );
};

export default ScrollAnimation;


const slideInFromLeft = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
`;

const slideInFromRight = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const slideInFromBottom = keyframes`
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(0);
  }
`;

const SlideInFromLeftContainer = styled.div`
  opacity: 0;
  transition: opacity 0.5s;

  &.show {
    animation: ${slideInFromLeft} 1s ease;
    opacity: 1;
  }
`;

const SlideInFromRightContainer = styled.div`
  opacity: 0;
  transition: opacity 0.5s;

  &.show {
    animation: ${slideInFromRight} 1s ease;
    opacity: 1;
  }
`;

const FadeInContainer = styled.div`
  opacity: 0;
  transition: opacity 0.5s;

  &.show {
    animation: ${fadeIn} 1s ease;
    opacity: 1;
  }
`;

const SlideInFromBottomContainer = styled.div`
  opacity: 0;
  transition: opacity 0.5s;

  &.show {
    animation: ${slideInFromBottom} 1s ease;
    opacity: 1;
  }
`;