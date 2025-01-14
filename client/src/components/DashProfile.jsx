import { Button, TextInput } from "flowbite-react";
import React from "react";
import { useSelector } from "react-redux";

export default function DashProfile() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className="max-w-lg w-full mx-auto p-3">
      <h1 className="my-7 text-center font-semibold text-3xl">
        Thông tin cá nhân
      </h1>
      <form className="flex flex-col gap-4">
        <img
          src={currentUser.profilePicture}
          alt="user"
          className="rounded-full object-cover h-32 w-32 mx-auto"
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
