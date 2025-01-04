import { Button } from "flowbite-react";
import React from "react";
import { AiFillGoogleCircle } from "react-icons/ai";
import { GoogleAuthProvider } from "firebase";

export default function OAuth() {
  const handleGoogleClick = async () => {
    const provider = new GoogleAuthProvider();
  };
  return (
    <Button
      type="button"
      gradientDuoTone="pinkToOrange"
      outline
      onClick={handleGoogleClick}
    >
      <AiFillGoogleCircle className="w-6 h-6 mr-2" />
      Tiếp tục với Google
    </Button>
  );
}
