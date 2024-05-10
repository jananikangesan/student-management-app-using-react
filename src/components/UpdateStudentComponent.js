import React, { useState, useEffect } from 'react';
import StudentService from '../services/StudentService';
import { useNavigate, useParams } from 'react-router-dom';

function UpdateStudentComponent() {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        getStudent();
    }, []);

    const getStudent = () => {
        StudentService.getStudentById(id).then((res) => {
            let student = res.data;
            setName(student.name);
            setAddress(student.address);
        }).catch(error => {
            console.error("Error:", error);
        });
    };

    const updateStudent = (e) => {
        e.preventDefault();
        const student = { name, address };
        console.log("student => ", student);
    
        StudentService.updateStudent(student, id) // Pass the id obtained from URL parameters
            .then(res => {
                console.log("result:", res);
                navigate("/");
            })
            .catch(error => {
                console.error("Error:", error);
            });
    };
    

    const changeNameHandler = (event) => {
        setName(event.target.value);
    };

    const changeAddressHandler = (event) => {
        setAddress(event.target.value);
    };

    const handleCancel = () => {
        setName('');
        setAddress('');
        navigate("/");
    };

    return (
        <div>
            <div className='container pt-5'>
                <div className='row'>
                    <div className='card col-md-6 offset-md-3 offset-md-3'>
                        <h3 className='text-center'>Update Student</h3>
                        <div className='card-body'>
                            <form>
                                <div className='form-group'>
                                    <label>Name</label>
                                    <input placeholder='name' name="name" className='form-control' value={name} onChange={changeNameHandler} />
                                </div>
                                <div className='form-group'>
                                    <label>Address</label>
                                    <input placeholder='address' name="address" className='form-control' value={address} onChange={changeAddressHandler} />
                                </div>
                                <div className='pt-2'>
                                    <button className='btn btn-success' onClick={updateStudent}>Update</button>
                                    <button className='btn btn-danger' onClick={handleCancel} style={{ marginLeft: "10px" }}>Cancel</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UpdateStudentComponent;
