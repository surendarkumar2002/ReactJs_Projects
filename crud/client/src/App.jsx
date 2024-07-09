import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  const [users, setUsers] = useState([]);
  const [filterusers, setFilterusers] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userData, setUserData] = useState({
    name: "",
    age: "",
    city: "",
  });

  const getAllUsers = async () => {
    await axios.get("http://localhost:8000/users").then((res) => {
      // console.log(res.data)
      setUsers(res.data);
      setFilterusers(res.data);
    });
  };
  useEffect(() => {
    getAllUsers(users);
  }, []);

  //Search Function
  const hangleSearchChange = (e) => {
    const searchText = e.target.value.toLowerCase();
    const filteredUsers = users.filter(
      (user) =>
        user.name.toLowerCase().includes(searchText) ||
        user.city.toLowerCase().includes(searchText)
    );
    setFilterusers(filteredUsers);
  };

  //Delete User Function
  const handleDelete = async (id) => {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this user?"
    );
    if (isConfirmed) {
      await axios.delete(`http://localhost:8000/users/${id}`).then((res) => {
        setUsers(res.data);
        setFilterusers(res.data);
      });
    }
  };

  //Add user details
  const handleAddRecord = () => {
    setUserData({ name: "", age: "", city: "" });
    setIsModalOpen(true);
  };

  //close modal

  const closeModal = () => {
    setIsModalOpen(false);
    getAllUsers(users);
  };

  //handle data
  const handleData = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  //handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (userData.id) {
      await axios
        .patch(`http://localhost:8000/users/${userData.id}`, userData)
        .then((res) => console.log(res));
    } else {
      await axios
        .post("http://localhost:8000/users", userData)
        .then((res) => console.log(res));
    }

    closeModal();
    setUserData({ name: "", age: "", city: "" });
  };

  // Update user details
  const updateRecord = (user) => {
    setUserData(user);
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="container">
        <h3>CRUD Application with React.js Frontend and Node.js Backend</h3>
        <div className="input-search">
          <input
            type="search"
            placeholder="Search Text"
            onChange={hangleSearchChange}
          />
          <button className="btn green" onClick={handleAddRecord}>
            Add Record
          </button>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>S.no</th>
              <th>Name</th>
              <th>Age</th>
              <th>City</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {filterusers &&
              filterusers.map((user, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.age}</td>
                  <td>{user.city}</td>
                  <td>
                    <button
                      className="btn green"
                      onClick={() => updateRecord(user)}
                    >
                      Edit
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn red"
                      onClick={() => handleDelete(user.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        {isModalOpen && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={closeModal}>
                &times;
              </span>
              <h2>{userData.id ? "Update Record":"Add Record"}</h2>
              <div className="input-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  value={userData.name}
                  onChange={handleData}
                  name="name"
                  id="name"
                />
              </div>
              <div className="input-group">
                <label htmlFor="age">Age</label>
                <input
                  type="numbe"
                  value={userData.age}
                  onChange={handleData}
                  name="age"
                  id="age"
                />
              </div>
              <div className="input-group">
                <label htmlFor="city">City</label>
                <input
                  type="text"
                  value={userData.city}
                  name="city"
                  id="city"
                  onChange={handleData}
                />
              </div>
              <button className="btn green" onClick={handleSubmit}>
               {userData.id ? "Update User":"Add User"}
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default App;
