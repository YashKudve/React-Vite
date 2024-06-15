import React from "react";
import { useParams } from "react-router-dom"; //read from browser's searchbar

function User() {
  const { userid } = useParams();
  return (
    <>
      <h1 className="text-center font-bold text-3xl m-10 p-10">
        User : {userid}
      </h1>
    </>
  );
}

export default User;
