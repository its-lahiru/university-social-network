import { Faculty } from "../user.model";
export interface CreateUserDto {
    id: string;
    firstName: string;
    lastName: string;
    faculty: Faculty;
    email: string;
    username: string;
    password: string;
}
