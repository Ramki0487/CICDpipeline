/*
 * File: SearchAutoSuggestions.stories.js
 * Project: webapp-rrs
 * Created Date: Tuesday, May 04th 2021, 3:46:43 pm
 * Author: Riyaz <riyaz.pasha@nutechnologyinc.com
 * -------
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import { searchResp } from '@Mocks/searchAutoSuggestions/SearchAutoSuggestions.json';
import SearchAutoSuggestions from './SearchAutoSuggestions';

export default {
  title: 'SearchAutoSuggestions',
  component: SearchAutoSuggestions,
};

export const primary = (args) => <SearchAutoSuggestions {...args} />;

primary.args = {
  searchResult: searchResp,
  isOpen: true,
  keyword: 'running',
};
