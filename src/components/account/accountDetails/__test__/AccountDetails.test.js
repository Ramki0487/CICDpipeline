/*
 * File: AccountDetails.test.js
 * Project: webapp-rrs
 * Author: Prakash Raj <prakashraj.asaikannan@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */
import AccountDetails from '@Components/account/accountDetails/AccountDetails';
import mockAccount from '@Mocks/account/Account.json';
import { shallow } from 'enzyme';

describe('<AccountDetails/>', () => {
  const cases = [['Bob Ross', 'bobross@gmail.com', 'Password: XXXX']];

  test.each(cases)('Given name: %p, text : %p, subText : %p,', async (name, text, subText) => {
    const wrapper = shallow(<AccountDetails details={mockAccount?.details} />);

    expect(
      await wrapper.find('.detailContent').find({ variant: 'h5' }).at(0).children().text()
    ).toEqual(name);
    expect(
      await wrapper.find('.detailContent').find({ variant: 'p' }).at(0).children().text()
    ).toEqual(text);
    expect(
      await wrapper.find('.detailContent').find({ variant: 'p' }).at(1).children().text()
    ).toEqual(subText);
  });
});
