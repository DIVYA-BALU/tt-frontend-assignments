import { Instructor } from './Instructor'
import { Assignment } from "./Assignment"
import { Modules } from "./Modules"
import { Review } from "./Review"

export interface Course{
    courseUid: string,
	courseName: string,
	briefDescription: string,
	description: string,
	modules: Modules[],
	amount: number,
	review: Review[],
	published: Date,
	totalEnrollments: number,
	maxEnrollments: number,
	instructor: Instructor,
	assingment:Assignment
}