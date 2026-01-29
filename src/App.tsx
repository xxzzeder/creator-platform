import './index.css';

function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#00A3FF', minHeight: '100vh', color: '#fff' }}>
      
      {/* Header */}
      <header style={{ padding: '20px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#0077CC' }}>
        <h1 style={{ margin: 0 }}>0nlyfans</h1>
        <nav>
          <a href="#creators" style={{ color: '#fff', margin: '0 10px', textDecoration: 'none' }}>Creators</a>
          <a href="#subscribe" style={{ color: '#fff', margin: '0 10px', textDecoration: 'none' }}>Subscribe</a>
          <a href="#featured" style={{ color: '#fff', margin: '0 10px', textDecoration: 'none' }}>Featured</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section style={{ textAlign: 'center', padding: '100px 20px' }}>
        <h2>Welcome to 0nlyfans Clone</h2>
        <p>Explore creators, subscribe to exclusive content, and enjoy a personalized experience.</p>
        <button style={{ padding: '10px 20px', backgroundColor: '#fff', color: '#00A3FF', border: 'none', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' }}>
          Get Started
        </button>
      </section>

      {/* Creators Section */}
      <section id="creators" style={{ padding: '50px 20px', backgroundColor: '#0088DD' }}>
        <h2>Top Creators</h2>
        <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', marginTop: '20px' }}>
          <div style={{ width: '200px', textAlign: 'center', margin: '10px' }}>
            <img src="https://via.placeholder.com/150" alt="Creator 1" style={{ borderRadius: '50%' }} />
            <h3>Creator 1</h3>
          </div>
          <div style={{ width: '200px', textAlign: 'center', margin: '10px' }}>
            <img src="https://via.placeholder.com/150" alt="Creator 2" style={{ borderRadius: '50%' }} />
            <h3>Creator 2</h3>
          </div>
          <div style={{ width: '200px', textAlign: 'center', margin: '10px' }}>
            <img src="https://via.placeholder.com/150" alt="Creator 3" style={{ borderRadius: '50%' }} />
            <h3>Creator 3</h3>
          </div>
        </div>
      </section>

      {/* Subscribe Section */}
      <section id="subscribe" style={{ textAlign: 'center', padding: '50px 20px' }}>
        <h2>Subscribe</h2>
        <p>Get exclusive access to your favorite creators.</p>
        <button style={{ padding: '10px 20px', backgroundColor: '#fff', color: '#00A3FF', border: 'none', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' }}>
          Subscribe Now
        </button>
      </section>

      {/* Featured Section */}
      <section id="featured" style={{ padding: '50px 20px', backgroundColor: '#0077CC', textAlign: 'center' }}>
        <h2>Featured Content</h2>
        <p>Check out the most popular content right now!</p>
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', marginTop: '20px' }}>
          <div style={{ width: '250px', margin: '10px', backgroundColor: '#00A3FF', padding: '10px', borderRadius: '5px' }}>
            <img src="https://via.placeholder.com/200x150" alt="Featured 1" style={{ width: '100%', borderRadius: '5px' }} />
            <h4>Featured 1</h4>
          </div>
          <div style={{ width: '250px', margin: '10px', backgroundColor: '#00A3FF', padding: '10px', borderRadius: '5px' }}>
            <img src="https://via.placeholder.com/200x150" alt="Featured 2" style={{ width: '100%', borderRadius: '5px' }} />
            <h4>Featured 2</h4>
          </div>
          <div style={{ width: '250px', margin: '10px', backgroundColor: '#00A3FF', padding: '10px', borderRadius: '5px' }}>
            <img src="https://via.placeholder.com/200x150" alt="Featured 3" style={{ width: '100%', borderRadius: '5px' }} />
            <h4>Featured 3</h4>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ textAlign: 'center', padding: '20px', backgroundColor: '#005EA3' }}>
        <p>© 2026 0nlyfans Clone. All rights reserved.</p>
      </footer>

    </div>
  );
}

export default App;
