import React, { useRef, useState } from "react";
import SubMenu from "../../Components/ForDashboard/SubMenu";
import UserDetailModel from "../../Components/ForUserInfo/UserDetailModel";
import LoginDetailModel from "../../Components/ForUserInfo/LoginDetailModel";

const UserInfo = () => {
  const [isEditUserDetail, setIsEditUserDetail] = useState(false);
  const [isEditLogin, setIsEditLogin] = useState(false);

  const toggleEditLogin = () => {
     setIsEditLogin(!isEditLogin);
  }

  const toggleEditUserDetail = () => {
    setIsEditUserDetail(!isEditUserDetail);
  };

  return (
    <>
      <SubMenu />
      <div className="container mt-16 border border-gray-200 shadow rounded-lg p-8 md:w-[70%] lg:w-[50%]">
        <h2 className="text-3xl font-bold mb-3 uppercase">My Details</h2>
        <p>Feel free to edit any of your details below so your account is up to date.</p>
        <div className="uppercase my-12">
          <h2 className="text-2xl font-bold mb-3">Details</h2>
          <div className="leading-8">
            <h3>Name</h3>
            <h3>Date Of Birth</h3>
            <h3>Gender</h3>
            <button onClick={toggleEditUserDetail} className="font-semibold underline underline-offset-2">Edit</button>
            <UserDetailModel
              isOpen={isEditUserDetail}
              toggleEditUserDetail={toggleEditUserDetail} />
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-3 uppercase">Login Details</h2>
          <div className="leading-8">
            <h3>example@gmail.com</h3>
            <h3>********</h3>
            <button onClick={toggleEditLogin} className="font-semibold underline underline-offset-2">Edit</button>
            <LoginDetailModel
               isOpen={isEditLogin}
               toggleEditLogin={toggleEditLogin} />
          </div>
        </div>
      </div>
    </>
  );
};

export default UserInfo;
