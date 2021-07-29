/*
 * File: Footer.jsx
 * Project: webapp-rrs
 * Created Date: Monday, February 22nd 2021, 5:34:56 pm
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com
 * -----
 * Last Modified: Tuesday July 13th 2021 8:03:18 pm
 * Modified By: Pandiarajan <pandiarajan.rajagopal@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import CmsImage from '@Components/cms/components/cmsImage/CmsImage';
import LinkTag from '@Components/linkTag/LinkTag';
import EmailSignupForm from '@Components/reactForms/emailSignupForm/EmailSignupForm';
import Accordion from '@RRS-UI/accordion/Accordion';
import Icon from '@RRS-UI/icon/Icon';
import { Col, Container, Row } from '@RRS-UI/layout';
import Typography from '@RRS-UI/typography/Typography';
import { getContentByTypeId } from '@Utils/Contentful';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import styles from './Footer.module.scss';

const ChildList = (subMenus = []) => {
  return (
    <ul>
      {subMenus.map((submenu, index) => (
        <li key={`${submenu?.sys?.id}_${index}`}>
          <LinkTag href={submenu?.fields?.link}>{submenu?.fields?.title}</LinkTag>
        </li>
      ))}
    </ul>
  );
};

const Footer = () => {
  const { cms, device } = useSelector((state) => state);
  const { push } = useRouter();

  const {
    blogs,
    footerMenu,
    signUpTitle,
    signUpCaption,
    socialMediaLinks,
    footerLinks,
  } = getContentByTypeId(cms?.pageModel, 'footer');

  const handleEmailSubmitSuccess = () => push('/content/email-signup');

  return (
    <Row className={styles.footer}>
      <Container>
        {blogs?.length > 0 && (
          <Row className={styles.footerBlog}>
            {blogs.map((blog, indx) => {
              return (
                <Col key={`${blog.sys.id}_${indx}`} md={6} xl={3} className={styles.footerBlogItem}>
                  <Row>
                    <LinkTag href={blog?.fields?.link}>
                      <CmsImage
                        desktopSize="44x44"
                        settings={{ q: 100, fit: 'thumb' }}
                        {...blog?.fields?.image?.fields}
                        className={styles.footerBlogIcon}
                      />
                    </LinkTag>
                    <Col className={styles.footerBlogCopy}>
                      <LinkTag href={blog?.fields?.link}>
                        <Typography variant="h5">{blog?.fields?.title}</Typography>
                      </LinkTag>
                      <Typography variant="p">{blog?.fields?.description}</Typography>
                    </Col>
                  </Row>
                </Col>
              );
            })}
          </Row>
        )}

        <Row>
          <Col className={styles.footerSignupBlock} lg={4}>
            <Col md={6} lg={11} xl={10}>
              <Typography variant="h2">{signUpTitle}</Typography>
              <Typography variant="p">{signUpCaption}</Typography>
              <EmailSignupForm handleSubmitSuccess={handleEmailSubmitSuccess} />
              {socialMediaLinks?.length > 0 && (
                <Row alignItems="center" className={styles.footerSocialIcons}>
                  {socialMediaLinks?.map(
                    (item) =>
                      item?.fields?.description && (
                        <a
                          target="_blank"
                          href={item?.fields?.link}
                          key={item?.sys?.id}
                          rel="noreferrer"
                        >
                          <Icon iconName={item?.fields?.description?.toLowerCase()} />
                        </a>
                      )
                  )}
                </Row>
              )}
            </Col>
          </Col>

          <Col className={styles.footerMenuLinks} lg={8}>
            {footerMenu?.length > 0 && (
              <>
                {device?.isDesktop && (
                  <Row className={styles.footerMenuLinksBlocks} columnGap={5}>
                    {footerMenu.map((menu, index) => (
                      <Col key={`${menu.sys.id}_${index}`}>
                        <Typography variant="h5">{menu?.fields?.title}</Typography>
                        {ChildList(menu?.fields?.subCategoryLinks)}
                      </Col>
                    ))}
                  </Row>
                )}
                {!device?.isDesktop && (
                  <Row>
                    {footerMenu.map((menu, index) => (
                      <Accordion
                        key={`${menu.sys.id}_${index}_accordion`}
                        className={styles.footerMenuLinksAccordion}
                      >
                        <Accordion.head className={styles.footerMenuLinksAccordionHead}>
                          <Typography variant="h4">{menu?.fields?.title}</Typography>
                        </Accordion.head>
                        <Accordion.body>{ChildList(menu?.fields?.subCategoryLinks)}</Accordion.body>
                      </Accordion>
                    ))}
                  </Row>
                )}
              </>
            )}
          </Col>
        </Row>
        <Row className={styles.footerBottomNav}>
          <a>
            <Typography variant="small">Copyright Road Runner Sports</Typography>
          </a>
          {footerLinks?.map((link) => {
            return (
              <LinkTag href={link?.fields?.link} key={link?.sys?.id}>
                <Typography variant="small">{link?.fields?.title}</Typography>
              </LinkTag>
            );
          })}
        </Row>
      </Container>
    </Row>
  );
};

export default Footer;
