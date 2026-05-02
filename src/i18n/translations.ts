export const supportedLanguages = ["ru", "en", "uz"] as const;

export type LanguageCode = (typeof supportedLanguages)[number];

type TranslationSchema = {
  nav: {
    home: string;
    features: string;
    pricing: string;
    contacts: string;
  };
  hero: {
    title: string;
    subtitle: string;
    ctaDemo: string;
    ctaBuy: string;
  };
  features: {
    sectionTitle: string;
    sectionSubtitle: string;
    cards: Array<{
      title: string;
      description: string;
    }>;
  };
  preview: {
    sectionTitle: string;
    sectionSubtitle: string;
    screens: Array<{
      name: string;
    }>;
    liveDemoNote: string;
  };
  pricing: {
    sectionTitle: string;
    price: string;
    freelancerPrice: string;
    includedTitle: string;
    includedItems: string[];
    cta: string;
    trustItems: string[];
  };
  registerForm: {
    sectionTitle: string;
    sectionSubtitle: string;
    nameLabel: string;
    namePlaceholder: string;
    contactLabel: string;
    contactPlaceholder: string;
    submit: string;
    submitting: string;
    success: string;
    nameRequired: string;
    contactRequired: string;
    sendError: string;
  };
  socialProof: {
    counters: Array<{
      value: number;
      suffix: string;
      label: string;
    }>;
    reviews: Array<{
      name: string;
      city: string;
      text: string;
      initials: string;
    }>;
  };
  faq: {
    sectionTitle: string;
    sectionSubtitle: string;
    items: Array<{
      question: string;
      answer: string;
    }>;
  };
  footer: {
    rights: string;
    telegramLabel: string;
    languagesLabel: string;
  };
  header: {
    buyCta: string;
  };
};

const emptyTranslation: TranslationSchema = {
  nav: {
    home: "Главная",
    features: "Преимущества",
    pricing: "Программы",
    contacts: "Контакты",
  },
  hero: {
    title: "Подготовим к IELTS 6.5+ за 3-6 месяцев",
    subtitle:
      "Language Vision в Ташкенте - мини-группы 4-6 человек, преподаватели с IELTS 7.0+ и структурированная программа с измеримым прогрессом каждую неделю. Идет набор в новый IELTS поток, количество мест ограничено.",
    ctaDemo: "Записаться на бесплатный пробный урок",
    ctaBuy: "Написать в Telegram",
  },
  features: {
    sectionTitle: "Почему выбирают Language Vision",
    sectionSubtitle:
      "Мы готовим подростков и студентов к реальному экзамену по понятной системе.",
    cards: [
      {
        title: "Мини-группы (4-6 студентов)",
        description: "Каждый студент получает персональное внимание, подробный фидбек и более быстрый прогресс.",
      },
      {
        title: "Опытные преподаватели IELTS (7.0+)",
        description: "Вы учитесь у преподавателей, которые знают критерии экзамена и улучшают каждый модуль.",
      },
      {
        title: "Структурированная программа 3-6 месяцев",
        description: "Понятный пошаговый план от текущего уровня до целевого балла IELTS.",
      },
      {
        title: "Регулярные mock tests",
        description:
          "Еженедельная практика в реальном формате экзамена и отслеживание прогресса каждую неделю.",
      },
      {
        title: "Отчеты о прогрессе",
        description: "Вы и родители видите реальные улучшения и слабые зоны после каждого этапа.",
      },
      {
        title: "Результаты студентов",
        description: "500+ учеников прошли подготовку, достигли 6.5+ и успешно сдали международные экзамены.",
      },
    ],
  },
  preview: {
    sectionTitle: "Как проходит подготовка",
    sectionSubtitle:
      "Прозрачная система обучения от первого занятия до экзамена: вы понимаете стартовый уровень, системно улучшаете навыки и выходите на нужный балл.",
    screens: [
      { name: "Определяем ваш уровень и цель IELTS" },
      { name: "Пошаговая подготовка к IELTS" },
      { name: "Практика в формате реального экзамена" },
      { name: "Достижение результата 6.5+" },
    ],
    liveDemoNote:
      "Идет набор на новый поток. Количество мест ограничено. Запишитесь на бесплатную диагностику и узнайте свой текущий уровень.",
  },
  pricing: {
    sectionTitle: "Программы IELTS в Language Vision",
    price: "от 1 200 000 сум / месяц",
    freelancerPrice: "2 000 000 сум",
    includedTitle: "Что входит в обучение",
    includedItems: [
      "IELTS Foundation (Pre-Intermediate -> Intermediate)",
      "IELTS Intensive (подготовка за 3-6 месяцев)",
      "Разбор Writing и Speaking с проверкой",
      "Домашние задания с обратной связью",
      "Еженедельные пробные тесты",
      "Индивидуальный план обучения",
      "Поддержка преподавателя",
      "Помощь с регистрацией на экзамен",
    ],
    cta: "Записаться на бесплатный пробный урок",
    trustItems: [
      "Мини-группы 4-6 студентов",
      "Локация: Буюк Ипак Йули, Ташкент",
      "Ограниченные места в группах",
    ],
  },
  registerForm: {
    sectionTitle: "Запишитесь на бесплатный пробный урок IELTS",
    sectionSubtitle: "Оставьте заявку - мы свяжемся с вами в Telegram в течение 5-10 минут.",
    nameLabel: "Имя",
    namePlaceholder: "Ваше имя и фамилия",
    contactLabel: "Телефон / Telegram",
    contactPlaceholder: "+998 90 926 24 26",
    submit: "Отправить заявку",
    submitting: "Отправка...",
    success: "Спасибо! Мы свяжемся с вами и подберем удобное время для диагностики.",
    nameRequired: "Введите имя",
    contactRequired: "Введите телефон или Telegram",
    sendError: "Не удалось отправить форму. Попробуйте еще раз позже.",
  },
  socialProof: {
    counters: [
      { value: 3, suffix: "-6", label: "месяцев до цели IELTS 6.5+" },
      { value: 4, suffix: "-6", label: "студентов в группе" },
      { value: 7, suffix: ".0+", label: "средний уровень преподавателей" },
    ],
    reviews: [
      {
        name: "Малика Т.",
        city: "Ташкент",
        text: "Начинала с уровня около 5.5. За 4 месяца подняла результат до 6.5. Особенно помогли разборы Writing и Speaking - стало понятно, как правильно отвечать.",
        initials: "МТ",
      },
      {
        name: "Рустам А.",
        city: "Ташкент",
        text: "Сын занимался в мини-группе 3 месяца. Было сложно со Speaking, но преподаватель дал четкую систему. В итоге получил 6.5 на экзамене.",
        initials: "РА",
      },
      {
        name: "Сабина Н.",
        city: "Ташкент",
        text: "До курса не понимала формат IELTS. После 3 месяцев занятий прошла через mock tests и разбор ошибок - сдала на 6.5 без стресса.",
        initials: "СН",
      },
    ],
  },
  faq: {
    sectionTitle: "Частые вопросы",
    sectionSubtitle: "Коротко о подготовке, формате обучения и результатах.",
    items: [
      {
        question: "За сколько месяцев реально выйти на IELTS 6.5+?",
        answer:
          "В среднем 3-6 месяцев при регулярных занятиях.",
      },
      {
        question: "Сколько студентов в группе?",
        answer:
          "4-6 человек.",
      },
      {
        question: "Подходит ли курс для подростков 14-18 лет?",
        answer:
          "Да, программа адаптирована.",
      },
      {
        question: "Кто ведет занятия?",
        answer:
          "Преподаватели с IELTS 7.0+.",
      },
      {
        question: "Есть ли пробный урок?",
        answer:
          "Да, бесплатный.",
      },
      {
        question: "Где находится учебный центр?",
        answer:
          "Ташкент, Буюк Ипак Йули.",
      },
      {
        question: "Как записаться?",
        answer:
          "Через форму или Telegram.",
      },
    ],
  },
  footer: {
    rights: "© 2026 Language Vision",
    telegramLabel: "Телефон / Telegram",
    languagesLabel: "Instagram",
  },
  header: {
    buyCta: "Записаться на урок",
  },
};

export const translations: Record<LanguageCode, TranslationSchema> = {
  ru: { ...emptyTranslation },
  en: {
    ...emptyTranslation,
    nav: {
      home: "Home",
      features: "Features",
      pricing: "Programs",
      contacts: "Contacts",
    },
    hero: {
      title: "Prepare for IELTS 6.5+ in 3-6 months",
      subtitle:
        "Language Vision in Tashkent - small groups of 4-6 students, experienced teachers with IELTS 7.0+, and a structured program with measurable weekly progress. New IELTS groups are now open, with limited spots available.",
      ctaDemo: "Book a free trial lesson",
      ctaBuy: "Message us on Telegram",
    },
    features: {
      sectionTitle: "Why students choose Language Vision",
      sectionSubtitle:
        "We prepare teens and university applicants for the real IELTS exam with a clear system.",
      cards: [
        {
          title: "Small groups (4-6 students)",
          description:
            "Each student gets personal attention, detailed feedback, and faster progress.",
        },
        {
          title: "Experienced IELTS teachers (7.0+)",
          description:
            "Learn from teachers who understand exam criteria and help you improve each section.",
        },
        {
          title: "Structured 3-6 month program",
          description:
            "Clear step-by-step plan from your current level to your target IELTS score.",
        },
        {
          title: "Regular mock tests",
          description:
            "Practice in real exam format and track your progress every week.",
        },
        {
          title: "Progress tracking & feedback",
          description:
            "You and your parents see real improvements after each stage.",
        },
        {
          title: "Student results",
          description:
            "Over 500+ students reached 6.5+ and successfully passed international exams.",
        },
      ],
    },
    preview: {
      sectionTitle: "How preparation works",
      sectionSubtitle:
        "A transparent learning system from your first lesson to exam day: you understand your starting level, improve skills step by step, and reach your target score.",
      screens: [
        { name: "Level diagnostics" },
        { name: "Structured learning" },
        { name: "Intensive practice" },
        { name: "Final result" },
      ],
      liveDemoNote: "Book a free trial lesson - takes 10-15 minutes",
    },
    pricing: {
      sectionTitle: "IELTS programs at Language Vision",
      price: "from 1,200,000 UZS / month",
      freelancerPrice: "2,000,000 UZS",
      includedTitle: "What is included in training",
      includedItems: [
        "IELTS Foundation (Pre-Intermediate -> Intermediate)",
        "IELTS Intensive (3-6 month preparation)",
        "Writing and Speaking review with feedback",
        "Homework with teacher feedback",
        "Weekly mock tests",
        "Individual study plan",
        "Teacher support",
        "Help with IELTS registration",
      ],
      cta: "Book a free trial lesson",
      trustItems: [
        "Small groups of 4-6 students",
        "Location: Buyuk Ipak Yuli, Tashkent",
        "Limited seats in each group",
      ],
    },
    registerForm: {
      sectionTitle: "Book your free IELTS trial lesson",
      sectionSubtitle:
        "Leave a request and we will contact you on Telegram within 5-10 minutes.",
      nameLabel: "Name",
      namePlaceholder: "Your full name",
      contactLabel: "Phone / Telegram",
      contactPlaceholder: "+998 90 926 24 26",
      submit: "Send request",
      submitting: "Sending...",
      success: "Thank you! We will contact you and schedule your diagnostics session.",
      nameRequired: "Please enter your name",
      contactRequired: "Please enter phone or Telegram",
      sendError: "Failed to send the form. Please try again later.",
    },
    socialProof: {
      counters: [
        { value: 3, suffix: "-6", label: "months to reach IELTS 6.5+" },
        { value: 4, suffix: "-6", label: "students per group" },
        { value: 7, suffix: ".0+", label: "average teacher level" },
      ],
      reviews: [
        {
          name: "Malika T.",
          city: "Tashkent",
          text: "I started at around 5.5. In 4 months I improved to 6.5. Writing and Speaking reviews helped me clearly understand how to answer correctly.",
          initials: "MT",
        },
        {
          name: "Rustam A.",
          city: "Tashkent",
          text: "My son studied in a small group for 3 months. Speaking was difficult at first, but the teacher gave him a clear system. He scored 6.5 on the exam.",
          initials: "RA",
        },
        {
          name: "Sabina N.",
          city: "Tashkent",
          text: "Before the course I did not understand the IELTS format. After 3 months with mock tests and error analysis, I scored 6.5 with confidence.",
          initials: "SN",
        },
      ],
    },
    faq: {
      sectionTitle: "Frequently asked questions",
      sectionSubtitle: "Quick answers about training format, progress, and results.",
      items: [
        {
          question: "How long does it take to reach IELTS 6.5+?",
          answer:
            "On average, 3-6 months with regular classes.",
        },
        {
          question: "How many students are in a group?",
          answer:
            "4-6 students.",
        },
        {
          question: "Is this suitable for teens aged 14-18?",
          answer:
            "Yes, the program is adapted.",
        },
        {
          question: "Who teaches the classes?",
          answer:
            "Teachers with IELTS 7.0+.",
        },
        {
          question: "Is there a trial lesson?",
          answer:
            "Yes, it is free.",
        },
        {
          question: "Where is the center located?",
          answer:
            "Tashkent, Buyuk Ipak Yuli.",
        },
        {
          question: "How can I apply?",
          answer:
            "Via the form or Telegram.",
        },
      ],
    },
    footer: {
      rights: "© 2026 Language Vision",
      telegramLabel: "Phone / Telegram",
      languagesLabel: "Instagram",
    },
    header: {
      buyCta: "Book a lesson",
    },
  },
  uz: {
    ...emptyTranslation,
    nav: {
      home: "Bosh sahifa",
      features: "Afzalliklar",
      pricing: "Dasturlar",
      contacts: "Kontaktlar",
    },
    hero: {
      title: "IELTS 6.5+ ga 3-6 oyda tayyorlaning",
      subtitle:
        "Toshkentdagi Language Vision - 4-6 kishilik mini-guruhlar, IELTS 7.0+ darajadagi ustozlar va har hafta o'lchanadigan progress beradigan strukturali dastur. Yangi IELTS oqimiga qabul ochiq, joylar soni cheklangan.",
      ctaDemo: "Bepul sinov darsiga yozilish",
      ctaBuy: "Telegramga yozish",
    },
    features: {
      sectionTitle: "Nega Language Vision tanlanadi",
      sectionSubtitle:
        "Biz o'smirlar va talabalarga IELTS imtihoniga tizimli va amaliy yondashuv bilan tayyorlaymiz.",
      cards: [
        {
          title: "Mini-guruhlar (4-6 talaba)",
          description:
            "Har bir talaba individual e'tibor, batafsil fikr-mulohaza va tezroq progress oladi.",
        },
        {
          title: "Tajribali IELTS ustozlari (7.0+)",
          description:
            "Imtihon mezonlarini biladigan ustozlar har bir bo'lim bo'yicha natijani yaxshilashga yordam beradi.",
        },
        {
          title: "Strukturali 3-6 oylik dastur",
          description:
            "Hozirgi darajadan maqsadli IELTS baligacha aniq bosqichma-bosqich reja.",
        },
        {
          title: "Doimiy mock testlar",
          description:
            "Har hafta real imtihon formatida amaliyot va progressni muntazam kuzatish.",
        },
        {
          title: "Progress hisobotlari",
          description:
            "Siz va ota-onalar har bir bosqichdan keyin real o'sish va sust zonalarni ko'radi.",
        },
        {
          title: "Talabalar natijalari",
          description: "500+ talaba tayyorlovdan o'tib, 6.5+ natija bilan xalqaro imtihonlardan muvaffaqiyatli o'tgan.",
        },
      ],
    },
    preview: {
      sectionTitle: "Tayyorlov jarayoni qanday o'tadi",
      sectionSubtitle:
        "Birinchi darsdan imtihongacha bo'lgan shaffof tizim: start darajangizni aniq bilasiz, ko'nikmalarni bosqichma-bosqich kuchaytirasiz va maqsadli ballga chiqasiz.",
      screens: [
        { name: "Level diagnostika" },
        { name: "Tizimli ta'lim" },
        { name: "Intensiv amaliyot" },
        { name: "Yakuniy natija" },
      ],
      liveDemoNote: "Bepul sinov darsiga yoziling - 10-15 daqiqa vaqt oladi",
    },
    pricing: {
      sectionTitle: "Language Vision IELTS dasturlari",
      price: "1 200 000 so'mdan / oyiga",
      freelancerPrice: "2 000 000 so'm",
      includedTitle: "Ta'lim paketiga nimalar kiradi",
      includedItems: [
        "IELTS Foundation (Pre-Intermediate -> Intermediate)",
        "IELTS Intensive (3-6 oyda tayyorlov)",
        "Writing va Speaking bo'yicha tekshiruv",
        "Feedback bilan uy vazifalari",
        "Haftalik mock testlar",
        "Individual o'quv rejasi",
        "Ustoz yordami",
        "Imtihonga ro'yxatdan o'tishda yordam",
      ],
      cta: "Bepul sinov darsiga yozilish",
      trustItems: [
        "4-6 kishilik mini-guruhlar",
        "Lokatsiya: Buyuk Ipak Yuli, Tashkent",
        "Guruhlarda joylar cheklangan",
      ],
    },
    registerForm: {
      sectionTitle: "IELTS bo'yicha bepul sinov darsiga yoziling",
      sectionSubtitle:
        "Ariza qoldiring - biz 5-10 daqiqa ichida Telegram orqali bog'lanamiz.",
      nameLabel: "Ism",
      namePlaceholder: "Ism va familiyangiz",
      contactLabel: "Telefon / Telegram",
      contactPlaceholder: "+998 90 926 24 26",
      submit: "So'rov yuborish",
      submitting: "Yuborilmoqda...",
      success: "Rahmat! Siz bilan bog'lanib, diagnostika vaqtini kelishamiz.",
      nameRequired: "Ismingizni kiriting",
      contactRequired: "Telefon yoki Telegram kiriting",
      sendError: "Forma yuborilmadi. Keyinroq qayta urinib ko'ring.",
    },
    socialProof: {
      counters: [
        { value: 3, suffix: "-6", label: "oyda IELTS 6.5+ maqsadiga chiqish" },
        { value: 4, suffix: "-6", label: "har bir guruhda o'quvchi soni" },
        { value: 7, suffix: ".0+", label: "ustozlarning o'rtacha darajasi" },
      ],
      reviews: [
        {
          name: "Malika T.",
          city: "Toshkent",
          text: "Boshlanishida darajam taxminan 5.5 edi. 4 oyda natijamni 6.5 ga ko'tardim. Writing va Speaking tahlillari to'g'ri javob berishni aniq tushuntirdi.",
          initials: "MT",
        },
        {
          name: "Rustam A.",
          city: "Toshkent",
          text: "O'g'lim mini-guruhda 3 oy o'qidi. Speaking qismi qiyin edi, lekin ustoz aniq tizim berdi. Yakunda imtihonda 6.5 oldi.",
          initials: "RA",
        },
        {
          name: "Sabina N.",
          city: "Toshkent",
          text: "Kursdan oldin IELTS formatini tushunmasdim. 3 oylik dars, mock testlar va xatolar tahlilidan keyin 6.5 olib, o'zimga ishonch bilan topshirdim.",
          initials: "SN",
        },
      ],
    },
    faq: {
      sectionTitle: "Ko'p beriladigan savollar",
      sectionSubtitle: "Tayyorlov formati, natija va o'qish jarayoni haqida qisqa javoblar.",
      items: [
        {
          question: "IELTS 6.5+ natijaga necha oyda chiqsa bo'ladi?",
          answer:
            "O'rtacha 3-6 oy, agar darslar muntazam bo'lsa.",
        },
        {
          question: "Guruhda nechta o'quvchi bo'ladi?",
          answer:
            "4-6 nafar.",
        },
        {
          question: "Kurs 14-18 yoshdagilar uchun mosmi?",
          answer:
            "Ha, dastur moslashtirilgan.",
        },
        {
          question: "Darslarni kim olib boradi?",
          answer:
            "IELTS 7.0+ darajadagi ustozlar.",
        },
        {
          question: "Sinov darsi bormi?",
          answer:
            "Ha, bepul.",
        },
        {
          question: "O'quv markazi qayerda joylashgan?",
          answer:
            "Toshkent, Buyuk Ipak Yuli.",
        },
        {
          question: "Qanday yozilaman?",
          answer:
            "Forma yoki Telegram orqali.",
        },
      ],
    },
    footer: {
      rights: "© 2026 Language Vision",
      telegramLabel: "Telefon / Telegram",
      languagesLabel: "Instagram",
    },
    header: {
      buyCta: "Darsga yozilish",
    },
  },
};
