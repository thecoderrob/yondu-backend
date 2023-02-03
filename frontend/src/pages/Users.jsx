import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getUsers, reset } from "../features/users/userSlice";

import UserTable from "../components/UserTable";

const Dashboard = () => {
  const { user } = useSelector((state) => state.auth);
  const { users, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.users
  );

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!user) {
      navigate("/");
    }

    if (user && !user.isAdmin) {
      navigate("/home");
    }

    dispatch(getUsers());

    return () => {
      dispatch(reset());
    };
  }, [user, navigate, dispatch]);

  return (
    <div className="container">
      {users.length < 1 ? (
        <h3>No users at the moment</h3>
      ) : (
        <>
          <UserTable data={users} />
        </>
      )}
    </div>
  );
};

export default Dashboard;
