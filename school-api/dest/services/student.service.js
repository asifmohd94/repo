"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentService = void 0;
const pool_1 = require("../config/pool");
class StudentService {
    async getStudent(filter) {
        const query = "SELECT * FROM student_addmission WHERE first_name = $1 OR enroll_number = $2";
        const values = [filter.FirstName, filter.EnrollNumber];
        const student = await pool_1.pool.query(query, values);
        return student.rows;
    }
    async createStudent(body) {
        let query = "INSERT INTO public.student_addmission(enroll_number, first_name, last_name, dob, fathers_name, mothers_name, address, gender,session_id, addmission_grade) VALUES ";
        let values = [];
        let x = 1;
        let temp = "";
        for (let i = 0; i < body.length; i++) {
            temp += "(";
            for (let j = 0; j < 10; j++) {
                temp += "$" + x + ",";
                x++;
            }
            temp = temp.substring(0, temp.length - 1);
            temp += "),";
            query += temp;
            values.push(body[i].enroll_number);
            values.push(body[i].first_name);
            values.push(body[i].last_name);
            values.push(body[i].dob);
            values.push(body[i].fathers_name);
            values.push(body[i].mothers_name);
            values.push(body[i].address);
            values.push(body[i].gender);
            values.push(body[i].session_id);
            values.push(body[i].addmission_grade);
            temp = "";
        }
        query = query.substring(0, query.length - 1);
        query += ";";
        console.log(query);
        const student = await pool_1.pool.query(query, values);
        return student.rows;
    }
}
exports.StudentService = StudentService;
//# sourceMappingURL=student.service.js.map