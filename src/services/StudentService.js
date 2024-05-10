import axios from "axios";

const STUDENT_API_BASE_URL="http://localhost:8088/student";

class StudentService{

    getStudents(){
        return axios.get(STUDENT_API_BASE_URL+"/getAll");
    }

    createStudent(student){
        return axios.post(STUDENT_API_BASE_URL+"/add",student);
    }
    getStudentById(studentId){
        return axios.get(STUDENT_API_BASE_URL+"/getStudent/"+studentId);
    }
    updateStudent(student,studentId){
        return axios.put(STUDENT_API_BASE_URL+"/update/"+studentId,student);
    }
    deleteStudent(studentId){
        return axios.delete(STUDENT_API_BASE_URL+"/delete/"+studentId);
    }

}

export default new StudentService();