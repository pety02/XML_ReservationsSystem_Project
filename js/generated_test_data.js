// Generated test data - countries, towns, streets, district areas, amenities, hotel names, IBANs, payingTools,
// currencies, names, families, email domains, phones and english to bulgarian alphabet map
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

const streetsEN = ["Main Street", "Broadway", "Elm Street", "Park Avenue", "5th Avenue", "Baker Street", "Ocean Drive", "Maple Street", "King Street", "Sunset Boulevard"];

const streetsBG = ["Главна улица", "Бродвей", " Елм улица", "Парк авеню", "5-та авеню", "Бейкър стрийт", "Оушън драйв", "Кленова улица", "Кинг стрийт", "Сънсет булевард"];

const districtsEN = ["Downtown", "Uptown", "Midtown", "Suburb", "Old Town", "Industrial Zone", "West Side", "East End", "North End", "South Side"];

const districtsBG = ["Център", "Северна част", "Южна част", "Източна част", "Западна част", "Стара част", "Индустриална зона", "Нов квартал", "Площад", "Младост"];

const amenitiesInBG = ["Интернет", "Климатик", "Паркинг", "Закуска", "Басейн", "Фитнес", "Спа", "Ресторант", "Бар", "Сейф",
    "Минибар", "Пералня", "Транспорт", "Портиер", "Телевизор", "Тераса", "Джакузи", "Градина", "Шезлонги", "Чадъри", "Румсервиз"];

const amenitiesInEN = ["Pool", "Gym", "Spa", "Internet", "Parking", "Restaurant", "Concierge", "Lounge", "Terrace", "Balcony",
    "Housekeeping", "Laundry", "Shuttle", "Breakfast", "Bar", "Minibar", "Safe", "Jacuzzi", "Sauna", "Garden", "Library", "Fireplace",
    "Desk", "Elevator", "Fitness", "Beach", "Tennis", "Cinema", "Golf", "Boutique"];

const hotelNamesBG = ["Изгрев", "Перла", "Зора", "Оазис", "Хоризонт", "Бриз", "Витоша", "Мираж", "Сияние",
    "Рай", "Злато", "Алпина", "Еделвайс", "Лилия", "Романтика", "Кристал", "Диамант", "Сапфир", "Акварел", "Галактика",
    "Луна", "Звезда", "Тропик", "Самоков", "Делта", "Престиж", "Комфорт", "Енергия", "Модерн", "Чайка"];

const hotelNamesEN = ["Sunrise", "Pearl", "Dawn", "Oasis", "Horizon", "Breeze", "Vitosha", "Mirage", "Glow",
    "Paradise", "Gold", "Alpina", "Edelweiss", "Lily", "Romantic", "Crystal", "Diamond", "Sapphire", "Aquarelle",
    "Galaxy", "Moon", "Star", "Tropic", "Samokov", "Delta", "Prestige", "Comfort", "Energy", "Modern", "Seagull"];

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

const payingTools = ["by_card", "in_cash"];

const currencies = ["USD", "EUR", "JPY", "GBP", "AUD", "CAD", "CHF", "CNY", "SEK", "NZD"];

const bulgarianNames = ["Иван", "Мария", "Георги", "Елена", "Николай", "Ана", "Петър", "Десислава", "Стефан", "Радка",
    "Калоян", "Силвия", "Борис", "Цветелина", "Тодор", "Виолета", "Димитър", "Лиляна", "Кристиян", "Веселина",
    "Александър", "Надя", "Симеон", "Магдалена", "Мартин", "Стефания", "Христо", "Габриела", "Васил", "Яна",
    "Михаил", "Жени", "Стоян", "Вероника", "Ангел", "Калина", "Кирил", "Людмила", "Пламен", "Биляна",
    "Йоан", "Румяна", "Антон", "Ваня", "Златко", "Катя", "Невена", "Лазар", "Соня", "Тихомир"
];

const englishNames = ["John", "Mary", "George", "Helen", "Nicholas", "Anna", "Peter", "Sophia", "Stephen", "Ruth",
    "Caleb", "Sylvia", "Boris", "Cynthia", "Theodore", "Violet", "Matthew", "Lillian", "Christian", "Joyce",
    "Alexander", "Nadia", "Simon", "Magdalene", "Martin", "Stephanie", "Christopher", "Gabriella", "William", "Diana",
    "Michael", "Jennifer", "Stanley", "Veronica", "Angel", "Karen", "Cyril", "Lucy", "Patrick", "Belinda",
    "Evan", "Ramona", "Anthony", "Wendy", "Zachary", "Katie", "Nina", "Lawrence", "Sonia", "Timothy"
];

const bulgarianFamilies = ["Иванов", "Петров", "Стоянов", "Димитров", "Георгиев", "Николов", "Христов",
    "Тодоров", "Караиванов", "Ангелов", "Маринов", "Василев", "Радев", "Славчев", "Златев", "Милев", "Колев",
    "Бонев", "Ганев", "Симеонов", "Александров", "Грозданов", "Илиев", "Кирилов", "Лазаров", "Цветков", "Янакиев",
    "Трифонов", "Чавдаров", "Драганов", "Богданов", "Жеков", "Кабаков", "Манолов", "Недев", "Огнянов", "Петков",
    "Русев", "Станчев", "Томов", "Филипов", "Хаджиев", "Цанев", "Шишков", "Щерев", "Юрков", "Янков", "Вълков",
    "Добрев", "Захариев"];

const englishFamilies = ["Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller", "Davis",
    "Rodriguez", "Martinez", "Hernandez", "Lopez", "Gonzalez", "Wilson", "Anderson", "Thomas", "Taylor", "Moore",
    "Jackson", "Martin", "Lee", "Perez", "Thompson", "White", "Harris", "Sanchez", "Clark", "Ramirez", "Lewis",
    "Robinson", "Walker", "Young", "Allen", "King", "Wright", "Scott", "Torres", "Nguyen", "Hill", "Flores", "Green",
    "Adams", "Nelson", "Baker", "Hall", "Rivera", "Campbell", "Mitchell", "Carter", "Roberts"
];

const emailDomains = ["@gmail.com", "@yahoo.com", "@hotmail.com", "@aol.com", "@outlook.com", "@icloud.com",
    "@live.com", "@hotmail.co.uk", "@sbcglobal.net", "@me.com", "@att.net", "@mail.ru", "@bellsouth.net",
    "@rediffmail.com", "@cox.net"];

const phones = ["+359887654321", "0887654321", "+359889123456", "0889123456", "+359878456789", "0878456789",
    "+359876543210", "0876543210", "+359889876543", "0889876543", "+359878123456", "0878123456", "+359877654321",
    "0877654321", "+359889654321", "0889654321", "+359878987654", "0878987654", "+359876123456", "0876123456",
    "+359877456789", "0877456789", "+359888765432", "0888765432", "+359877876543", "0877876543", "+359888654321",
    "0888654321", "+359876987654"];

const bulgarianToEnglishMap = {
    'А': 'A', 'Б': 'B', 'В': 'V', 'Г': 'G', 'Д': 'D', 'Е': 'E', 'Ж': 'Zh',
    'З': 'Z', 'И': 'I', 'Й': 'Y', 'К': 'K', 'Л': 'L', 'М': 'M', 'Н': 'N',
    'О': 'O', 'П': 'P', 'Р': 'R', 'С': 'S', 'Т': 'T', 'У': 'U', 'Ф': 'F',
    'Х': 'H', 'Ц': 'Ts', 'Ч': 'Ch', 'Ш': 'Sh', 'Щ': 'Sht', 'Ъ': 'A',
    'Ь': 'Y', 'Ю': 'Yu', 'Я': 'Ya', 'а': 'a', 'б': 'b', 'в': 'v',
    'г': 'g', 'д': 'd', 'е': 'e', 'ж': 'zh', 'з': 'z', 'и': 'i',
    'й': 'y', 'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n', 'о': 'o',
    'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u', 'ф': 'f',
    'х': 'h', 'ц': 'ts', 'ч': 'ch', 'ш': 'sh', 'щ': 'sht',
    'ъ': 'a', 'ь': 'y', 'ю': 'yu', 'я': 'ya'
};