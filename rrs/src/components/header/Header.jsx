/*
 * File: Header.jsx
 * Project: webapp-rrs
 * Created Date: Monday, February 22nd 2021, 5:36:29 pm
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com
 * -----
 * Last Modified: Sunday July 18th 2021 6:53:16 am
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import Logo from '@Assets/svg/images/logo.svg';
import LinkTag from '@Components/linkTag/LinkTag';
import Icon from '@RRS-UI/icon/Icon';
import { Col, Container, Row } from '@RRS-UI/layout';
import SearchAutoSuggestions from '@RRS-UI/searchAutoSuggestions/SearchAutoSuggestions';
import SearchAutoSuggestionsService from '@Services/searchAutoSuggestionsService/SearchAutoSuggestionsService';
import { getContentByTypeId } from '@Utils/Contentful';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import AccountOptions from './accountOptions/AccountOptions';
import styles from './Header.module.scss';

const HamburgerMenu = dynamic(() => import('@RRS-UI/hamburgerMenu/HamburgerMenu'));
const MegaMenu = dynamic(() => import('@RRS-UI/megaMenu/MegaMenu'));

const Header = () => {
  const { asPath, push } = useRouter();
  const [suggestions, setSuggestions] = useState({});
  const { cms, device } = useSelector((state) => state);
  const { menuItems } = getContentByTypeId(cms?.pageModel, 'mainMenu');
  const { headerLinks } = getContentByTypeId(cms?.pageModel, 'topNavigation');

  const getSuggestions = async (keyword) => {
    const response = await SearchAutoSuggestionsService.invoke({ keyword });
    setSuggestions(response?.payload?.result);
  };

  const redirectToSearch = (keyword) => {
    // take the user to search page only if the keyword contains more than one char
    if (keyword?.length >= 2) {
      // redirect to search page
      push(`/search/${keyword}`);
    }
  };

  return (
    <header>
      <Row className={styles.topNav} alignItems="center">
        <Container>
          <Row>
            <Col>
              <Row className={styles.topNavYourStore}>
                <Icon iconName="map_marker" />
                <Col noflex>Your local store:</Col>
                <Col noflex className={styles.topNavYourStoreName}>
                  Store name lorem ipsum dolor <LinkTag href="#">change</LinkTag>
                </Col>
              </Row>
            </Col>
            {headerLinks?.map((item) => {
              return (
                <LinkTag
                  key={item?.sys?.id}
                  href={item?.fields?.link}
                  className={styles.topNavLinks}
                >
                  {item?.fields?.title}
                </LinkTag>
              );
            })}
          </Row>
        </Container>
      </Row>
      <Container>
        <Row className={styles.logoSection} alignItems="center">
          <Col noflex>
            <Row alignItems="center">
              <Col className={styles.logoSectionHamburger} noflex>
                {!device?.isDesktop && (
                  <HamburgerMenu
                    menuItems={menuItems}
                    topNavItems={headerLinks}
                    LinkTag={LinkTag}
                    key={asPath}
                  />
                )}
              </Col>
              <Col className={styles.logoSectionLogo}>
                <LinkTag href="/">
                  <Logo />
                </LinkTag>
              </Col>
            </Row>
          </Col>
          <Col className={styles.logoSectionAccountOptions}>
            <AccountOptions />
          </Col>
          <Col className={styles.logoSectionSearch}>
            <SearchAutoSuggestions
              suggestions={suggestions}
              LinkTag={LinkTag}
              getSuggestions={getSuggestions}
              redirectToSearch={redirectToSearch}
              key={asPath}
            />
          </Col>
        </Row>
      </Container>
      <Row className={styles.megaMenu}>
        <Container>
          {device?.isDesktop && <MegaMenu menuItems={menuItems} LinkTag={LinkTag} key={asPath} />}
        </Container>
      </Row>
    </header>
  );
};

export default Header;
