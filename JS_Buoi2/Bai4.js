// Bài 4
//- Lấy ra chính xác tất cả gmail trong đoạn text sau
// Yêu cầu dùng regex

const textEmail = "mynamebvh@gmail.comdfklgjfdkjgkfdjgkldtranduong@gmail.com";
const Email = textEmail.match(/(m[\w]+@[\w]+.com)|(t[\w]+@[\w]+.com)/g);
for (const match of Email) {
  console.log(match);
}

// - Lấy ra tất cả sdt trong đoạn text sau
// - Yêu cầu dùng regex
const textPhone = "dfkdsklfjlksdjfklsd0979150921dfjhdsjfhds0979120734";
const Phone = textPhone.match(/[0-9]{10}/g);
for (const match of Phone) {
  console.log(match);
}



