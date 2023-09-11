import React, { useState } from "react";

const UplodePhotos = () => {
  // const [file, setFile] = useState("");
  const [image, setImage] = useState("");
  // const [uploadedImg, setUploadedImg] = useState("");

  // function previewFile(file) {
  //   const reader = new FileReader();
  //   reader.readAsDataURL(file);

  //   reader.onloadend = () => {
  //     setImage(reader.result);
  //   };
  // }
  // const handleChange = (e) => {
  //   const file = e.target.files[0];
  //   setFile(file);
  //   previewFile(file);
  // };
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const result = await axios.post("/uploadsimage", {
  //     image: image,
  //   });
  //   try {
  //     const uploadedImg = result.data.public_id;
  //     setUploadedImg(uploadedImg);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  const handleSubmit = () => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "Unsigned");
    data.append("cloud_name", "dt0kqfifb");

    fetch("https://api.cloudinary.com/v1_1/dt0kqfifb/image/upload", {
      method: "POST",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <>
      <div>
        <label htmlFor="fileInput">Upload</label>
        <input
          type="file"
          id="fileInput"
          onChange={(e) => setImage(e.target.files[0])}
          required
          accept="image/png, image/jpeg , image/jpg,image/jfif"
        />
        <button onClick={handleSubmit} className="btn btn-primary">
          Submit
        </button>
      </div>
      {/* <img src={image} alt="" /> */}
    </>
  );
};

export default UplodePhotos;
