import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";
import { useNavigate, Link } from "react-router-dom";

import Button from "react-bootstrap/Button";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    dispatch(reset());

    setTimeout(() => {
      navigate("/");
    }, 10);
  };

  return (
    <>
      {user && (
        <div className="container">
          <header className="primary-header">
            <h3>{user.firstname}</h3>
            <nav className="primary-header__nav">
              <ul className="primary-header__list">
                {user.isAdmin && (
                  <li>
                    <Link to="/users">
                      <Button variant="outline-dark">Users</Button>
                    </Link>
                  </li>
                )}

                <li>
                  <Button variant="dark" onClick={handleLogout}>
                    Logout
                  </Button>
                </li>
              </ul>
            </nav>
          </header>
        </div>
      )}
    </>
  );
};

export default Header;
