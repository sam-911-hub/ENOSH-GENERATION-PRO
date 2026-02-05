const ContactPage = () => (
  <main className="container contact-grid">
    <div>
      <h1>Contact Us</h1>
      <p>Send us a message or find our details below.</p>
      <form className="contact-form">
        <label>Name</label>
        <input type="text" />
        <label>Email</label>
        <input type="email" />
        <label>Message</label>
        <textarea rows={5}></textarea>
        <button className="btn" type="submit">Send Message</button>
      </form>
    </div>

    <aside>
      <h2>Contact Details</h2>
      <p>Email: info@enosh.org</p>
      <p>Phone: +123 456 7890</p>
      <p>Address: Enosh Central, City</p>
    </aside>
  </main>
);

export default ContactPage;
