/*
 * File: RestEndpoints.js
 * Project: webapp-rrs
 * Created Date: Monday, May 3rd 2021, 2:08:16 pm
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Last Modified: Sunday July 18th 2021 6:53:16 am
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

// Read it from env else fallback to prodution
let baseURI =
  process.env.NEXT_PUBLIC_ATG_API_BASE_URI ?? 'https://development.roadrunnersports.com/rest';

if (process.env.NODE_ENV === 'development' && typeof window !== 'undefined') {
  baseURI = '/proxy-api/rest';
}

const RestEndpoints = {
  ACCOUNT: {
    LOGIN: `${baseURI}/model/atg/userprofiling/ProfileActor/rest-login`,
    REGISTER: `${baseURI}/model/atg/userprofiling/ProfileActor/rest-register`,
    LOGOUT: `${baseURI}/model/atg/userprofiling/ProfileActor/rest-logout`,
  },
  EMAIL_SIGNUP: `${baseURI}/model/roadrunner/rest/common/CommonActor/emailSignup`,
  CONTACT_US: `${baseURI}/model/roadrunner/rest/common/CommonActor/contactUs`,
  BECOME_VENDOR: `${baseURI}/model/roadrunner/rest/common/CommonActor/rest-vendor`,
  BROWSE: {
    BRAND_NAMES: `${baseURI}/model/roadrunner/rest/browse/BrowseActor/getBrandNames`,
    PRODUCT_SEARCH: `${baseURI}/model/roadrunner/rest/browse/BrowseActor/rest-product-search`,
    AUTO_SUGGESTIONS: 'https://roadrunnersports-cors.groupbycloud.com/api/v1/sayt/search',
    PRODUCT_DETAIL: `${baseURI}/model/roadrunner/rest/browse/BrowseActor/getProductDetails`,
    PRODUCT_VARIENT: `${baseURI}/model/roadrunner/rest/browse/BrowseActor/getProductVarientGroups`,
    PRODUCT_STORE_SHIPPING: `${baseURI}/model/roadrunner/rest/browse/BrowseActor/getProductStoreShipping`,
    RELATED_PRODUCTS: `${baseURI}/model/roadrunner/rest/browse/BrowseActor/related-products`,
  },
  SHOPPING_CART: {
    ADD_ITEM_TO_BASKET: `${baseURI}/model/atg/commerce/order/purchase/CartModifierActor/addItemToBasket`,
    GET_CART_ITEMS: `${baseURI}/model/atg/commerce/order/purchase/CartModifierActor/cart-content-get-state`,
    UPDATE_CART_QUANTITY: `${baseURI}/model/atg/commerce/order/purchase/CartModifierActor/update-cart-quantity`,
    REMOVE_CART_ITEM: `${baseURI}/model/atg/commerce/order/purchase/CartModifierActor/removeItemFromBasket`,
    CLAIM_SOURCE_CODE: `${baseURI}/model/atg/commerce/order/purchase/CartModifierActor/claim-source-code"`,
  },
  CHECKOUT: {
    GET_CHECKOUT_ORDER_STATE: `${baseURI}/model/roadrunner/rest/purchase/PurchaseActor/checkoutOrderGetState`,
    GET_ORDER_SUMMARY_BY_POSTAL_CODE: `${baseURI}/model/atg/commerce/order/purchase/PurchaseActor/getOrderSummaryPostalCode`,
    ADD_GIFT_CARD: `${baseURI}/model/roadrunner/rest/purchase/PaymentActor/addGiftCard`,
    REMOVE_GIFT_CARD: `${baseURI}/model/roadrunner/rest/purchase/PurchaseActor/removeGiftCard`,
    CLAIM_GIFT_CARD: `${baseURI}/model/roadrunner/rest/purchase/PurchaseActor/claimGiftCard`,
    ADD_COUPON: `${baseURI}/model/roadrunner/rest/purchase/PaymentActor/add-coupon`,
    REMOVE_COUPON: `${baseURI}/model/roadrunner/rest/purchase/PaymentActor/remove-coupon`,
  },
  SESSION_INFO: `${baseURI}/model/roadrunner/rest/common/CommonActor/fetchSessionInfo`,
  GOOGLE_MAP: 'https://maps.googleapis.com/maps/api/geocode/json',
};

export default RestEndpoints;
