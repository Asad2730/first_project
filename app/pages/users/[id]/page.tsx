"use client"
import axios from "axios";
import { useEffect, useState } from "react"

import { useRouter } from "next/navigation";
import UserForm from "@/app/components/UserForm";
import { UserRepo } from "@/app/interfaces/user";

interface UserPageProps {
  params: {
    id: string;
  };
}


 function User({params}:UserPageProps) {
  const router = useRouter()
  const {id} = params
    
    const [user, setUser] = useState<UserRepo | null>(null);
    const [isUpdated,setIsUpdated] = useState(false);
    
   useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(`http://localhost:3000/users/${id}`);
        setUser(data);
     
      } catch (ex) {
        console.error('error', ex);
      }
    })();
  }, [id, isUpdated])

  return (
    <div>
        <h1>User Details</h1>
        {user && <UserForm user={user} onUpdate={() => setIsUpdated(!isUpdated)} onDelete={() => setUser(null)} />}
    </div>
  )
}

export default User