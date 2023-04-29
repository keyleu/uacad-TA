export class Student {
    _id: string
    isOnline: boolean
    name: string
    avatar: string
    lastName: string
    username: string
    email: string
    phone: string
    inscriptionDate: string
    courses: Array<Course>
}

class Course{
    _id: string
    title: string
    percentCompleted: number
    inscriptionDate: string
}