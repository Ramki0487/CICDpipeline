/*
 * File: RewardBenefits.test.js
 * Project: webapp-rrs
 * Author: Prakash Raj <prakashraj.asaikannan@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */
import RewardBenefits from '@Components/account/rewardBenefits/RewardBenefits';
import mockAccount from '@Mocks/account/Account.json';
import { shallow } from 'enzyme';

describe('<Reward Benefits', () => {
  test('should render component with content and Icon', () => {
    const wrapper = shallow(<RewardBenefits rewardsBenefit={mockAccount} />);

    expect(wrapper.find('.rewardTitle')).toBeTruthy();
    expect(wrapper.find('Icon')).toBeTruthy();
  });
});
