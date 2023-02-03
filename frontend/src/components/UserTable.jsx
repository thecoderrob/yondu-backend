import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteUser, deleteUsers } from "../features/users/userSlice";
import { Link } from "react-router-dom";
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";

import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";

const UserTable = (users) => {
  const [ids, setIds] = useState([]);
  const { data } = users;
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setIds((prevState) => [...prevState, parseInt(value)]);
    } else {
      setIds(ids.filter((id) => id !== parseInt(value)));
    }
  };

  return (
    <div className="table-responsive">
      <div className="table-header">
        <h2>Users Table</h2>
        <div className="table-buttons">
          <Link to="/users/create">
            <Button variant="dark">Add a user</Button>
          </Link>
          <Button variant="danger" onClick={() => dispatch(deleteUsers(ids))}>
            Delete Selected Users
          </Button>
        </div>
      </div>
      <Table bordered>
        <thead>
          <tr>
            <th></th>
            <th>#</th>
            <th>First</th>
            <th>Last</th>
            <th>Address</th>
            <th>Postcode</th>
            <th>Email</th>
            <th>Username</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d) => {
            const {
              id,
              firstname,
              lastname,
              address,
              postcode,
              email,
              username,
            } = d;
            return (
              <tr key={id}>
                <th>
                  <input
                    type="checkbox"
                    name="selectUser"
                    value={id}
                    onChange={handleChange}
                  />
                </th>
                <th scope="row">{id}</th>
                <td>{firstname}</td>
                <td>{lastname}</td>
                <td>{address}</td>
                <td>{postcode}</td>
                <td>{email}</td>
                <td>{username}</td>
                <td>
                  <div className="table-actions">
                    <Link to={`/users/${id}`}>
                      <Button variant="dark">
                        <FaPencilAlt />
                      </Button>
                    </Link>

                    <Button
                      variant="danger"
                      onClick={() => dispatch(deleteUser(id))}
                    >
                      <FaTrashAlt />
                    </Button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default UserTable;
