
//! bài 1
/**
 * Tính tiền lương nhân viên
 */
//? khối 1: input: đầu vào

function tinhTongLuong() {
    var tienLuong = document.getElementById('tienLuong1Ngay').value;
    var soNgay = document.getElementById('soNgayLam').value;

    //? khối 2: progress xử lý
    // tongLuongLam = tienLuong * soNgay
    var tongLuongLam = 0;
    tongLuongLam = tienLuong * soNgay;

    //? khối 3 output
    document.getElementById('tongLuong').innerHTML = tongLuongLam;
}



//! bài 2
/**
 * Tính giá trị trung bình 
 */
//? khối 1: input: đầu vào

function tinhGiaTri() {
    var so1 = document.getElementById('number1').value;
    var so2 = document.getElementById('number2').value;
    var so3 = document.getElementById('number3').value;
    var so4 = document.getElementById('number4').value;
    var so5 = document.getElementById('number5').value;

    //? khối 2: progress xử lý
    // CÔng thức tính giá trị trung bình của 5 số
    // Số trung bình = (số 1 + số 2 + số 3 + số 4 + số 5) / 5
    //number(): chuyên string thành kiểu Int và Float
    //parseFloat (số thực)
    //parseInt (số nguyên)
    var giaTri = 0;
    giaTri = (Number(so1) + Number(so2) + Number(so3) + Number(so4) + Number(so5)) / 5;

    //? khối 3: đầu ra output
    console.log(giaTri)
    document.getElementById('ketQua2').innerHTML = giaTri;
}


//! bài 3
/**
//  * quy đổi tiền 
//  */

function tinhTongNhan() {
    //? khối 1: input: đầu vào => lấy dữ liệu từ input
    var soDoLa = document.getElementById('number22').value;
    //mệnh giá có sẵn
    var menhGia = 23500;

    //? khối 2: progress xử lý + công thức
    // tongNhan = menhGia * soDoLa

    var tongNhan = 0;
    tongNhan = soDoLa * menhGia;

    //? khối 3 output
    document.getElementById('ketQua3').innerHTML = tongNhan;
}


//! bài 4
/**
 * Tính chu vi
 */

function tinhChuVi() {
    //? khối 1: input: đầu vào
    var chieuDai = document.getElementById('chieuDaiTinh').value;
    var chieuRong = document.getElementById('chieuRongTinh').value;
    var chuVi = 0;

    // console.log(typeof(chieuDai))
    console.log(Number(chieuDai) + Number(chieuRong))

    //? khối 2: progress xử lý công thức
    // var chuVi = 0;
    chuVi = (Number(chieuDai) + Number(chieuRong)) * 2;
    // dienTich = 0;
    var dienTich = chieuDai * chieuRong;

    //? khối 3 output
    document.getElementById('ketQua4').innerHTML = chuVi;
    document.getElementById('ketQua5').innerHTML = dienTich;
}

//! bài 5
/**
 * tổng 2 ký số 
 */

function tinhKySo() {
    //? khối 1: input: đầu vào
    var tinhKySoHang = document.getElementById('kySo').value;

    //? khối 2: progress xử lý
    // lấy giá trị chia cho 10
    //+ lấy hàng chục
    var phanDuSoHang = tinhKySoHang % 10;
    soHangChuc = Math.floor(tinhKySoHang / 10);

    //+ lấy hàng đơn vị
    soHangDonVi = phanDuSoHang % 10;

    tongKySo = 0;
    var tongKySo = soHangChuc + soHangDonVi;

    //? khối 3 output
    document.getElementById('ketQua6').innerHTML = tongKySo;
}


