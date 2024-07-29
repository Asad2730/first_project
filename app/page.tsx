"use client"
import { useRouter } from "next/navigation";
import { useEffect } from "react";


export default function Home() {

  const router = useRouter();
  useEffect(()=>{
    //app/pages/users
    //users then has page.tsx and [id].tsx
    //when app starts page.tsx should load first
    router.push('/pages/users')
  },[router])

  return (
     <>loading...</>
  );
}
