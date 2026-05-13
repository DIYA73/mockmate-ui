"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function InterviewPage() {
  const router = useRouter();
  const [type, setType] = useState("frontend");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("token")) router.push("/login");
  }, []);

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center gap-8">
      {!started ? (
        <div className="bg-gray-900 p-8 rounded-2xl w-full max-w-lg text-center">
          <h1 className="text-3xl font-bold mb-2">Ready to practice? 🎙️</h1>
          <p className="text-gray-400 mb-8">Pick your interview type and start speaking</p>
          <select
            className="w-full bg-gray-800 rounded-lg p-3 mb-6 outline-none text-white"
            value={type}
            onChange={e => setType(e.target.value)}
          >
            <option value="frontend">Frontend Developer</option>
            <option value="backend">Backend Developer</option>
            <option value="system-design">System Design</option>
            <option value="behavioral">Behavioral</option>
          </select>
          <button
            onClick={() => setStarted(true)}
            className="w-full bg-white text-black py-3 rounded-lg font-semibold hover:bg-gray-200 text-lg"
          >
            Start Interview 🚀
          </button>
        </div>
      ) : (
        <div className="bg-gray-900 p-8 rounded-2xl w-full max-w-lg text-center">
          <div className="w-24 h-24 rounded-full bg-red-500 mx-auto mb-6 flex items-center justify-center text-4xl animate-pulse">🎙️</div>
          <h2 className="text-2xl font-bold mb-2">Interview in progress...</h2>
          <p className="text-gray-400 mb-8">Speak naturally. The AI is listening.</p>
          <button
            onClick={() => router.push("/feedback")}
            className="w-full bg-red-500 py-3 rounded-lg font-semibold hover:bg-red-600"
          >
            End Interview
          </button>
        </div>
      )}
    </main>
  );
}
