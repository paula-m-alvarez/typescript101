// Almacenar listas de valores estaticos

enum Users{
    NormalUser,
    PayedUser,
    AdminUser,
    MegaUser
}

const myUser = Users.MegaUser;
console.log(myUser);

enum Users2{
    NormalUser = "Normal",
    PayedUser = "Payed",
    AdminUser = "Admin",
    MegaUser = "Mega"
}

const myUser2 = Users2.MegaUser;
console.log(myUser2);