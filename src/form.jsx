import { formData } from './myList';
import React, { useState, useEffect } from 'react';

function MyForm() {
    const [formData, setFormData] = useState({
      name: '',
      address: ''
    });
    const [submissions, setSubmissions] = useState([]);
  
    useEffect(() => {
      const storedSubmissions = localStorage.getItem('submissions');
      if (storedSubmissions) {
        setSubmissions(JSON.parse(storedSubmissions));
      }
    }, []);
  
    const generateCode = () => {
        const chars = '0123456789abcdefghijklmnopqrstuvwxyz';
        let code = '';
        for (let i = 0; i < 11; i++) {
          code += chars[Math.floor(Math.random() * chars.length)].toUpperCase();
        }
        return code;
      };
  
    const handleChange = (event) => {
      setFormData({
        ...formData,
        [event.target.name]: event.target.value
      });
    };
  
    const handleSubmit = (event) => {
        event.preventDefault();
        const code = generateCode();
        const newSubmission = { ...formData, code };
        setSubmissions([...submissions, newSubmission]);
        localStorage.setItem('submissions', JSON.stringify([...submissions, newSubmission]));
        setFormData({ name: '', address: '' });
      };
  
    return (
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
        <label>
          Address:
          <input type="text" name="address" value={formData.address} onChange={handleChange} />
        </label>
        <button type="submit">Submit</button>
        <ul>
          {submissions.map(submission => (
            <li key={submission.code}>{submission.name}, {submission.address}, Code: {submission.code}</li>
          ))}
        </ul>
      </form>
    );
  }
  
  export default MyForm;