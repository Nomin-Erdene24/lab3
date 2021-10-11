var getDaysInMonth = function (month, year) {
  return new Date(year, month, 0).getDate();
};
var calendar2021 = {
  jan: { 1: "Сайхан амарна" },
  feb: {
    1: "Сагсны тэмцээнтэй",
    3: "Шагнал гардуулна даа",
    17: "Жавхлан багшийн лаб 2-ыг хийнэ",
  },
  mar: {
    2: "Энэ лабынхаа хугацааг сунгах уу яах вэ гэдэгээ шийднэ",
    6: "Энд юу бичье дээ байз",
    8: "Эмэгтэйчүүддээ баяр хүргэнэ дээ",
  },
  apr: { 1: "Бүгдээрээ худлаа ярьцаагаагаарай", 6: "sain bn" },
  may: { 10: "Энэ сард ч ёстой юу ч болдоггүй сар даа" },
  jun: { 1: "hvvhdiin bayr", 6: "Жавхлан багшийн төрсөн өдөр" },
  jul: { 4: "Хичээл амарсаан ураа", 6: "sain uu" },
  aug: { 1: "Хөдөө явдаг цаг даа", 25: "Хичээл сонголт эхэллээ" },
  sep: { 1: "9-н сарын нэгэн боллоо ерөөсөө бидний баяр даа" },
  oct: { 13: "Сур сур бас дахин сур" },
  nov: { 2: "Сурсаар л бай", 3: "sain bh albagvi" },
  dec: {
    19: "sain shdee",
    20: "Өвлийн семистер хаагдах нь дээ",
    30: "Дүн гаргаж дууслаа баярлалаа баяртай",
  },
};
var months = [
  "jan",
  "feb",
  "mar",
  "apr",
  "may",
  "jun",
  "jul",
  "aug",
  "sep",
  "oct",
  "nov",
  "dec",
];
// var sarBox = "";
// var footer = "";
const renderCalendar = (i) => {
  sarBox = "";
  footer = "";
  document.querySelector(".vr_dvn").innerHTML = "";
  sarBox =
    sarBox +
    '<div class="nomin"><div class="sarNameBox">' +
    months[i] +
    '</div><div class="garig"><div class="eachday">Sun </div><div class="eachday">Mon</div><div class="eachday">Tue</div><div class="eachday">Wed</div><div class="eachday">Thu</div><div class="eachday">Fri</div><div class="eachday">Sat</div></div><div class="dayBagts">';
  x = getDaysInMonth(i + 1, 2021);
  var dt = new Date();
  dt.setMonth(i);
  dt.setDate(1);
  start_index = dt.getDay();
  for (var k = 0; k < start_index; k++) {
    sarBox = sarBox + '<div class="day"> </div>';
  }
  for (var j = 1; j <= x; j++) {
    if (typeof calendar2021[months[i]][j] !== "undefined") {
      sarBox = sarBox + '<div class="specialDay">' + j + "</div>";
    } else {
      sarBox = sarBox + '<div class="day">' + j + "</div>";
    }
    //json
    if (typeof calendar2021[months[i]][j] !== "undefined") {
      footer = `${footer}<div class="edgeer_udruud">
  <div class="color"></div>
  <div class="months">${months[i]} ${j}</div>
  <div class="colorText">${calendar2021[months[i]][j]}</div>
  </div>`;
    }
  }

  sarBox = sarBox + "</div></div>";
  document.getElementById("month_container").innerHTML = sarBox;
  document.getElementById("footer1").innerHTML = footer;
  // footer = "";
  // document.getElementById("footer1").value = footer;
};
const webStart = () => {
  renderCalendar(0);
  var number = 0;
  document.querySelector(".next").addEventListener("click", function () {
    number++;
    renderCalendar(number);
  });
  document.querySelector(".prev").addEventListener("click", function () {
    number--;
    renderCalendar(number);
  });
};
// document.getElementById("footer1").innerHTML = footer;
document.getElementById("button").addEventListener("click", my_function);
function my_function() {
  var hailt_hiih = document.getElementById("search").value;
  console.log(hailt_hiih);
  var o = true;
  var vrDvn = "";
  for (var p = 0; p <= 12; p++) {
    for (m = 1; m <= 31; m++) {
      if (typeof calendar2021[months[p]][m] !== "undefined") {
        if (
          calendar2021[months[p]][m]
            .toLowerCase()
            .includes(hailt_hiih.toLowerCase())
        ) {
          if (o) {
            renderCalendar(p);
            o = false;
          } else {
            vrDvn = `${vrDvn}<div class="vrDvn_style"><ion-icon name="heart-circle-outline" class="zvrh"></ion-icon><div class="vseg"> Ижил утга ${months[p]}-${m} дээр олдлоо</div></div>`;
            document.querySelector(".vr_dvn").innerHTML = vrDvn;
          }
        } else {
          window.alert("Хайсан үр дүн олдсонгүй");
          hailt_hiih = "";
          console.log(hailt_hiih);
        }
      }
    }
  }
}
window.addEventListener("load", webStart);
// var obj = {
//   list: [
//     { name: "my Name", id: 12, type: "car owner" },
//     { name: "my Name2", id: 13, type: "car owner2" },
//     { name: "my Name4", id: 14, type: "car owner3" },
//     { name: "my Name4", id: 15, type: "car owner5" },
//   ],
// };
// var results = [];
// var searchField = "name"; calendar2021[months[p]][m]
// var searchVal = "my Name"; hailt_hiih
// for (var i = 0; i < obj.list.length; i++) {
//   if (obj.list[i][searchField] == searchVal) {
//     results.push(obj.list[i]);
//   }
// }
// console.log(results);
