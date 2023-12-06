import { useState } from "react";
import "./App.css";
import AddMeet from "./Components/AddMeet";
import SearchMeet from "./Components/SearchMeet";
import toast, { Toaster } from "react-hot-toast";

function App() {
  const [meets, setmeets] = useState([]);

  const onMeets = (name, meetTitle, meetDesc, meetDate) => {
    const id = Math.round(Math.random() * 999);
    const newMeet = [
      ...meets,
      {
        id: id,
        meetTitle,
        meetDesc,
        users: [{ name: name, date: meetDate }],
      },
    ];
    setmeets(newMeet);
    toast.success("Toplantı İçin Erişim Kodunuz: " + id);
  };

  const newUserData = (name, date, id) => {
    const updatedMeets = meets.map((meet) => {
      if (meet.id == id) {
        return {
          ...meet,
          users: [
            ...meet.users,
            {
              name: name,
              date: date,
            },
          ],
        };
      }
      return meet;
    });
    setmeets(updatedMeets);
  };

  return (
    <div className="appContainer">
      <AddMeet onMeets={onMeets}></AddMeet>
      <SearchMeet meets={meets} newUserData={newUserData}></SearchMeet>
      <Toaster/>
    </div>
  );
}

export default App;
