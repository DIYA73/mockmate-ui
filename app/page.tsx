export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold mb-4">MockMate 🎙️</h1>
      <p className="text-gray-400 text-xl mb-8">AI Voice Interview Coach</p>
      <div className="flex gap-4">
        <a href="/login" className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200">Login</a>
        <a href="/register" className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-black">Sign Up</a>
      </div>
    </main>
  );
}
