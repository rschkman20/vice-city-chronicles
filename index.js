
export default function Home() {
  return (
    <div style={{ backgroundColor: 'black', color: 'white', minHeight: '100vh', fontFamily: 'sans-serif', padding: '2rem' }}>
      <header style={{ backgroundColor: '#1f1f1f', padding: '1.5rem', boxShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>
        <h1 style={{ fontSize: '2.5rem', color: '#ff4de1' }}>Vice City Chronicles</h1>
        <p style={{ color: '#aaa' }}>Your source for everything GTA 6: leaks, news, and wild theories.</p>
      </header>

      <main style={{ maxWidth: '800px', margin: '2rem auto' }}>
        <section style={{ backgroundColor: '#2a2a2a', padding: '1.5rem', borderRadius: '1rem', marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>🔥 Featured: Vice City Is Back?</h2>
          <p style={{ color: '#ccc' }}>
            A new leak suggests that GTA 6 will revisit Vice City, with modernized graphics, new characters, and a map that evolves over time.
            Here's what we know so far...
          </p>
        </section>

        <section>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Recent Posts</h3>

          <div style={{ backgroundColor: '#2a2a2a', padding: '1rem', borderRadius: '0.75rem', marginBottom: '1rem' }}>
            <h4 style={{ fontSize: '1.1rem' }}>Top 5 GTA 6 Rumors You Shouldn't Ignore</h4>
            <p style={{ fontSize: '0.9rem', color: '#aaa' }}>From evolving maps to dual protagonists — which ones might actually be true?</p>
          </div>

          <div style={{ backgroundColor: '#2a2a2a', padding: '1rem', borderRadius: '0.75rem', marginBottom: '1rem' }}>
            <h4 style={{ fontSize: '1.1rem' }}>Everything We Know About the Vice City Map</h4>
            <p style={{ fontSize: '0.9rem', color: '#aaa' }}>Leaked coordinates, beach clubs, and possible Everglades missions.</p>
          </div>

          <div style={{ backgroundColor: '#2a2a2a', padding: '1rem', borderRadius: '0.75rem' }}>
            <h4 style={{ fontSize: '1.1rem' }}>Fan Theory: Is Jason Related to Tommy Vercetti?</h4>
            <p style={{ fontSize: '0.9rem', color: '#aaa' }}>A crazy fan theory that actually makes a bit too much sense...</p>
          </div>
        </section>
      </main>

      <footer style={{ backgroundColor: '#1f1f1f', padding: '1rem', textAlign: 'center', color: '#666', fontSize: '0.875rem' }}>
        &copy; {new Date().getFullYear()} Vice City Chronicles. All rights reserved.
      </footer>
    </div>
  );
}
