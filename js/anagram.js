function get_value4(){
	if ( document.getElementById("string11").value == "" || document.getElementById("string12").value == "")
	{
		alert ( "Чтобы узнать являются ли строки анаграммами, нужно заполнить все поля !" );
		return false;
	}
	//Считываю значения полей ввода и заношу в переменные
	let el1 = document.getElementById("string11").value;			
	let el2 = document.getElementById("string12").value;
	console.log(checkAnagrams(el1, el2));

}
function checkAnagrams(el1, el2){
	let el_down10 = document.getElementById("downRes10");
	let r ="";

	let newstr1 = el1.toLowerCase().split('').sort().join(); //перевожу в нижний регистр, разделяю строки по буквам на массивы
	let newstr2 = el2.toLowerCase().split('').sort().join(); //сортирую массивы и сливаю массивы в строки

	if(newstr1 == newstr2){  // проверяю на соответствие
		console.log("String is Anagrams");  						
		r="true";
		el_down10.innerHTML=r;
	}
	else{
		console.log("String is Not Anagrams");
		r="false";
		el_down10.innerHTML=r;
	}

}