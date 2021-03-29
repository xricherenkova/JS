function get_value2(){
	if (document.getElementById("input4").value == ""){
		alert("Чтобы найти часто встречающийся символ, заполните поле ввода !");
		return false;
	}
	let strings = document.getElementById("input4").value;//Считываю значение  и заношу в переменную
	console.log(mostCommonChar(strings));
}

//Нужно отслеживать каждый символ в строке и кол-во раз, которое встречается (карта символов)
function mostCommonChar(strings){
	let el_down8 = document.getElementById("downRes8");
	let charMap = {};      // объект карта символов
	let maxCharValue = 0; //хранит максимальное значение
	let maxChar = '';    //хранит символ с макс значение

	// пребираю полученную строку и добавляю каждый символ в карту символов в качестве ключа
	for (let char of strings) { // а кол-во раз, которое он встречается - значение
		if (charMap.hasOwnProperty(char)) { //проверяю для каждого символа, является ли свойством объекта charMap
			charMap[char]++;
		} else {
			charMap[char] = 1;
		}
	}

	for (let char in charMap) {
		if (charMap[char] > maxCharValue) {
			maxCharValue = charMap[char];
			maxChar = char;
		}
	}
	el_down8.innerHTML=maxChar;
	return maxChar;

}  		