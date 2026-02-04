import React from 'react';

const NewConvertsPage: React.FC = () => (
  <main className="container">
    <h1>New Converts Registration</h1>
    <form className="convert-form">
      <label>Full Name</label>
      <input type="text" />
      <label>Phone</label>
      <input type="text" />
      <label>Email</label>
      <input type="email" />
      <label>Brief Testimony</label>
      <textarea rows={4}></textarea>
      <button className="btn" type="submit">Register</button>
    </form>
  </main>
);

export default NewConvertsPage;
