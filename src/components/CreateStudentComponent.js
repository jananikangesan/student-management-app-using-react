import React, { useState } from 'react';
import StudentService from '../services/StudentService';
import { useNavigate } from 'react-router-dom';

const CreateStudentComponent = () => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const navigate = useNavigate();

    const saveStudent = (e) => {
        e.preventDefault();
        const student = { name, address };
        console.log("student => ", student);

        StudentService.createStudent(student)
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
        navigate("/add-student");
    };

    return (
        <div>
            <div className='container pt-5'>
                <div className='row'>
                    <div className='card col-md-6 offset-md-3 offset-md-3'>
                        <h3 className='text-center'>Add Student</h3>
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
                                    <button className='btn btn-success' onClick={saveStudent}>Save</button>
                                    <button className='btn btn-danger' onClick={handleCancel} style={{ marginLeft: "10px" }}>Cancel</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateStudentComponent;
