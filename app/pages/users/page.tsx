"use client";
import { UserRepo } from "@/app/interfaces/user";
import axios from "axios";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Users() {
  const [users, setUsers] = useState<UserRepo[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get('http://localhost:3000/users');
        setUsers(data);
      } catch (ex) {
        console.error('Error', ex);
      }
    })();
  }, []);

  return (
    <div className="p-6 bg-cyan-950 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Users List</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
          <thead className="bg-gray-200 text-gray-700">
            <tr>
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">Email</th>
              <th className="py-2 px-4 border-b">Phone-No</th>
              <th className="py-2 px-4 border-b"></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user!.id} className="hover:bg-gray-50">
                <td className="py-2 px-4 border-b text-black">{user!.name}</td>
                <td className="py-2 px-4 border-b text-black">{user!.email}</td>
                <td className="py-2 px-4 border-b text-black">{user!.phoneNo}</td>
                <td className="py-2 px-4 border-b text-center text-black">
                  <Link href={`/pages/users/${user!.id}`} className="text-blue-500 hover:underline">
                    View Details
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
