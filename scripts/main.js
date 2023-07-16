function massiveInteractive() {
    //Создание массива и обращение к юзеру
    const newMas = [];
    console.log(newMas);
    const user = +prompt("Нужно указать длину будущего массива");
    for (let i = 0; i <= user; i++) {
        let element = +prompt("Укажите элемент массива:");
        newMas.push(element);
    }

    //Сортировка по возрастанию
    console.log(newMas.sort(function compareNumbers(a, b) {
        return sortResult = a - b;
    }));

    //Вырезаем элементы массива с 2 по 4 включительно
    newMas.splice(1, 4);
    return newMas;
}

/*Пункт - "У міру змін виводити вміст масиву на сторінку." не совсем понял, нужно написать ф-цию для вывода элемента? или я могу создать какой-то див в 
верстке, через квери селектор к нему обратиться и через иннерHTML туда его вывести все*/
 document.querySelector(".result").innerHTML = massiveInteractive().join(" ");;
