import { Button, TextInput } from "flowbite-react";
import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

export default function DashProfile() {
  const { currentUser } = useSelector((state) => state.user);
  const [imageFile, setImageFile] = useState(null);
  const [imageFileUrl, setImageFileUrl] = useState(null);
  const filePickerRef = useRef();
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(e.target.files[0]);
      setImageFileUrl(URL.createObjectURL(file));
    }
  };
  useEffect(() => {
    if (imageFile) {
      uploadImage();
    }
  }, [imageFile]);
  const uploadImage = async () => {
    console.log("uploading image...");
  };
  return (
    <div className="max-w-lg w-full mx-auto p-3">
      <h1 className="my-7 text-center font-semibold text-3xl">
        Thông tin cá nhân
      </h1>
      <form className="flex flex-col gap-4">
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          ref={filePickerRef}
          hidden
        />
        <img
          src={imageFileUrl || currentUser.profilePicture}
          alt="user"
          className="rounded-full object-cover h-32 w-32 mx-auto"
          onClick={() => filePickerRef.current.click()}
        />
        <TextInput
          type="text"
          id="username"
          placeholder="username"
          defaultValue={currentUser.username}
        />
        <TextInput
          type="text"
          id="email"
          placeholder="email"
          defaultValue={currentUser.email}
        />
        <TextInput type="password" id="password" placeholder="Password" />
        <Button type="submit" gradientDuoTone="purpleToBlue" outline>
          Cập nhật
        </Button>
      </form>
      <div className="text-red-500 flex justify-between mt-5">
        <span className="cursor-pointer">Xóa tài khoản</span>
        <span className="cursor-pointer">Đăng xuất</span>
      </div>
    </div>
  );
}
