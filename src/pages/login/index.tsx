/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
// import Image from "next/image";
import { useRouter } from 'next/router';
import Template from "@/views/template/Template";
import { useState } from 'react';
import { LoginRequest } from '@/types/auth';

export default function LoginForm() {
  const router = useRouter();
  const currentPath = router.pathname;

  return (
    <Template
      title="login page"
      description="login page description here"
      image=""
      url={currentPath}
      classPage="loginform_page"
      idPage="loginform"
      linkcss={[]}>

      <div className="min-h-50 bg-blue-100 px-2">
        <h2 className="text-black text-center">Login</h2>
      </div>
      <div className="min-h-50 bg-red-100 px-2">
        
      </div>
      <div className="min-h-50 bg-green-100 px-2">
      </div>
      <div className="min-h-50 bg-orange-100 px-2">
      </div>
    </Template>
  );
}
