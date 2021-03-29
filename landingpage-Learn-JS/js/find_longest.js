	
function long_string(arr) {
	let el_down7 = document.getElementById("downRes7");
	let longest = arr[0]; // устанавливаю первое значение в массиве, как самое длинное 
	for (let i = 1; i < arr.length; i++) {
		if (arr[i].length > longest.length) { //если сравнимая строка больше
			longest = arr[i]; // то устанавливаю это значение
		}
	}
	el_down7.innerHTML = longest;
	return longest;								
}