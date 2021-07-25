/*
 * File: NoSearchResults.jsx
 * Project: webapp-rrs
 * Created Date: Saturday, June 5th 2021, 5:57:02 pm
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Last Modified: Tuesday July 13th 2021 12:50:28 am
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import LinkTag from '@Components/linkTag/LinkTag';
import Button from '@RRS-UI/button/Button';
import InputGroup from '@RRS-UI/inputGroup/InputGroup';
import { Col, Container, Row } from '@RRS-UI/layout';
import Typography from '@RRS-UI/typography/Typography';
import { useRouter } from 'next/router';
import { string } from 'prop-types';
import { useState } from 'react';
import styles from './NoSearchResults.module.scss';

const NoSearchResults = ({ query }) => {
  const { push } = useRouter();
  const [newSearch, setNewSearch] = useState('');

  const handleOnkeyUp = (e) => {
    const value = e?.target?.value;

    if (value && e.keyCode === 13) {
      e.preventDefault();
      redirectToSearchPage(value);
    }

    setNewSearch(value);
  };

  const redirectToSearchPage = (keyword) => push(`/search/${keyword}`);

  return (
    <Container>
      <Col className={styles.noresults}>
        <Row flexDirection="column" alignItems="center">
          <Typography variant="h1">
            We couldn&apos;t find anything for <strong>{`"${query}"`}</strong>
          </Typography>
          <Typography variant="h2">WHAT ELSE CAN WE SEARCH FOR?</Typography>

          <InputGroup
            iconProps={{
              iconName: 'search',
              onClick: redirectToSearchPage,
              disabled: !newSearch || newSearch?.length < 2,
            }}
            inputProps={{
              placeholder: 'Search...',
              onKeyUp: handleOnkeyUp,
            }}
            className={styles.noresultsSearch}
          />
          <Row
            alignItems="center"
            justifyContent="space-around"
            className={styles.noresultsButtons}
          >
            <LinkTag href="/category/mens-running-shoes">
              <Button theme="rr-iceblue" tabIndex="-1">
                Men&apos;s Running Shoes
              </Button>
            </LinkTag>
            <LinkTag href="/category/womens-running-shoes">
              <Button theme="rr-iceblue" tabIndex="-1">
                Women&apos;s Running Shoes
              </Button>
            </LinkTag>
          </Row>
          <Typography variant="h4">CUSTOMER SERVICE</Typography>
          <Typography variant="p">
            <strong>NEED HELP?</strong> CALL US AT <strong>800.743.3206</strong>
          </Typography>
          <Typography variant="p">
            LOOKING FOR A SPECIFIC BRAND? <LinkTag href="/brands">Click Here</LinkTag>
          </Typography>
        </Row>
      </Col>
    </Container>
  );
};

NoSearchResults.propTypes = {
  query: string,
};

NoSearchResults.defaultProps = {
  query: '',
};

export default NoSearchResults;
