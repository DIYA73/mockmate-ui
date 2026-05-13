"use client";
import { useRouter } from "next/navigation";

export default function HistoryPage() {
  const router = useRouter();
  const sessions = [
    { type: "Frontend Developer", score: 82, date: "May 13, 2026" },
    { type: "Backend Developer", score: 75, date: "May 12, 2026" },
    { type: "System Design", score: 88, date: "May 11, 2026" },
  ];

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
      <div className="bg-gray-900 p-8 rounded-2xl w-full max-w-lg">
        <h1 className="text-3xl font-bold mb-6">Past Sessions 📋</h1>
        <div className="space-y-4 mb-6">
          {sessions.map((s, i) => (
            <div key={i} className="bg-gray-800 rounded-xl p-4 flex justify-between items-center">
              <div>
                <p className="font-semibold">{s.type}</p>
                <p className="text-gray-400 text-sm">{s.date}</p>
              </div>
              <span className="text-green-400 font-bold text-xl">{s.score}/100</span>
            </div>
          ))}
        </div>
        <button onClick={() => router.push("/interview")} className="w-full bg-white text-black py-3 rounded-lg font-semibold hover:bg-gray-200">
          Start New Interview
        </button>
      </div>
    </main>
  );
}
