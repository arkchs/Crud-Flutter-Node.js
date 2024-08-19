class User{ 
    constructor(id, name, email){
        this.id = id;
        this.name=name;
        this.email=email;
        this.listNames=[{
            id: id,
            name: name,
            email: email,
        }];
    }
}

export const userModel = new User(1,'Akshat Sharma','workwithme@example.com');