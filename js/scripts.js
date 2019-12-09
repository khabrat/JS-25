(function() {
	'use strict'
	// 	Натуральное число, большее 1, называется простым, если оно ни на что не делится, кроме себя и 1.
	// Другими словами, n>1 – простое, если при делении на любое число от 2 до n-1 есть остаток.
	// Создайте функцию, которая выводит все простые числа из интервала, который задает пользователь.
	let num1, num2,
		max, min;
	do {
		num1 = +prompt('Введите первое число');
		if (num1 == 1) {}
	} while (isNaN(num1));
	do {
		num2 = +prompt('Введите второе число');
	} while (isNaN(num2));
	if (num1 > num2) {
		max = num1;
		min = num2;
	} else if (num1 < num2) {
		max = num2;
		min = num1;
	}
	1
	if (min > 1 && max > 1) {
		document.write(`<p>Ряд натуральных чисел</p>`)
		outer: for (let i = max; i >= min; i--) {
			for (let j = i - 1; j >= min; j--) {
				if (i % j == 0) {
					continue outer;
				}
			}
			console.log(i);
			document.write(`${i} <br>`)
		}
	} else alert('введите число больше 1');
})();