import React, { useState } from "react";

function Meet({ newUserData, onMeet, onBackClick }) {
  const [newUserName, setNewUserName] = useState("");
  const [newUserDate, setNewUserDate] = useState("");
  const [updatedMeet, setUpdatedMeet] = useState(onMeet);


  const addDate = () => {
    newUserData(newUserName, newUserDate, updatedMeet.id);
    const updatedUsers = [
      ...updatedMeet.users,
      { name: newUserName, date: newUserDate },
    ];
    const updatedData = { ...updatedMeet, users: updatedUsers };
    setUpdatedMeet(updatedData);
    setNewUserName("");
    setNewUserDate("");
  };

  const AddGoogleCalender = (date) =>{
    const formattedDate = date.replaceAll('-', '/');
    const googleCalendarLink = `https://calendar.google.com/calendar/u/0/r/day/${formattedDate}`;
    window.open(googleCalendarLink, '_blank');
  }

  const allUsersHaveSameDate = updatedMeet.users.every(
    (user, index, arr) => user.date === arr[0].date
  );

  const handleBackClick = () => {
    onBackClick();
  };

  return (
    <div className="searchMeetContainer">
      <h2 className="meetTitle">{updatedMeet.meetTitle}</h2>
      <p className="meetDesc">{updatedMeet.meetDesc}</p>
      <p>Meet ID: {updatedMeet.id}</p>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Katılımcı Ismi</th>
            <th scope="col">Uygun Tarih</th>
            <th scope="col">Takvimine Ekle</th>
          </tr>
        </thead>
        <tbody>
          {updatedMeet.users.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.date}</td>
              <td><button className="addToGoogleCalendar" onClick={() => AddGoogleCalender(item.date)}>Ekle</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      {allUsersHaveSameDate ? (
        <p className="okeyDate">En uygun tarih: {updatedMeet.users[0].date}</p>
      ) : (
        <p className="okeyDate">
          Malesef herkese uygun bir toplantı günü Bulunamadı!
        </p>
      )}
      <input
        onChange={(e) => setNewUserName(e.target.value)}
        className="nameInput"
        placeholder="İsminiz"
        value={newUserName}
      />
      <input
        onChange={(e) => setNewUserDate(e.target.value)}
        type="date"
        value={newUserDate}
      />
      <button onClick={addDate}>Sana Uygun Tarihi Ekle</button>
      <button className="backClick" onClick={handleBackClick}>
        Geri Çık
      </button>
    </div>
  );
}

export default Meet;
