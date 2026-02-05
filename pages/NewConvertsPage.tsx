import { useState } from 'react';
import * as XLSX from 'xlsx';

const NewConvertsPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    testimony: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create workbook and worksheet
    const wb = XLSX.utils.book_new();
    const wsData = [
      ['Full Name', 'Phone', 'Email', 'Brief Testimony', 'Date Registered'],
      [formData.fullName, formData.phone, formData.email, formData.testimony, new Date().toLocaleDateString()]
    ];
    const ws = XLSX.utils.aoa_to_sheet(wsData);
    XLSX.utils.book_append_sheet(wb, ws, 'New Converts');
    
    // Save file
    XLSX.writeFile(wb, 'new_converts_registration.xlsx');
    
    // Reset form
    setFormData({ fullName: '', phone: '', email: '', testimony: '' });
    alert('Registration saved successfully!');
  };

  return (
    <main className="container">
      <h1>New Converts Registration</h1>
      <form className="convert-form" onSubmit={handleSubmit}>
        <label>Full Name</label>
        <input 
          type="text" 
          value={formData.fullName}
          onChange={(e) => setFormData({...formData, fullName: e.target.value})}
          required
        />
        <label>Phone</label>
        <input 
          type="text" 
          value={formData.phone}
          onChange={(e) => setFormData({...formData, phone: e.target.value})}
          required
        />
        <label>Email</label>
        <input 
          type="email" 
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
          required
        />
        <label>Brief Testimony</label>
        <textarea 
          rows={4}
          value={formData.testimony}
          onChange={(e) => setFormData({...formData, testimony: e.target.value})}
          required
        ></textarea>
        <button className="btn" type="submit">Register</button>
      </form>
    </main>
  );
};

export default NewConvertsPage;
