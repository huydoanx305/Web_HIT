// Bài 3: Chuẩn hoá các chuỗi sau
// - Không có khoảng trắng thừa ở đầu và cuối
// - Giữa các từ chỉ có 1 khoảng trắng
// - Chữ đầu của các từ viết hoa
// - Không có bất kì kí tự nào là số

const case1 = "    hOang Bui   ";
// -> Hoang Bui
const case2 = " hOANG      BUI   hOang     ";
const case3 = "23traN    dUOng23     ";

function chuanHoa(Case){
    Case = Case.toLowerCase().trim();
    while (Case.indexOf("  ") != -1) Case = Case.replaceAll("  "," ");
    for(let i in Case)
        while(Case.charAt(i).match(/[0-9]/g))
            Case = Case.replace(Case.charAt(i),"");
            
    let newCase = Case.split(" ");
    let text = "";
    for(let i in newCase){
        text += (newCase[i].charAt(0)).toUpperCase() + newCase[i].substring(1);
        if (i < newCase.length - 1)
            text += " ";
    }
    return text;
}
console.log(chuanHoa(case1));
console.log(chuanHoa(case2));
console.log(chuanHoa(case3));