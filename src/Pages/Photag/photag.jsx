import React from 'react';
import Button from 'react-bootstrap/Button';
import CollapsibleExample from '../../components/bar/bar2';
import "../Photag/photag.css";
import FileUploadIcon from '@mui/icons-material/FileUpload';

import TextareaAutosize from '@mui/base/TextareaAutosize';
function Photag() {
  return (
    <div>
      <CollapsibleExample/>
        <br /><br /><br />
        <div style={{textAlign:"center",border:"3px solid black",marginLeft:"20vw",marginRight:"20vw",padding:"30px",background:"lightblue"}}>
          <h1>Post Title</h1><br/>
        <input required={"required"} placeholder="title " id="input-file" style={{marginRight:"3vw"}}type="text"></input><br/><br/>
        <h1 style={{marginLeft:"6vw"}}>Post Description</h1><br/>
        <TextareaAutosize
        style={{marginLeft:"1vw",width: 200}}
      aria-label="empty textarea"
      placeholder="Description..."
    /><br /><br /> <h2>Upload Image </h2><br />
        
        <input id="input-file" type={"file"}></input><br /><br /><br/><br/>
       
        <Button variant="dark"><FileUploadIcon/>&nbsp;Post</Button>
        </div>
    </div>
  )
}

export default Photag;