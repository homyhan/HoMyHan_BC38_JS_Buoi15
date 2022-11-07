function tinhDiem() {
  var diemChuan = document.getElementById("diemchuan").value * 1;
  var khuVuc = document.getElementById("khuVuc").value;
  var doiTuong = document.getElementById("doiTuong").value * 1;

  var diem1 = document.getElementById("mon1").value * 1;
  var diem2 = document.getElementById("mon2").value * 1;
  var diem3 = document.getElementById("mon3").value * 1;

  var rs = "";
  var diem3mon = diem1 + diem2 + diem3;
  var tongdiem = 0;
  if (diem1 === 0 || diem2 === 0 || diem3 === 0) {
    rs = "Bạn đã trượt. Do có điểm nhỏ hơn hoặc bằng 0";
  } else {
    switch (khuVuc) {
      case "A":
        tongdiem = diem3mon + 2;
        break;
      case "B":
        tongdiem = diem3mon + 1;
        break;
      case "C":
        tongdiem = diem3mon + 0.5;
        break;
      default:
        tongdiem = diem3mon;
        break;
    }
    switch (doiTuong) {
      case 1:
        tongdiem += 2.5;
        break;
      case 2:
        tongdiem += 1.5;
        break;
      case 3:
        tongdiem += 1;
        break;
      default:
        tongdiem += 0;
        break;
    }
    if (tongdiem > diemChuan) {
      rs = "Bạn đã đậu. Với số điểm là: " + tongdiem;
    } else {
      rs = "Bạn đã trượt. Do có điểm nhỏ hơn hoặc bằng 0";
    }
  }

  document.getElementById("result1").innerHTML = rs;
}

function tinhTienDien() {
  var kw = document.getElementById("kw").value * 1;
  var userName = document.getElementById("user").value;

  var rs;
  var priceLv1 = 500;
  var priceLv2 = 650;
  var priceLv3 = 850;
  var priceLv4 = 1100;
  var priceLv5 = 1300;

  if (kw < 0) {
    alert("Số kw không hợp lệ, Vui lòng nhập lại");
  } else {
    if (kw <= 50) {
      rs = kw * priceLv1;
    } else if (kw > 50 && kw <= 100) {
      rs = 50 * priceLv1 + (kw - 50) * priceLv2;
    } else if (kw > 100 && kw <= 200) {
      rs = 50 * priceLv1 + 50 * priceLv2 + (kw - 100) * priceLv3;
    } else if (kw > 200 && kw <= 350) {
      rs =
        50 * priceLv1 + 50 * priceLv2 + 100 * priceLv3 + (kw - 200) * priceLv4;
    } else {
      rs =
        50 * priceLv1 +
        50 * priceLv2 +
        100 * priceLv3 +
        150 * priceLv4 +
        (kw - 300) * priceLv5;
    }
    rs = new Intl.NumberFormat("vn-VN").format(rs);
  }

  document.getElementById("result2").innerHTML =
    "Họ tên: " + userName + "; " + "Tiền điện: " + rs;
}

function tinhTienThue() {
  var userName = document.getElementById("hoten").value;
  var earnings = document.getElementById("thunhap").value * 1;
  var soNguoiPhuThuoc = document.getElementById("phuthuoc").value * 1;

  var rs;
  var million = Math.pow(10, 6);

  var incomeTaxes = earnings - 4 * million - soNguoiPhuThuoc * 1.6 * million;

  var taxLv1 = 5 / 100;
  var taxLv2 = 10 / 100;
  var taxLv3 = 15 / 100;
  var taxLv4 = 20 / 100;
  var taxLv5 = 25 / 100;
  var taxLv6 = 30 / 100;
  var taxLv7 = 35 / 100;

  if (earnings < 0 || soNguoiPhuThuoc < 0) {
    alert("Tong thu nhap nam va so nguoi phu thuoc phai la so >=0");
  } else {
    if (incomeTaxes <= 60 * million) {
      rs = incomeTaxes * taxLv1;
    } else if (incomeTaxes > 60 * million && incomeTaxes <= 120 * million) {
      rs = 60 * million * taxLv1 + (incomeTaxes - 60 * million) * taxLv2;
    } else if (incomeTaxes > 120 * million && incomeTaxes <= 210 * million) {
      rs =
        60 * million * taxLv1 +
        60 * million * taxLv2 +
        (incomeTaxes - 120 * million) * taxLv3;
    } else if (incomeTaxes > 210 * million && incomeTaxes <= 384 * million) {
      rs =
        60 * million * taxLv1 +
        60 * million * taxLv2 +
        90 * million * taxLv3 +
        (incomeTaxes - 210 * million) * taxLv4;
    } else if (incomeTaxes > 384 * million && incomeTaxes <= 624 * million) {
      rs =
        60 * million * taxLv1 +
        60 * million * taxLv2 +
        90 * million * taxLv3 +
        174 * million * taxLv4 +
        (incomeTaxes - 384 * million) * taxLv5;
    } else if (incomeTaxes > 624 * million && incomeTaxes <= 960 * million) {
      rs =
        60 * million * taxLv1 +
        60 * million * taxLv2 +
        90 * million * taxLv3 +
        174 * million * taxLv4 +
        240 * million * taxLv5 +
        (incomeTaxes - 624 * million) * taxLv6;
    } else if (incomeTaxes > 960 * million) {
      rs =
        60 * million * taxLv1 +
        60 * million * taxLv2 +
        90 * million * taxLv3 +
        174 * million * taxLv4 +
        240 * million * taxLv5 +
        336 * million * taxLv6 +
        (incomeTaxes - 960 * million) * taxLv7;
    }
  }
  rs = new Intl.NumberFormat("vn-VN").format(rs) + " VND";
  document.getElementById("result3").innerHTML =
    "Họ tên: " + userName + "; Tiền thuế thu nhập cá nhân: " + rs;
}

function hienOKetNoi() {
  var loaiKH = document.getElementById("loaiKH").value;
  var soKetNoi = document.getElementById("soketnoi");

  if (loaiKH === "2") {
    soKetNoi.style.display = "block";
  } else {
    soKetNoi.style.display = "none";
  }
}

function tinhTienCap() {
  var typeUser = document.getElementById("loaiKH").value;
  var idUser = document.getElementById("makh").value;
  var chanel = document.getElementById("sokenh").value * 1;
  var conect = document.getElementById("soketnoi").value * 1;

  var priceInvoiceProcessPerson = 4.5;
  var priceServicePerson = 20.5;
  var priceChanelPerson = 7.5;

  var priceInvoiceProcessCompany = 15;
  var priceChanelCompany = 50;

  var priceServiceCompanyLv = 75;

  var rs = 0;

  if (chanel < 0) {
    alert("Du lieu nhap khong dung");
  } else {
    if (typeUser === "1") {
      rs =
        priceInvoiceProcessPerson +
        priceServicePerson +
        priceChanelPerson * chanel;
    } else if (typeUser === "2") {
      if (conect <= 10) {
        priceServiceCompanyLv = 75;
      } else {
        priceServiceCompanyLv = priceServiceCompanyLv + (conect - 10) * 5;
      }
      rs =
        priceInvoiceProcessCompany +
        priceServiceCompanyLv +
        priceChanelCompany * chanel;
    } else {
      alert("Vui lòng chọn loại khách hàng");
    }
  }

  document.getElementById("result4").innerHTML =
    "Mã khách hàng " + idUser + "; Tiền cáp: " + rs + "$";
}
