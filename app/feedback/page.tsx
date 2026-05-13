"use client";
import { useRouter } from "next/navigation";

export default function FeedbackPage() {
  const router = useRouter();
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
      <div className="bg-gray-900 p-8 rounded-2xl w-full max-w-lg">
        <h1 className="text-3xl font-bold mb-2">Interview Complete! 🎉</h1>
        <p className="text-gray-400 mb-6">Here is your feedback</p>
        <div className="bg-gray-800 rounded-xl p-6 mb-6">
          <div className="flex justify-between mb-4">
            <span className="text-gray-400">Overall Score</span>
            <span className="text-green-400 font-bold text-2xl">82/100</span>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-400">Communication</span>
              <span className="text-white">85%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Technical Knowledge</span>
              <span className="text-white">80%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Problem Solving</span>
              <span className="text-white">78%</span>
            </div>
          </div>
        </div>
        <div className="flex gap-4">
          <button onClick={() => router.push("/interview")} className="flex-1 bg-white text-black py-3 rounded-lg font-semibold hover:bg-gray-200">Practice Again</button>
          <button onClick={() => router.push("/history")} className="flex-1 border border-white py-3 rounded-lg font-semibold hover:bg-white hover:text-black">View History</button>
        </div>
      </div>
    </main>
  );
}
