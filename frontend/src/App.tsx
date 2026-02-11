import { useState } from 'react';
import './App.css'; // Will be updated
import './index.css'; // Global styles

function App() {
  const [apiResponse, setApiResponse] = useState<string | null>(null);

  const fetchApiData = async () => {
    try {
      const res = await fetch('/api/hello');
      const text = await res.text();
      setApiResponse(text);
    } catch (error: any) {
      console.error('Error fetching API:', error);
      setApiResponse(`Error fetching API data: ${error.message}`);
    }
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1 className="app-title">Financial Horizon</h1>
        <nav className="main-nav">
          {/* Future navigation items will go here */}
        </nav>
      </header>
      <main className="main-content">
        <section className="dashboard-section">
          <h2 className="dashboard-title">Your Financial Pulse</h2>
          <div className="summary-cards-grid">
            {/* Placeholder for Projected Net Worth */}
            <div className="summary-card">
              <h3>Projected Net Worth (20 Years)</h3>
              <p className="value">$X,XXX,XXX</p>
              <span className="status">On Track</span>
            </div>
            {/* Placeholder for Current Net Worth */}
            <div className="summary-card">
              <h3>Current Net Worth</h3>
              <p className="value">$X,XXX,XXX</p>
            </div>
            {/* Placeholder for Savings Growth */}
            <div className="summary-card">
              <h3>Savings Growth</h3>
              <p className="value">+X% Annually</p>
            </div>
            {/* API Test Card - Integrated for now */}
            <div className="summary-card api-test-card">
              <h3>API Test</h3>
              <button onClick={fetchApiData} className="api-button">
                Call API: /api/hello
              </button>
              {apiResponse && <p className="api-response">{apiResponse}</p>}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
