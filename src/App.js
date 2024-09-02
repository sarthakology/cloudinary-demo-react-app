import React, { useState } from 'react';
import axios from 'axios';

function App() {

  const [image, setImage] = useState("");
  const [imgURL, setImgURL] = useState("");

  const handelUpload = () => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "iwy41byb");
    data.append("cloud_name", "dn3agbfxl");

    axios
      .post("https://api.cloudinary.com/v1_1/dn3agbfxl/image/upload", data)
      .then((res) => {
        setImgURL(res.data.url);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <>
      <input type="file" onChange={(e) => setImage(e.target.files[0])} />
      <button onClick={handelUpload}>Upload</button>
      {imgURL && <img src={imgURL} alt="Uploaded" />}
    </>
  );
}

export default App;
//https://www.youtube.com/watch?v=GML8Mw449O4