import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';
import StudentService from '../services/StudentService';

function ListStudentComponent() {
    const navigate = useNavigate();
    const [students, setStudents] = React.useState([]);

    React.useEffect(() => {
        StudentService.getStudents().then((res) => {
            setStudents(res.data);
        });
    }, []);

    const addStudent = () => {
        
        navigate("/add-student");
    };

    return (
        <div>
            <h2 className='text-center'>Students List</h2>
            <div className='col-4 p-2'>
                <button className='btn btn-primary' onClick={addStudent}>Add Student</button>
            </div>
            <div className='row'>
                <table className='table table-striped table-bordered'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            students.map(
                                student =>
                                    <tr key={student.id}>
                                        <td>{student.name}</td>
                                        <td>{student.address}</td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ListStudentComponent;
