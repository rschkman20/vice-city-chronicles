
export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <header className="bg-gray-900 p-6 shadow-lg">
        <h1 className="text-4xl font-bold text-pink-500">Vice City Chronicles</h1>
        <p className="text-gray-400 mt-2">Your source for everything GTA 6: leaks, news, and wild theories.</p>
      </header>

      <nav className="bg-gray-800 p-4 flex gap-6 justify-center text-sm border-b border-gray-700">
        <a href="#" className="hover:text-pink-500">Home</a>
        <a href="#" className="hover:text-pink-500">News</a>
        <a href="#" className="hover:text-pink-500">Leaks</a>
        <a href="#" className="hover:text-pink-500">Theories</a>
        <a href="#" className="hover:text-pink-500">About</a>
      </nav>

      <main className="max-w-4xl mx-auto p-6 space-y-12">
        <section className="bg-gray-800 p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold mb-4">🔥 Featured: Vice City Is Back?</h2>
          <p className="text-gray-300">
            A new leak suggests that GTA 6 will revisit Vice City, with modernized graphics, new characters, and a map that evolves over time. Here's what we know so far...
          </p>
        </section>

        <section className="space-y-6">
          <h3 className="text-xl font-semibold">Recent Posts</h3>

          <div className="bg-gray-800 p-5 rounded-xl">
            <h4 className="text-lg font-bold">Top 5 GTA 6 Rumors You Shouldn't Ignore</h4>
            <p className="text-gray-400 text-sm mt-1">From evolving maps to dual protagonists — which ones might actually be true?</p>
          </div>

          <div className="bg-gray-800 p-5 rounded-xl">
            <h4 className="text-lg font-bold">Everything We Know About the Vice City Map</h4>
            <p className="text-gray-400 text-sm mt-1">Leaked coordinates, beach clubs, and possible Everglades missions.</p>
          </div>

          <div className="bg-gray-800 p-5 rounded-xl">
            <h4 className="text-lg font-bold">Fan Theory: Is Jason Related to Tommy Vercetti?</h4>
            <p className="text-gray-400 text-sm mt-1">A crazy fan theory that actually makes a bit too much sense...</p>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 p-6 mt-16 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Vice City Chronicles. All rights reserved.
      </footer>
    </div>
  );
}
