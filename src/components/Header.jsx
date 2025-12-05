import "./Header.css";
import { FaSun } from "react-icons/fa";
import { IoMoonSharp } from "react-icons/io5";

const Header = ({kuy,theme,setTheme}) => {
  function toggle(){
    if(theme==="light"){
      setTheme("dark")
    }else{
      setTheme("light")
    }
  }
  return (
    <nav>
      <h1>{kuy}</h1>
      <span onClick={toggle}>
            {theme==="light" ? <FaSun size={30}/> : <IoMoonSharp size={30}/>}
      </span>
    </nav>
  );
}

export default Header;
