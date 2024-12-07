// Helper functions - generates a small part of the whole xml file
function generateRoomNo(roomsCount) {
    return Math.floor(Math.random() * roomsCount);
}

function generateFloorNo(floorsCount) {
    return Math.floor(Math.random() * floorsCount);
}

function generateRoomMaxCapacity(roomType) {
    switch (roomType) {
        case "apartment":
            return 8;
        case "double":
            return 2;
        case "deluxe":
            return 4;
        case "president":
            return 2;
        case "single":
        default:
            return 1;
    }
}

function generateHotelName(lang) {
    let randomIndex;
    switch (lang) {
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

function generateCountry(lang) {
    let randomIndex;
    switch (lang) {
        case "EN": {
            randomIndex = Math.floor(Math.random() * countriesEN.length);
            return countriesEN[randomIndex];
        }
        case "BG":
        default: {
            randomIndex = Math.floor(Math.random() * countriesBG.length);
            return countriesBG[randomIndex];
        }
    }
}

function generateTown(lang, country) {
    switch (lang) {
        case "EN": {
            const countryTowns = townsEN[country];
            return countryTowns[Math.floor(Math.random() * countryTowns.length)];
        }
        case "BG":
        default: {
            const countryTowns = townsBG[country];
            return countryTowns[Math.floor(Math.random() * countryTowns.length)];
        }
    }
}

function getRandomLocationEN() {
    const randomStreet = streetsEN[Math.floor(Math.random() * streetsEN.length)];
    const randomDistrict = districtsEN[Math.floor(Math.random() * districtsEN.length)];

    return `Street: ${randomStreet}, District: ${randomDistrict}`;
}

function getRandomLocationBG() {
    const randomStreet = streetsBG[Math.floor(Math.random() * streetsBG.length)];
    const randomDistrict = districtsBG[Math.floor(Math.random() * districtsBG.length)];

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
    const country = generateCountry(lang);
    addressElement.setAttribute('country', country);
    addressElement.setAttribute('town', generateTown(lang, country));
    addressElement.setAttribute('location', generateLocation(lang));

    return addressElement;
}

function generateHotel(htmlDoc, lang) {
    const hotelElement = htmlDoc.createElement('hotel');
    const hotelNameElement = htmlDoc.createElement('name');
    const hotelNameTextNode = htmlDoc.createTextNode(generateHotelName(lang));
    hotelNameElement.appendChild(hotelNameTextNode);
    hotelElement.appendChild(hotelNameElement);
    const hotelAddressElement = generateAddress(htmlDoc, lang);
    hotelElement.appendChild(hotelAddressElement);

    return hotelElement;
}

function generateAmenity(lang) {
    let randomIndex;
    switch (lang) {
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

function generateCurrencyName() {
    const randomIndex = Math.floor(Math.random() * currencies.length);

    return currencies[randomIndex];
}

function generatePriceValue(htmlDoc, min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function generatePrice(htmlDoc, lang, min, max) {
    const priceElement = htmlDoc.createElement('price');
    priceElement.setAttribute('currency', generateCurrencyName());

    const value = generatePriceValue(htmlDoc, min, max);
    priceElement.appendChild(htmlDoc.createTextNode(value));

    return priceElement;
}

function generateRoom(htmlDoc, lang, min, max, roomMaxCapacity, type, roomsCount, floorsCount, amenitiesCount) {
    const roomElement = htmlDoc.createElement('room');

    const roomNoElement = htmlDoc.createElement('roomNo');
    roomNoElement.appendChild(htmlDoc.createTextNode(generateRoomNo(roomsCount)));
    roomElement.appendChild(roomNoElement);

    const floorNoElement = htmlDoc.createElement('floorNo');
    floorNoElement.appendChild(htmlDoc.createTextNode(generateFloorNo(floorsCount)));
    roomElement.appendChild(floorNoElement);

    const maxCapacityElement = htmlDoc.createElement('maxCapacity');
    maxCapacityElement.appendChild(htmlDoc.createTextNode(roomMaxCapacity));
    roomElement.appendChild(maxCapacityElement);

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
        amenityElement.appendChild(htmlDoc.createTextNode(generateAmenity(lang)));
        amenitiesElement.appendChild(amenityElement);
    }
    roomElement.appendChild(amenitiesElement);

    const priceElement = generatePrice(htmlDoc, lang, min, max);
    roomElement.appendChild(priceElement);

    roomElement.setAttribute('type', type);
    return roomElement;
}

function generateName(lang) {
    let randomIndex;
    if (lang === "BG") {
        randomIndex = Math.floor(Math.random() * bulgarianNames.length);
        return bulgarianNames[randomIndex];
    } else {
        randomIndex = Math.floor(Math.random() * englishNames.length);
        return englishNames[randomIndex];
    }
}

function generateFamily(lang) {
    let randomIndex;
    if (lang === "BG") {
        randomIndex = Math.floor(Math.random() * bulgarianFamilies.length);
        return bulgarianFamilies[randomIndex];
    } else {
        randomIndex = Math.floor(Math.random() * englishFamilies.length);
        return englishFamilies[randomIndex];
    }
}

function translateBulgarianToEnglish(firstName, secondName) {
    function translateName(name) {
        return name.split('').map(char => bulgarianToEnglishMap[char] || char).join('');
    }

    return {
        translatedFirstName: translateName(firstName),
        translatedSecondName: translateName(secondName)
    };
}

function generateEmail(name, family) {
    const translatedNames = translateBulgarianToEnglish(name, family);

    const randomIndex = Math.floor(Math.random() * emailDomains.length);
    return translatedNames.translatedFirstName + "." + translatedNames.translatedSecondName + emailDomains[randomIndex];
}

function generatePhone() {
    const randomIndex = Math.floor(Math.random() * phones.length);
    return phones[randomIndex];
}

function generateGuest(htmlDoc, lang) {
    const guestElement = htmlDoc.createElement('guest');

    const name = generateName(lang);
    guestElement.setAttribute('name', name);

    const family = generateFamily(lang);
    guestElement.setAttribute('family', family);

    const email = generateEmail(name, family);
    guestElement.setAttribute('email', email);

    const phone = generatePhone();
    guestElement.setAttribute('phone', phone);

    return guestElement;
}

function generateReservation(htmlDoc, lang, min, max, type, roomMaxCapacity, roomsCount, floorsCount, amenitiesCount) {
    const reservationElement = htmlDoc.createElement('reservation');

    const roomElement = generateRoom(htmlDoc, lang, min, max, roomMaxCapacity, type, roomsCount, floorsCount, amenitiesCount);
    reservationElement.appendChild(roomElement);
    const guestsElement = htmlDoc.createElement('guests');
    reservationElement.appendChild(guestsElement);

    for (let i = 0; i < roomMaxCapacity; i++) {
        const guestElement = generateGuest(htmlDoc, lang);
        guestsElement.appendChild(guestElement);
    }

    return reservationElement;
}

function generatePayingTool() {
    const randomIndex = Math.floor(Math.random() * payingTools.length);
    return payingTools[randomIndex];
}

function generateRoomType() {
    const roomTypes = ["apartment", "single", "double", "deluxe", "president"];
    const randomIndex = Math.floor(Math.random() * roomTypes.length);
    return roomTypes[randomIndex];
}

function generateIBAN(htmlDoc) {
    const IBANElement = htmlDoc.createElement('iban');
    const randomIndex = Math.floor(Math.random() * IBANs.length);
    IBANElement.appendChild(htmlDoc.createTextNode(IBANs[randomIndex]));

    return IBANElement;
}

function generateBalance(htmlDoc, min, max) {
    const balanceElement = htmlDoc.createElement('balance');
    balanceElement.appendChild(htmlDoc.createTextNode(Math.random() * (max - min) + min));

    return balanceElement;
}

function generateDebitCard(htmlDoc, min, max) {
    const debitCardElement = htmlDoc.createElement('card');

    const ibanElement = generateIBAN(htmlDoc);
    debitCardElement.appendChild(ibanElement);

    const balanceElement = generateBalance(htmlDoc, min, max);
    debitCardElement.appendChild(balanceElement);

    const currency = generateCurrencyName();
    debitCardElement.setAttribute('currency', currency)

    return debitCardElement;
}

function generateTransaction(htmlDoc, lang, minPricePerNight, maxPricePerNight, roomsCount, floorsCount,
                             amenitiesCount, minBalance, maxBalance) {
    const transactionIDStep = 1000;
    const roomType = generateRoomType();
    const roomMaxCapacity = generateRoomMaxCapacity(roomType);

    const transactionElement = htmlDoc.createElement('transaction');
    transactionElement.setAttribute('id', Math.floor(Math.random() * transactionIDStep));
    transactionElement.setAttribute('payingTool', generatePayingTool());

    const reservationElement = generateReservation(htmlDoc, lang, minPricePerNight, maxPricePerNight, roomType,
        roomMaxCapacity, roomsCount, floorsCount, amenitiesCount);
    transactionElement.appendChild(reservationElement);

    const cardElement = generateDebitCard(htmlDoc, minBalance, maxBalance);
    transactionElement.appendChild(cardElement);

    return transactionElement;
}

const lang = "BG";

// formats the XML content
function formatXML(xmlString) {
    const PADDING = "  ";
    let formatted = "";
    const regex = /(>)(<)(\/*)/g;
    xmlString = xmlString.replace(regex, "$1\n$2$3");

    let pad = 0;
    xmlString.split("\n").forEach((line) => {
        if (line.match(/<\/\w/)) {
            pad -= 1;
        }

        formatted += PADDING.repeat(pad) + line.trim() + "\n";

        if (line.match(/<\w[^>]*[^/]>.*$/)) {
            pad += 1;
        }
    });

    return formatted.trim();
}

// downloads a specific XML file
function downloadXMLFile(xmlContent, filename) {
    const blob = new Blob([xmlContent], {type: 'application/xml'});

    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);

    link.download = filename;
    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
    URL.revokeObjectURL(link.href);
}

// generates a hotel specimen by definite parameters - rooms count in a hotel, floors count in a hotel, amenities count
// in a regular hotel room, min price per a night in the hotel, max price per night in the hotel
function generateSpecimen(roomsCount, floorsCount, amenitiesCount, minPrice, maxPrice, filename) {
    const documentImplementation = document.implementation;
    const htmlDoc = documentImplementation.createDocument(null, null);

    const PItext = "version=\"1.0\" encoding=\"UTF-8\"";
    const processingInstructions = htmlDoc.createProcessingInstruction('xml', PItext);
    htmlDoc.insertBefore(processingInstructions, htmlDoc.documentElement);

    const rootElement = htmlDoc.createElement('transactions');
    rootElement.setAttribute('xmlns:xsi', 'http://www.w3.org/2001/XMLSchema-instance');
    rootElement.setAttribute('xsi:noNamespaceSchemaLocation', 'reservations.xsd');
    const transactionElement = generateTransaction(htmlDoc, lang, minPrice, maxPrice, roomsCount, floorsCount,
        amenitiesCount, minPrice, maxPrice);
    rootElement.appendChild(transactionElement);

    const xmlSerializer = new XMLSerializer();

    const header = document.getElementById("specimenHeader");
    switch (filename) {
        case "firstSpecimen": header.innerText = "Екземпляр на първия хотел:\n"; break;
        case "secondSpecimen": header.innerText = "Екземпляр на втория хотел:\n"; break;
        case "thirdSpecimen": header.innerText = "Екземпляр на третия хотел:\n"; break;
        case "fourthSpecimen": header.innerText = "Екземпляр на четвъртия хотел:\n"; break;
        case "fifthSpecimen": header.innerText = "Екземпляр на петия хотел:\n"; break;
        default: break;
    }

    header.style.color = "green";

    const contentParagraph = document.getElementById("specimenParagraph");
    htmlDoc.appendChild(rootElement);
    const xmlContent = formatXML(xmlSerializer.serializeToString(htmlDoc));
    contentParagraph.innerText = xmlContent;
    downloadXMLFile(xmlContent, filename);
}

// specific functions that generates each of the specimens
function generateFirstSpecimen() {
    const roomsCount = 150;
    const floorsCount = 10;
    const amenitiesCount = 10;
    const minPrice = 200.00;
    const maxPrice = 1000.00;
    const filename = "firstSpecimen";

    generateSpecimen(roomsCount, floorsCount, amenitiesCount, minPrice, maxPrice, filename);
}

function generateSecondSpecimen() {
    const roomsCount = 50;
    const floorsCount = 5;
    const amenitiesCount = 2;
    const minPrice = 50.00;
    const maxPrice = 150.00;
    const filename = "secondSpecimen";

    generateSpecimen(roomsCount, floorsCount, amenitiesCount, minPrice, maxPrice, filename);
}

function generateThirdSpecimen() {
    const roomsCount = 20;
    const floorsCount = 3;
    const amenitiesCount = 5;
    const minPrice = 85.00;
    const maxPrice = 360.00;
    const filename = "thirdSpecimen";

    generateSpecimen(roomsCount, floorsCount, amenitiesCount, minPrice, maxPrice, filename);
}

function generateFourthSpecimen() {
    const roomsCount = 100;
    const floorsCount = 20;
    const amenitiesCount = 10;
    const minPrice = 1000.00;
    const maxPrice = 1500.00;
    const filename = "fourthSpecimen";

    generateSpecimen(roomsCount, floorsCount, amenitiesCount, minPrice, maxPrice, filename);
}

function generateFifthSpecimen() {
    const roomsCount = 5;
    const floorsCount = 1;
    const amenitiesCount = 4;
    const minPrice = 10.00;
    const maxPrice = 50.00;
    const filename = "fifthSpecimen";

    generateSpecimen(roomsCount, floorsCount, amenitiesCount, minPrice, maxPrice, filename);
}