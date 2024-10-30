/* eslint-disable @typescript-eslint/no-explicit-any */
import { gql, useMutation } from "@apollo/client";
import React, { useState } from "react";

const REGISTER_USER = gql`
  mutation RegisterUser(
    $username: String!
    $email: String!
    $password: String!
  ) {
    registerUser(username: $username, email: $email, password: $password) {
      user {
        _id
        email
        cartId
      }
    }
  }
`;

const UserRegisterForm = ({ refetchUsers }: { refetchUsers: () => void }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [registerUser, { loading, error }] = useMutation(REGISTER_USER, {
    onCompleted: () => {
      refetchUsers();
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      registerUser({
        variables: {
          username,
          email,
          password,
        },
      });
      setUsername("");
      setEmail("");
      setPassword("");
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <div>
      <h2
        style={{
          fontSize: "28px",
          fontWeight: "bold",
        }}
      >
        User Register
      </h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <button type="submit" disabled={loading}>
            {loading ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>

      {error && <p style={{ color: "red" }}>{error.message}</p>}
    </div>
  );
};

export default UserRegisterForm;
