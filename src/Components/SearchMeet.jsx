import React, { useState } from "react";
import Meet from "./Meet";

function SearchMeet({ meets, newUserData }) {
  const [password, setPassword] = useState("");
  const [onMeet, setOnMeet] = useState();
  const [searchMode, setSearchMode] = useState(true);

  const handleClick = () => {
    setSearchMode(false);
    const istenenNesne = meets.find((item) => item.id == password);
    setOnMeet(istenenNesne);
  };

  const handleBackClick = () => {
    setSearchMode(true);
  };

  return searchMode ? (
    <div className="searchMeetContainer">
      <h2>Bir Toplantı Ara</h2>
      <input
        placeholder="Aradığınız Toplantının Parolasını girin"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      ></input>
      <button onClick={handleClick}>Ara</button>
    </div>
  ) : (
    <Meet
      onMeet={onMeet}
      newUserData={newUserData}
      onBackClick={handleBackClick}
    />
  );
}

export default SearchMeet;
