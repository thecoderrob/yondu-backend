import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import UserForm from "../components/UserForm";

const User = () => {
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
      <h2 className="text-center mb-3">Add a new user</h2>
      <UserForm />
    </div>
  );
};

export default User;
