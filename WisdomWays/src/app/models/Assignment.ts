import { Questions } from "./question"

export interface Assignment{
    title: string
	questions: Questions[],
	duration: number
}