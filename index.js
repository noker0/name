function start() {
    var inputValue = document.getElementById('inpu').value; // Убедитесь, что id правильный
    console.log(inputValue);
    if (inputValue === "Как избавиться от мусора, не нанося вреда окружающей среде?") {
        document.getElementById('nero').textContent = "1. Разделить мусор на 2 типа: вторсырье (пластик, металл, стекло, макулатура, упаковка тетрапак); смешанные отходы (пищевые отходы, средства личной гигиены, одноразовые предметы). 2. Утилизируйте в подходящий контейнер: найдите на карте контейнер для вторичной переработки.";
    } else if (inputValue === "где ближайшие ко мне контейнеры?") {
        document.getElementById('nero').textContent = "Вы можете найти их на картах Google.";
    } else if (inputValue === "clear") {
        document.getElementById('nero').textContent = "";
    } else {
        document.getElementById('nero').textContent = "Запрос не был принят. Пожалуйста, попробуйте еще раз.";
    }
}

function finish() {
    var inputElement = document.getElementById('inpu');
    inputElement.value = "Как избавиться от мусора, не нанося вреда окружающей среде?";
}

function finish1() {
    var inputElement = document.getElementById('inpu');
    inputElement.value = "где ближайшие ко мне контейнеры?";
}
