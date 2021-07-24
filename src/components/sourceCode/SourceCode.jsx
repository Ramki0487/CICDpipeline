/*
 * File: SourceCode.jsx
 * Project: webapp-rrs
 * Author: Prakash raj <prakashraj.asaikannan@nutechnologyinc.com>
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */
import InputGroup from '@RRS-UI/inputGroup/InputGroup';
import { Row } from '@RRS-UI/layout';
import Typography from '@RRS-UI/typography/Typography';
import { bool, func } from 'prop-types';
import { useState } from 'react';
import Placeholder from './PlaceHolder';
import styles from './SourceCode.module.scss';

/**
 * SourceCode Component
 * @param {boolean} isLoading - Flag to display placeholder
 * @param {func} handleClaim - callback function to claim source code
 * @returns
 */
const SourceCode = ({ isLoading, handleClaim }) => {
  const [couponInput, setCouponInput] = useState(false);

  if (isLoading) return <Placeholder />;

  const onSubmitCouponCode = (couponCode) => {
    handleClaim && handleClaim(couponCode);
  };

  return (
    <Row className={styles.source} rowGap={10}>
      {couponInput ? (
        <Row rowGap={5} flexDirection="column">
          <Typography variant="h5">Add a source code:</Typography>
          <InputGroup
            inputProps={{
              placeholder: 'Enter code',
              className: styles.sourceInput,
              required: true,
            }}
            btnProps={{
              btnlabel: 'Apply',
              className: styles.sourceButton,
              action: 'submit',
              onClick: onSubmitCouponCode,
            }}
          />
        </Row>
      ) : (
        <Typography id="sourceCode" variant="h5" onClick={() => setCouponInput(!couponInput)}>
          + I have a source code
        </Typography>
      )}
    </Row>
  );
};

//Prop Type
SourceCode.propTypes = {
  isLoading: bool,
  handleClaim: func,
};

//Default Props
SourceCode.defaultProps = {
  isLoading: false,
  handleClaim: null,
};

export default SourceCode;
