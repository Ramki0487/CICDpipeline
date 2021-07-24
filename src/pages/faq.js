/*
 * File: FAQ.js
 * Project: webapp-rrs
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Copyright (c) 2020 All rights reserved
 * ------------------------------------
 */

import FAQs from '@Components/cms/components/faq/FAQ';
import { frequentAnswer } from '@Mocks/faq/FAQ.json';
import { Container } from '@RRS-UI/layout';

const FAQ = () => {
  return (
    <Container>
      <FAQs frequent={frequentAnswer} />
    </Container>
  );
};

export default FAQ;
