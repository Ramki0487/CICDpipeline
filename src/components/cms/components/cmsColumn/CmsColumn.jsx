/*
 * File: CmsColumn.jsx
 * Project: webapp-rrs
 * Created Date: Saturday, July 3rd 2021, 4:30:15 pm
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Last Modified: Sunday July 4th 2021 2:31:29 am
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import CmsContent from '@Components/cms/CmsContent';
import { Col, Container, Row } from '@RRS-UI/layout';
import Typography from '@RRS-UI/typography/Typography';
import { array, number, string } from 'prop-types';
import styles from './CmsColumn.module.scss';

/**
 * Component - CmsColumn
 * @param {string} title - Column Title
 * @param {array} columns - Columns to display
 * @param {array} backgroundColor - Column background color
 * @param {number} spacingStripe - Margin Top and Bottom space
 * @param {number} columnSize - Number of columns to fit in a Row
 * @returns
 */
const CmsColumn = ({ title, columns, backgroundColor, spacingStripe, columnSize }) => {
  if (!columns?.length) return null;

  const className = backgroundColor?.[0] ? styles[`column-bg-${backgroundColor?.[0]}`] : '';
  const cols = 12 / (columnSize > 12 ? 12 : columnSize);

  return (
    <Row className={className}>
      <Container>
        <Row
          rowGap={30}
          style={{ marginTop: `${spacingStripe}px`, marginBottom: `${spacingStripe}px` }}
        >
          {title && (
            <Typography variant="h2" className={styles.promoBannerTitle}>
              {title}
            </Typography>
          )}

          {columns?.length > 0 && (
            <Row columnGutter={15} rowGap={30}>
              {columns.map((column, index) => (
                <Col key={`${column?.sys?.id}_${index}`} lg={cols}>
                  <CmsContent
                    contentTypeId={column?.sys?.contentType?.sys?.id}
                    fields={column?.fields}
                  />
                </Col>
              ))}
            </Row>
          )}
        </Row>
      </Container>
    </Row>
  );
};

CmsColumn.propTypes = {
  title: string,
  columns: array,
  columnSize: number,
  backgroundColor: array,
  spacingStripe: number,
};

CmsColumn.defaultProps = {
  title: null,
  columns: null,
  columnSize: 1,
  backgroundColor: null,
  spacingStripe: 0,
};

export default CmsColumn;
