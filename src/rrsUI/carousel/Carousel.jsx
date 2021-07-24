/*
 * Filename: Carousel.jsx
 * Path: /Users/mouni/NUWorkspace/rrs-web-app
 * Created Date: Monday, May 31st 2021, 1:47:02 pm
 * Author: Mouni
 * Copyright (c) 2021 Your Company */

// Import Dependencies, scss and helper function
import Image from '@RRS-UI/image/Image';
import { array, bool, string } from 'prop-types';
import { useEffect, useRef, useState } from 'react';
import Card from '../card/Card';
import Icon from '../icon/Icon';
import ImageZoom from '../imageZoom/ImageZoom';
import { Col, Row } from '../layout';
import styles from './Carousel.module.scss';

/**
 * Carousel Component
 * @param {string} className - to control the Price Component
 * @param {array} images - list of images to be displayed
 * @param {boolean} isMobile - to decide horizontal slide or vertical slide
 * @returns {*}
 */

const Carousel = ({ images, className, isMobile }) => {
  const imgLength = images?.length ?? 0;
  if (!imgLength) return null;

  const [currImg, setCurrImg] = useState(0);
  const [zoomPreload, setzoomPreload] = useState(false);

  const [left, setLeft] = useState(0);
  const carouselWraperNode = useRef();
  // Function to handle next button operations
  const next = () => {
    isMobile ? slideMoveHorizontal(currImg) : slideMoveVertical(currImg);
    setCurrImg(currImg === imgLength - 1 ? 0 : currImg + 1);
  };

  // Function to handle next button operations
  const prev = () => {
    isMobile ? slideMoveHorizontal(currImg) : slideMoveVertical(currImg);
    setCurrImg(currImg === 0 ? imgLength - 1 : currImg - 1);
  };

  const getLeftPosition = (currentSlide, thumbnailWidth) => {
    return currentSlide * thumbnailWidth;
  };

  const slideMoveHorizontal = (index) => {
    const sliderWidth = carouselWraperNode?.current?.offsetWidth;
    const thumbWidth = carouselWraperNode?.current?.childNodes[index]?.offsetWidth;
    const leftPosition = getLeftPosition(index, thumbWidth);
    const totalItemsWidth = imgLength * thumbWidth;

    if (totalItemsWidth <= sliderWidth) {
      setCurrImg(index);
      return null;
    }
    const isEndgeImage = sliderWidth - leftPosition < thumbWidth;
    const isImgScrollable = sliderWidth + left < totalItemsWidth;
    if (isEndgeImage && isImgScrollable) {
      setLeft(totalItemsWidth - leftPosition);
    } else if (leftPosition > thumbWidth && leftPosition + left < totalItemsWidth) {
      setLeft(0);
    }
    setCurrImg(index);
  };

  const slideMoveVertical = (index) => {
    const sliderHeight = carouselWraperNode?.current?.parentNode?.offsetHeight;
    const thumbHeight = carouselWraperNode?.current?.childNodes[index]?.offsetHeight;
    const leftPosition = getLeftPosition(index, thumbHeight);
    const totalItemsHeight = imgLength * thumbHeight;
    if (totalItemsHeight <= sliderHeight) {
      setCurrImg(index);
      return null;
    }
    const isEndgeImage = sliderHeight - leftPosition < thumbHeight;
    const isImgScrollable = sliderHeight + left < totalItemsHeight;
    if (isEndgeImage && isImgScrollable) {
      setLeft(totalItemsHeight - leftPosition);
    } else if (leftPosition > thumbHeight && leftPosition + left < totalItemsHeight) {
      setLeft(0);
    }
    setCurrImg(index);
  };

  useEffect(() => {
    setzoomPreload(true);
  }, [currImg]);

  return (
    <Row
      className={`${styles.carousel} ${className}`}
      flexWrap="nowrap"
      flexDirection="column-reverse"
    >
      <Col className={styles.carouselThumb} noflex>
        <Row flexDirection="column" rowGap={5}>
          {images?.map((img, index) => (
            <Card
              className={`${styles.carouselThumbItem} ${
                currImg === index ? styles.carouselThumbItemActive : ''
              }`}
              image={<Image src={img.src} />}
              key={img.src}
            />
          ))}
        </Row>
      </Col>
      <Col>
        <Row flexWrap="nowrap" className={styles.carouselMain}>
          <button className={styles.carouselArrowLeft}>
            <Icon iconName="caret_left_big" onClick={prev} />
          </button>
          <Row className={styles.carouselMainImage}>
            <ImageZoom
              src={images[currImg].src}
              zoomSrc={images[currImg].src}
              zoomPreload={zoomPreload}
            />
          </Row>
          <button className={styles.carouselArrowRight}>
            <Icon iconName="caret_right_big" onClick={next} />
          </button>
        </Row>
      </Col>
    </Row>
  );
};

Carousel.propTypes = {
  className: string,
  images: array.isRequired,
  isMobile: bool,
};

Carousel.defaultProps = {
  className: '',
  isMobile: false,
};
export default Carousel;
