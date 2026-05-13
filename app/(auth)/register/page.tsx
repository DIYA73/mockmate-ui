"use client";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");

  const submit = async () => {
    try {
      const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/register`, form);
      localStorage.setItem("token", res.data.access_token);
      router.push("/interview");
    } catch (e: any) {
      setError(e.response?.data?.message || "Error");
    }
  };

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="bg-gray-900 p-8 rounded-2xl w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6">Create account</h1>
        {error && <p className="text-red-400 mb-4">{error}</p>}
        <input className="w-full bg-gray-800 rounded-lg p-3 mb-4 outline-none" placeholder="Name" onChange={e => setForm({...form, name: e.target.value})} />
        <input className="w-full bg-gray-800 rounded-lg p-3 mb-4 outline-none" placeholder="Email" onChange={e => setForm({...form, email: e.target.value})} />
        <input type="password" className="w-full bg-gray-800 rounded-lg p-3 mb-6 outline-none" placeholder="Password" onChange={e => setForm({...form, password: e.target.value})} />
        <button onClick={submit} className="w-full bg-white text-black py-3 rounded-lg font-semibold hover:bg-gray-200">Sign Up</button>
        <p className="text-center text-gray-400 mt-4">Already have an account? <a href="/login" className="text-white underline">Login</a></p>
      </div>
    </main>
  );
}
