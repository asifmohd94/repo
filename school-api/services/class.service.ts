import { pool } from '../config/pool';
import { IClassSearchFilter } from '../models/api.interface/class.interface';
import { IClass } from '../models/class.model';

export class ClassService {

    public async getClassInfo(filter: IClassSearchFilter): Promise<IClass[]> {
        const query = "SELECT g.grade,t.first_name teacherName,s.enroll_number,st.first_name studentName, sub.subject_name FROM class_grade g INNER JOIN teacher t on g.emp_id = t.emp_id INNER JOIN student s on g.grade = s.current_grade inner join student_addmission st on s.enroll_number = st.enroll_number INNER JOIN subject sub on sub.grade = g.grade WHERE g.grade = $1";
        const values = [filter.Grade]
        const grade = await pool.query(query, values);
        console.log(grade.rows)
        return grade.rows
    }

}