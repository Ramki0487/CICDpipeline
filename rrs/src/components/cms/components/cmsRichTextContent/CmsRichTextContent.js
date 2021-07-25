/* eslint-disable react/display-name */
/*
 * File: cmsRichTextContent.js
 * Project: webapp-rrs
 * Created Date: Wednesday, July 21st 2021, 5:22:43 pm
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Last Modified: Wednesday July 21st 2021 5:22:43 pm
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import CmsContent from '@Components/cms/CmsContent';
import CmsVideo from '@Components/cms/components/cmsVideo/CmsVideo';
import LinkTag from '@Components/linkTag/LinkTag';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types';
import Image from '@RRS-UI/image/Image';
import Typography from '@RRS-UI/typography/Typography';
import PATTERNS from '@Utils/Patterns';
// import DOMPurify from 'isomorphic-dompurify';
import { bool, number, object, string } from 'prop-types';
import React from 'react';
import styles from './CmsRichTextContent.module.scss';

const embedCmsComponent = (node) => {
  const contentTypeId = node?.data?.target?.sys?.contentType?.sys?.id;
  const cmsContent = node?.data?.target?.fields;

  return contentTypeId ? <CmsContent contentTypeId={contentTypeId} fields={cmsContent} /> : null;
};

const overrideTypography = (customTypography) => {
  if (customTypography) return null;

  return {
    [BLOCKS.HEADING_1]: (node, children) => <Typography variant="h1">{children}</Typography>,
    [BLOCKS.HEADING_2]: (node, children) => <Typography variant="h2">{children}</Typography>,
    [BLOCKS.HEADING_3]: (node, children) => <Typography variant="h3">{children}</Typography>,
    [BLOCKS.HEADING_4]: (node, children) => <Typography variant="h4">{children}</Typography>,
    [BLOCKS.HEADING_5]: (node, children) => <Typography variant="h5">{children}</Typography>,
  };
};

const getOptions = (customTypography) => {
  /**
   * Refer Available rich text types in @link:https://www.npmjs.com/package/@contentful/rich-text-react-renderer
   */
  return {
    renderMark: {
      [MARKS.BOLD]: (text) => <b>{text}</b>,
      [MARKS.ITALIC]: (text) => <i>{text}</i>,
      [MARKS.UNDERLINE]: (text) => <u>{text}</u>,
      [MARKS.CODE]: (text) => <code>{text}</code>,
    },
    renderNode: {
      [BLOCKS.DOCUMENT]: (node, children) => children,
      ...overrideTypography(customTypography),
      [BLOCKS.PARAGRAPH]: (node, children) => {
        // Rendering P tag creates invaid Dom Nesting errors.
        // As a fallback div is used with p tag default styles
        return <div className={styles.pTag}>{children}</div>;
      },
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const contentType = node?.data?.target?.fields?.file?.contentType;
        const fileUrl = node?.data?.target?.fields?.file?.url;

        // Note:- Plain Assets will not have any rrsWrapper
        // Handle Images
        if (fileUrl && contentType) {
          if (contentType.match(PATTERNS.MIME_TYPE_IMAGE)) {
            return <Image src={fileUrl} alt={node?.data?.target?.fields?.title} />;
          }
          // Handle Video files
          else if (contentType.match(PATTERNS.MIME_TYPE_VIDEO)) {
            return <CmsVideo video={node?.data?.target} />;
          } else {
            return <a href={fileUrl}>{node?.data?.target?.fields?.title ?? ''}</a>;
          }
        }
      },
      [BLOCKS.EMBEDDED_ENTRY]: (node) => embedCmsComponent(node),
      [INLINES.EMBEDDED_ENTRY]: (node) => embedCmsComponent(node),
      [INLINES.HYPERLINK]: (node, children) => {
        return <LinkTag href={node?.data?.uri}>{children}</LinkTag>;
      },
      [INLINES.ASSET_HYPERLINK]: (node, children) => {
        return <a href={node?.data?.target?.fields?.file?.url}>{children}</a>;
      },
      [INLINES.ENTRY_HYPERLINK]: (node, children) => {
        return <LinkTag href={node?.data?.target?.fields?.slug}>{children}</LinkTag>;
      },
    },
    renderText: (text) => {
      return text.split('\n').reduce((children, textSegment, index) => {
        return [...children, index > 0 && <br key={index} />, textSegment];
      }, []);
    },
  };
};

/**
 * Component - CmsRichTextContent
 * Uses RichTextEditor
 * @param {object} content - Content to render
 * @param {string} className - Custom Class name for container
 * @param {number} spacingStripe - Applies margin top and bottom
 * @param {boolean} customTypography - Flag to decide between default typography vs custom html
 * @returns
 */
const CmsRichTextContent = ({ content, className, spacingStripe, customTypography }) => {
  if (!content) return null;

  const jsxObj = documentToReactComponents(content, getOptions(customTypography));

  return (
    <div
      className={`${styles.richText} ${className}`}
      style={{ marginTop: `${spacingStripe}px`, marginBottom: `${spacingStripe}px` }}
    >
      {jsxObj}
    </div>
  );
};

CmsRichTextContent.propTypes = {
  content: object.isRequired,
  className: string,
  spacingStripe: number,
  customTypography: bool,
};

CmsRichTextContent.defaultProps = {
  className: '',
  spacingStripe: 0,
  customTypography: false,
};

export default CmsRichTextContent;
