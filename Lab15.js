//Lab15_1
let number = 0;

while (number <= 100) {
  if (number > 1) {
    let isPrime = true;
    let divisor = 2;

    while (divisor <= number / 2) {
      if (number % divisor === 0) {
        isPrime = false;
        break;
      }
      divisor++;
    }

    if (isPrime) {
      console.log(number);
    }
  }

  number++;
}

//Lab15_2
let number = 0;

do {
  if (number === 0) {
    console.log(`${number} - це нуль`);
  } else if (number % 2 === 0) {
    console.log(`${number} - парне число`);
  } else {
    console.log(`${number} - непарне число`);
  }

  number++;
} while (number <= 10);

//Lab15_3
let numb = 10000;
let result = numb;
let counter = 0;

while (result >= 50) {
  result = result / 2;
  counter++;
}

console.log("Результат:", result);
console.log("Кількість ітерацій:", counter);

//Lab15_4
let month = parseInt(prompt("Введіть число місяця (від 1 до 12):"));

if (month >= 1 && month <= 12) {
  let season, monthName;

  if (month === 12 || month === 1 || month === 2) {
    season = "зима";
  } else if (month >= 3 && month <= 5) {
    season = "весна";
  } else if (month >= 6 && month <= 8) {
    season = "літо";
  } else {
    season = "осінь";
  }

  switch (month) {
    case 1:
      monthName = "січень";
      break;
    case 2:
      monthName = "лютий";
      break;
    case 3:
      monthName = "березень";
      break;
    case 4:
      monthName = "квітень";
      break;
    case 5:
      monthName = "травень";
      break;
    case 6:
      monthName = "червень";
      break;
    case 7:
      monthName = "липень";
      break;
    case 8:
      monthName = "серпень";
      break;
    case 9:
      monthName = "вересень";
      break;
    case 10:
      monthName = "жовтень";
      break;
    case 11:
      monthName = "листопад";
      break;
    case 12:
      monthName = "грудень";
      break;
    default:
      monthName = "невідомий";
  }

  alert("Пора року: " + season + "\nНазва місяця: " + monthName);
} else {
  alert("Введено некоректне число місяця!");
}

//Lab15_5
let temperatureCelsius = parseFloat(prompt("Введіть температуру в градусах Цельсія:"));

if (!isNaN(temperatureCelsius)) {
  let temperatureFahrenheit = (9 / 5) * temperatureCelsius + 32;
  alert("Температура за Фаренгейтом: " + temperatureFahrenheit.toFixed(2) + " °F");
} else {
  alert("Введено некоректну температуру!");
}

//Lab15_6
let number = parseInt(prompt("Введіть число від 1 до 7:"));

if (!isNaN(number) && number >= 1 && number <= 7) {
  let daysOfWeek = ['Понеділок', 'Вівторок', 'Середа', 'Четвер', 'П\'ятниця', 'Субота', 'Неділя'];
  let day = daysOfWeek[number - 1];
  alert("День неділі: " + day);
} else {
  alert("Введено некоректне число!");
}

