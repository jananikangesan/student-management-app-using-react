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
    const editStudent=(id)=>{
        navigate(`/update-student/${id}`)
    }
    const deleteStudent = (id) => {
        StudentService.deleteStudent(id)
            .then(() => {
                setStudents(students.filter((stu) => stu.id !== id));
                console.log("student deleted successfully");
            })
            .catch((error) => {
                console.error("Error deleting student:", error);
            });
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
                                        <td>
                                            <button onClick={()=> editStudent(student.id)} className='btn btn-info '>Update</button>
                                            <button style={{marginLeft:"10px"}} onClick={()=> deleteStudent(student.id)} className='btn btn-danger'>Delete</button>
                                        </td>
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
