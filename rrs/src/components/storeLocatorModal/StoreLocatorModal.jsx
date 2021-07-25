/*
 * File: Product.jsx
 * Project: webapp-rrs
 * Created Date: Thursday, December 31st 2020, 12:56:53 am
 * Author: Riyaz <riyaz.pasha@nutechnologyinc.com>
 * -----
 * Copyright (c) 2020 All rights reserved
 * ------------------------------------
 */

import { API_KEY } from '@Configs/GoogleMapConfig';
import Button from '@RRS-UI/button/Button';
import InputGroup from '@RRS-UI/inputGroup/InputGroup';
import { Col, Row } from '@RRS-UI/layout';
import Modal from '@RRS-UI/modal/Modal';
import Typography from '@RRS-UI/typography/Typography';
import GoogleMapService from '@Services/googleMapService/GoogleMapService';
import ProductStoreShippingService from '@Services/productStoreShippingService/ProductStoreShippingService';
import { bool, func, number, string } from 'prop-types';
import { useEffect, useState } from 'react';
import styles from './StoreLocatorModal.module.scss';

/**
 * StoreLocatorModal component
 * @param {boolean} showModal - Flag to show/hide Store locator Modal
 * @param {string} skuId - skuId to storeLocator api
 * @param {number} quantity - quantity to storeLocator api
 * @param {string} locationId - Flag to pre-select the store
 * @param {function} handleAfterClose - close modal function
 * @param {function} onClick - onClick callback function
 * @returns
 */
const StoreLocatorModal = (props) => {
  const { handleAfterClose, onClick, showModal, skuId, quantity, locationId } = props;

  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(showModal);
  const [isError, setIsError] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [selectedLocationId, setSelectedLocationId] = useState();
  const [storeLocatorResults, setStoreLocatorResults] = useState(null);

  useEffect(() => {
    setShow(showModal);
    setSelectedLocationId(locationId);
  }, [showModal, selectedLocationId]);

  /**
   * handle Store Search function
   * @param {*} searchText
   */
  const handleStoreSearch = async (searchText) => {
    setLoading(true);
    const locationDetails = await getLocationDetails(searchText);

    if (skuId && locationDetails.lat != null && locationDetails.lng != null) {
      const productShippingRequest = {
        currentLat: locationDetails.lat,
        currentLong: locationDetails.lng,
        skuId: skuId,
        quantity: quantity,
      };

      const resp = await ProductStoreShippingService.invoke(productShippingRequest);
      setStoreLocatorResults(resp?.payload?.state);
    } else {
      setIsError(true);
    }
    setLoading(false);
  };

  /**
   * Function to get location details (lat, lng etc..)
   * @returns
   */
  const getLocationDetails = async (searchText) => {
    const locationRequest = {
      key: API_KEY,
      address: searchText,
    };

    const resp = await GoogleMapService.invoke(locationRequest);

    let currentLat, currentLng;
    if (resp?.payload?.results[0]?.geometry?.location) {
      currentLat = resp?.payload?.results[0]?.geometry?.location?.lat;
      currentLng = resp?.payload?.results[0]?.geometry?.location?.lng;
    }

    return {
      lat: currentLat,
      lng: currentLng,
    };
  };

  const handleChange = (val) => {
    setSearchText(val);
  };

  const handleOnkeyUp = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();

      handleStoreSearch(e?.target?.value);
    }
  };

  const handleSelectStore = (locationId, storeName, distance) => {
    setSelectedLocationId(locationId);
    const storeDetails = {
      locationId: locationId,
      storeName: storeName,
      distance: distance,
    };
    onClick && onClick(storeDetails);
    handleAfterClose && handleAfterClose();
  };

  return (
    <Modal
      handleAfterClose={handleAfterClose}
      showModal={show}
      overlayClass={styles.overlayContent}
      contentClass={styles.modalOverlay}
      wrapperClass={styles.wrapper}
    >
      <Modal.head>
        <div className={styles.headerText}>
          <Typography variant="h2">
            {!selectedLocationId ? 'CHOOSE STORE' : 'CHANGE STORE'}
          </Typography>
        </div>
      </Modal.head>
      <Modal.body>
        <Row className={styles.wrapperStoreLocatorContent} flexDirection="column">
          <Col lg={12}>
            <Typography className={styles.title} variant="p">
              Select a store to check product availablity.
            </Typography>
            <InputGroup
              iconProps={{
                iconName: 'search',
                onClick: () => handleStoreSearch(searchText),
                disabled: !searchText || searchText?.length < 5,
              }}
              inputProps={{
                placeholder: 'Search by Zip Code, City and State',
                className: styles.wrapperStoreLocatorContentInput,
                onChange: handleChange,
                onKeyUp: handleOnkeyUp,
                value: searchText,
              }}
            />
            {loading && <span className={styles.loading}>Loading...</span>}
            {isError && (
              <div className={styles.error}>
                No stores found for this location, please try another location
              </div>
            )}
            {!loading && storeLocatorResults?.storeLocatorWarningMessage && (
              <Typography className={styles.storeWarningMessage} variant="p">
                <strong>{storeLocatorResults?.storeLocatorWarningMessage}</strong>
              </Typography>
            )}
            <Row className={styles.list} flexDirection="column">
              {!loading &&
                storeLocatorResults?.storeLocatorDetails?.length > 0 &&
                storeLocatorResults?.storeLocatorDetails?.map((item) => (
                  <Col key={item?.locationId} className={styles.item}>
                    <Row justifyContent="space-between">
                      <Col xs={8}>
                        <Typography variant="h5">
                          {item?.storeName}{' '}
                          <span
                            className={styles.distanceText}
                          >{`(${item?.distanceFromSearchLocation} mi)`}</span>
                        </Typography>
                        <Typography variant="p">
                          {`${item?.contactInfo?.address1} ${item?.contactInfo?.city} ${item?.contactInfo?.state} ${item?.contactInfo?.postalCode}`}
                        </Typography>
                      </Col>
                      <Col xs={4}>
                        <Button
                          className={`${
                            selectedLocationId === item?.locationId ? styles.active : ''
                          } ${styles.selectStoreBtn}`}
                          theme="white"
                          onClick={() =>
                            handleSelectStore(
                              item?.locationId,
                              item?.storeName,
                              item?.distanceFromSearchLocation
                            )
                          }
                        >
                          {selectedLocationId === item?.locationId ? 'Selected' : 'Select Store'}
                        </Button>
                      </Col>
                    </Row>
                  </Col>
                ))}
            </Row>
          </Col>
        </Row>
      </Modal.body>
    </Modal>
  );
};

StoreLocatorModal.propTypes = {
  showModal: bool,
  skuId: string,
  quantity: number,
  locationId: string,
  onClick: func,
  handleAfterClose: func,
};

export default StoreLocatorModal;
