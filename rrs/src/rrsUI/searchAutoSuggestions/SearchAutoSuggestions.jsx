/*
 * File: SearchAutoSuggestions.jsx
 * Project: webapp-rrs
 * Created Date: Tuesday, May 04th 2021, 3:46:43 pm
 * Author: Riyaz <riyaz.pasha@nutechnologyinc.com
 * -------
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import Card from '@RRS-UI/card/Card';
import Image from '@RRS-UI/image/Image';
import InputGroup from '@RRS-UI/inputGroup/InputGroup';
import { Col, Row } from '@RRS-UI/layout';
import Typography from '@RRS-UI/typography/Typography';
import { constructProductUrl } from '@Utils/Product';
import { func, object, string } from 'prop-types';
import { useEffect, useRef, useState } from 'react';
import ContentLoader from 'react-content-loader';
import ReactHtmlParser from 'react-html-parser';
import styles from './SearchAutoSuggestions.module.scss';

let suggestionsCallTracking = null;

/**
 * SearchAutoSuggestions component
 * @param {object} suggestions - Search results object
 * @param {string} className - class to override default styles
 * @param {function} getSuggestions - Callback function to fetch suggestions
 * @param {function} redirectToSearch - Callback function to redirect to search page
 * @param {function} LinkTag - Custom Function to handle clicks on links
 * @returns
 */
const SearchAutoSuggestions = ({
  className,
  LinkTag,
  getSuggestions,
  redirectToSearch,
  suggestions,
}) => {
  const inputRef = useRef();
  const [results, setResults] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [searchText, setSearchText] = useState('');

  const renderSearchTerm = (searchTerm, index) => {
    const tmpSearchTerm = searchTerm.toLowerCase();
    const newSearchTerm = tmpSearchTerm.replace(searchText, `<b>${searchText}</b>`);
    return (
      <li key={`search_term_${index}`}>
        <LinkTag href={`/search/${searchTerm}`}>{ReactHtmlParser(newSearchTerm)}</LinkTag>
      </li>
    );
  };

  const handleClear = () => {
    setSearchText('');
    inputRef.current?.focus();
    setIsActive(false);
  };

  const handleClose = () => {
    setSearchText('');
    setIsActive(false);
  };

  const fetchResults = async (keyword) => {
    setIsLoading(true);
    try {
      await getSuggestions(keyword);
    } catch (err) {
      //log err
    }

    setIsLoading(false);
  };

  const handleChange = (val) => {
    // Clear the existing results and prepare for new search
    if (results) setResults();

    // show or hide searchbox controls based on value
    setIsActive(val ? true : false);

    // If the keyword is 2 or more char fetch new results
    if (val?.length >= 2) {
      // Handles fast typing!
      clearInterval(suggestionsCallTracking);
      suggestionsCallTracking = setTimeout(() => {
        fetchResults(val);
      }, 500);
    }
    setSearchText(val);
  };

  const emptyResults = () => {
    return !results?.searchTerms?.length && !results?.products?.length;
  };

  const handleOnkeyUp = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();

      // redirect to search page
      redirectToSearch(e?.target?.value);
    }
  };

  useEffect(() => {
    setResults(suggestions);
  }, [suggestions]);

  return (
    <>
      <Col
        className={`${styles.searchbox} ${isActive ? styles.searchboxFocused : ''} ${className}`}
      >
        <Row className={styles.searchboxInput} alignItems="center">
          <InputGroup
            iconProps={{
              iconName: 'search',
              onClick: () => redirectToSearch(searchText),
              disabled: !searchText || searchText?.length < 2,
            }}
            inputProps={{
              placeholder: 'What are you looking for?',
              className: styles.searchboxInputText,
              onKeyUp: handleOnkeyUp,
              onChange: handleChange,
              value: searchText,
              forwardRef: inputRef,
            }}
          />
          <a className={styles.searchboxInputClear} onClick={handleClear}>
            Clear
          </a>
        </Row>
        {(results || isLoading) && (
          <Row className={styles.searchboxAutoComplete}>
            <Row className={styles.searchboxSuggestions}>
              {!isLoading && emptyResults() && (
                <Row>
                  <Typography variant="p" className={styles.searchboxSuggestionsEmpty}>
                    We couldn&apos;t find anything for <strong>{`"${searchText}"`}</strong>
                  </Typography>
                </Row>
              )}

              <Row>
                {isLoading && (
                  <ContentLoader width="100%" height="300">
                    <rect x="30" y="30" width="30%" height="10" />
                    <rect x="30" y="60" width="30%" height="10" />
                    <rect x="30" y="90" width="30%" height="10" />
                    <rect x="30" y="120" width="30%" height="10" />
                    <rect x="30" y="150" width="30%" height="10" />

                    <rect x="40%" y="30" width="15%" height="100" />
                    <rect x="60%" y="30" width="15%" height="100" />
                    <rect x="80%" y="30" width="15%" height="100" />
                    <rect x="40%" y="150" width="15%" height="100" />
                    <rect x="60%" y="150" width="15%" height="100" />
                    <rect x="80%" y="150" width="15%" height="100" />
                    <rect x="50%" y="270" width="22%" height="15" />
                  </ContentLoader>
                )}
                {!isLoading && (
                  <>
                    {results?.searchTerms?.length > 0 && (
                      <Col className={styles.searchboxSuggestionsLinks} sm={4}>
                        <ul>
                          {results?.searchTerms?.map((searchTerm, index) =>
                            renderSearchTerm(searchTerm?.value, index)
                          )}
                        </ul>
                        {/* {searchCategories?.map((searchCategory, index) => (
                    <Fragment key={index}>
                      <Typography className={styles.categories} variant="h5">
                        {searchCategory.title}
                      </Typography>
                      <ul className={styles.searchCategories}>
                        {searchCategory?.list.map((item, index) => renderSearchTerm(item, index))}
                      </ul>
                    </Fragment>
                  ))} */}
                      </Col>
                    )}
                    {results?.products?.length > 0 && (
                      <Col
                        className={styles.searchboxSuggestionsResults}
                        sm={results?.searchTerms?.length > 0 ? 8 : 12}
                      >
                        <Typography className={styles.searchboxSuggestionsResultsTitle} variant="p">
                          Top results for <strong>{`"${searchText}"`}</strong>
                        </Typography>

                        <Row rowGap={10}>
                          {results?.products?.map((item, index) => (
                            <Col
                              key={`search_item_${index}`}
                              className={styles.searchboxSuggestionsResultsItem}
                              xs={6}
                              md={4}
                            >
                              <LinkTag href={constructProductUrl(item?.allMeta?.id, item?.title)}>
                                <Card
                                  title={item?.title}
                                  image={
                                    <Image
                                      src={`${item?.allMeta?.image_url}?wid=140&hei=140`}
                                      alt={item?.title}
                                      loading="eager"
                                    />
                                  }
                                />
                              </LinkTag>
                            </Col>
                          ))}
                        </Row>
                        <Row className={styles.searchboxSuggestionsSeeAll} justifyContent="center">
                          <LinkTag href={`/search/${searchText}`}>See All Results</LinkTag>
                        </Row>
                      </Col>
                    )}
                  </>
                )}
              </Row>
            </Row>
          </Row>
        )}
      </Col>
      <div
        className={`${styles.overlay} ${isActive ? styles.overlayActive : ''}`}
        onClick={handleClose}
      ></div>
    </>
  );
};

//default props
SearchAutoSuggestions.defaultProps = {
  suggestions: {},
  className: '',
  redirectToSearch: null,
};

//Props validation
SearchAutoSuggestions.propTypes = {
  suggestions: object,
  getSuggestions: func.isRequired,
  className: string,
  redirectToSearch: func,
  LinkTag: func.isRequired,
};

export default SearchAutoSuggestions;
