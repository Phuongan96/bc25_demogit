/**Bài tập 1: Quản lý tuyển sinh  
 *  - Đầu vào:
 *      + Điểm 3 môn, điểm chuẩn
 *      + Khu vực: A,B,C,X
 *      + Đối tượng dự thi: 0,1,2,3
 *      + Điểm tổng kết = 3 môn + điểm ưu tiên
 *  - Đầu ra:
 *      + Show đậu/rớt so sánh với điểm chuẩn
 *      + Show điểm tổng số đạt được
*/

document.getElementById("btnKetQua").onclick = function() {
    var khuVuc = document.getElementById("txtKhuVuc").value;
    console.log(khuVuc);
    var doiTuong = document.getElementById("txtDoiTuong").value;
    console.log(doiTuong);
    var diem_1 = +document.getElementById("txtDiem_1").value;
    var diem_2 = +document.getElementById("txtDiem_2").value;
    var diem_3 = +document.getElementById("txtDiem_3").value;
    var diemChuan = +document.getElementById("txtDiemChuan").value;
    var diemTong = diem_1 + diem_2 + diem_3 + khuVuc + doiTuong;
    console.log(diem_1, diem_2, diem_3);
    checkSelect(khuVuc, doiTuong);
    var aa = checkKetQua(diemTong, diemChuan);
    document.getElementById("showKetQua").innerHTML= aa;
}

function checkSelect(khuVuc,doiTuong) {
    if (khuVuc ==="" && doiTuong ==="") {
        alert("Vui lòng chọn Khu vực và Đối tượng");
    }
    else if (khuVuc === "") {
            alert("Vui lòng chọn Khu vực");
        }
    else if (doiTuong === "") {
        alert("Vui lòng chọn Đối tượng");
    }
}
// function checkInput(diem_1, diem_2, diem_3) {
//     if (diem_1 === 0) {
//         alert("Vui lòng nhập Điểm thứ 1");
//     }
// }
function checkKetQua(diemTong,diemChuan){
    if (diemTong > diemChuan) {
        return "Chúc mừng. Bạn đã đậu rồi";
    } else {
        return "Rất tiếc. Bạn đã rớt";
    }

}