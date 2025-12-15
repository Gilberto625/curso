console.log("Hola Mundo");

type User = {
    id: number;
    name: string;
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
};
const user: User = {
    id: 1,
    name: "cesar",
    email: "cesar@gmail.com",
    password: "123456",
    createdAt: new Date(),
    updatedAt: new Date(),
};

function getUser(id: number): User | undefined {
    if (id === user.id) {
        return user;
    } else {
        return undefined;
    }
}
hola();
console.log(getUser(user.id));

function hola() {
    console.log("Hola Mundo");
}

