const users = [
    { id: 1, name: "Hoang Bui", age: 19, gender: "male", money: 1000 },
    { id: 2, name: "Tran Duong", age: 14, gender: "female", money: 2000 },
    { id: 3, name: "Dinh Huan", age: 25, gender: "female", money: 1050 },
    { id: 4, name: "Minh Hoang", age: 15, gender: "male", money: 500 },
];

//ý 1
//show
function showUsers(){
    users.forEach((element) => console.log(element));
}
// showUsers();

//thêm 
function addUser(newName, newAge, newGender, newMoney){
    
    let max = users[0].id;
    users.forEach(users => {
        if(users.id > max) 
            max = users.id;
    });

    let iD = 0;
    iD = max;
    iD++;
    users.push({id: iD, name: newName, age: newAge, gender: newGender, money: newMoney});
}
// addUser("Tran Duong",20,"male",696969);
// showUsers();

// xóa 
function deleteUser(id){
    for(let index in users)
        if(users[index].id == id)
            delete users[index];
}
// deleteUser(3);
// showUsers();

// sửa
function editUser(id){
    for(let index in users)
        if(users[index].id == id){
            users[index].name = "Tran Duong";
            users[index].age = 20;
            users[index].gender = "male";
            users[index].money = 10000;
        }
            
}
// editUser(2);
// showUsers();

// ý 2
// 2. Thêm 2 người vào mảng ban đầu trước khi làm ý này
addUser("Tat Trung",21,"male",6969);
addUser("Tran Duong",20,"male",696969);
// showUsers();
//// - Thống kê bao nhiêu nam,bao nhiêu người có tuổi lớn hơn 15 tuổi

function ThongKeNam(gender){
    let count = 0;
    count = users.filter(users => users.gender == gender).length;
    return count;
}
function ThongKeTuoi(Age){
    let count = 0;
    count = users.filter(users => users.age > Age).length;
    return count;
}
// showUsers();
// console.log("So nam la: " + ThongKeNam("male"));
// console.log("So nguoi > 15 tuoi la: " + ThongKeTuoi(15));

// - Tính tổng tiền những người có id chẵn
function TongTien(){
    let TongTien = 0;
    for(let index in users)
        if(users[index].id % 2 == 0)
            TongTien += users[index].money;
    return TongTien;
}
// console.log("Tong tien cua nhung nguoi id chan = " + TongTien());

// - Ai nghèo nhất, Ai giàu nhất
function checkGiauNgheo(){
    let max = users[0].money;
    let min = users[0].money;
    users.forEach(users => {
        if(users.money > max) 
            max = users.money;
        if(users.money < min) 
            min = users.money;
    });

    for(let index in users){
        if(users[index].money == max){
            console.log("Nguoi giau nhat la: ");
            console.log(users[index]);
        } 
        if(users[index].money == min){
            console.log("Nguoi ngheo nhat la: ");
            console.log(users[index]);
        }
    }
}
// showUsers();
// checkGiauNgheo();

// 3. Chuyển hết những người có giới tính male về female
function chuyenGioi(gender){
    users.filter(users => {
        if(users.gender == gender) 
            users.gender = "female";
    });
}
// chuyenGioi("male");
// showUsers();