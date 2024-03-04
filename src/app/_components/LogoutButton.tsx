"use client"
import React from 'react'


import {  signOut } from "@/lib/firebase/auth";
import { redirect,useRouter } from "next/navigation";

const LogoutButton = () => {
    const router = useRouter()
    const handleSignOut = async () => {
        const isOk = await signOut();
        console.log(isOk,"isok")
    
        if (isOk) router.push("/sign-in");
      };
  return (
<button onClick={handleSignOut} className="bg-slate-500 p-3 rounded-md">Logout</button>
  )
}

export default LogoutButton