import { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [messageSent, setMessageSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Message from ${formData.name}`;
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
    const mailtoLink = `mailto:enoshgeneration894@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
    window.location.href = mailtoLink;
    
    // Show message sent confirmation
    setMessageSent(true);
    setTimeout(() => setMessageSent(false), 5000);
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleWhatsApp = () => {
    const message = `Hello, I would like to get in touch with Enosh Generation.`;
    window.open(`https://wa.me/254790282363?text=${encodeURIComponent(message)}`);
  };

  return (
    <main className="container contact-grid">
      <div>
        <h1>Contact Us</h1>
        <p>Send us a message or find our details below.</p>
        
        {messageSent && (
          <div style={{backgroundColor: '#d4edda', color: '#155724', padding: '10px', borderRadius: '5px', marginBottom: '20px'}}>
            ✅ Message sent successfully! We'll get back to you soon.
          </div>
        )}
        
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>Name</label>
          <input 
            type="text" 
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            required
          />
          <label>Email</label>
          <input 
            type="email" 
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            required
          />
          <label>Message</label>
          <textarea 
            rows={5}
            value={formData.message}
            onChange={(e) => setFormData({...formData, message: e.target.value})}
            required
          ></textarea>
          <button className="btn" type="submit">Send Email</button>
        </form>
        
        <button className="btn" onClick={handleWhatsApp} style={{marginTop: '10px', backgroundColor: '#25D366'}}>Send WhatsApp Message</button>
      </div>

      <aside>
        <h2>Contact Details</h2>
        <p>Email: enoshgeneration894@gmail.com</p>
        <p>Phone: 0790282363 • 0759690751</p>
      </aside>
    </main>
  );
};

export default ContactPage;
