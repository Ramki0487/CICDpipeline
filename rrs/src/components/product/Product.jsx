/* istanbul ignore file */
/*
 * File: Product.jsx
 * Project: webapp-rrs
 * Created Date: Thursday, December 31st 2020, 12:56:53 am
 * Author: Riyaz <riyaz.pasha@nutechnologyinc.com>
 * -----
 * Copyright (c) 2020 All rights reserved
 * ------------------------------------
 */

import { formatPriceObject } from '@Components/helpers/Price.helper';
import { addItemToCart, constructProductImageUrl } from '@Components/helpers/Product.helper';
import {
  addMembershipToCart,
  removeMembershipFromCart,
} from '@Components/helpers/VipMembership.helper';
import LinkTag from '@Components/linkTag/LinkTag';
import { INITIAL_QUANTITY, MAX_QUANTITY, MIN_QUANTITY } from '@Configs/ProductConfig';
import Breadcrumb from '@RRS-UI/breadcrumb/Breadcrumb';
import Button from '@RRS-UI/button/Button';
import Carousel from '@RRS-UI/carousel/Carousel';
import Icon from '@RRS-UI/icon/Icon';
import { Col, Container, Row } from '@RRS-UI/layout';
import Price from '@RRS-UI/price/Price';
import Quantity from '@RRS-UI/quantity/Quantity';
import StarRating from '@RRS-UI/starRating/StarRating';
import ToggleButton from '@RRS-UI/toggleButton/ToggleButton';
import Typography from '@RRS-UI/typography/Typography';
import dynamic from 'next/dynamic';
import { object } from 'prop-types';
import { useState } from 'react';
import ContentLoader from 'react-content-loader';
import { useSelector } from 'react-redux';
import { constructBrandUrl, getProductTitle, validateSelectedVairants } from './Product.helper';
import styles from './Product.module.scss';
import ProductDetail from './productDetail/ProductDetail';
import ProductVariants from './productVariants/ProductVariants';

const PowerReviews = dynamic(() => import('./powerReviews/PowerReviews'), { ssr: false });
const AddToCartModal = dynamic(() => import('../addToCartModal/AddToCartModal'), { ssr: false });
const Recommendations = dynamic(() => import('../recommendations/Recommendations'), { ssr: false });
const CustomInsole = dynamic(() => import('./customInsole/CustomInsole'), { ssr: false });
const ShipmentOptions = dynamic(() => import('./shipmentOptions/ShipmentOptions'), { ssr: false });

/**
 * Product details module
 * @returns
 */
const Product = ({ product }) => {
  if (!product || (product && !Object.keys(product)?.length)) return null;

  const { isMobile, isDesktop, isTablet } = useSelector((state) => state.device);
  const { membershipLevel } = useSelector((state) => state.sessionInfo);

  const productId = product.id;

  const [selectedVariants, setSelectedVariants] = useState({});
  const [hasInvalidVariants, setHasInvalidVariants] = useState(false);

  const [skuId, setSkuId] = useState('');
  const [locationId, setLocationId] = useState();
  const [shipMentType, setShipMentType] = useState();
  const [quantity, setQuantity] = useState(INITIAL_QUANTITY);

  //TODO:- Clean up once Scene7 Issue fixed in API
  const [carouselImages, setCarouselImages] = useState([
    { src: constructProductImageUrl(productId) },
  ]);
  const [reviewData, setReviewData] = useState();
  const [addToCartResponse, setAddToCartResponse] = useState();
  const [isMembershipChoosed, setMembershipChoosed] = useState();
  const [errors, setErrors] = useState();
  const [isAddingToCart, setIsAddingToCart] = useState();

  const price = product.price;
  const isVipUser = false;
  const isCustomInsoleProduct = product.subPgcCode?.toLowerCase() === 'custominsole';
  const isGiftCardProduct = product.subPgcCode?.toLowerCase() === 'gift cards';
  const isDonationProduct = product.subPgcCode?.toLowerCase() === 'aha donation';
  const isAllVariantsSelected = validateSelectedVairants(product.variantGroups, selectedVariants);

  const showRecommendationSection = () =>
    !isCustomInsoleProduct && !isGiftCardProduct && !isDonationProduct;
  const showReviewsSection = () => !isGiftCardProduct && !isDonationProduct;
  const showProductDescription = () => !isGiftCardProduct;

  const refreshProductBlocks = ({ variants, skuId }) => {
    if (variants?.colors) {
      loadHeroImage(variants?.colors);
    }

    setSelectedVariants(variants);
    setSkuId(skuId);
  };

  const loadHeroImage = (colorCode) =>
    setCarouselImages([{ src: constructProductImageUrl(productId, colorCode) }]);

  const validateVariantSelection = () => {
    if (!isAllVariantsSelected) {
      setHasInvalidVariants(true);
      return false;
    }
    return true;
  };

  const handleLocationIdChange = (id) => setLocationId(id);
  const handleShipmentSelection = (type) => setShipMentType(type);

  const handleAddToCartClick = async () => {
    if (validateVariantSelection()) {
      setIsAddingToCart(true);

      const request = {
        skuId: skuId,
        productId: productId,
        quantity: quantity,
      };

      if (shipMentType === 'pickup') {
        request.locationId = locationId;
      }

      const response = await addItemToCart(request);

      if (response?.success) {
        setAddToCartResponse(response?.state);
      } else {
        setErrors(response?.errors);
      }

      setIsAddingToCart(false);
    }
    return false;
  };

  const handleOnQtyChange = (qty) => {
    setQuantity(qty);
  };

  //Todo: logic need to check
  const priceInput = formatPriceObject(
    price,
    product?.saleMessage,
    product?.outlet,
    product?.exclusive,
    product?.umapProduct
  );

  // TODO:- Handle Product price updates based on selection
  const toggleMembership = async (isEnabled) => {
    if (isEnabled) {
      const response = await addMembershipToCart(membershipLevel);
      setMembershipChoosed(response?.success ? true : false);
    } else {
      // TODO:- Handle remove usecase
      await removeMembershipFromCart();
    }
  };

  //Method to render title and rating
  const renderTitleAndStarRating = (gender, brand, displayName) => {
    const productTitle = getProductTitle(gender, brand, displayName);
    return (
      <>
        <LinkTag href={constructBrandUrl(brand)}>{brand}</LinkTag>
        <Typography className={styles.productWrapperTitle} variant="h2">
          {productTitle}
        </Typography>
        {showReviewsSection() && (
          <Col className={styles.productWrapperReviewSnippet}>
            {reviewData ? (
              reviewData.review_count > 0 && (
                <StarRating
                  rating={reviewData?.average_rating}
                  reviewCount={reviewData?.review_count}
                  reviewMessage="reviews"
                />
              )
            ) : (
              <ContentLoader width="100%" height="20">
                <rect x="0" y="0" width="50%" height="20" />
              </ContentLoader>
            )}
          </Col>
        )}
      </>
    );
  };

  const emptyVariants = () => {
    return product.variantGroups && Object.keys(product.variantGroups)?.length > 0;
  };

  const showRatings = (data) => setReviewData(data);

  return (
    <Container className={styles.product}>
      <Row className={styles.productWrapper}>
        <Col md={12}>
          <Breadcrumb LinkTag={LinkTag} current="Product" />
          <Row flexDirection={isDesktop ? 'row' : 'column'} rowGap={30}>
            <Col className={styles.productWrapperCarousel} lg={7}>
              {!isDesktop &&
                renderTitleAndStarRating(product.gender, product.brand, product.displayName)}
              <Row className={styles.productCarousel}>
                {product.outlet && (
                  <Icon className={styles.productCarouselStickyIcon} iconName="outlet" />
                )}
                {product.exclusive && (
                  <Icon className={styles.productCarouselStickyIcon} iconName="vip_only" />
                )}
                {carouselImages ? (
                  <Carousel images={carouselImages} isMobile={isMobile || isTablet} />
                ) : (
                  <ContentLoader width="100%" height="100%">
                    <rect x="0" y="0" width="70" height="70" />
                    <rect x="0" y="80" width="70" height="70" />
                    <rect x="0" y="160" width="70" height="70" />
                    <rect x="100" y="0" width="100%" height="100%" />
                  </ContentLoader>
                )}
              </Row>
            </Col>
            <Col className={styles.productWrapperInfo} lg={5}>
              {isDesktop &&
                renderTitleAndStarRating(product.gender, product.brand, product.displayName)}
              <Price
                className={styles.productWrapperInfoPrice}
                priceInput={priceInput}
                type="pdp"
              />

              {isCustomInsoleProduct && <CustomInsole />}

              <ProductVariants
                isCustomInsoleProduct={isCustomInsoleProduct}
                isGiftCardProduct={isGiftCardProduct}
                variantGroups={product.variantGroups}
                hasInvalidVariants={hasInvalidVariants}
                handleOnVariantSelection={refreshProductBlocks}
                productId={productId}
              />

              {product.inventory?.stockLevel > 0 &&
                (product.inventory?.stockLevel >= 10 ? (
                  <Typography className={styles.productInvStock} variant="p">
                    <Icon iconName="checkmark" /> In stock & ready to ship
                  </Typography>
                ) : (
                  <Typography className={styles.productInvLow} variant="p">
                    Only {product.inventory?.stockLevel} left in stock
                  </Typography>
                ))}

              {!isVipUser && (
                <Row className={styles.productWrapperVipBox} flexDirection="column">
                  <Row className={styles.productWrapperVipBoxToggle} alignItems="center">
                    <ToggleButton toggleAfter="Yes" toggleBefore="ADD" onClick={toggleMembership} />
                    {isMembershipChoosed ? (
                      <Typography variant="p">
                        <Icon iconName="welcome" />
                        Welcome VIP!
                      </Typography>
                    ) : (
                      <Typography variant="p">
                        <strong>Become a VIP & save $4.30 today</strong>
                      </Typography>
                    )}
                  </Row>
                  {!isMembershipChoosed && (
                    <Typography className={styles.productWrapperVipBoxJoin} variant="p">
                      Join the VIP Family for $1.99. <a>Learn more</a>
                    </Typography>
                  )}
                </Row>
              )}

              {
                <ShipmentOptions
                  skuId={skuId}
                  quantity={quantity}
                  isAllVariantsSelected={isAllVariantsSelected}
                  validateVariantSelection={validateVariantSelection}
                  handleLocationIdChange={handleLocationIdChange}
                  handleShipmentSelection={handleShipmentSelection}
                />
              }

              <Row className={styles.productWrapperInfoAddToCart}>
                <Col xs={4} lg={3} className={styles.productWrapperInfoAddToCartQtyBox}>
                  <Quantity
                    className={`${!emptyVariants() ? styles.inactive : ''} ${
                      styles.productWrapperInfoAddToCartQty
                    }`}
                    initialQty={INITIAL_QUANTITY}
                    minQty={MIN_QUANTITY}
                    maxQty={MAX_QUANTITY}
                    handleOnQtyChange={handleOnQtyChange}
                  />
                </Col>
                <Col xs={8} lg={9}>
                  <Button
                    className={styles.productWrapperInfoAddToCartBtn}
                    onClick={handleAddToCartClick}
                    disabled={!emptyVariants()}
                    theme="rr-green"
                    size="medium"
                    isProcessing={isAddingToCart}
                    processingLabel="Adding To Cart..."
                  >
                    {!emptyVariants() ? 'Out Of Stock' : 'Add to Cart'}
                  </Button>
                </Col>
                {errors?.[0]?.message && (
                  <Typography variant="p" className={styles.productError}>
                    {errors[0].message}
                  </Typography>
                )}
              </Row>
              {isVipUser && (
                <Row
                  className={`${styles.productWrapperVipBox} ${styles.productWrapperVipBoxActive}`}
                >
                  <Typography variant="h4">VIP, All Your Benefits Apply:</Typography>
                  <Row justifyContent="space-between">
                    <Col xs={3}>
                      <Row alignItems="center" className={styles.productWrapperVipBoxRow}>
                        <Icon iconName="percent" />
                        <Typography className={styles.productWrapperVipBoxRowText} variant="p">
                          <strong>10% Savings</strong>
                        </Typography>
                      </Row>
                    </Col>
                    <Col xs={4}>
                      <Row alignItems="center" className={styles.productWrapperVipBoxRow}>
                        <Icon iconName="dollar" />
                        <Typography className={styles.productWrapperVipBoxRowText} variant="p">
                          <strong>5% Rewards Cash</strong>
                        </Typography>
                      </Row>
                    </Col>
                    <Col xs={5}>
                      <Row alignItems="center" className={styles.productWrapperVipBoxRow}>
                        <Icon iconName="vip_90" />
                        <Typography className={styles.productWrapperVipBoxRowText} variant="p">
                          <strong>90-Day Fit Promise</strong>
                        </Typography>
                      </Row>
                    </Col>
                  </Row>
                </Row>
              )}
            </Col>
          </Row>
        </Col>
      </Row>

      {showProductDescription() && <ProductDetail product={product} isMobile={isMobile} />}
      {/* <Row className={styles.productBrooksSection}>
        <Col md={6}>
          <Row justifyContent="center">
            <Image src={SmoothTransition} />
          </Row>
          <Typography variant="h5">{labels.smooth_transition}</Typography>
          <Typography variant="p">{labels.dna_loft_now_extends_beyond}</Typography>
        </Col>
        <Col md={6}>
          <Row justifyContent="center">
            <Image src={SoftCushion} />
          </Row>
          <Typography variant="h5">{labels.soft_cushioning}</Typography>
          <Typography variant="p">{labels.super_soft_dna_loft_offers_plenty}</Typography>
        </Col>
        </Row> */}
      {showReviewsSection() && <PowerReviews pageId={productId} showRatings={showRatings} />}
      {showRecommendationSection() && <Recommendations productId={productId} />}

      {addToCartResponse && (
        <AddToCartModal
          handleAfterClose={() => setAddToCartResponse()}
          cartData={addToCartResponse}
          pickUpInStore={true}
          isVipUser={false}
          addMembershipToCart={addMembershipToCart}
          removeMembershipFromCart={removeMembershipFromCart}
        />
      )}
    </Container>
  );
};

//Props validation
Product.propTypes = {
  product: object,
};

export default Product;
