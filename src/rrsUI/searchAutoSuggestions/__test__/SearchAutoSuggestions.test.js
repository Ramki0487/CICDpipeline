/*
 * File: SearchAutoSuggestions.test.js
 * Project: webapp-rrs
 * Created Date: Tuesday, May 04th 2021, 3:46:43 pm
 * Author: Riyaz <riyaz.pasha@nutechnologyinc.com
 * -------
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import {
  emptySearchResponse,
  responseWithoutProduct,
  searchResponse,
} from '@Mocks/searchAutoSuggestions/SearchAutoSuggestions.json';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import SearchAutocomplete from '../SearchAutoSuggestions';

describe('<SearchAutocomplete />', () => {
  it('should render search suggestions', async () => {
    let searchAutoSuggestionsWrapper;
    await act(async () => {
      searchAutoSuggestionsWrapper = mount(
        <SearchAutocomplete
          LinkTag={(item) => {
            return item.href, item.children;
          }}
          getSuggestions={jest.fn()}
        />
      );
      jest.useFakeTimers();
      searchAutoSuggestionsWrapper
        .find('.textboxInput')
        .simulate('change', { target: { value: 'run', name: '' } });
      searchAutoSuggestionsWrapper.setProps({ suggestions: searchResponse });
      jest.runAllTimers();
    });
    searchAutoSuggestionsWrapper.update();

    expect(
      searchAutoSuggestionsWrapper.find('.searchboxSuggestionsResultsItem').length > 0
    ).toBeTruthy();
  });

  it('should render empty search suggestions when searchText value was not found', async () => {
    let searchAutoSuggestionsWrapper;
    await act(async () => {
      searchAutoSuggestionsWrapper = mount(
        <SearchAutocomplete LinkTag={() => {}} getSuggestions={jest.fn()} />
      );
      jest.useFakeTimers();
      searchAutoSuggestionsWrapper
        .find('.textboxInput')
        .simulate('change', { target: { value: 'abcd', name: '' } });
      searchAutoSuggestionsWrapper.setProps({ suggestions: emptySearchResponse });
      jest.runAllTimers();
    });
    searchAutoSuggestionsWrapper.update();

    expect(searchAutoSuggestionsWrapper.find('.searchboxSuggestionsEmpty').length > 0).toBeTruthy();
  });

  it('should clear input box search value when clear Icon was clicked', async () => {
    let searchAutoSuggestionsWrapper;
    await act(async () => {
      searchAutoSuggestionsWrapper = mount(
        <SearchAutocomplete LinkTag={() => {}} getSuggestions={() => {}} />
      );
    });
    searchAutoSuggestionsWrapper
      .find('.textboxInput')
      .simulate('change', { target: { value: 'run', name: '' } });
    searchAutoSuggestionsWrapper.update();
    searchAutoSuggestionsWrapper.find('.searchboxInputClear').simulate('click');

    expect(searchAutoSuggestionsWrapper.find('.textboxInput').props().value).toBe('');
  });

  it('should clear input box search value and remove input box focus when close Icon was clicked', async () => {
    let searchAutoSuggestionsWrapper;
    await act(async () => {
      searchAutoSuggestionsWrapper = mount(
        <SearchAutocomplete
          LinkTag={(item) => {
            return item.href, item.children;
          }}
          getSuggestions={jest.fn()}
        />
      );
    });
    searchAutoSuggestionsWrapper
      .find('.textboxInput')
      .simulate('change', { target: { value: 'run', name: '' } });
    searchAutoSuggestionsWrapper.update();
    searchAutoSuggestionsWrapper.find('.overlay').simulate('click');

    expect(searchAutoSuggestionsWrapper.find('.searchboxFocused').length).toBe(0);
    expect(searchAutoSuggestionsWrapper.find('.textboxInput').props().value).toBe('');
  });

  it('should render search suggestions with eight break points column when result searchTerm length was greater than zero', async () => {
    let searchAutoSuggestionsWrapper;
    await act(async () => {
      searchAutoSuggestionsWrapper = mount(
        <SearchAutocomplete
          LinkTag={(item) => {
            return item.href, item.children;
          }}
          getSuggestions={jest.fn()}
        />
      );
      jest.useFakeTimers();
      searchAutoSuggestionsWrapper
        .find('.textboxInput')
        .simulate('change', { target: { value: 'run', name: '' } });
      searchAutoSuggestionsWrapper.setProps({ suggestions: searchResponse });
      jest.runAllTimers();
    });
    searchAutoSuggestionsWrapper.update();

    expect(searchAutoSuggestionsWrapper.find('Col.searchboxSuggestionsResults').props().sm).toBe(8);
  });

  it('should render search suggestions with twelve break points column when result searchTerm length was zero', async () => {
    let searchAutoSuggestionsWrapper;
    await act(async () => {
      searchAutoSuggestionsWrapper = mount(
        <SearchAutocomplete
          LinkTag={(item) => {
            return item.href, item.children;
          }}
          getSuggestions={jest.fn()}
        />
      );
      jest.useFakeTimers();
      searchAutoSuggestionsWrapper
        .find('.textboxInput')
        .simulate('change', { target: { value: 'run', name: '' } });
      searchAutoSuggestionsWrapper.setProps({ suggestions: responseWithoutProduct });
      jest.runAllTimers();
    });
    searchAutoSuggestionsWrapper.update();

    expect(searchAutoSuggestionsWrapper.find('Col.searchboxSuggestionsResults').props().sm).toBe(
      12
    );
  });

  it('should trigger mockCallBack function on Input keyUp ', async () => {
    let searchAutoSuggestionsWrapper;
    const mockCallBack = jest.fn();
    await act(async () => {
      searchAutoSuggestionsWrapper = mount(
        <SearchAutocomplete
          LinkTag={() => {}}
          getSuggestions={() => {}}
          redirectToSearch={mockCallBack}
        />
      );
    });
    searchAutoSuggestionsWrapper
      .find('.textboxInput')
      .simulate('change', { target: { value: 'run', name: '' } });
    searchAutoSuggestionsWrapper
      .find('.textboxInput')
      .simulate('keyup', { key: 'Enter', keyCode: 13 });
    searchAutoSuggestionsWrapper.update();

    expect(mockCallBack).toHaveBeenCalled();
  });

  it('should not trigger mockCallBack function if keys other than Enter was pressed ', async () => {
    let searchAutoSuggestionsWrapper;
    const mockCallBack = jest.fn();
    await act(async () => {
      searchAutoSuggestionsWrapper = mount(
        <SearchAutocomplete
          LinkTag={() => {}}
          getSuggestions={() => {}}
          redirectToSearch={mockCallBack}
        />
      );
    });
    searchAutoSuggestionsWrapper
      .find('.textboxInput')
      .simulate('change', { target: { value: 'run', name: '' } });
    searchAutoSuggestionsWrapper.find('.textboxInput').simulate('keyup', { keyCode: 37 });
    searchAutoSuggestionsWrapper.update();

    expect(mockCallBack).not.toHaveBeenCalled();
  });

  it('should trigger mockCallBack function when search Icon was clicked', async () => {
    let searchAutoSuggestionsWrapper;
    const mockCallBack = jest.fn();
    await act(async () => {
      searchAutoSuggestionsWrapper = mount(
        <SearchAutocomplete
          LinkTag={() => {}}
          getSuggestions={() => {}}
          redirectToSearch={mockCallBack}
        />
      );
    });
    searchAutoSuggestionsWrapper
      .find('.textboxInput')
      .simulate('change', { target: { value: 'run', name: '' } });
    searchAutoSuggestionsWrapper.update();
    searchAutoSuggestionsWrapper.find('.iconLink').simulate('click');

    expect(mockCallBack).toHaveBeenCalled();
  });

  it('Input box should not be focused when search string length was less than 3', async () => {
    let searchAutoSuggestionsWrapper;
    await act(async () => {
      searchAutoSuggestionsWrapper = mount(
        <SearchAutocomplete LinkTag={() => {}} getSuggestions={() => {}} />
      );
      searchAutoSuggestionsWrapper
        .find('.textboxInput')
        .simulate('change', { target: { value: '', name: '' } });
      searchAutoSuggestionsWrapper.update();

      expect(searchAutoSuggestionsWrapper.find('.searchboxFocused').length).toBe(0);
    });
  });
});
