function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

list = [
  2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53,, 59, 61, 67, 71,
  73, 79, 83, 89, 97,
];

function handler() {
  let key = document.getElementById("key").value;
  if (key / 10000000 < 1) {
    document.getElementById("err").innerHTML = "密碼應為8位數";
    return false;
  }
  let tar = [];
  for (let i = 0; i < list.length; i++) {
    if (key % list[i] == 0) {
      tar.push(list[i]);
    }
  }
  if (tar.length == 0) {
    document.getElementById("err").innerHTML = "密碼無效...可能係我手字太核突?";
    return false;
  }
  document.cookie = "tar=" + tar;
  window.location.href = "./content.html";
  return true;
}
