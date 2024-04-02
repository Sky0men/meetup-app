export interface User {
    email: string;
    exp: number;
    iat: number;
    id: number;
    roles: [
        {
            id: number;
            name: string;
            createdAt: Date;
            updatedAt: Date;
        }
    ];
}