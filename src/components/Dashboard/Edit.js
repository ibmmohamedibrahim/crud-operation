import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Edit = ({ students, selectedStudent, setStudents, setIsEditing }) => {
  const id = selectedStudent.id;

  const [Name, setName] = useState(selectedStudent.Name);
  const [Mobile, setMobile] = useState(selectedStudent.Mobile);
  const [email, setEmail] = useState(selectedStudent.email);
  const [Address, setAddress] = useState(selectedStudent.Address);


  const handleUpdate = e => {
    e.preventDefault();

    if (!Name || !Mobile || !email || !Address) {
      return Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'All fields are required.',
        showConfirmButton: true,
      });
    }

    const student = {
      id,
      Name,
      Mobile,
      email,
      Address,
     
    };

    for (let i = 0; i < students.length; i++) {
      if (students[i].id === id) {
        students.splice(i, 1, students);
        break;
      }
    }

    localStorage.setItem('employees_data', JSON.stringify(student));
    setStudents(students);
    setIsEditing(false);

    Swal.fire({
      icon: 'success',
      title: 'Updated!',
      text: `${student.Name}'s data has been updated.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="small-container">
      <form onSubmit={handleUpdate}>
        <h1>Edit Student</h1>
        <label htmlFor="Name"> Name</label>
        <input
          id="Name"
          type="text"
          // placeholder='Enter your name'
          name="Name"
          value={Name}
          onChange={e => setName(e.target.value)}
        />
        <label htmlFor="Mobile">Mobile</label>
        <input
          id="Mobile"
          type="number"
          name="number"
          value={Mobile}
          onChange={e => setMobile(e.target.value)}
        />
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <label htmlFor="Address">Address</label>
        <input
          id="Address"
          type="text"
          name="Address"
          value={Address}
          onChange={e => setAddress(e.target.value)}
        />
        
       
        <div style={{ marginTop: '30px' }}>
          <input type="submit" value="Update" />
          <input
            style={{ marginLeft: '12px' }}
            className="muted-button"
            type="button"
            value="Cancel"
            onClick={() => setIsEditing(false)}
          />
        </div>
      </form>
    </div>
  );
};

export default Edit;
