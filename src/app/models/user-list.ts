export interface UserList {
    id: number;
    email: string;
    password: string;
    fio: string
    roles: [
        {
            id: number,
            name: string
        }
    ]
}