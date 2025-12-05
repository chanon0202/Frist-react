import Header from "./components/Header.jsx";
import PersonList from "./components/PersonList.jsx";
import "./App.css";
import { useState } from "react";
import AddFrom from "./components/AddForm.jsx";
import { useEffect } from "react";

function App() {
  const [data, setData] = useState([
    {
      id: 1,
      name: "auto",
      gender: "ชาย",
    },
    {
      id: 2,
      name: "สมุย",
      gender: "หญิง",
    },
    {
      id: 3,
      name: "สมชาย",
      gender: "ชาย",
    },
    {
      id: 4,
      name: "สมหญิง",
      gender: "หญิง",
    },
  ]);

  const [theme, setTheme] = useState(localStorage.getItem("mode")|| "light" ) ;

  function deleteUser(id) {
    const result = data.filter((user) => user.id !== id); //New array
    setData(result);
  }

  useEffect(() => {
    localStorage.setItem("mode",theme)
  }, [theme]);

  return (
    <div className={theme}>
      <div className="App">
        <Header
          kuy="แอพจัดการข้อมูลประชากร"
          theme={theme}
          setTheme={setTheme}
        />
        <main>
          <AddFrom data={data} setData={setData} />
          <PersonList data={data} deleteUser={deleteUser} />
        </main>
      </div>
    </div>
  );
}

export default App;
