
/**
 * Bài 1: Tính Lương Nhân viên
 *! khối 1: input
 * tienLuong, soNgay
 * 
 * 
 *! Khối 2: các bước xử lý
 *   tạo hàm tính lương
 *   gắn hàm vào sự kiện click button
 *   trong hàm: lấy giá trị từ form
 *   lập công thức tính lương
 *?  tongLuongLam = tienLuong * soNgay;
 *                   
 * 
 *! khối 3: output 
 *  số tiền lương mỗi người nhận
 *  hiển thị kết quả ra UI
 * 
 * 
 * tongLuongLam
 */

function tinhTongLuong() {
    var tienLuong = document.getElementById('tienLuong1Ngay').value;
    var soNgay = document.getElementById('soNgayLam').value;

    //? khối 2: progress xử lý
    var tongLuongLam = 0;
    tongLuongLam = tienLuong * soNgay;

    //? khối 3 output
    document.getElementById('tongLuong').innerHTML = tongLuongLam;
}


/**
* Bài 2: Tính Giá trị trung bình
*! khối 1: input
* num1, num2, num3, num4, num5
* 
* 
* 
*! Khối 2: các bước xử lý
*  tạo hàm 
*  gắn hàm vào sự kiện click button
*  lấy giá trị từ form
*  lập công thức tính giá trị trung bình
*? soTrungBinh = (num1 + num2 + num3 + num4 + num5) / 5;
*  
*  chuyển Đổi number(): chuyên string thành kiểu Int và Float
*  parseFloat (số thực)
*  parseInt (số nguyên)
*                     
* 
*! khối 3: output 
* Số Trung bình
* hiển thị kết quả ra UI
*
* 
* soTrungBinh
*/

function tinhGiaTri() {
    var so1 = document.getElementById('number1').value;
    var so2 = document.getElementById('number2').value;
    var so3 = document.getElementById('number3').value;
    var so4 = document.getElementById('number4').value;
    var so5 = document.getElementById('number5').value;

    var giaTri = 0;
    giaTri = (Number(so1) + Number(so2) + Number(so3) + Number(so4) + Number(so5)) / 5;

    console.log(giaTri)
    document.getElementById('ketQua2').innerHTML = giaTri;
}

/**
 * Bài 3: Quy Đổi tiền tệ
 *! khối 1: input
 * tiGia, soTienDoi
 * 
 * 
 *! Khối 2: các bước xử lý
 *  tạo hàm 
 *  gắn hàm vào sự kiện click button
 *  lấy giá trị từ form
 *  lập công thức tính quy đổi tiền
 *?  tienQuyDoi = soTienDoi * tiGia
 *                   
 * 
 *! khối 3: output 
 *  số tiền Quy đổi 
 * hiển thị kết quả ra UI
 * 
 * 
 * tienQuyDoi
 */

function tinhTongNhan() {
    var soDoLa = document.getElementById('number22').value;
    var menhGia = 23500;
    var tongNhan = 0;
    tongNhan = soDoLa * menhGia;
    document.getElementById('ketQua3').innerHTML = tongNhan;
}


/**
 * Bài 4: Tính Chu Vi và Diện Tích
 *! khối 1: input
 * chieuDai, chieuRong
 * 
 * 
 *! Khối 2: các bước xử lý
 *  tạo hàm 
 *  lấy giá trị từ form
 *  lập công thức tính chu vi
 *?  tinhChuVi = (chieuDai + chieuRong) * 2;
 *  chuyển Đổi number(): chuyên string thành kiểu Int và Float
 *  parseFloat (số thực)
 *  parseInt (số nguyên)
 *                   
 *  lập công thức tính diện tích
 *?  tinhDienTich = chieuDai * chieuRong;
 * 
 *! khối 3: output 
 *  kết quả
 *  CHU VI
 *  DIEN TICH
 *  hiển thị kết quả lên UI
 * 
 * tinhChuVi
 * tinhDienTich
 */
function tinhChuVi() {
    var chieuDai = document.getElementById('chieuDaiTinh').value;
    var chieuRong = document.getElementById('chieuRongTinh').value;
    var chuVi = 0;
    chuVi = (Number(chieuDai) + Number(chieuRong)) * 2;
    var dienTich = chieuDai * chieuRong;
    document.getElementById('ketQua4').innerHTML = chuVi;
    document.getElementById('ketQua5').innerHTML = dienTich;
}

/**
 * Bài 5: Tính tổng 2 ký số
 *! khối 1: input
 * soHang, soHangChuc, soHangDonVi
 * 
 * 
 *! Khối 2: các bước xử lý
 *  tạo hàm
 * lấy giá trị soHang từ form
 * Lấy số hàng chục
 *  soHangChuc = Math.floor(soHang / 10);
 * lấy phần dư
 *  soHangDonVi = soHang % 10;
 *                   
 *  lập công thức tính diện tích
 *?  kySo = soHangChuc + soHangDonVi;
 * 
 *! khối 3: output 
 *  hiển thị kết qua lên UI
 * 
 * 
 * kySo
 */

function tinhKySo() {
    var tinhKySoHang = document.getElementById('kySo').value;
    var phanDuSoHang = tinhKySoHang % 10;
    var soHangChuc = Math.floor(tinhKySoHang / 10);
    var soHangDonVi = phanDuSoHang % 10;
    tongKySo = 0;
    var tongKySo = soHangChuc + soHangDonVi;
    document.getElementById('ketQua6').innerHTML = tongKySo;
}


