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

document.getElementById("btnKetQua").onclick = function () {
    var khuVuc = document.getElementById("txtKhuVuc").value;
    console.log(khuVuc);
    var doiTuong = document.getElementById("txtDoiTuong").value;
    console.log(doiTuong);
    var diem_1 = document.getElementById("txtDiem_1").value;
    var diem_2 = document.getElementById("txtDiem_2").value;
    var diem_3 = document.getElementById("txtDiem_3").value;
    var diemChuan = document.getElementById("txtDiemChuan").value;
    var diemTong = diem_1*1 + diem_2*1 + diem_3*1 + khuVuc + doiTuong;
    console.log(diemChuan,diem_1, diem_2, diem_3);
    checkSelect(khuVuc, doiTuong);
    checkDiem(diem_1, diem_2, diem_3, diemChuan);
    if (checkKetQua(diemTong, diemChuan) && (khuVuc != "") && (doiTuong != "")) {
        var ketQua = "<div class='alert alert-success'>Chúc mừng, bạn đã đậu!</div>";
        document.getElementById("showKetQua").innerHTML = ketQua;
    } else if (checkKetQua(diemTong, diemChuan) && (khuVuc != "") && (doiTuong != "")) {
        var ketQua = "<div class='alert alert-danger'>Rất tiếc, bạn đã trượt rồi :(</div>"
        document.getElementById("showKetQua").innerHTML = ketQua;
    }
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

function checkKetQua(diemTong,diemChuan){
    if (diemTong > +diemChuan) {
        return true;
    } else {
        return false;
    }

}
function checkDiem(diem_1, diem_2, diem_3, diemChuan) {
    if ((diem_1==="")&& (diem_2!=="" && diem_3 !=="")){
        alert("Vui lòng nhập điểm thứ 1");
    }
    else if ((diem_2==="")&& (diem_1!=="" && diem_3 !=="")) {
        alert("Vui lòng nhập điểm thứ 2");
    }
    else if ((diem_3==="")&& (diem_1!=="" && diem_2 !=="")) {
        alert("Vui lòng nhập điểm thứ 3");
    }
    else if ((diem_1 !=="")&& (diem_2==="" && diem_3==="")) {
        alert("Vui lòng nhập điểm thứ 2 và 3")
    }
    else if ((diem_2 !=="")&& (diem_1== "" && diem_3 ==="")) {
        alert("Vui lòng nhập điểm thứ 1 và 3")
    }
    else if ((diem_3 !=="")&& (diem_1==="" && diem_2 ==="")) {
        alert("Vui lòng nhập điểm thứ 1 và 2")
    }
    else if((diem_1==="" && diem_2 ==="" && diem_3==="")){
        alert("Vui lòng nhập điểm thứ 1 và 2 và 3")
    }
    if (diemChuan ==="") {
        alert("Vui lòng nhập điểm chuẩn của Hội đồng")
    }
}