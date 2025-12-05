import "./AddForm.css"
import { useState } from "react";
export default function AddFrom(props) {

    const [name,setName] = useState("")
    const [gender,setGender] = useState("ชาย")

    const {data,setData} = props

    function saveData(e){
        e.preventDefault()
        const Preson={
            id:Math.floor(Math.random()*1000),
            name:name,
            gender:gender
        }
        console.log(Preson)
        setData([...data,Preson])
        setName("")
        setGender("ชาย")
    }

    return(

        <section className="container">
            <form onSubmit={saveData}>
                <label>ชื่อประชากร</label>
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
                <select name="" id="" value={gender} onChange={(e)=>setGender(e.target.value)}>
                    <option>ชาย</option>
                    <option>หญิง</option>
                </select>
                <button type="submit" className="btn-save" disabled={name.trim()===""}>บันทึก</button>
            </form>
        </section>
    );
}