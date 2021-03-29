function changeCommonChar(){
	let el_down91 = document.getElementById("downRes91");
	let string123 = document.getElementById("input4").value;
	let char_common =  mostCommonChar(document.getElementById("input4").value);

	el = prompt('Введите символ', '');
	let res = "";

	console.log(string123.split(char_common).join(el));

	res = string123.split(char_common).join(el); //
	el_down91.innerHTML= res;  					
}