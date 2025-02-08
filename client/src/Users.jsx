import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    axios
      .get("http://localhost:3001/")
      .then((result) => setUsers(result.data))
      .catch((err) => console.log(err));
  };

  const handleDelete = (userID) => {
    axios
      .delete("http://localhost:3001/deleteUser/" + userID)
      .then(() => {
        // Update the state by filtering out the deleted user
        setUsers(users.filter((user) => user._id !== userID));
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex vh-100 bg-light justify-content-center align-items-center">
      <div className="w-75 bg-white rounded shadow-lg p-4">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h3 className="text-primary">User List</h3>
          <Link to="/create" className="btn btn-success">
            Add New
          </Link>
        </div>

        <div className="table-responsive">
          <table className="table table-bordered table-hover text-center">
            <thead className="bg-primary text-white">
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Age</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.length > 0 ? (
                users.map((user) => (
                  <tr key={user._id}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.age}</td>
                    <td>
                      <Link
                        to={`/update/${user._id}`}
                        className="btn btn-primary btn-sm mx-1"
                      >
                        ✏️ Edit
                      </Link>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => handleDelete(user._id)}
                      >
                        🗑 Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="text-muted">
                    No users found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Users;
