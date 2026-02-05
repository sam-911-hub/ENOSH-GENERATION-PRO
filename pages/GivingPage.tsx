import { useState } from 'react';

const GivingPage = () => {
  const [showThankYou, setShowThankYou] = useState(false);

  const handleGiveOnline = () => {
    setShowThankYou(true);
    setTimeout(() => setShowThankYou(false), 3000);
  };

  return (
    <main className="container">
      <h1>Giving & Support</h1>
      <p>Your support helps us run ministries, outreach and events.</p>
      
      <section>
        <h2>Give Online</h2>
        <p><strong>M-Pesa Paybill:</strong> 9530411</p>
        <button className="btn" onClick={handleGiveOnline}>Give Online</button>
        
        {showThankYou && (
          <div style={{marginTop: '20px', textAlign: 'center'}}>
            <span style={{fontSize: '48px'}}>🙏</span>
            <p><strong>Thank you for your generous giving!</strong></p>
          </div>
        )}
      </section>
    </main>
  );
};

export default GivingPage;
