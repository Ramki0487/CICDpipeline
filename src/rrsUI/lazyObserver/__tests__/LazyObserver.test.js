/*
 * File: LazyObserver.test.js
 * Project: webapp-rrs
 * Created Date: Thursday, June 3rd 2021, 3:03:13 pm
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Last Modified: Thursday June 3rd 2021 3:03:13 pm
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import { shallow } from 'enzyme';
import LazyObserver from '../LazyObserver';

describe('<LazyObserver>', () => {
  test('should prepare given image for LazyObserver ', () => {
    const imageWrapper = shallow(
      <LazyObserver>
        <img src="test.png" />
      </LazyObserver>
    );
    const ImageModule = imageWrapper.find('img');

    expect(ImageModule).toBeDefined();
  });

  // test('should render noscript tag when noscript=true', () => {
  //   const imageWrapper = shallow(
  //     <LazyObserver noscript={true}>
  //       <img src="test.png" />
  //     </LazyObserver>
  //   );
  //   const noscriptTag = imageWrapper.find('noscript');
  //   expect(noscriptTag.length).toBe(1);
  //   expect(noscriptTag.find('img').length).toBe(1);
  // });

  // describe('when IntersectionObserver is not available in window', () => {
  //   delete window['IntersectionObserver'];
  //   beforeAll(() => {
  //     wrapper = mount(
  //       <LazyObserver>
  //         <img src="test.jpg" id="Image" />
  //       </LazyObserver>
  //     );
  //     imgWrapper = wrapper.getDOMNode('img');
  //   });

  //   test('should render original image when IntersectionObserver is not available ', () => {
  //     expect(imgWrapper.src).toBe('http://localhost/test.jpg');
  //     expect(imgWrapper['data-src']).toBeUndefined();
  //   });
  // });

  // describe('when intersectionobserver threshold met', () => {
  //   beforeAll(() => {
  //     window.IntersectionObserver = jest.fn(() => ({
  //       observe: () => {},
  //       unobserve: () => {},
  //     }));
  //     wrapper = mount(
  //       <LazyObserver>
  //         <img src="test.jpg" id="Image" />
  //       </LazyObserver>
  //     );

  //     imgWrapper = wrapper.getDOMNode('img');

  //     const mockEntry = {
  //       isIntersecting: true,
  //       target: imgWrapper,
  //     };
  //     const observerCallback = window.IntersectionObserver.mock.calls[0][0];
  //     observerCallback([mockEntry]);
  //   });

  //   test('should render original image when intersectionobserver threshold met', () => {
  //     expect(imgWrapper.src).toBe('http://localhost/test.jpg');
  //     expect(imgWrapper['data-src']).toBeUndefined();
  //   });
  // });

  // describe('when intersectionobserver[isIntersecting] is false ', () => {
  //   beforeAll(() => {
  //     window.IntersectionObserver = jest.fn(() => ({
  //       observe: () => {},
  //       unobserve: () => {},
  //     }));
  //     wrapper = mount(
  //       <LazyObserver>
  //         <img src="test.png" />
  //       </LazyObserver>
  //     );

  //     imgWrapper = wrapper.getDOMNode('img');
  //     const mockEntry = {
  //       isIntersecting: false,
  //     };
  //     const observerCallback = window.IntersectionObserver.mock.calls[0][0];
  //     observerCallback([mockEntry]);
  //   });
  // });
});
