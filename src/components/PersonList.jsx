import { useState } from "react";
import "./Person.css";
import User from "./User"
import { IoEye } from "react-icons/io5"; //เปิดตา
import { IoMdEyeOff } from "react-icons/io"; //ปิดตา


function PersonList({data,deleteUser}) {

  const [show, setShow] = useState(true);
  const myStylee={
    color:"red",
    fontSize:"25px"
  }
  return (
    <div className="container">
      <div className="header">
        <h2 style={ myStylee }>จำนวนประชากร: {data.length} คน</h2>
        <spen onClick={() => setShow(!show)}>
          {show ? <IoMdEyeOff size={30}/> : <IoEye size={30}/>}
        </spen>
      </div>
      <ul>
        {show &&
          data.map((item) => (
            <User key={item.id} item={item} deleteUser={deleteUser}/>
          ))}
      </ul>
    </div>
  );
}

export default PersonList;
