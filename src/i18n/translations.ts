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
    cards: Array<{ title: string; description: string }>;
  };
  preview: {
    sectionTitle: string;
    sectionSubtitle: string;
    screens: Array<{ name: string }>;
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
    sendErrorTelegram: string;
    sendErrorNetwork: string;
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
      "Language Vision в Ташкенте — мини-группы 4–6 человек, преподаватели с IELTS 7.0+ и структурированная программа с измеримым прогрессом каждую неделю. Идёт набор в новый IELTS поток, количество мест ограничено.",
    ctaDemo: "Записаться на бесплатный пробный урок",
    ctaBuy: "Написать в Telegram",
  },
  features: {
    sectionTitle: "Почему выбирают Language Vision",
    sectionSubtitle:
      "Мы готовим подростков и студентов к реальному экзамену по понятной системе.",
    cards: [
      {
        title: "Мини-группы (4–6 студентов)",
        description:
          "Каждый студент получает персональное внимание, подробный фидбек и более быстрый прогресс.",
      },
      {
        title: "Опытные преподаватели IELTS (7.0+)",
        description:
          "Вы учитесь у преподавателей, которые знают критерии экзамена и усиливают каждый модуль.",
      },
      {
        title: "Структурированная программа 3–6 месяцев",
        description: "Понятный пошаговый план от текущего уровня до целевого балла IELTS.",
      },
      {
        title: "Регулярные mock tests",
        description:
          "Еженедельная практика в формате экзамена и отслеживание прогресса каждую неделю.",
      },
      {
        title: "Разбор Writing и Speaking",
        description: "Чёткие критерии, шаблоны ответов и персональные рекомендации по улучшению.",
      },
      {
        title: "Поддержка до экзамена",
        description: "Помогаем с регистрацией IELTS и доводим до уверенного результата.",
      },
    ],
  },
  preview: {
    sectionTitle: "Как проходит подготовка",
    sectionSubtitle:
      "От диагностики до экзамена — прозрачный маршрут: вы знаете свой уровень, шаги роста и целевой балл.",
    screens: [
      { name: "Диагностика уровня" },
      { name: "Системные занятия" },
      { name: "Интенсивная практика" },
      { name: "Итоговый результат" },
    ],
    liveDemoNote: "Бесплатный пробный урок — 10–15 минут",
  },
  pricing: {
    sectionTitle: "Программы IELTS в Language Vision",
    price: "от 1 200 000 сум / месяц",
    freelancerPrice: "2 000 000 сум",
    includedTitle: "Что входит в обучение",
    includedItems: [
      "IELTS Foundation (Pre-Intermediate → Intermediate)",
      "IELTS Intensive (подготовка 3–6 месяцев)",
      "Разбор Writing и Speaking с фидбеком",
      "Домашние задания с проверкой преподавателя",
      "Еженедельные mock tests",
      "Индивидуальный план занятий",
      "Сопровождение от преподавателя",
      "Помощь с регистрацией на IELTS",
    ],
    cta: "Записаться на бесплатный пробный урок",
    trustItems: [
      "Мини-группы 4–6 человек",
      "Ташкент, Буюк Ипак Йули",
      "Ограниченное число мест в потоке",
    ],
  },
  registerForm: {
    sectionTitle: "Запишитесь на бесплатный пробный урок IELTS",
    sectionSubtitle:
      "Оставьте заявку — мы свяжемся с вами в Telegram в течение 5–10 минут.",
    nameLabel: "Имя",
    namePlaceholder: "Ваше имя и фамилия",
    contactLabel: "Телефон / Telegram",
    contactPlaceholder: "+998 90 926 24 26",
    submit: "Отправить заявку",
    submitting: "Отправка...",
    success: "Спасибо! Мы свяжемся с вами и подберём удобное время для диагностики.",
    nameRequired: "Введите имя",
    contactRequired: "Введите телефон или Telegram",
    sendError: "Не удалось отправить форму. Попробуйте ещё раз позже.",
    sendErrorTelegram:
      "Сервис уведомлений временно недоступен. Попробуйте через минуту или напишите нам в Telegram.",
    sendErrorNetwork:
      "Не удалось связаться с сервером. Проверьте интернет и попробуйте снова.",
  },
  socialProof: {
    counters: [
      { value: 3, suffix: "–6", label: "месяцев до цели IELTS 6.5+" },
      { value: 4, suffix: "–6", label: "студентов в группе" },
      { value: 7, suffix: ".0+", label: "средний уровень преподавателей" },
    ],
    reviews: [
      {
        name: "Малика Т.",
        city: "Ташкент",
        text: "Начинала с уровня около 5.5. За 4 месяца подняла результат до 6.5. Особенно помогли разборы Writing и Speaking.",
        initials: "МТ",
      },
      {
        name: "Рустам А.",
        city: "Ташкент",
        text: "Сын занимался в мини-группе 3 месяца. Speaking был сложным, но преподаватель дал чёткую систему — в итоге 6.5.",
        initials: "РА",
      },
      {
        name: "Сабина Н.",
        city: "Ташкент",
        text: "До курса не понимала формат IELTS. После 3 месяцев и mock tests сдала на 6.5 без лишнего стресса.",
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
        answer: "В среднем 3–6 месяцев при регулярных занятиях и выполнении заданий.",
      },
      {
        question: "Сколько студентов в группе?",
        answer: "4–6 человек — чтобы преподаватель успевал каждому.",
      },
      {
        question: "Подходит ли курс для подростков 14–18 лет?",
        answer: "Да, программа адаптирована под школьников и студентов.",
      },
      {
        question: "Кто ведёт занятия?",
        answer: "Преподаватели с подтверждённым IELTS 7.0+.",
      },
      {
        question: "Есть ли пробный урок?",
        answer: "Да, первый пробный урок бесплатный.",
      },
      {
        question: "Где находится центр?",
        answer: "Ташкент, Буюк Ипак Йули.",
      },
      {
        question: "Как записаться?",
        answer: "Через форму на сайте или в Telegram.",
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
      title: "Prepare for IELTS 6.5+ in 3–6 months",
      subtitle:
        "Language Vision in Tashkent — small groups of 4–6 students, teachers with IELTS 7.0+, and a structured program with measurable weekly progress. New IELTS groups are open with limited seats.",
      ctaDemo: "Book a free trial lesson",
      ctaBuy: "Message us on Telegram",
    },
    features: {
      sectionTitle: "Why students choose Language Vision",
      sectionSubtitle:
        "We prepare teens and students for the real exam with a clear, repeatable system.",
      cards: [
        {
          title: "Small groups (4–6 students)",
          description:
            "Everyone gets attention, detailed feedback, and faster progress.",
        },
        {
          title: "Experienced IELTS teachers (7.0+)",
          description: "Teachers who know the scoring criteria and strengthen every module.",
        },
        {
          title: "Structured 3–6 month track",
          description: "A step-by-step path from your current level to your target IELTS score.",
        },
        {
          title: "Regular mock tests",
          description: "Weekly exam-format practice and visible progress tracking.",
        },
        {
          title: "Writing & Speaking breakdowns",
          description: "Clear criteria, answer frameworks, and personal improvement tips.",
        },
        {
          title: "Support until exam day",
          description: "Help with IELTS registration and steady prep to exam confidence.",
        },
      ],
    },
    preview: {
      sectionTitle: "How preparation works",
      sectionSubtitle:
        "From diagnostics to exam day — a transparent route: you know your level, growth steps, and target score.",
      screens: [
        { name: "Level diagnostics" },
        { name: "Structured lessons" },
        { name: "Intensive practice" },
        { name: "Final outcome" },
      ],
      liveDemoNote: "Free trial lesson — 10–15 minutes",
    },
    pricing: {
      sectionTitle: "IELTS programs at Language Vision",
      price: "from 1,200,000 UZS / month",
      freelancerPrice: "2,000,000 UZS",
      includedTitle: "What is included",
      includedItems: [
        "IELTS Foundation (Pre-Intermediate → Intermediate)",
        "IELTS Intensive (3–6 month preparation)",
        "Writing & Speaking review with feedback",
        "Homework with teacher feedback",
        "Weekly mock tests",
        "Individual study plan",
        "Teacher support",
        "Help with IELTS registration",
      ],
      cta: "Book a free trial lesson",
      trustItems: [
        "Groups of 4–6 students",
        "Buyuk Ipak Yuli, Tashkent",
        "Limited seats per intake",
      ],
    },
    registerForm: {
      sectionTitle: "Book your free IELTS trial lesson",
      sectionSubtitle:
        "Leave a request — we will contact you on Telegram within 5–10 minutes.",
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
      sendErrorTelegram:
        "Notifications are temporarily unavailable. Try again in a minute or message us on Telegram.",
      sendErrorNetwork: "Could not reach the server. Check your connection and try again.",
    },
    socialProof: {
      counters: [
        { value: 3, suffix: "–6", label: "months to reach IELTS 6.5+" },
        { value: 4, suffix: "–6", label: "students per group" },
        { value: 7, suffix: ".0+", label: "average teacher level" },
      ],
      reviews: [
        {
          name: "Malika T.",
          city: "Tashkent",
          text: "I started around 5.5. In 4 months I reached 6.5. Writing and Speaking reviews helped the most.",
          initials: "MT",
        },
        {
          name: "Rustam A.",
          city: "Tashkent",
          text: "My son studied in a small group for 3 months. Speaking was hard at first, then he scored 6.5.",
          initials: "RA",
        },
        {
          name: "Sabina N.",
          city: "Tashkent",
          text: "I did not understand the IELTS format before. After 3 months and mocks I scored 6.5 with confidence.",
          initials: "SN",
        },
      ],
    },
    faq: {
      sectionTitle: "Frequently asked questions",
      sectionSubtitle: "Short answers about format, progress, and results.",
      items: [
        {
          question: "How long does it take to reach IELTS 6.5+?",
          answer: "On average 3–6 months with regular classes and homework.",
        },
        {
          question: "How many students are in a group?",
          answer: "4–6 students so the teacher can support everyone.",
        },
        {
          question: "Is it suitable for teens aged 14–18?",
          answer: "Yes, the program is adapted for school and college students.",
        },
        {
          question: "Who teaches the classes?",
          answer: "Teachers with IELTS 7.0+.",
        },
        {
          question: "Is there a trial lesson?",
          answer: "Yes, the first trial lesson is free.",
        },
        {
          question: "Where is the center?",
          answer: "Tashkent, Buyuk Ipak Yuli.",
        },
        {
          question: "How do I apply?",
          answer: "Via the form on the website or Telegram.",
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
      title: "IELTS 6.5+ uchun 3–6 oyda tayyorlanamiz",
      subtitle:
        "Language Vision, Toshkent — 4–6 kishilik mini-guruhlar, IELTS 7.0+ darajadagi ustozlar va har hafta o‘lchanadigan progress. Yangi IELTS oqimi uchun yozilish ochiq, joylar cheklangan.",
      ctaDemo: "Bepul sinov darsiga yozilish",
      ctaBuy: "Telegramda yozish",
    },
    features: {
      sectionTitle: "Nima uchun Language Vision tanlanadi",
      sectionSubtitle:
        "Biz o‘smirlar va talabalarni haqiqiy imtihonga aniq tizim bilan tayyorlaymiz.",
      cards: [
        {
          title: "Mini-guruhlar (4–6 talaba)",
          description:
            "Har bir talaba e’tibor, batafsil fikr-mulohaza va tezroq progress oladi.",
        },
        {
          title: "IELTS tajribali ustozlar (7.0+)",
          description:
            "Baholash mezonlarini biladigan va har bir modulni kuchaytiradigan ustozlar.",
        },
        {
          title: "3–6 oylik tuzilgan dastur",
          description: "Joriy darajadan maqsadli IELTS balligacha tushunarli yo‘l xaritasi.",
        },
        {
          title: "Muntazam mock testlar",
          description: "Har hafta imtihon formatida mashq va progressni kuzatish.",
        },
        {
          title: "Writing va Speaking tahlili",
          description: "Aniq mezonlar, javob sxemasi va shaxsiy yaxshilash tavsiyalari.",
        },
        {
          title: "Imtihongacha qo‘llab-quvvatlash",
          description: "IELTS ro‘yxatdan o‘tishda yordam va barqaror tayyorgarlik.",
        },
      ],
    },
    preview: {
      sectionTitle: "Tayyorgarlik qanday kechadi",
      sectionSubtitle:
        "Diagnostikadan imtihongacha — shaffof yo‘l: darajangiz, o‘sish bosqichlari va maqsad ball aniq.",
      screens: [
        { name: "Darajani aniqlash" },
        { name: "Tizimli darslar" },
        { name: "Intensiv mashq" },
        { name: "Yakuniy natija" },
      ],
      liveDemoNote: "Bepul sinov darsi — 10–15 daqiqa",
    },
    pricing: {
      sectionTitle: "Language Vision IELTS dasturlari",
      price: "oyiga 1 200 000 so‘mdan",
      freelancerPrice: "2 000 000 so‘m",
      includedTitle: "O‘quv nimalarni o‘z ichiga oladi",
      includedItems: [
        "IELTS Foundation (Pre-Intermediate → Intermediate)",
        "IELTS Intensive (3–6 oy tayyorlov)",
        "Writing va Speaking bo‘yicha tahlil va fikr-mulohaza",
        "Uy vazifalari va ustoz tekshiruvi",
        "Har haftalik mock testlar",
        "Shaxsiy o‘qish rejasi",
        "Ustoz bilan qo‘llab-quvvatlash",
        "IELTSga ro‘yxatdan o‘tishda yordam",
      ],
      cta: "Bepul sinov darsiga yozilish",
      trustItems: [
        "4–6 kishilik mini-guruhlar",
        "Toshkent, Buyuk Ipak Yuli",
        "Har bir oqimda joylar cheklangan",
      ],
    },
    registerForm: {
      sectionTitle: "IELTS bo‘yicha bepul sinov darsiga yoziling",
      sectionSubtitle:
        "Ariza qoldiring — biz 5–10 daqiqa ichida Telegram orqali bog‘lanamiz.",
      nameLabel: "Ism",
      namePlaceholder: "Ism va familiyangiz",
      contactLabel: "Telefon / Telegram",
      contactPlaceholder: "+998 90 926 24 26",
      submit: "So‘rov yuborish",
      submitting: "Yuborilmoqda...",
      success: "Rahmat! Siz bilan bog‘lanib, diagnostika vaqtini kelishamiz.",
      nameRequired: "Ismingizni kiriting",
      contactRequired: "Telefon yoki Telegram kiriting",
      sendError: "Forma yuborilmadi. Keyinroq qayta urinib ko‘ring.",
      sendErrorTelegram:
        "Bildirishnomalar vaqtincha ishlamayapti. Bir daqiqadan keyin qayta urinib ko‘ring yoki Telegram orqali yozing.",
      sendErrorNetwork:
        "Server bilan aloqa o‘rnatilmadi. Internetni tekshiring va qayta urinib ko‘ring.",
    },
    socialProof: {
      counters: [
        { value: 3, suffix: "–6", label: "oyda IELTS 6.5+ maqsadiga chiqish" },
        { value: 4, suffix: "–6", label: "har bir guruhda talabalar soni" },
        { value: 7, suffix: ".0+", label: "ustozlarning o‘rtacha darajasi" },
      ],
      reviews: [
        {
          name: "Malika T.",
          city: "Toshkent",
          text: "Boshida darajam taxminan 5.5 edi. 4 oyda 6.5 ga chiqdim. Writing va Speaking tahlillari juda yordam berdi.",
          initials: "MT",
        },
        {
          name: "Rustam A.",
          city: "Toshkent",
          text: "O‘g‘lim mini-guruhda 3 oy o‘qidi. Speaking qiyin edi, keyin 6.5 oldi.",
          initials: "RA",
        },
        {
          name: "Sabina N.",
          city: "Toshkent",
          text: "Kursdan oldin IELTS formatini tushunmasdim. 3 oy va mock testlardan keyin 6.5 oldim.",
          initials: "SN",
        },
      ],
    },
    faq: {
      sectionTitle: "Ko‘p beriladigan savollar",
      sectionSubtitle: "Tayyorlov, format va natija haqida qisqa javoblar.",
      items: [
        {
          question: "IELTS 6.5+ uchun odatda necha kerak?",
          answer: "Odatda 3–6 oy — muntazam dars va uy vazifalari bilan.",
        },
        {
          question: "Guruhda nechta talaba bo‘ladi?",
          answer: "4–6 nafar — ustoz hamma bilan yetarli ishlay olishi uchun.",
        },
        {
          question: "14–18 yoshdagilar uchun mosmi?",
          answer: "Ha, dastur maktab va talabalar uchun moslashtirilgan.",
        },
        {
          question: "Darslarni kim olib boradi?",
          answer: "IELTS 7.0+ darajasini tasdiqlagan ustozlar.",
        },
        {
          question: "Sinov darsi bormi?",
          answer: "Ha, birinchi sinov darsi bepul.",
        },
        {
          question: "Markaz qayerda?",
          answer: "Toshkent, Buyuk Ipak Yuli.",
        },
        {
          question: "Qanday yozilaman?",
          answer: "Saytdagi forma yoki Telegram orqali.",
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
