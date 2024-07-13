export const TOP_POSTS = [
  {
    id: 1,
    image: require("../../assets/image/ua-1.jpg"),
    title: "Пошук безкоштовних речей",
    category: "All",
  },
  {
    id: 2,
    image: require("../../assets/image/ua-2.jpg"),
    title: "Волонтери",
    category: "Volunteers",
  },
  {
    id: 3,
    image: require("../../assets/image/ua-1.jpg"),
    title: "Пошук послуг",
    category: "Search for services",
  },
  {
    id: 4,
    image: require("../../assets/image/ua-2.jpg"),
    title: "Благодійні організації",
    category: "Charitable organizations",
  },
  {
    id: 5,
    image: require("../../assets/image/ua-1.jpg"),
    title: "Актуальні банки",
    category: "Current banks",
  },
];

export const TOP_CATEGORY = [
  {
    id: 4,
    image: require("../../assets/image/ua-3.jpg"),
    title: "Житло",
    category: "House",
  },
  {
    id: 5,
    image: require("../../assets/image/ua-1.jpg"),
    title: "Одяг та взуття",
    category: "Clothes and shoes",
  },
  {
    id: 6,
    image: require("../../assets/image/ua-2.jpg"),
    title: "Продукти",
    category: "Food",
  },

  {
    id: 8,
    image: require("../../assets/image/ua-2.jpg"),
    title: "Для дітей",
    category: "For children",
  },
  {
    id: 9,
    image: require("../../assets/image/ua-3.jpg"),
    title: "Ліки та Гігієна",
    category: "Medicines and Hygiene",
  },
  {
    id: 10,
    image: require("../../assets/image/ua-3.jpg"),
    title: "Транспорт",
    category: "Transport",
  },
];

export const CATEGORY = [
  {
    id: 1,
    name: "Житло",
    sleg: "Home",
    icon: "home-variant",
  },
  {
    id: 2,
    name: "Одяг та взуття",
    sleg: "ClothFoot",
    icon: "tshirt-crew",
  },
  {
    id: 3,
    name: "Продукти",
    sleg: "Food",
    icon: "baguette",
  },
  {
    id: 4,
    name: "Для дітей",
    sleg: "ForKids",
    icon: "baby-carriage",
  },
  {
    id: 5,
    name: "Ліки та Гігієна",
    sleg: "MedHygiene",
    icon: "bandage",
  },
  {
    id: 6,
    name: "Транспорт",
    sleg: "Transport",
    icon: "car-cog",
  },
  {
    id: 7,
    name: "Для тварин",
    sleg: "ForAnimals",
    icon: "dog",
  },
  {
    id: 8,
    name: "Медична допомога",
    sleg: "MedicalAid",
    icon: "clipboard-plus",
  },
  {
    id: 9,
    name: "Інше",
    sleg: "Other",
    icon: "more",
  },
];

 export const LISTINGS = [
  { "listing_id": 1,
    "name": "Каша 'Здоров' з гречкою",
    "description": "Здорова та смачна каша з натуральною гречкою. Ідеальний вибір для сніданку.",
    "category": {
      "id_category": 3,
      "name": "Продукти",
      "sleg": "Food",
      "icon": "baguette"
    },
    "price": "Безкоштовно (для благодійності)",
    "usage": "Купівля цієї каші допоможе забезпечити їжу тим, хто опинився в складних життєвих ситуаціях.",
    "image_url": "https://i.pravatar.cc/300"
  },
  { "listing_id": 2,
    "name": "Каша 'Здоров' з овесом",
    "description": "Смачна та корисна каша з натуральним овесом. Підходить для різноманітних сніданків.",
    "category": {
      "id_category": 3,
      "name": "Продукти",
      "sleg": "Food",
      "icon": "baguette"
    },
    "price": "Безкоштовно (для благодійності)",
    "usage": "Купівля цієї каші сприятиме благодійним ініціативам у сфері харчування.",
    "image_url": "https://i.pravatar.cc/300"
  },
  { "listing_id": 3,
    "name": "Каша 'Здоров' з ячменем",
    "description": "Неперевершена каша з високоякісним ячменем. Забезпечить вам енергію на весь день.",
    "category": {
      "id_category": 3,
      "name": "Продукти",
      "sleg": "Food",
      "icon": "baguette"
    },
    "price": "Безкоштовно (для благодійності)",
    "usage": "Придбання цієї каші підтримає ініціативи з надання харчів тим, хто цього потребує.",
    "image_url": "https://i.pravatar.cc/300"
  },
  { "listing_id": 4,
    "name": "Носки 'Теплість'",
    "description": "Теплі та комфортні носки для зимових вечорів. Виготовлені з високоякісних матеріалів.",
    "category": {
      "id_category": 2,
      "name": "Одяг та взуття",
      "sleg": "ClothFoot",
      "icon": "tshirt-crew"
    },
    "price": "Безкоштовно (для благодійності)",
    "usage": "Купівля цих носків допоможе тим, хто потребує допомоги у отриманні тепла та комфорту.",
    "image_url": "https://i.pravatar.cc/300"
  },
  { "listing_id": 5,
    "name": "Носки 'Забава'",
    "description": "Веселі та яскраві носки, щоб підняти настрій у будь-який час року.",
    "category": {
      "id_category": 2,
      "name": "Одяг та взуття",
      "sleg": "ClothFoot",
      "icon": "tshirt-crew"
    },
    "price": "Безкоштовно (для благодійності)",
    "usage": "Придбання цих носків підтримає проекти, спрямовані на надання допомоги та радості.",
    "image_url": "https://i.pravatar.cc/300"
  },
  { "listing_id": 6,
    "name": "Іграшка 'Смішний Пес'",
    "description": "Смішна іграшка у вигляді веселого песика. Радість для дітей та дорослих.",
    "category": {
      "id_category": 4,
      "name": "Для дітей",
      "sleg": "ForKids",
      "icon": "baby-carriage"
    },
    "price": "Безкоштовно (для благодійності)",
    "usage": "Покупка цієї іграшки підтримає благодійні програми для дітей.",
    "image_url": "https://i.pravatar.cc/300"
  },
  { "listing_id": 7,
    "name": "Іграшка 'Веселий Котик'",
    "description": "Симпатична іграшка у вигляді веселого котика. Прекрасний подарунок для малят.",
    "category": {
      "id_category": 4,
      "name": "Для дітей",
      "sleg": "ForKids",
      "icon": "baby-carriage"
    },
    "price": "Безкоштовно (для благодійності)",
    "usage": "Закупівля цієї іграшки допоможе створити яскраві та радісні моменти для дітей.",
    "image_url": "https://i.pravatar.cc/300"
  },
  { "listing_id": 8,
    "name": "Штани 'Комфорт'",
    "description": "Комфортні штани для активного способу життя. Виготовлені з м'якого та дихаючого матеріалу.",
    "category": {
      "id_category": 2,
      "name": "Одяг та взуття",
      "sleg": "ClothFoot",
      "icon": "pants"
    },
    "price": "Безкоштовно (для благодійності)",
    "usage": "Закупівля цих штанів допоможе людям у потребі отримати комфортне та якісне одяг.",
    "image_url": "https://i.pravatar.cc/300"
  },
  { "listing_id": 9,
    "name": "Штани 'Актив'",
    "description": "Стильні та функціональні штани для спорту та активного відпочинку.",
    "category": {
      "id_category": 2,
      "name": "Одяг та взуття",
      "sleg": "ClothFoot",
      "icon": "pants"
    },
    "price": "Безкоштовно (для благодійності)",
    "usage": "Придбання цих штанів допоможе підтримати проекти, спрямовані на підтримку здорового способу життя.",
    "image_url": "https://i.pravatar.cc/300"
  },
  { "listing_id": 10,
    "name": "Медична Маска 'Безпека'",
    "description": "Захистіть себе та інших від вірусів та бактерій за допомогою цієї медичної маски.",
    "category": {
      "id_category": 5,
      "name": "Ліки та Гігієна",
      "sleg": "MedHygiene",
      "icon": "bandage"
    },
    "price": "Безкоштовно (для благодійності)",
    "usage": "Придбання цієї маски підтримає проекти з забезпечення гігієни та безпеки в громаді.",
    "image_url": "https://i.pravatar.cc/300"
  },
  { "listing_id": 11,
    "name": "Мультитул 'Усе в одному'",
    "description": "Практичний і зручний мультитул для вирішення різних завдань у повсякденному житті.",
    "category": {
      "id_category": 6,
      "name": "Транспорт",
      "sleg": "Transport",
      "icon": "car-cog"
    },
    "price": "Безкоштовно (для благодійності)",
    "usage": "Купівля цього мультитула допоможе в забезпеченні транспортних засобів для тих, хто цього потребує.",
    "image_url": "https://i.pravatar.cc/300"
  },
  { "listing_id": 12,
    "name": "Медична Книжка Першого Надання",
    "description": "Навчіться надавати першу допомогу за допомогою цієї практичної медичної книжки.",
    "category": {
      "id_category": 8,
      "name": "Медична допомога",
      "sleg": "MedicalAid",
      "icon": "clipboard-plus"
    },
    "price": "Безкоштовно (для благодійності)",
    "usage": "Придбання цієї книжки допоможе в проведенні тренінгів з надання першої допомоги.",
    "image_url": "https://i.pravatar.cc/300"
  },
  { "listing_id": 13,
    "name": "Курчатко 'Пухнастик'",
    "description": "Симпатичне та пухнасте курча віддасть вам невимовну радість та позитив.",
    "category": {
      "id_category": 7,
      "name": "Для тварин",
      "sleg": "ForAnimals",
      "icon": "dog"
    },
    "price": "Безкоштовно (для благодійності)",
    "usage": "Покупка цього милого курча підтримає проекти з допомоги та захисту тварин.",
    "image_url": "https://i.pravatar.cc/300"
  },
  { "listing_id": 14,
    "name": "Тренувальний М'яч 'FitBall'",
    "description": "Відмінний спосіб підтримати активний спосіб життя та покращити фізичну форму.",
    "category": {
      "id_category": 9,
      "name": "Інше",
      "sleg": "Other",
      "icon": "more"
    },
    "price": "Безкоштовно (для благодійності)",
    "usage": "Закупівля цього тренувального м'яча допоможе в розвитку фізичних програм та тренувань.",
    "image_url": "https://i.pravatar.cc/300"
  },
  { "listing_id": 15,
    "name": "М'яч для Гри 'Веселі Години'",
    "description": "Розважальний м'яч для створення веселих моментів та розваг з друзями та рідними.",
    "category": {
      "id_category": 9,
      "name": "Інше",
      "sleg": "Other",
      "icon": "more"
    },
    "price": "Безкоштовно (для благодійності)",
    "usage": "Придбання цього м'яча сприятиме розвитку культурних та розважальних ініціатив.",
    "image_url": "https://i.pravatar.cc/300"
  }
];

