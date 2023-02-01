import React from 'react';

const Table = ({ students, handleEdit, handleDelete }) => {
  students.forEach((student, i) => {
    student.id = i + 1;
  });

 

  return (
    <div className="contain-table">
      <table className="striped-table">
        <thead>
          <tr>
            <th>ID</th>
            <th> Name</th>
            <th>Mobile</th>
            <th>Email</th>
            <th>Address</th>
    
            <th colSpan={2} className="text-center">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {students.length > 0 ? (
            students.map((student, i) => (
              <tr key={student.id}>
                <td>{i + 1}</td>
                <td>{student.Name}</td>
                <td>{student.Mobile}</td>
                <td>{student.email}</td>
                <td>{student.Address}</td>

                <td className="text-right">
                  <button
                    onClick={() => handleEdit(student.id)}
                    className="button muted-button"
                  >
                    Edit
                  </button>
                </td>
                <td className="text-left">
                  <button
                    onClick={() => handleDelete(student.id)}
                    className="button muted-button"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={7}>No Students</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
