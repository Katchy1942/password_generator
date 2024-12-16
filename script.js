/*
const fun = () => {
  let peter = '209e'
  const lenght = 9;
  while (lenght > peter.length) {
    peter += peter[0];
  }
  if (peter.length === 8) {
    console.log('okay')
  } else {
    console.log(' you are mad dear')
  }
  if (peter[2] === 9) {
    console.log('its okay')
  } else{
    console.log('you are definitely mad')
  }
}
fun()
*/
const passwordBox = document.getElementById("password");
const copiedDisplay = document.getElementById("msg");
const remove = document.getElementById("remove");
const copyImg = document.querySelector('.copy')
const length = 12;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*()+;{}[]~/><=_";
const allChars = upperCase + lowerCase + number + symbol;
const creatPassword = () => {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];

  while(length > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }
  passwordBox.value = password;
  copiedDisplay.classList.remove('clicked')
}
const copyPassword = () => {
  passwordBox.select();
  document.execCommand("copy");
  if (passwordBox.value === '') {
    return
  } else {
    copiedDisplay.classList.add('clicked');
  }
}
