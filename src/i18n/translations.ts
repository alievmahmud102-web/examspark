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
    home: "",
    features: "",
    pricing: "",
    contacts: "",
  },
  hero: {
    title: "Готовый сайт для учебного центра - за 1 день",
    subtitle:
      "Запустите продажи курсов ЕГЭ/ОГЭ/ЦТ без долгой разработки: шаблон экономит недели времени и сотни долларов бюджета.",
    ctaDemo: "Смотреть демо",
    ctaBuy: "Купить за $300",
  },
  features: {
    sectionTitle: "Что уже встроено в шаблон",
    sectionSubtitle:
      "Все ключевые блоки для продаж, доверия и заявок уже готовы к запуску.",
    cards: [
      {
        title: "Квиз подбора курса",
        description: "Интерактивный квиз с логикой на JS для подбора программы.",
      },
      {
        title: "Результаты учеников",
        description: "Кейсы с баллами до/после, чтобы сразу показывать прогресс.",
      },
      {
        title: "Актуальное расписание",
        description: "Удобный блок занятий с фильтром по предмету и формату.",
      },
      {
        title: 'Sticky-кнопка "Записаться на пробный урок"',
        description:
          "Постоянный CTA на экране повышает конверсию в обращения.",
      },
      {
        title: "Отзывы с результатами",
        description: "Карточки с именем, предметом и достигнутым баллом.",
      },
      {
        title: "3 языка из коробки",
        description: "RU / EN / UZ уже подключены и готовы к наполнению.",
      },
    ],
  },
  preview: {
    sectionTitle: "Интерактивное превью шаблона",
    sectionSubtitle: "Кликните по экрану слева и посмотрите, как выглядит сайт изнутри.",
    screens: [
      { name: "Главная" },
      { name: "Квиз" },
      { name: "Расписание" },
      { name: "Отзывы" },
    ],
    liveDemoNote: "Это живое демо - не скриншот",
  },
  pricing: {
    sectionTitle: "Цена, которая окупается после первых заявок",
    price: "$300",
    freelancerPrice: "$900",
    includedTitle: "Что входит в шаблон",
    includedItems: [
      "Полный исходный код на Next.js + Tailwind",
      "Локализация RU / EN / UZ из коробки",
      "Квиз подбора курса с логикой на JS",
      "Блок результатов учеников до/после",
      "Расписание занятий с фильтрами",
      'Sticky-кнопка "Записаться на пробный урок"',
      "Секция отзывов с предметом и результатом",
      "Документация по установке и запуску",
      "Бесплатные правки в течение 7 дней",
      "Помощь с базовой настройкой проекта",
    ],
    cta: "Хочу этот шаблон",
    trustItems: [
      "Отвечу в течение 2 часов",
      "Оплата после просмотра демо",
      "Поддержка в Telegram",
    ],
  },
  registerForm: {
    sectionTitle: "Оставьте контакты - и я покажу демо",
    sectionSubtitle: "Заполните форму, чтобы забрать шаблон за $300.",
    nameLabel: "Имя",
    namePlaceholder: "Ваше имя",
    contactLabel: "Телефон или Telegram",
    contactPlaceholder: "@username или +998...",
    submit: "Хочу купить - свяжитесь со мной",
    submitting: "Отправляю...",
    success: "Отлично! Напишу вам в течение 2 часов",
    nameRequired: "Введите имя",
    contactRequired: "Введите телефон или Telegram",
    sendError: "Не удалось отправить форму. Попробуйте еще раз.",
  },
  socialProof: {
    counters: [
      { value: 1, suffix: " шаблон", label: "уже в продаже" },
      { value: 300, suffix: "$", label: "вместо 900$ у фрилансера" },
      { value: 1, suffix: " день", label: "до запуска сайта" },
    ],
    reviews: [
      {
        name: "Александр М.",
        city: "Алматы",
        text: "Запустили сайт за выходные и уже в понедельник получили первые заявки на пробные уроки.",
        initials: "АМ",
      },
      {
        name: "Динара К.",
        city: "Ташкент",
        text: "Сэкономили бюджет на разработке и быстро заполнили контент. Всё работает стабильно и выглядит современно.",
        initials: "ДК",
      },
      {
        name: "Илья П.",
        city: "Минск",
        text: "Подключили Telegram и форму за один день. Родители сразу начали писать после запуска.",
        initials: "ИП",
      },
    ],
  },
  faq: {
    sectionTitle: "Частые вопросы",
    sectionSubtitle: "Коротко о запуске, оплате и поддержке шаблона.",
    items: [
      {
        question: "Что мне нужно уметь чтобы запустить сайт?",
        answer:
          "Базовых навыков работы с компьютером достаточно. Дам пошаговую инструкцию по запуску и помогу на старте.",
      },
      {
        question: "Могу ли я изменить цвета и тексты под свой центр?",
        answer:
          "Да, легко. Все блоки и стили редактируются, вы можете адаптировать дизайн и контент под свой бренд.",
      },
      {
        question: "Как происходит оплата?",
        answer:
          "Сначала показываю демо и отвечаю на вопросы, после этого согласовываем оплату и передаю проект.",
      },
      {
        question: "Что если шаблон мне не подойдёт?",
        answer:
          "Перед оплатой вы видите демо и структуру целиком, поэтому решение принимаете только после просмотра.",
      },
      {
        question: "Поддерживает ли шаблон мобильные устройства?",
        answer:
          "Да, шаблон полностью адаптивный: корректно работает на телефонах, планшетах и десктопах.",
      },
      {
        question: "Могу ли я использовать шаблон для нескольких центров?",
        answer:
          "Да, можно использовать как основу для нескольких проектов, адаптируя тексты и контакты под каждый центр.",
      },
      {
        question: "Как быстро я получу файлы после оплаты?",
        answer:
          "Обычно в течение 1-2 часов после подтверждения оплаты отправляю архив и инструкцию по запуску.",
      },
    ],
  },
  footer: {
    rights: "ExamSpark Template. Все права защищены.",
    telegramLabel: "Telegram",
    languagesLabel: "Языки",
  },
  header: {
    buyCta: "Купить $300",
  },
};

export const translations: Record<LanguageCode, TranslationSchema> = {
  ru: { ...emptyTranslation },
  en: {
    ...emptyTranslation,
    hero: {
      title: "Ready-made website for an education center - in 1 day",
      subtitle:
        "Launch your SAT/entry prep offers fast: this template saves weeks of build time and hundreds of dollars in development costs.",
      ctaDemo: "View demo",
      ctaBuy: "Buy for $300",
    },
    features: {
      sectionTitle: "What is already included",
      sectionSubtitle:
        "Every key block for sales, trust, and lead capture is ready to launch.",
      cards: [
        {
          title: "Course matching quiz",
          description:
            "Interactive JS-powered quiz that suggests the right program.",
        },
        {
          title: "Student results block",
          description:
            "Before/after score cases that instantly prove real progress.",
        },
        {
          title: "Live schedule with filters",
          description:
            "Up-to-date lessons section with subject and format filtering.",
        },
        {
          title: 'Sticky "Book a trial lesson" button',
          description:
            "Persistent CTA on screen increases conversions into inquiries.",
        },
        {
          title: "Testimonials with outcomes",
          description:
            "Review cards with student name, subject, and achieved score.",
        },
        {
          title: "3 languages out of the box",
          description:
            "RU / EN / UZ localization is pre-wired and ready for content.",
        },
      ],
    },
    preview: {
      sectionTitle: "Interactive template preview",
      sectionSubtitle: "Click a screen on the left to see how the site looks inside.",
      screens: [
        { name: "Home" },
        { name: "Quiz" },
        { name: "Schedule" },
        { name: "Reviews" },
      ],
      liveDemoNote: "This is a live demo - not a screenshot",
    },
    pricing: {
      sectionTitle: "A price that pays off after first leads",
      price: "$300",
      freelancerPrice: "$900",
      includedTitle: "What is included",
      includedItems: [
        "Full source code on Next.js + Tailwind",
        "Built-in RU / EN / UZ localization",
        "Course selection quiz with JS logic",
        "Student results block with before/after",
        "Schedule section with filtering",
        'Sticky "Book a trial lesson" button',
        "Testimonials with subject and score",
        "Installation and launch documentation",
        "Free edits during first 7 days",
        "Help with basic project setup",
      ],
      cta: "I want this template",
      trustItems: [
        "Reply within 2 hours",
        "Payment after demo review",
        "Telegram support",
      ],
    },
    registerForm: {
      sectionTitle: "Leave your contacts - I will show the demo",
      sectionSubtitle: "Fill out the form to get the template for $300.",
      nameLabel: "Name",
      namePlaceholder: "Your name",
      contactLabel: "Phone or Telegram",
      contactPlaceholder: "@username or +1...",
      submit: "I want to buy - contact me",
      submitting: "Sending...",
      success: "Great! I will text you within 2 hours",
      nameRequired: "Please enter your name",
      contactRequired: "Please enter phone or Telegram",
      sendError: "Failed to send the form. Please try again.",
    },
    socialProof: {
      counters: [
        { value: 1, suffix: " template", label: "already on sale" },
        { value: 300, suffix: "$", label: "instead of $900 freelancer cost" },
        { value: 1, suffix: " day", label: "to launch the site" },
      ],
      reviews: [
        {
          name: "Alexander M.",
          city: "Almaty",
          text: "We launched over one weekend and got our first trial lesson leads by Monday.",
          initials: "AM",
        },
        {
          name: "Dinara K.",
          city: "Tashkent",
          text: "We saved the dev budget and filled content quickly. Everything runs smoothly and looks modern.",
          initials: "DK",
        },
        {
          name: "Ilya P.",
          city: "Minsk",
          text: "Connected Telegram and the form in one day. Parents started messaging right after launch.",
          initials: "IP",
        },
      ],
    },
    faq: {
      sectionTitle: "Frequently asked questions",
      sectionSubtitle: "Quick answers about launch, payment, and support.",
      items: [
        {
          question: "What do I need to know to launch the site?",
          answer:
            "Basic computer skills are enough. I provide step-by-step launch docs and help you at the start.",
        },
        {
          question: "Can I change colors and texts for my center?",
          answer:
            "Yes. All sections and styles are editable, so you can adapt the look and copy to your brand.",
        },
        {
          question: "How does payment work?",
          answer:
            "First I show the demo and answer your questions, then we confirm payment and I transfer the project files.",
        },
        {
          question: "What if the template does not fit me?",
          answer:
            "You review the full demo and structure before payment, so you decide only after seeing everything.",
        },
        {
          question: "Does the template support mobile devices?",
          answer:
            "Yes, it is fully responsive and works correctly on phones, tablets, and desktop screens.",
        },
        {
          question: "Can I use this template for multiple centers?",
          answer:
            "Yes, you can reuse it for several projects and customize copy and contacts for each center.",
        },
        {
          question: "How fast will I get files after payment?",
          answer:
            "Usually within 1-2 hours after payment confirmation I send the archive and launch guide.",
        },
      ],
    },
    footer: {
      rights: "ExamSpark Template. All rights reserved.",
      telegramLabel: "Telegram",
      languagesLabel: "Languages",
    },
    header: {
      buyCta: "Buy $300",
    },
  },
  uz: {
    ...emptyTranslation,
    hero: {
      title: "O'quv markazi uchun tayyor sayt - 1 kunda",
      subtitle:
        "EGE/OGE/CT bo'yicha kurslarni tez sotishni boshlang: bu shablon haftalab vaqt va yuzlab dollar byudjetni tejaydi.",
      ctaDemo: "Demo ko'rish",
      ctaBuy: "$300 ga sotib olish",
    },
    features: {
      sectionTitle: "Shablonda allaqachon mavjud",
      sectionSubtitle:
        "Sotuv, ishonch va murojaatlar uchun asosiy bloklar ishga tayyor.",
      cards: [
        {
          title: "Kurs tanlash kvizi",
          description:
            "JS mantiqi bilan interaktiv kviz mos dasturni tavsiya qiladi.",
        },
        {
          title: "O'quvchi natijalari bloki",
          description:
            "Oldin/keyin ballar bilan кейслар real o'sishni ko'rsatadi.",
        },
        {
          title: "Filtrli dolzarb jadval",
          description:
            "Fan va format bo'yicha filtrlash bilan qulay dars jadvali.",
        },
        {
          title: 'Sticky "Sinov darsiga yozilish" tugmasi',
          description:
            "Ekranda doimiy CTA murojaatlar konversiyasini oshiradi.",
        },
        {
          title: "Natijali sharhlar bloki",
          description:
            "Ism, fan va erishilgan ball ko'rsatilgan sharh kartalari.",
        },
        {
          title: "3 til tayyor holatda",
          description: "RU / EN / UZ lokalizatsiyasi oldindan ulangan.",
        },
      ],
    },
    preview: {
      sectionTitle: "Shablonning interaktiv preview qismi",
      sectionSubtitle:
        "Chapdagi ekranlardan birini tanlang va sayt ichki ko'rinishini ko'ring.",
      screens: [
        { name: "Bosh sahifa" },
        { name: "Kviz" },
        { name: "Jadval" },
        { name: "Sharhlar" },
      ],
      liveDemoNote: "Bu jonli demo - skrinshot emas",
    },
    pricing: {
      sectionTitle: "Birinchi murojaatlardan keyin o'zini oqlaydigan narx",
      price: "$300",
      freelancerPrice: "$900",
      includedTitle: "Shablonga nimalar kiradi",
      includedItems: [
        "Next.js + Tailwind asosidagi to'liq source code",
        "RU / EN / UZ lokalizatsiyasi tayyor",
        "JS mantiqli kurs tanlash kvizi",
        "Oldin/keyin natijalar bloki",
        "Filtrli dars jadvali bo'limi",
        'Sticky "Sinov darsiga yozilish" tugmasi',
        "Fan va ball bilan sharhlar bo'limi",
        "O'rnatish va ishga tushirish hujjatlari",
        "7 kun davomida bepul tuzatishlar",
        "Loyiha bazaviy sozlamasida yordam",
      ],
      cta: "Shu shablonni xohlayman",
      trustItems: [
        "2 soat ichida javob beraman",
        "Demo ko'rilgandan keyin to'lov",
        "Telegram orqali qo'llab-quvvatlash",
      ],
    },
    registerForm: {
      sectionTitle: "Kontaktlaringizni qoldiring - men demo ko'rsataman",
      sectionSubtitle: "Shablonni $300 ga olish uchun formani to'ldiring.",
      nameLabel: "Ism",
      namePlaceholder: "Ismingiz",
      contactLabel: "Telefon yoki Telegram",
      contactPlaceholder: "@username yoki +998...",
      submit: "Sotib olmoqchiman - men bilan bog'laning",
      submitting: "Yuborilmoqda...",
      success: "Ajoyib! Sizga 2 soat ichida yozaman",
      nameRequired: "Ismingizni kiriting",
      contactRequired: "Telefon yoki Telegram kiriting",
      sendError: "Forma yuborilmadi. Qayta urinib ko'ring.",
    },
    socialProof: {
      counters: [
        { value: 1, suffix: " shablon", label: "allaqachon sotuvda" },
        { value: 300, suffix: "$", label: "freelancerdagi 900$ o'rniga" },
        { value: 1, suffix: " kunda", label: "sayt ishga tushishigacha" },
      ],
      reviews: [
        {
          name: "Azizbek R.",
          city: "Toshkent",
          text: "Dam olish kunlari saytni ishga tushirdik va dushanba kuni birinchi sinov darsiga so'rovlar keldi.",
          initials: "AR",
        },
        {
          name: "Madina S.",
          city: "Samarqand",
          text: "Dasturlash xarajatlarini tejadik, kontentni tez to'ldirdik. Ko'rinishi ham juda zamonaviy.",
          initials: "MS",
        },
        {
          name: "Jahongir T.",
          city: "Buxoro",
          text: "Telegram va formani bir kunda uladik. Ishga tushirgach ota-onalar darhol yozishni boshladi.",
          initials: "JT",
        },
      ],
    },
    faq: {
      sectionTitle: "Ko'p beriladigan savollar",
      sectionSubtitle: "Ishga tushirish, to'lov va qo'llab-quvvatlash bo'yicha qisqa javoblar.",
      items: [
        {
          question: "Saytni ishga tushirish uchun nimani bilishim kerak?",
          answer:
            "Oddiy kompyuter ko'nikmalari yetarli. Bosqichma-bosqich yo'riqnoma beraman va startda yordam qilaman.",
        },
        {
          question: "Ranglar va matnlarni o'z markazimga moslashtira olamanmi?",
          answer:
            "Ha, albatta. Barcha bo'limlar va stillar tahrirlanadi, dizaynni brendingizga moslashtirasiz.",
        },
        {
          question: "To'lov qanday amalga oshadi?",
          answer:
            "Avval demo ko'rsataman va savollarga javob beraman, keyin to'lov tasdiqlanadi va fayllar topshiriladi.",
        },
        {
          question: "Agar shablon menga mos kelmasa-chi?",
          answer:
            "To'lovdan oldin to'liq demo va tuzilmani ko'rasiz, qarorni faqat ko'rib chiqqandan keyin qabul qilasiz.",
        },
        {
          question: "Shablon mobil qurilmalarni qo'llab-quvvatlaydimi?",
          answer:
            "Ha, shablon to'liq moslashuvchan: telefon, planshet va kompyuterda to'g'ri ishlaydi.",
        },
        {
          question: "Shablonni bir nechta markaz uchun ishlata olamanmi?",
          answer:
            "Ha, bir nechta loyiha uchun asos sifatida ishlatib, matn va kontaktlarni alohida sozlashingiz mumkin.",
        },
        {
          question: "To'lovdan keyin fayllarni qanchada olaman?",
          answer:
            "Odatda to'lov tasdiqlangach 1-2 soat ichida arxiv va ishga tushirish yo'riqnomasini yuboraman.",
        },
      ],
    },
    footer: {
      rights: "ExamSpark Template. Barcha huquqlar himoyalangan.",
      telegramLabel: "Telegram",
      languagesLabel: "Tillar",
    },
    header: {
      buyCta: "$300 ga olish",
    },
  },
};
