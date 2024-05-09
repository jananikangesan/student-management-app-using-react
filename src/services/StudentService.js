import axios from "axios";

const STUDENT_API_BASE_URL="http://localhost:8088/student";

class StudentService{

    getStudents(){
        return axios.get(STUDENT_API_BASE_URL+"/getAll");
    }


}

export default new StudentService();