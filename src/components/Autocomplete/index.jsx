import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import cssClasses from './Autocomplete.module.less';
import { customSearch, INCLUDES, STARTS_WITH } from './helper';

const Autocomplete = (props) => {
  const { label = '', dataSet, searchType } = props;
  const [input, setInput] = useState('');
  const [results, setResults] = useState([]);
  const inputRef = useRef(null);
  const [showDropdown, setShowDropdown] = useState(false);

  // When input changes
  useEffect(() => {
    if (!input) {
      setResults([]);
      setShowDropdown(false)
    } else {
      setResults(customSearch(input, dataSet, searchType));
      setShowDropdown(true)
    }
  }, [input]);

  // Close the dropdown when anything except the input box is clicked
  function handleDocumentClick(event) {
    if (!inputRef.current.contains(event.target)) {
      setShowDropdown(false)
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleDocumentClick);
    return (() => document.removeEventListener('click', handleDocumentClick));
  }, []);

  const getNoresultFoundText = () => {
    return (<p className={cssClasses.soResult}>No results found for <strong>{input}</strong></p>);
  };

  return (
    <div className={cssClasses.autocomplete}>
      {label && <label htmlFor='searchInput' >{label}</label>}
      <input
        id="searchInput"
        className={cssClasses.searchInput}
        type="text"
        value={input}
        onInput={(e) => setInput(e.target.value)}
        ref={inputRef}
      />
      {
        showDropdown &&
        <div
          className={`${cssClasses.dropdown}`}
        >
          {!results.length ? getNoresultFoundText() :
            <div>
              <div className={cssClasses.searchCount}>
                <p>Search count: <strong>{results.length}</strong></p>
                <p className={cssClasses.hr}></p>
              </div>

              {results.map((word) => (
                <p
                  onClick={() => { setInput(word); setTimeout(() => setShowDropdown(false), 0) }}
                  className={cssClasses.suggestionWord}
                >
                  {word.split('').map(
                    (letter) => (
                      <span
                        className={
                          searchType === INCLUDES && input.includes(letter) ? cssClasses.bold : ''
                        }>
                        {letter}
                      </span>
                    ))}
                </p>
              ))}
            </div>
          }
        </div>
      }
    </div>
  );
};

export default Autocomplete;

Autocomplete.propTypes = {
  label: PropTypes?.string,
  dataSet: PropTypes.arrayOf(PropTypes.string).isRequired,
  searchType: PropTypes.oneOf([INCLUDES, STARTS_WITH])
};

Autocomplete.defaultProps = {
  searchType: INCLUDES
};
