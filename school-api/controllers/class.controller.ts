import { Request, Response } from 'express';
import { ClassService } from '../services/class.service';

export class ClassController {
    
    classService: ClassService;

    constructor() {
        this.classService = new ClassService()
    }

    public async getClassInfo(req: Request, res: Response) {

        try {

            if (typeof (req.query.grade) != "string") {
                res.status(400)
                    .send("Bad Request");
            } else {
                const query = { Grade: parseInt(req.query.grade) }

                const grade = await this.classService.getClassInfo(query);
                res.json({ Grade: grade });

            }
        } catch (err) {
            console.log(err);
            res.status(404)
                .send("Not Found");
        }


    }

}