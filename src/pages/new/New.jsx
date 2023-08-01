import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";

const New = ({ inputs, title }) => {

  const [file, setFile] = useState  ("");
  
  
  return (
    <div className="new">
     <Sidebar />
     <div className="newContainer">
      <Navbar />
      <div className="top">
        <h1>{title}</h1>
      </div>
      <div className="bottom">
        <div className="left">
          <img src={file ? URL.createObjectURL(file) : "https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg"} alt="" />
          
        </div>
        <div className="right">
          <form>
          <div className="formInput">
            <lable htmlFor="file" >
              Image: <DriveFolderUploadOutlinedIcon className="icon" />
              </lable>
            <input type="file" id="file" onChange={e=>setFile(e.target.files[0])} 
            style={{ display: "visable" }} 
            />
          </div>

          {inputs.map((input) => (
            <div className="formInput" key={input.id}>
              <label>{input.label}</label>
              <input type={input.type} placeholder={input.placeholder} />
            </div>
          ))}
          <button>Send</button>
          </form>
          </div>
      </div>
     </div>
    </div>
  );
};

export default New;