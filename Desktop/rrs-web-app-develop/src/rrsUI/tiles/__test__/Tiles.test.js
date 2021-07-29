/*
 * File: Tiles.test.js
 * Project: webapp-rrs
 * Created Date: Thursday, March 18th 2021, 2:46:43 pm
 * Author: Riyaz <riyaz.pasha@nutechnologyinc.com
 * -------
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import { shallow } from 'enzyme';
import Tiles from '../Tiles';

describe('<Tiles />', () => {
  it('should render the component', () => {
    const wrapper = shallow(<Tiles>Test</Tiles>);
    expect(wrapper).toBeDefined();
  });

  it('Test Click event', () => {
    const mockCallBack = jest.fn();
    const tilesWrapper = shallow(
      <Tiles
        iconProps={{
          iconName: 'close',
          onClick: mockCallBack,
        }}
      >
        Tiles Text
      </Tiles>
    );
    tilesWrapper.find('Icon').simulate('click');
    expect(mockCallBack).toHaveBeenCalled();
  });

  it('Should render children', () => {
    const tilesWrapper = shallow(<Tiles>Tiles Text</Tiles>);
    expect(tilesWrapper.children().text()).toEqual('Tiles Text');
  });
});
