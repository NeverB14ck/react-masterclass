import { useState, useEffect } from "react";
import SearchBtn from "../elements/SearchBtn";

const SearchPanal = () => {
  // State Hook
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    document.title = `Google Clone (${counter})`;
  }, [counter]);

  return (
    <div className="container">
      <div className="search-panal">
        <SearchBtn label={`Google Search (${counter})`} />
        <SearchBtn label="I'm feeling Lucky" />
      </div>
      <div className="search-panal-text">
        <span 
        className="subtext" 
        onClick={() => setCounter(counter + 1)}>
          Google offered in:
          <a className="lang-link" href="/">
            ภาษาไทย
          </a>
        </span>
      </div>
    </div>
  );
};

export default SearchPanal;
