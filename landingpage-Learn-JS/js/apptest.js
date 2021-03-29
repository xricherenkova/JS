const headElem = document.getElementById("head");
const buttonsElem = document.getElementById("buttons");
const pagesElem = document.getElementById("pages");


class Quiz
{
	constructor(type, questions, results)
	{
		
		this.type = type;		
		this.questions = questions;
		this.results = results;
		this.score = 0;
		this.result = 0;
		this.current = 0;
	}

	Click(index)
	{
		let value = this.questions[this.current].Click(index);
		this.score += value; //добавляем очки

		let correct = -1;

		if(value >= 1)//если было добавлено хотя одно очко, то  ответ верный
		{
			correct = index;
		}
		else
		{//иначе ищем, какой ответ может быть правильным
			for(let i = 0; i < this.questions[this.current].answers.length; i++)
			{
				if(this.questions[this.current].answers[i].value >= 1)
				{
					correct = i;
					break;
				}
			}
		}

		this.Next();

		return correct;
	}

	Next()//переход к следующему вопросу
	{
		this.current++;
		
		if(this.current >= this.questions.length) 
		{
			this.End();
		}
	}

	End()//результат
	{
		for(let i = 0; i < this.results.length; i++)
		{
			if(this.results[i].Check(this.score))
			{
				this.result = i;
			}
		}
	}
} 

class Question 
{
	constructor(text, answers)
	{
		this.text = text; 
		this.answers = answers; 
	}

	Click(index) 
	{
		return this.answers[index].value; 
	}
}

class Answer 
{
	constructor(text, value) 
	{
		this.text = text; 
		this.value = value; 
	}
}

class Result 
{
	constructor(text, value)
	{
		this.text = text;
		this.value = value;
	}
	Check(value)//проверка достаточно набрали очков
	{
		if(this.value <= value)
		{
			return true;
		}
		else 
		{
			return false;
		}
	}
}

const results = 
[
	new Result("Тебе многому нужно научиться.", 0),
	new Result("Ты уже неплохо разбираешься, продолжай дальше повышать свои знания!", 4),
	new Result("Твой уровень выше среднего, продолжай в том же духе!", 6),
	new Result("Ты молодец! В совершенстве знаешь тему.", 9)
];

const questions = 
[
	new Question("После какого HTML тега нужно вставить код JavaScript?", 
	[
		new Answer("scripting", 0),
		new Answer("JavaScript", 0),
		new Answer("script", 1),
		new Answer("js", 0)
	]),

	new Question("Какое из утверждений о комментариях верное?", 
	[
		new Answer("В JavaScript нельзя использовать комментарии", 0),
		new Answer("Комментарии уменьшают размер кода", 0),
		new Answer("Комментарии упрощают понимание скрипта", 1),
		new Answer("Комментарии увеличивают скорость выполнения скрипта", 0)
	]),

	new Question("Какая функция вызывает окно с текстовым полем, в которое пользователь может ввести строку?", 
	[
		new Answer("alert", 0),
		new Answer("promt", 1),
		new Answer("confirm", 0),
		new Answer("alerts()", 0)
	]),

	new Question("Какое свойство строки позволяет узнает её длинну?", 
	[
		new Answer("length", 1),
		new Answer("toUpperCase", 0),
		new Answer("indexOf", 0),
		new Answer("toLowerCase", 0)
	]),

	new Question("С помощью какого метода у Math можно найти максимальное число из массива?", 
	[
		new Answer("min", 0),
		new Answer("max", 1),
		new Answer("abs", 0),
		new Answer("floor", 0)
	]),

	new Question("С помощью какого метода у Math можно найти минимальное число из массива?", 
	[
		new Answer("floor", 0),
		new Answer("sin", 0),
		new Answer("min", 1),
		new Answer("abs", 0)
	]),
	new Question("Какой метод нужно вызвать у Math чтобы округлить в большую сторону?", 
	[
		new Answer("floor", 0),
		new Answer("round", 0),
		new Answer("ceil", 1),
		new Answer("abs", 0)
	]),
	new Question("Что делает оператор ===?", 
	[
		new Answer("Сравнивает по ссылке, а не по значению", 0),
		new Answer("Нет такого оператора", 0),
		new Answer("Сравнивает без приведения типа", 1),
		new Answer("Не знаю", 0)
	]),
	new Question("Чему равен typeof null в режиме use strict?", 
	[
		new Answer("null", 0),
		new Answer("undefined", 0),
		new Answer("object", 1),
		new Answer("string", 0)
	]),
	new Question("С помощью какого объекта можно работать со временем в JS?", 
	[
		new Answer("Date", 1),
		new Answer("Time", 0),
		new Answer("Data", 0),
		new Answer("DateTime", 0)
	])
];

const quiz = new Quiz(1, questions, results);

Update();

function Update()//обновление теста
{
	if(quiz.current < quiz.questions.length) //проверка есть ли ещё вопросы
	{
		headElem.innerHTML = quiz.questions[quiz.current].text;

		buttonsElem.innerHTML = "";

		for(let i = 0; i < quiz.questions[quiz.current].answers.length; i++)
		{
			let btn = document.createElement("button");
			btn.className = "button";

			btn.innerHTML = quiz.questions[quiz.current].answers[i].text;

			btn.setAttribute("index", i);

			buttonsElem.appendChild(btn);
		}
		
		pagesElem.innerHTML = (quiz.current + 1) + " / " + quiz.questions.length;

		Init();
	}
	else
	{

		buttonsElem.innerHTML = "";
		headElem.innerHTML = quiz.results[quiz.result].text;
		pagesElem.innerHTML = "Очки: " + quiz.score;
	}
}

function Init()
{
	let btns = document.getElementsByClassName("button");

	for(let i = 0; i < btns.length; i++)
	{
		btns[i].addEventListener("click", function (e) { Click(e.target.getAttribute("index")); });
	}
}

function Click(index) 
{
	let correct = quiz.Click(index);

	let btns = document.getElementsByClassName("button");

	for(let i = 0; i < btns.length; i++)
	{
		btns[i].className = "button button_passive";
	}
	if(quiz.type == 1)
	{
		if(correct >= 0)
		{
			btns[correct].className = "button button_correct";
		}

		if(index != correct) 
		{
			btns[index].className = "button button_wrong";
		} 
	}
	else
	{
		
		btns[index].className = "button button_correct";
	}
	setTimeout(Update, 1000);
}