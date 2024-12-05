function generateRoomType() {
    const roomTypes = ["apartment", "single", "double", "deluxe", "president"];
    const randomIndex = Math.floor(Math.random() * roomTypes.length);
    return roomTypes[randomIndex];
}

function generateRoomNo(roomsCount) {
    return Math.floor(Math.random() * roomsCount);
}

function generateFloorNo(floorsCount) {
    return Math.floor(Math.random() * floorsCount);
}

function generateRoomMaxCapacity(roomType) {
    switch (roomType) {
        case "apartment": return 8;
        case "double": return 2;
        case "deluxe": return 4;
        case "president": return 2;
        case "single":
        default: return 1;
    }
}

function generateAmenity(lang) {
    const amenitiesInBG = ["Интернет", "Климатик", "Паркинг", "Закуска", "Басейн", "Фитнес", "Спа", "Ресторант", "Бар", "Сейф",
        "Минибар", "Пералня", "Транспорт", "Портиер", "Телевизор", "Тераса", "Джакузи", "Градина", "Шезлонги", "Чадъри", "Румсервиз"];

    const amenitiesInEN = ["Pool", "Gym", "Spa", "Internet", "Parking", "Restaurant", "Concierge", "Lounge", "Terrace", "Balcony",
        "Housekeeping", "Laundry", "Shuttle", "Breakfast", "Bar", "Minibar", "Safe", "Jacuzzi", "Sauna", "Garden", "Library", "Fireplace",
        "Desk", "Elevator", "Fitness", "Beach", "Tennis", "Cinema", "Golf", "Boutique"];

    let randomIndex = 0;
    switch(lang) {
        case "BG": {
            randomIndex = Math.floor(Math.random() * amenitiesInBG.length);
            return amenitiesInBG[randomIndex];
        }
        case "EN":
        default: {
            randomIndex = Math.floor(Math.random() * amenitiesInEN.length);
            return amenitiesInEN[randomIndex];
        }
    }
}

function generateHotelName(lang) {
    const hotelNamesBG = ["Изгрев", "Перла", "Зора", "Оазис", "Хоризонт", "Бриз", "Витоша", "Мираж", "Сияние",
        "Рай", "Злато", "Алпина", "Еделвайс", "Лилия", "Романтика", "Кристал", "Диамант", "Сапфир", "Акварел", "Галактика",
        "Луна", "Звезда", "Тропик", "Самоков", "Делта", "Престиж", "Комфорт", "Енергия", "Модерн", "Чайка"];

    const hotelNamesEN = ["Sunrise", "Pearl", "Dawn", "Oasis", "Horizon", "Breeze", "Vitosha", "Mirage", "Glow",
        "Paradise", "Gold", "Alpina", "Edelweiss", "Lily", "Romantic", "Crystal", "Diamond", "Sapphire", "Aquarelle",
        "Galaxy", "Moon", "Star", "Tropic", "Samokov", "Delta", "Prestige", "Comfort", "Energy", "Modern", "Seagull"];

    let randomIndex = 0;
    switch(lang) {
        case "BG": {
            randomIndex = Math.floor(Math.random() * hotelNamesBG.length);
            return hotelNamesBG[randomIndex];
        }
        case "EN":
        default: {
            randomIndex = Math.floor(Math.random() * hotelNamesEN.length);
            return hotelNamesEN[randomIndex];
        }
    }
}

const countriesEN = [
    "Canada", "Germany", "France", "Brazil", "India", "Russia", "Japan", "Mexico", "Egypt", "Italy"
];

const countriesBG = [
    "Канада", "Германия", "Франция", "Бразилия", "Индия", "Русия", "Япония", "Мексико", "Египет", "Италия"
];

const townsEN = {
    "Canada": ["Toronto", "Vancouver", "Montreal", "Calgary", "Ottawa"],
    "Germany": ["Berlin", "Munich", "Hamburg", "Frankfurt", "Cologne"],
    "France": ["Paris", "Lyon", "Marseille", "Toulouse", "Nice"],
    "Brazil": ["Rio", "SaoPaulo", "Salvador", "Brasilia", "Curitiba"],
    "India": ["Delhi", "Mumbai", "Bangalore", "Chennai", "Hyderabad"],
    "Russia": ["Moscow", "SaintPetersburg", "Novosibirsk", "Yekaterinburg", "Kazan"],
    "Japan": ["Tokyo", "Osaka", "Kyoto", "Yokohama", "Nagoya"],
    "Mexico": ["MexicoCity", "Guadalajara", "Monterrey", "Cancun", "Puebla"],
    "Egypt": ["Cairo", "Alexandria", "Giza", "SharmElSheikh", "Luxor"],
    "Italy": ["Rome", "Milan", "Florence", "Venice", "Naples"]
};

const townsBG = {
    "Канада": ["Торонто", "Ванкувър", "Монреал", "Калгари", "Оттава"],
    "Германия": ["Берлин", "Мюнхен", "Хамбург", "Франкфурт", "Кьолн"],
    "Франция": ["Париж", "Лион", "Марсилия", "Тулуза", "Ница"],
    "Бразилия": ["Рио", "СаоПауло", "Салвадор", "Бразилия", "Куритиба"],
    "Индия": ["Дели", "Мумбай", "Бангалор", "Ченай", "Хайдарабад"],
    "Русия": ["Москва", "СанктПетербург", "Новосибирск", "Екатеринбург", "Казан"],
    "Япония": ["Токио", "Осака", "Киото", "Йокохама", "Нагоя"],
    "Мексико": ["МексикоСити", "Гвадалахара", "Монтерей", "Канкун", "Пуебла"],
    "Египет": ["Кайро", "Александрия", "Гиза", "Шармелшейх", "Луксор"],
    "Италия": ["Рим", "Милан", "Флоренция", "Венеция", "Неапол"]
};

function getRandomTownEN() {
    const randomCountry = countriesEN[Math.floor(Math.random() * countriesEN.length)];
    const countryTowns = townsEN[randomCountry];
    const randomTown = countryTowns[Math.floor(Math.random() * countryTowns.length)];
    return `Country: ${randomCountry}, Town: ${randomTown}`;
}

function getRandomTownBG() {
    const randomCountry = countriesBG[Math.floor(Math.random() * countriesBG.length)];
    const countryTowns = townsBG[randomCountry];
    const randomTown = countryTowns[Math.floor(Math.random() * countryTowns.length)];
    return `Страна: ${randomCountry}, Град: ${randomTown}`;
}

function generateCountry(lang) {
    let randomIndex = 0;
    switch(lang) {
        case "BG": {
            randomIndex = Math.floor(Math.random() * countriesBG.length);
            return countriesBG[randomIndex];
        }
        case "EN":
        default: {
            randomIndex = Math.floor(Math.random() * countriesEN.length);
            return countriesEN[randomIndex];
        }
    }
}

function generateTown(lang, country) {
    switch (lang) {
        case "BG": {
            const countryTowns = townsEN[country];
            return countryTowns[Math.floor(Math.random() * countryTowns.length)];
        }
        case "EN":
        default:{
            const countryTowns = townsBG[country];
            return countryTowns[Math.floor(Math.random() * countryTowns.length)];
        }
    }
}

function getRandomLocationEN() {
    const streets = ["Main Street", "Broadway", "Elm Street", "Park Avenue", "5th Avenue", "Baker Street", "Ocean Drive", "Maple Street", "King Street", "Sunset Boulevard"];
    const districts = ["Downtown", "Uptown", "Midtown", "Suburb", "Old Town", "Industrial Zone", "West Side", "East End", "North End", "South Side"];
    const countries = countriesEN;

    const randomCountry = countries[Math.floor(Math.random() * countries.length)];
    const randomStreet = streets[Math.floor(Math.random() * streets.length)];
    const randomDistrict = districts[Math.floor(Math.random() * districts.length)];

    return `Country: ${randomCountry}, Street: ${randomStreet}, District: ${randomDistrict}`;
}

function getRandomLocationBG() {
    const streets = ["Главна улица", "Бродвей", " Елм улица", "Парк авеню", "5-та авеню", "Бейкър стрийт", "Оушън драйв", "Кленова улица", "Кинг стрийт", "Сънсет булевард"];
    const districts = ["Център", "Северна част", "Южна част", "Източна част", "Западна част", "Стара част", "Индустриална зона", "Нов квартал", "Площад", "Младост"];
    const countries = countriesBG;

    const randomCountry = countries[Math.floor(Math.random() * countries.length)];
    const randomStreet = streets[Math.floor(Math.random() * streets.length)];
    const randomDistrict = districts[Math.floor(Math.random() * districts.length)];

    return `Страна: ${randomCountry}, Улица: ${randomStreet}, Район: ${randomDistrict}`;
}

function generateLocation(lang) {
    if (lang === "BG") {
        return getRandomLocationBG();
    } else {
        return getRandomLocationEN();
    }
}

function generateAddress(htmlDoc, hotelElement) {
    const addressElement = htmlDoc.createElement('address');
    addressElement.setAttribute('country', generateCountry("BG"));
    addressElement.setAttribute('town', generateTown("BG"));
    addressElement.setAttribute('location', generateLocation("BG"));

    return addressElement;
}

function generateHotel(htmlDoc) {
    const hotelElement = htmlDoc.createElement('hotel');
    const hotelNameElement = htmlDoc.createElement('name');
    hotelElement.appendChild(hotelNameElement);
    const hotelAddressElement = generateAddress(htmlDoc, hotelElement);
    hotelElement.appendChild(hotelAddressElement);

    return hotelElement;
}

function generateRoom() {

}

function generateGuest() {

}

function generateDebitCard() {

}

function generatePayingTool() {

}

function generateIBAN() {

}

function generatePrice() {

}

function generateCurrencyName() {

}

function generateCurrency() {

}

function generateName() {

}

function generateSurname() {

}

function generatePhone() {

}

function generateEmail() {

}

function generateReservation() {

}

function generateTransaction() {

}