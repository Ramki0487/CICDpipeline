/*
 * File: CmsCard.jsx
 * Project: webapp-rrs
 * Created Date: Saturday, June 26th 2021, 10:44:04 pm
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Last Modified: Tuesday July 13th 2021 12:50:28 am
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import CmsImage from '@Components/cms/components/cmsImage/CmsImage';
import LinkTag from '@Components/linkTag/LinkTag';
import Card from '@RRS-UI/card/Card';
import Typography from '@RRS-UI/typography/Typography';
import { object, string } from 'prop-types';

/**
 * CmsCard - CMS Card
 * @param {object} image - Image fields
 * @param {string} link - Card Link
 * @param {string} title - Card Title
 * @param {string} description - Card Description
 * @returns
 */
const CmsCard = ({
  image,
  link,
  title,
  description,
  className,
  desktopSize,
  mobileSize,
  settings,
  titleVariant,
  alignItems,
  justifyContent,
  ...restProps
}) => {
  if (!image) return null;

  return (
    <Card
      {...restProps}
      alignItems={alignItems}
      justifyContent={justifyContent}
      className={className}
    >
      {image && (
        <LinkTag href={link}>
          <CmsImage
            desktopSize={desktopSize}
            mobileSize={mobileSize}
            {...image?.fields}
            settings={settings}
          />
        </LinkTag>
      )}
      {title && (
        <LinkTag href={link}>
          <Typography variant={titleVariant}>{title}</Typography>
        </LinkTag>
      )}
      {description && <Typography variant="p">{description}</Typography>}
    </Card>
  );
};

CmsCard.propTypes = {
  image: object.isRequired,
  title: string,
  link: string,
  description: string,
  className: string,
  desktopSize: string,
  mobileSize: string,
  settings: object,
  titleVariant: string,
  alignItems: string,
  justifyContent: string,
};

CmsCard.defaultProps = {
  title: '',
  link: null,
  description: '',
  className: '',
  desktopSize: '',
  mobileSize: '',
  settings: null,
  titleVariant: 'h3',
  alignItems: 'flex-start',
  justifyContent: 'center',
};

export default CmsCard;
