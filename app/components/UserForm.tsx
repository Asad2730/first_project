import axios from "axios";
import { FormEvent, useState } from "react";
import { UserFormProps, UserRepo } from "../interfaces/user";

function UserForm({ user, onUpdate, onDelete }: UserFormProps) {
  const [formData, setFormData] = useState<UserRepo>(user);

  const handleChange = async (e: FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target as HTMLInputElement;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    axios.post("http://localhost:3000/users", formData);
    onUpdate();
  };

  const handleUpdate = async (e: FormEvent) => {
    e.preventDefault();
    axios.put(`http://localhost:3000/users/${formData.id}`, formData);
    onUpdate();
  };

  const handleDelete = async (e: FormEvent) => {
    e.preventDefault();
    axios.delete(`http://localhost:3000/users/${formData.id}`);
    onDelete();
  };

  return (
    <form
      className="border p-4 rounded-lg shadow-md space-y-4">
      <>
        <div className="grid grid-cols-1 gap-4">
          <div className="grid grid-rows-2">
            <label className="m-2">Email:</label>
            <input
              className="bg-white text-black border border-gray-300 rounded p-2"
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="grid grid-rows-2">
            <label className="m-2">Name:</label>
            <input
              className="bg-white text-black border border-gray-300 rounded p-2"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="grid grid-rows-2">
            <label className="m-2">PhoneNo:</label>
            <input
              className="bg-white text-black border border-gray-300 rounded p-2"
              type="text"
              name="phoneNo"
              value={formData.phoneNo}
              onChange={handleChange}
            />
          </div>

          <div className="flex space-x-2">
          <button
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              type="submit"
              onClick={handleSubmit}
            >
              Add
            </button>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              type="submit"
              onClick={handleUpdate}
            >
              Update
            </button>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              type="button"
              onClick={handleDelete}
            >
              Delete
            </button>
          </div>
        </div>
      </>
    </form>
  );
}

export default UserForm;
