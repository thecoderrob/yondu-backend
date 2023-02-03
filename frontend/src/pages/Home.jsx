import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Home = () => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/");
    }

    if (user && user.isAdmin) {
      navigate("/users");
    }
  }, [user]);
  return (
    <section className="container">
      <p>Nothing to do here...</p>
    </section>
  );
};

export default Home;
