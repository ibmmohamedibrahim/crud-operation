import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Add = ({ students, setStudents, setIsAdding }) => {
  const [Name, setName] = useState('');
  const [Mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [Address, setAddress] = useState('');
  

  const handleAdd = e => {
    e.preventDefault();

    if (!Name || !Mobile || !email || !Address ) {
      return Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'All fields are required.',
        showConfirmButton: true,
      });
    }

    const id = students.length + 1;
    const newStudent = {
      id,
      Name,
      Mobile,
      email,
      Address,
      
    };

    students.push(newStudent);
    localStorage.setItem('students_data', JSON.stringify(students));
    setStudents(students);
    setIsAdding(false);

    Swal.fire({
      icon: 'success',
      title: 'Added!',
      
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="small-container">
      <form onSubmit={handleAdd}>
        <h1>Add Student</h1>
        <label htmlFor="Name"> Name</label>
        
        <input
          id="Name"
          type="text"
          placeholder='Enter youe name'
          name="Name"
          value={Name}
          onChange={e => setName(e.target.value)}
        />
        <label htmlFor="Mobile">Mobile</label>
        <input
          id="Mobile"
          type="number"
          placeholder='Enter your number'
          name="number"
          value={Mobile}
          onChange={e => setMobile(e.target.value)}
        />
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          placeholder='enter your mail'
          name="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <label htmlFor="Address">Address</label>
        <input
          id="Address"
          type="text"
          placeholder='enter your Address'
          name="Address"
          value={Address}
          onChange={e => setAddress(e.target.value)}
        />
        
        <div style={{ marginTop: '30px' }}>
          <input type="submit" value="Add" />
          <input
            style={{ marginLeft: '12px' }}
            className="muted-button"
            type="button"
            value="Cancel"
            onClick={() => setIsAdding(false)}
          />
        </div>
      </form>
    </div>
  );
};

export default Add;
