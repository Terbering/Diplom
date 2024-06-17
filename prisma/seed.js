import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function seedProducts() {
  try {

    await prisma.products.create({
      data: {
        title: "Ford Mustang Gt Premium 2017",
        description: "Двигун:-2,9 л Gen 3 Supercharger Whipple Supercharger W/великий теплообмінник-Fore Innovations GT L2 Fuel system-Injector Dynamics ID1050x паливні інжектори-UPR Billet Oil Catch Can-MMR Billet Oil Pump Gears and Crank Sprocket-Pro Alloy header tank-MBRP street Котяча задня вихлопна системаПідвіска:-Задні опорні пружини BMR/ опускаючі передні пружини з мінімальним падінням-Пластина розвалу колеса BMR-Пластина розвалу колеса BMR-Задні регульовані носкові тяги BMR-Подшипник кулака Ford Performance до підшипника в зборі-Вертикальні тяги BMR-Регульований верхній важіль керування UPR-Опора підрамника BMR IRS Brace System-BMR Cradle Bushing Lockout Kit, Level 2-Viking Crusader Tick Train Train:-QA1 REV series carbon fiber drive val-BMR Driveshaft Safety Loop-Gforce Performance Engineering Renegade півосі Колеса, шини та гальма:-BC Forged HCS02 колеса 19 x10 спереду та 19x11 ззаду - Nitto NT555 G2 спереду та Nitto NT555RII ззаду - гальмівні ротори Baer EradiSpeed+",
        url: "http://surl.li/uknyn",
        price: 2500, // EG: 25.00
        category: "Легкова, Gen 3"
      },
    });

    await prisma.products.create({
      data: {
        title: "BMW 4 Series 2015",
        description: "BMW F32 435 Повний привід. Автомобіль у відмінному стані. Безключовий доступ, люк. Відкриття багажника без допомоги рук. По колу М пакет. Заниження 30 мм. Нові r19 різноширокі диски та літня гума. Перед у броні плівці. Заміна олії кожні 6т км. М пак кермо, переділена рідна приладка під М. Пайп + Stage1 (0-100 4, 2 сек). Є заводська прошивка. По колу нові стійки, пружини. 4 режими їзди. Бічні сплітери, задній дифузор і передня губа",
        url: "http://surl.li/uknyu",
        price: 1999,
        category: "Легкова, Повний привід"
      },
    });

    await prisma.products.create({
      data: {
        title: "Mercedes-Benz GLE-Class 2020",
        description: "Дизель  3.0 л  8.4 л на 100 км Норми токсичності: EURO VI+ Кількість клапанів: 24 Максимальний обертальний момент двигуна: 200 Нм при оборотах на хвилину. Кількість циліндрів 6 Потужність двигуна: 367 кінських сил при оборотах на хвилину Тип палива: Дизель Витрата пального  8.4 літра на 100 кілометрів Наявність додаткового наддуву Подвійний турбокомпресор Викид CO2: 220 грамів на кілометр Об'єм двигуна: 2989 кубічних сантиметрів Розташування циліндрів: Послідовне Ємність батареї: 0.9 кіловатт-годин Максимальний обертальний момент: 750 Нм при 1350-2800 оборотах на хвилину Динаміка: Час розгону до 100 кілометрів за годину: 5.6 секунд Максимальна швидкість: 250 кілометрів на годину",
        url: "http://surl.li/uknzd",
        price: 9999,
        category: "Легкова, Новинка"
      },
    });


    await prisma.products.create({
      data: {
        title: "Ford Mustang Shelby GT500 ",
        description: "Двигун:Під капотом цього автомобіля знаходиться потужний V8-двигун об'ємом близько 5.2 літра. Для підвищення продуктивності використовується супертурбонаддув. Потужність: Mustang Shelby GT500 розвиває вражаючу потужність, що зазвичай перевищує 700 кінських сил. Це дозволяє автомобілю прискорюватися до великих швидкостей за короткий час. Динаміка: Завдяки такій потужності і оптимізованій трансмісії, час розгону від 0 до 100 км/год може становити приблизно 3.5 секунди.",
        url: "http://surl.li/umfer",
        price: 1299,
        category: "Легкова, V8"
      },
    });


    await prisma.products.create({
      data: {
        title: "Ferrari 488 Pista",
        description: "Ferrari 488 Pista - це вражаючий спортивний автомобіль, розроблений і вироблений італійським виробником автомобілів Ferrari. Він є одним із найпотужніших та найшвидших автомобілів компанії та представляє собою витончену комбінацію високої швидкості, технологій і ексклюзивного дизайну.",
        url: "http://surl.li/umfsp",
        price: 22499,
        category: "Легкова, Ексклюзив"
      },
    });

    await prisma.products.create({
      data: {
        title: "Aston martin db11",
        description: "Aston Martin DB11 - це ексклюзивний спортивний автомобіль, що виробляється британським виробником автомобілів Aston Martin. Він відомий своїм елегантним дизайном, потужними двигунами і високим рівнем розкіші.",
        url: "http://surl.li/umftg",
        price: 23599,
        category: "Легкова, Британія"
      },
    });

    await prisma.products.create({
      data: {
        title: "Volkswagen Käfer",
        description: "Volkswagen Käfer, також відомий як Volkswagen Beetle або ж «жук», є одним з найбільш відомих і впізнаваних автомобілів у світі. Цей автомобіль став символом надійності, простоти і доступності. Він мав компактні розміри, дружній до користувача дизайн та невибагливий двигун.",
        url: "http://surl.li/umfts",
        price: 8999,
        category: "Легкова, Компактний"
      },
    });

    await prisma.products.create({
      data: {
        title: "Nissan GT-R 2015",
        description: "Nissan GT-R 2015 - це іконічний спортивний автомобіль від японського виробника Nissan, який відомий своєю потужністю, високою швидкістю і передовими технологіями. Цей автомобіль має неповторний дизайн і вражаючі характеристики, що роблять його популярним серед ентузіастів автоспорту та широкої публіки.",
        url: "http://surl.li/umful",
        price: 159599,
        category: "Легкова, Спорт авто"
      },
    });

    await prisma.products.create({
      data: {
        title: "Porsche 911 2020",
        description: "Porsche 911 - це легендарний спортивний автомобіль, який вже понад півстоліття втілює концепцію високих технологій і емоційного водіння.Двигун: Під капотом різних моделей 911 знаходяться шестициліндрові бензинові двигуни різних об'ємів і потужностей. Двигуни Porsche 911 відомі своєю ефективністю, потужністю і унікальним звучанням.",
        url: "http://surl.li/umfvd",
        price: 99599,
        category: "Легкова, Унікальне звучання"
      },
    });

    await prisma.products.create({
      data: {
        title: "Computer with accessories",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        url: "http://surl.li/umffx",
        price: 9699
      },
    });

    await prisma.products.create({
      data: {
        title: "Cup of Tea",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        url: "http://surl.li/umfig",
        price: 125
      },
    });

    await prisma.products.create({
      data: {
        title: "Playstation Controller",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        url: "http://surl.li/umfii",
        price: 1599
      },
    });

    await prisma.products.create({
      data: {
        title: "Rasberries",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        url: "http://surl.li/umfil",
        price: 259
      },
    });

    await prisma.products.create({
      data: {
        title: "Old Car",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        url: "http://surl.li/umfin",
        price: 104959
      },
    });

    await prisma.products.create({
      data: {
        title: "Mac Mini",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        url: "http://surl.li/umfiq",
        price: 99999
      },
    });

    await prisma.products.create({
      data: {
        title: "Old Bench",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        url: "http://surl.li/umfit",
        price: 8999
      },
    });

    await prisma.products.create({
      data: {
        title: "Broken Cars",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        url: "http://surl.li/umfiu",
        price: 256595
      },
    });

    await prisma.products.create({
      data: {
        title: "Guitar",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        url: "http://surl.li/umfiw",
        price: 12595
      },
    });
  } catch (error) {
    console.error(error);
  } finally {
    await prisma.$disconnect();
  }
}

seedProducts();
