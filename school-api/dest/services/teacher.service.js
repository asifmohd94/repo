"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeacherService = void 0;
const pool_1 = require("../config/pool");
class TeacherService {
    async getTeacher(filter) {
        const query = "SELECT * FROM teacher WHERE first_name = $1";
        const values = [filter.FirstName];
        const teacher = await pool_1.pool.query(query, values);
        return teacher.rows;
    }
    async createTeacher(body) {
        let query = "INSERT INTO public.teacher(emp_id, first_name, last_name, gender, phone, email, address, primary_subject) VALUES ";
        let values = [];
        let x = 1;
        let temp = "";
        for (let i = 0; i < body.length; i++) {
            temp += "(";
            for (let j = 0; j < 8; j++) {
                temp += "$" + x + ",";
                x++;
            }
            temp = temp.substring(0, temp.length - 1);
            temp += "),";
            query += temp;
            values.push(body[i].emp_id);
            values.push(body[i].first_name);
            values.push(body[i].last_name);
            values.push(body[i].gender);
            values.push(body[i].phone);
            values.push(body[i].email);
            values.push(body[i].address);
            values.push(body[i].primary_subject);
            temp = "";
        }
        query = query.substring(0, query.length - 1);
        query += ";";
        console.log(query);
        console.log(values);
        const teacher = await pool_1.pool.query(query, values);
        return teacher.rows;
    }
}
exports.TeacherService = TeacherService;
//# sourceMappingURL=teacher.service.js.map