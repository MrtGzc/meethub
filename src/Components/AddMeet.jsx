import { useState } from "react";

function AddMeet({ onMeets }) {
  const [name, setName] = useState("");
  const [meetTitle, setMeetTitle] = useState("");
  const [meetDesc, setMeetDesc] = useState("");
  const [meetDate, setMeetDate] = useState("");

  const handleCreateMeet = () => {
    setName("");
    setMeetTitle("");
    setMeetDesc("");
    onMeets(name, meetTitle, meetDesc, meetDate);
    setMeetDate(""); // Oluştur butonuna basıldığında date inputunu sıfırla
  };

  return (
    <div className="addMeetContainer">
      <h2>Bir Toplantı Oluşturun</h2>
      <input
        value={name}
        placeholder={"isminiz"}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        value={meetTitle}
        placeholder={"Bir Toplantı Başlığı Yazın"}
        onChange={(e) => setMeetTitle(e.target.value)}
      />
      <textarea
        value={meetDesc}
        rows={"5"}
        placeholder={"Toplantı Açıklaması yazın"}
        onChange={(e) => setMeetDesc(e.target.value)}
      />
      <input
        type="date"
        value={meetDate}
        onChange={(e) => setMeetDate(e.target.value)}
      />
      <button className="addMeetButton" onClick={handleCreateMeet}>
        Oluştur
      </button>
    </div>
  );
}

export default AddMeet;
