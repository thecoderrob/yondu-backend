import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUser, updateUser } from "../features/users/userSlice";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const UserUpdateForm = ({ id }) => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    address: "",
    postcode: "",
    phone: "",
    email: "",
    username: "",
    isAdmin: false,
  });
  const {
    firstname,
    lastname,
    address,
    postcode,
    phone,
    email,
    username,
    isAdmin,
  } = formData;

  const dispatch = useDispatch();
  const { selectedUser } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(getUser(id));
  }, []);

  useEffect(() => {
    const {
      firstname,
      lastname,
      address,
      postcode,
      phone,
      email,
      username,
      isAdmin,
    } = selectedUser;

    setFormData({
      firstname,
      lastname,
      address,
      postcode,
      phone,
      email,
      username,
      isAdmin,
    });
  }, [selectedUser]);

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]:
        e.target.name === "isAdmin" ? e.target.checked : e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      updateUser({
        id,
        formData,
      })
    );
  };

  return (
    <div>
      <Form onSubmit={handleSubmit} className="w-md">
        <Form.Group className="mb-3" controlId="username">
          <Form.Label>Firstname</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter firstname"
            name="firstname"
            value={firstname || ""}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="lastname">
          <Form.Label>Lastname</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter lastname"
            name="lastname"
            value={lastname || ""}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="address">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter address"
            name="address"
            value={address || ""}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="postcode">
          <Form.Label>Postcode</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter postcode"
            name="postcode"
            value={postcode || ""}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="phone">
          <Form.Label>Mobile Number</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter phone"
            name="phone"
            value={phone || ""}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={email || ""}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            name="username"
            value={username || ""}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Check
          type="checkbox"
          id="isAdmin"
          name="isAdmin"
          label="Administrator"
          checked={isAdmin || false}
          onChange={handleChange}
        />
        <Button
          variant="dark"
          className="mt-3 w-100"
          type="submit"
          onClick={handleSubmit}
        >
          Update User
        </Button>
      </Form>
    </div>
  );
};

export default UserUpdateForm;
