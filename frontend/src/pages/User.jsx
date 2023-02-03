import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import UserUpdateForm from "../components/UserUpdateForm";

const User = () => {
  const { userId } = useParams();

  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/");
    }

    if (!user.isAdmin) {
      navigate("/home");
    }
  });

  return (
    <div className="container">
      <h2 className="text-center mb-3">Edit User #{userId}</h2>
      <UserUpdateForm id={userId} />
    </div>
  );
};

export default User;
