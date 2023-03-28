import React from 'react';
import { useState } from 'react';

// built using this tutorial https://blog.logrocket.com/build-react-autocomplete-component/

const Autocomplete = ({ suggestions, getCityFromChild }) => {
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [input, setInput] = useState("");



  const onChange = (e) => {
    const userInput = e.target.value;
    // filter suggestions that do not contain user input
    const unLinked = suggestions.filter((suggestion) =>
      suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );

      setInput(e.target.value);
      setFilteredSuggestions(unLinked);
      setActiveSuggestionIndex(0);
      setShowSuggestions(true);
    };

    const onClick = (e) => {
      setFilteredSuggestions([]);
      setInput(e.target.innerText);
      getCityFromChild(e.target.innerText);
      setActiveSuggestionIndex(0);
      setShowSuggestions(false);
    };

    const onKeyDown = (e) => {
      // user presses enter key
      if(e.keyCode === 13) {
        setInput(filteredSuggestions[activeSuggestionIndex]);
        setActiveSuggestionIndex(0);
        setShowSuggestions(false);
        } // user presses up arrow
        else if (e.keyCode === 38) {
          if(activeSuggestionIndex === 0) {
            return;
          }
          setActiveSuggestionIndex(activeSuggestionIndex - 1);
        } // user presses down arrow
        else if (e.keyCode === 40) {
          if (activeSuggestionIndex - 1 === filteredSuggestions.length) {
            return;
          }
          setActiveSuggestionIndex(activeSuggestionIndex + 1);
        }
      };

      const SuggestionsListComponent = () => {
        return filteredSuggestions.length ? (
          <ul class="suggestions">
            {filteredSuggestions.map((suggestion, index) => {
              let className;

              if (index === activeSuggestionIndex) {
                className = 'suggestion-active';
              }
              return (
                <li className={className} key={suggestion} onClick={onClick}>
                  {suggestion}
                </li>
              );
            })}
          </ul>
        ) : (
          <div class="no-suggestions">
            <span role="img" aria-label="tear emoji">
            😪
            </span>{" "}
            <em>Sorry, no suggestions</em>
          </div>
        );
      };

      return (
        <>
          <input 
            type='text'
            className='w-50 h-6 m-3'
            onChange={onChange}
            onKeyDown={onKeyDown}
            value={input}
          />
          {showSuggestions && input && <SuggestionsListComponent />}
        </>
      );
 };

export default Autocomplete;