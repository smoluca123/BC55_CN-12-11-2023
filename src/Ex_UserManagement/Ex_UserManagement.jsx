import React, { useEffect, useState } from 'react';
import axios from 'axios';
import FormUser from './FormUser';
import ListUser from './ListUser';
import toast, { Toaster } from 'react-hot-toast';

const base = 'https://650f9b0d54d18aabfe9a203b.mockapi.io/api/v1/users_BC55';
export default function Ex_UserManagement() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const { data } = await axios.get(base);
      setUsers(data);
    } catch (error) {}
  };

  const handleAddUser = async (user) => {
    try {
      const response = await axios.post(base, user);
      setUsers([...users, response.data]);
      toast.success('User added successfully');
    } catch (error) {
      toast.error('Error creating user');
    }
  };
  const handleDeteleUser = async (id) => {
    try {
      const response = await axios.delete(`${base}/${id}`);
      toast.success('User Deleted Successfully');
      fetchUsers();
    } catch (error) {
      toast.error('Something Went Wrong');
    }
  };

  return (
    <div className="container">
      <Toaster position="top-right" />
      <FormUser onAddUser={handleAddUser} />
      <ListUser users={users} onDelete={handleDeteleUser} />
    </div>
  );
}
