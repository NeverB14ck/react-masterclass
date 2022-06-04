import { useState, useEffect } from "react";
import googleLogo from "../assets/img/googlelogo_color.png";
import magnifying from "../assets/img/magnifying.svg";
import VoiceIcon from "../elements/VoiceIcon";

const GoogleLogo = () => {
  return (
    <div id="logo" className="row">
      <img src={googleLogo} alt="google-logo" />
    </div>
  );
};

const TextSearch = (props) => {  
  const {setPreview} = props

  return (
    <div id="text-search" className="row">
      <img className="magnifying" src={magnifying} alt="magnifying" />
      <input className="searchbox" type="text" onChange={(e) => setPreview(e.target.value)} />
      <VoiceIcon />
    </div>
  );
};

const SearchZone = () => {
  const [preview, setPreview] = useState("")
  
  return (
    <div className="search-zone">
      <GoogleLogo />
      <TextSearch setPreview={setPreview}/>
      <br />
      <span>Suggestion: {preview}</span>
    </div>
  );
};

export default SearchZone;
