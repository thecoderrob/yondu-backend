import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createUser } from "../features/users/userSlice";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const UserForm = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    address: "",
    postcode: "",
    phone: "",
    email: "",
    username: "",
    password: "",
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
    password,
    isAdmin,
  } = formData;

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]:
        e.target.name === "isAdmin" ? e.target.checked : e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createUser(formData));
    setFormData({
      firstname: "",
      lastname: "",
      address: "",
      postcode: "",
      phone: "",
      email: "",
      username: "",
      password: "",
      isAdmin: false,
    });
  };

  const { isSuccess, isError, message } = useSelector((state) => state.users);
  useEffect(() => {
    if (isSuccess) {
      toast.success("Successfully added user! 🙂", {
        position: toast.POSITION.BOTTOM_CENTER,
      });
    }
  }, [isSuccess, isError, message]);

  return (
    <div>
      <Form onSubmit={handleSubmit} className="w-md">
        <Form.Group className="mb-3" controlId="username">
          <Form.Label>Firstname</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter firstname"
            name="firstname"
            value={firstname}
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
            value={lastname}
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
            value={address}
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
            value={postcode}
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
            value={phone}
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
            value={email}
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
            value={username}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter password"
            name="password"
            value={password}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Check
          type="checkbox"
          id="isAdmin"
          label="Administrator"
          value={isAdmin}
          onChange={handleChange}
        />
        <Button variant="dark" className="mt-3 w-100" type="submit">
          Create User
        </Button>
      </Form>
    </div>
  );
};

export default UserForm;
