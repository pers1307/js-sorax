i = 5;

var func = function () {

    var i = 10;
    console.log(i);

    var innerFunc = function () {
        /**
         * Объявление всех переменных js поднимает в
         * начало функции
         */

        //var i = 15; // Создаем локальнуб переменную
        i = 15; // Переопределяем переменную на уровне выше
        console.log(i);
    };

    innerFunc();
    console.log(i);
};

func();