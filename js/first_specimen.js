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

    const randomStreet = streets[Math.floor(Math.random() * streets.length)];
    const randomDistrict = districts[Math.floor(Math.random() * districts.length)];

    return `Street: ${randomStreet}, District: ${randomDistrict}`;
}

function getRandomLocationBG() {
    const streets = ["Главна улица", "Бродвей", " Елм улица", "Парк авеню", "5-та авеню", "Бейкър стрийт", "Оушън драйв", "Кленова улица", "Кинг стрийт", "Сънсет булевард"];
    const districts = ["Център", "Северна част", "Южна част", "Източна част", "Западна част", "Стара част", "Индустриална зона", "Нов квартал", "Площад", "Младост"];

    const randomStreet = streets[Math.floor(Math.random() * streets.length)];
    const randomDistrict = districts[Math.floor(Math.random() * districts.length)];

    return `Улица: ${randomStreet}, Район: ${randomDistrict}`;
}

function generateLocation(lang) {
    if (lang === "BG") {
        return getRandomLocationBG();
    } else {
        return getRandomLocationEN();
    }
}

function generateAddress(htmlDoc, lang) {
    const addressElement = htmlDoc.createElement('address');
    addressElement.setAttribute('country', generateCountry(lang));
    addressElement.setAttribute('town', generateTown(lang));
    addressElement.setAttribute('location', generateLocation(lang));

    return addressElement;
}

function generateHotel(htmlDoc, lang) {
    const hotelElement = htmlDoc.createElement('hotel');
    const hotelNameElement = htmlDoc.createElement('name');
    const hotelNameTextNode = htmlDoc.createTextNode(generateHotelName(lang));
    hotelNameElement.appendChild(hotelNameTextNode);
    hotelElement.appendChild(hotelNameElement);
    const hotelAddressElement = generateAddress(htmlDoc, hotelElement);
    hotelElement.appendChild(hotelAddressElement);

    return hotelElement;
}

function generateRoom(htmlDoc, lang, roomMaxCapacity, type, floorsCount, amenitiesCount) {
    const roomElement = htmlDoc.createElement('room');

    const roomNoElement = htmlDoc.createElement('roomNo');
    roomNoElement.appendChild(htmlDoc.createTextNode(generateRoomNo(roomsCount)));
    roomElement.appendChild(roomNoElement);

    const floorNoElement = htmlDoc.createElement('floorNo');
    floorNoElement.appendChild(htmlDoc.createTextNode(generateFloorNo(floorsCount)));
    roomElement.appendChild(floorNoElement);

    const maxCapacityElement = htmlDoc.createElement('maxCapacity');
    maxCapacityElement.appendChild(htmlDoc.createTextNode(roomMaxCapacity));
    roomNoElement.appendChild(maxCapacityElement);

    const hasPersonalBathElement = htmlDoc.createElement('hasPersonalBath');
    hasPersonalBathElement.appendChild(htmlDoc.createTextNode(Math.random() <= 0.5 ? "false" : "true"));
    roomElement.appendChild(hasPersonalBathElement);

    const isAvailableElement = htmlDoc.createElement('isAvailable');
    isAvailableElement.appendChild(htmlDoc.createTextNode(Math.random() <= 0.5 ? "false" : "true"));
    roomElement.appendChild(isAvailableElement);

    const hotelElement = generateHotel(htmlDoc, lang);
    roomElement.appendChild(hotelElement);

    const amenitiesElement = htmlDoc.createElement('amenities');
    for (let i = 0; i < amenitiesCount; i++) {
        const amenityElement = htmlDoc.createElement('amenity');
        amenityElement.appendChild(generateAmenity(lang));
        amenitiesElement.appendChild(amenityElement);
    }
    roomElement.appendChild(amenitiesElement);

    const priceElement = generatePrice(htmlDoc, lang);
    roomElement.appendChild(priceElement);

    const typeElement = htmlDoc.createElement('type');
    typeElement.appendChild(htmlDoc.createTextNode(type));
    roomElement.appendChild(typeElement);

    return roomElement;
}

function generateGuest(htmlDoc) {
    const guestElement = htmlDoc.createElement('guest');

    const nameElement = htmlDoc.createElement('name');
    nameElement.appendChild(htmlDoc.createTextNode(generateName(htmlDoc)));
    guestElement.appendChild(nameElement);

    const familyElement = htmlDoc.createElement('family');
    familyElement.appendChild(htmlDoc.createTextNode(generateFamily(htmlDoc)));
    guestElement.appendChild(familyElement);

    const emailElement = htmlDoc.createElement('email');
    emailElement.appendChild(htmlDoc.createTextNode(generateEmail(htmlDoc)));
    guestElement.appendChild(emailElement);

    const phoneElement = htmlDoc.createElement('phone');
    phoneElement.appendChild(htmlDoc.createTextNode(generatePhone(htmlDoc)));
    guestElement.appendChild(phoneElement);

    return guestElement;
}

function generatePayingTool(htmlDoc) {
    const tools = ["by_card", "in_cash"];
    const payingToolElement = htmlDoc.createElement('payingTool');
    payingToolElement.appendChild(htmlDoc.createTextNode(tools[Math.floor(Math.random() * tools.length)]));

    return payingToolElement;
}

function generateIBAN(htmlDoc) {
    const IBANs = ["AT611904300234573201", "DE89370400440532013000", "FR1420041010050500013M02606", "ES9121000418450200051332",
        "NL91ABNA0417164300", "BE62510007547061", "IT60X0542811101000000123456", "CH9300762011623852957", "GB29NWBK60161331926819",
        "PL27114020040000300201355387", "PT50000201231234567890154", "CZ6508000000192000145399", "SE3550000000054910000003",
        "DK5000400440116243", "NO9386011117947", "FI2112345600000785", "IE29AIBK93115212345678", "GR1601101250000000012300695",
        "LU280019400644750000", "BG80BNBG96611020345678", "IS140159260076545510730339", "HU42117730161111101800000000",
        "HR1210010051863000160", "EE382200221020145685", "LV97HABA0012345678910", "LT121000011101001000", "SK8975000000000010407517",
        "SI56192001234567892", "RO49AAAA1B31007593840000", "CY17002001280000001200527600", "MT84MALT011000012345MTLCAST001S",
        "IL620108000000099999999", "RS35260005601001611379", "BA391290079401028494", "MK07250120000058984", "ME25505000012345678951",
        "XK051212012345678906", "DO28BAGR00000001212453611324", "SV62CENR00000000000000700025", "IQ20CBIQ861800101010500",
        "SA0380000000608010167519", "AE070331234567890123456", "KW81CBKU0000000000001234560101", "BH67BMAG00001299123456",
        "QA58DOHB00001234567890ABCDEFG", "JO94CBJO0010000000000131000302", "PS92PALS000000000400123456702", "LB62099900000001001901229114",
        "TN5914207207100707129648", "MA6401151900000120500048772", "MC5811222000010123456789030", "AL47212110090000000235698741",
        "AD1200012030200359100100", "SM86U0322509800000000270100", "VA59001123000012345678", "LI740880612345678901",
        "GL8964710123456789", "FO9264600123456789", "GI75NWBK000000007099453", "MD24AG000225100013104168", "GE29NB0000000101904917",
        "AZ21NABZ00000000137010001944", "PK36SCBL0000001123456702", "MU17BOMM0101101030300200000MUR", "MT84MALT011000012345MTLCAST001S",
        "VG96VPVG0000012345678901", "KY82JMMM00000000000000000001", "EE382200221020145685", "CR05015202001026284066",
        "GT82TRAJ01020000001210029690", "SV62CENR00000000000000700025", "TT44BOFA00012345678912345678", "EG800002000156789012345180002",
        "MR1300020001010000123456753", "CI05A00060174100178530011852", "BF1030134020015400945000643", "NE58NE0380100100130305000268",
        "BJ11B00610100400271101192591", "SN12K00100152000025690007542", "TG53TG0090604310346500400070", "ML03D00890170001002120000447",
        "MG4600005030010101914016056", "KM4600005030010101914016056", "CG903003000012345678901256", "GA2140000000056789012345",
        "GQ7050002001010843110111", "GW04GW143001015301081501363", "DJ2110002010010409943020008", "BI43201011067444", "SO1230000001234567891",
        "SS12345678912345678912345678", "TZ1234567890123456789012", "UG12345678901234567890123456"];

    const IBANElement = htmlDoc.createElement('IBAN');
    const randomIndex = Math.random() * IBANs.length;
    IBANElement.appendChild(htmlDoc.createTextNode(IBANs[randomIndex]));

    return IBANElement;
}

function generateBalance(htmlDoc, min, max) {
    const balanceElement = htmlDoc.createElement('balance');
    balanceElement.appendChild(htmlDoc.createTextNode(Math.random() * (max - min) + min));

    return balanceElement;
}

function generateCurrencyName(htmlDoc) {
    const currencies = ["USD", "EUR", "JPY", "GBP", "AUD", "CAD", "CHF", "CNY", "SEK", "NZD"];

    const nameElement = htmlDoc.createElement('name');
    const randomIndex = Math.random() * currencies.length;
    nameElement.appendChild(htmlDoc.createTextNode(currencies[randomIndex]));

    return nameElement;
}

function generateCurrency(htmlDoc) {
    const currencyElement = htmlDoc.createElement('currency');
    const nameElement = generateCurrencyName(htmlDoc);
    currencyElement.appendChild(nameElement);

    return currencyElement;
}

function generatePriceValue(htmlDoc, min, max) {
    const valueElement = htmlDoc.createElement('value');
    valueElement.appendChild(htmlDoc.createTextNode(Math.random() * (max - min) + min));

    return valueElement;
}

function generatePrice(htmlDoc, lang, min, max) {
    const priceElement = htmlDoc.createElement('price');

    const valueElement = generatePriceValue(htmlDoc, min, max);
    priceElement.appendChild(valueElement);

    const currencyElement = generateCurrency(htmlDoc);
    priceElement.appendChild(currencyElement);

    return priceElement;
}

function generateDebitCard(htmlDoc, min, max) {
    const debitCardElement = htmlDoc.createElement('card');

    const ibanElement = generateIBAN(htmlDoc);
    debitCardElement.appendChild(ibanElement);

    const balanceElement = generateBalance(htmlDoc, min, max);
    debitCardElement.appendChild(balanceElement);

    const currencyElement = generateCurrency(htmlDoc);
    debitCardElement.appendChild(currencyElement);

    return debitCardElement;
}

function generateName(htmlDoc, lang) {

}

function generateFamily(htmlDoc, lang) {

}

function generatePhone(htmlDoc) {

}

function generateEmail(htmlDoc) {

}

function generateReservation(htmlDoc, lang, type, roomMaxCapacity, floorsCount, amenitiesCount) {
    const reservationElement = htmlDoc.createElement('reservation');

    const roomElement = generateRoom(htmlDoc, lang, type, roomMaxCapacity, floorsCount, amenitiesCount);
    reservationElement.appendChild(roomElement);
    const guestsElement = htmlDoc.createElement('guests');
    reservationElement.appendChild(guestsElement);

    for (let i = 0; i < roomMaxCapacity; i++) {
        const guestElement = generateGuest(htmlDoc);
        guestsElement.appendChild(guestElement);
    }

    return reservationElement;
}

function generateTransaction(htmlDoc, lang, floorsCount, amenitiesCount, minPrice, maxPrice) {
    const transactionIDStep = 1000;
    const roomType = generateRoomType();
    const roomMaxCapacity = generateRoomMaxCapacity(roomType);

    const transactionElement = htmlDoc.createElement('transaction');
    transactionElement.setAttribute('id', Math.random() * transactionIDStep);
    transactionElement.setAttribute('payingTool', generatePayingTool(htmlDoc));

    const reservationElement = generateReservation(htmlDoc, lang, roomType, roomMaxCapacity, floorsCount, amenitiesCount);
    transactionElement.appendChild(reservationElement);

    const cardElement = generateDebitCard(htmlDoc, minPrice, maxPrice);
    transactionElement.appendChild(cardElement);

    return transactionElement;
}

function generateFirstSpecimen(htmlDoc) {

}