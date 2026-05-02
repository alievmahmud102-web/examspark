"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  BarChart3,
  BookOpenText,
  Headphones,
  Languages,
  Mic,
  PencilLine,
  Target,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";

import {
  supportedLanguages,
  translations,
  type LanguageCode,
} from "@/i18n/translations";

const storageKey = "site-language";

function getLanguageFromStorage(): LanguageCode {
  if (typeof window === "undefined") return "ru";

  const saved = localStorage.getItem(storageKey);
  if (saved && supportedLanguages.includes(saved as LanguageCode)) {
    return saved as LanguageCode;
  }

  return "ru";
}

export function Preview() {
  const [language, setLanguage] = useState<LanguageCode>(getLanguageFromStorage);
  const [activeScreen, setActiveScreen] = useState(0);

  useEffect(() => {
    const syncLanguage = () => setLanguage(getLanguageFromStorage());
    window.addEventListener("storage", syncLanguage);
    window.addEventListener("languageChange", syncLanguage);

    return () => {
      window.removeEventListener("storage", syncLanguage);
      window.removeEventListener("languageChange", syncLanguage);
    };
  }, []);

  const t = translations[language].preview;
  const panelTexts: Record<LanguageCode, Array<{ title: string; description: string }>> = {
    ru: [
      {
        title: "Узнайте свой реальный IELTS уровень за 1 занятие",
        description: "Определяем ваш текущий уровень и сколько баллов не хватает до IELTS 6.5+.",
      },
      {
        title: "Пошаговая подготовка к IELTS 6.5+",
        description:
          "Вы четко понимаете, что делать каждую неделю, чтобы выйти на IELTS 6.5+ без лишней нагрузки.",
      },
      {
        title: "Практика в формате реального IELTS",
        description:
          "Каждую неделю вы сдаете пробный IELTS тест, получаете проверку преподавателем и обратную связь после каждого теста.",
      },
      {
        title: "Ваш результат: IELTS 6.5+ за 3-6 месяцев",
        description:
          "Готовим к уверенной сдаче IELTS с прогнозируемым результатом и понятным планом.",
      },
    ],
    en: [
      {
        title: "Starting analysis",
        description: "We define your current score and the gap to 6.5+.",
      },
      {
        title: "Learning plan",
        description: "Groups of 4-6, IELTS 7.0+ teachers, and a clear study roadmap.",
      },
      {
        title: "Exam practice",
        description: "Weekly mock tests, error review, and confidence growth each week.",
      },
      {
        title: "Target result",
        description: "You reach the score you need and are ready for the IELTS exam.",
      },
    ],
    uz: [
      {
        title: "Boshlang'ich tahlil",
        description: "Hozirgi ball va 6.5+ maqsadgacha bo'lgan farq aniqlanadi.",
      },
      {
        title: "O'quv rejasi",
        description: "4-6 kishilik guruh, IELTS 7.0+ ustozlar va aniq dastur.",
      },
      {
        title: "Imtihon amaliyoti",
        description: "Weekly mock tests, xatolar tahlili va haftalik ishonch o'sishi.",
      },
      {
        title: "Maqsadli natija",
        description: "Kerakli ballga chiqib, IELTS topshirishga to'liq tayyor bo'lasiz.",
      },
    ],
  };
  const panelBodyTexts: Record<
    LanguageCode,
    {
      diagnostics: Array<{ title: string; text: string }>;
      learning: Array<{ title: string; text: string }>;
      practice: Array<{ title: string; text: string }>;
      result: Array<{ title: string; text: string }>;
    }
  > = {
    ru: {
      diagnostics: [
        {
          title: "Reading",
          text: "Находим ошибки, которые мешают набрать 6.5+ и учим работать с заданиями быстрее.",
        },
        {
          title: "Listening",
          text: "Показываем слабые места в понимании аудио и как их исправить.",
        },
        {
          title: "Writing",
          text: "Разбираем структуру ответов и критерии, которые влияют на ваш балл.",
        },
      ],
      learning: [
        {
          title: "Грамматика",
          text: "Убираем ошибки, из-за которых вы теряете баллы на экзамене.",
        },
        {
          title: "Лексика",
          text: "Даем лексику, которая реально используется в IELTS и повышает ваш балл.",
        },
        {
          title: "Speaking",
          text: "Учите говорить уверенно и по критериям экзамена, без ступора на заданиях.",
        },
      ],
      practice: [
        { title: "Mock test 1", text: "Определяем ваш текущий уровень и слабые места." },
        { title: "Mock test 2", text: "Разбираем ошибки и показываем, как их исправить." },
        {
          title: "Mock test 3",
          text: "Учимся укладываться во время и писать как на реальном экзамене.",
        },
      ],
      result: [
        { title: "До курса", text: "Уровень 5.0-5.5" },
        { title: "После курса", text: "Результат 6.5+" },
      ],
    },
    en: {
      diagnostics: [
        { title: "Reading", text: "Current level and reading pace." },
        { title: "Listening", text: "Audio comprehension and common mistakes." },
        { title: "Writing", text: "Task structure and scoring criteria." },
      ],
      learning: [
        { title: "Grammar", text: "We close key gaps topic by topic." },
        { title: "Vocabulary", text: "IELTS-focused words for each module." },
        { title: "Speaking", text: "Answer frameworks and fluent delivery." },
      ],
      practice: [
        { title: "Mock test 1", text: "Trial format and progress baseline." },
        { title: "Mock test 2", text: "Error review and weak-point drills." },
        { title: "Mock test 3", text: "Timing practice and exam strategy." },
      ],
      result: [
        { title: "Before course", text: "Starting level around 5.0-5.5" },
        { title: "After course", text: "Target score 6.5+" },
      ],
    },
    uz: {
      diagnostics: [
        { title: "Reading", text: "Hozirgi daraja va o'qish tezligi." },
        { title: "Listening", text: "Audio tushunish va asosiy xatolar." },
        { title: "Writing", text: "Javob tuzilmasi va baholash mezonlari." },
      ],
      learning: [
        { title: "Grammatika", text: "Muhim bo'shliqlar bosqichma-bosqich yopiladi." },
        { title: "Lug'at", text: "Har bir modul uchun IELTS leksikasi." },
        { title: "Speaking", text: "Javob qoliplari va ishonchli nutq." },
      ],
      practice: [
        { title: "Mock test 1", text: "Sinov formati va progress nuqtasi." },
        { title: "Mock test 2", text: "Xatolar tahlili va sust joylar ustida ish." },
        { title: "Mock test 3", text: "Vaqtni boshqarish va imtihon strategiyasi." },
      ],
      result: [
        { title: "Kursgacha", text: "Boshlang'ich daraja 5.0-5.5" },
        { title: "Kursdan so'ng", text: "Maqsadli natija 6.5+" },
      ],
    },
  };
  const panelText = panelTexts[language][activeScreen] ?? panelTexts[language][0];
  const panelBody = panelBodyTexts[language];
  const diagnosticsIcons: LucideIcon[] = [BookOpenText, Headphones, PencilLine];
  const learningIcons: LucideIcon[] = [Languages, BookOpenText, Mic];
  const resultIcons: LucideIcon[] = [BarChart3, Target];
  const badgeTexts: Record<LanguageCode, { step1: string; step2: string }> = {
    ru: { step1: "Цель 6.5+", step2: "План недели" },
    en: { step1: "Goal 6.5+", step2: "Weekly plan" },
    uz: { step1: "Maqsad 6.5+", step2: "Haftalik reja" },
  };
  const topStripTexts: Record<LanguageCode, string> = {
    ru: "Диагностика за 1 занятие",
    en: "Diagnostics in 1 lesson",
    uz: "1 darsda diagnostika",
  };
  const learningStatusTexts: Record<LanguageCode, string> = {
    ru: "Под контролем",
    en: "Tracked",
    uz: "Nazoratda",
  };
  const reveal = {
    hidden: { opacity: 0, y: 48 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="preview" className="px-5 py-14 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="mb-8 max-w-[52ch] space-y-4 sm:mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={reveal}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-3xl leading-[1.05] tracking-tighter text-text-primary sm:text-4xl lg:text-5xl">
            {t.sectionTitle}
          </h2>
          <p className="max-w-2xl text-sm leading-relaxed text-zinc-400 sm:text-base">
            {t.sectionSubtitle}
          </p>
        </motion.div>

        <div className="grid gap-4 lg:grid-cols-[0.42fr_0.58fr] lg:gap-6">
          <motion.nav
            className="space-y-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={reveal}
            transition={{ duration: 0.65, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          >
            {t.screens.map((screen, index) => {
              const isActive = index === activeScreen;
              return (
                <button
                  key={screen.name}
                  type="button"
                  onClick={() => setActiveScreen(index)}
                  className={[
                    "flex w-full items-center justify-between rounded-xl border px-5 py-3.5 text-left",
                    "transition-all duration-300 ease-out",
                    isActive
                      ? [
                          "border-accent text-accent",
                          "bg-accent/12 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.04),transparent_60%)]",
                        ].join(" ")
                      : "border-white/10 bg-[#1a1a1a] text-white/85 hover:border-white/18 hover:text-white/92 hover:bg-white/[0.02]",
                  ].join(" ")}
                  aria-pressed={isActive}
                >
                  <span className="font-semibold tracking-tight">{screen.name}</span>
                  <span className="text-xs text-white/40">0{index + 1}</span>
                </button>
              );
            })}
          </motion.nav>

          <motion.div
            className="relative isolate flex min-h-[320px] items-center justify-center py-6 sm:min-h-[420px]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={reveal}
            transition={{ duration: 0.75, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-36 w-36 -translate-x-[62%] -translate-y-[52%] rounded-full bg-primary/16 blur-3xl sm:h-48 sm:w-48" />
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-40 w-40 -translate-x-[8%] -translate-y-[18%] rounded-full bg-accent/14 blur-3xl sm:h-56 sm:w-56" />

            <motion.div
              className="relative w-full max-w-[640px] [perspective:1800px]"
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 140, damping: 18 }}
            >
              <div className="absolute inset-x-[11%] bottom-[-20px] h-12 rounded-full bg-black/65 blur-2xl sm:h-16" />

              <div className="relative mx-auto rounded-[28px] border border-white/12 bg-[#111111] p-2 shadow-2xl shadow-black/70 [transform:rotateX(0deg)_rotateY(0deg)_rotateZ(0deg)] sm:p-3">
                <div className="rounded-[24px] border border-white/10 bg-[#151515] p-3 sm:p-4">
                  <div className="mb-3 flex items-center gap-2 rounded-2xl border border-white/10 bg-[#0d0d0d] px-3 py-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                    <div className="ml-2 h-2 w-24 rounded-full bg-white/10 sm:w-32" />
                  </div>

                  <motion.div
                    key={activeScreen}
                    initial={{ opacity: 0, y: 22, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    className="preview-fade min-h-[250px] rounded-[22px] border border-white/10 bg-[#0f0f0f] p-3 sm:min-h-[320px] sm:p-4"
                  >
                    <div className="mb-3 rounded-xl border border-white/10 bg-white/5 px-3 py-2">
                      <p className="text-sm font-semibold tracking-tight text-white">{panelText.title}</p>
                      <p className="mt-1 break-words text-xs leading-relaxed text-white/65">
                        {panelText.description}
                      </p>
                    </div>

                    {activeScreen === 0 && (
                      <div className="space-y-3">
                        <div className="rounded-2xl border border-white/10 bg-gradient-to-r from-primary/60 via-primary/35 to-accent/25 p-3 shadow-[0_10px_28px_rgba(0,0,0,0.55)]">
                          <div className="flex items-center justify-between gap-3">
                            <div className="flex items-center gap-2">
                              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/12 text-white/75 shadow-sm">
                                <TrendingUp size={13} strokeWidth={2.2} />
                              </span>
                              <p className="text-[11px] font-semibold text-white/80">
                                {topStripTexts[language]}
                              </p>
                            </div>
                            <div className="inline-flex h-7 w-20 items-center justify-center rounded-full bg-accent/25 px-2 text-[10px] font-semibold text-white/80 shadow-sm">
                              {badgeTexts[language].step1}
                            </div>
                          </div>
                        </div>

                        <div className="grid gap-3 sm:grid-cols-3">
                          {[0, 1, 2].map((item) => (
                            <div
                              key={item}
                              className="rounded-xl border border-white/10 bg-white/5 p-3 shadow-[0_10px_24px_rgba(0,0,0,0.55)]"
                            >
                              {(() => {
                                const Icon = diagnosticsIcons[item] ?? BookOpenText;
                                return (
                                  <div className="flex items-center gap-2 text-xs font-semibold text-white/85">
                                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-white/75">
                                      <Icon size={13} strokeWidth={2.2} />
                                    </span>
                                    <p>{panelBody.diagnostics[item]?.title}</p>
                                  </div>
                                );
                              })()}
                              <p className="mt-3 break-words text-[11px] leading-relaxed text-white/60">
                                {panelBody.diagnostics[item]?.text}
                              </p>
                              <div className="mt-3 inline-flex h-7 w-full items-center rounded-lg bg-primary/18 px-2 text-[10px] text-white/70">
                                {language === "ru"
                                  ? "Проверка преподавателем"
                                  : language === "en"
                                    ? "Teacher review"
                                    : "Ustoz tekshiruvi"}
                              </div>
                            </div>
                          ))}
                        </div>

                        <div className="grid gap-3 sm:grid-cols-[1.2fr_0.8fr]">
                          <div className="rounded-2xl border border-white/10 bg-white/5 p-3 shadow-[0_10px_24px_rgba(0,0,0,0.55)]">
                            <p className="text-xs font-semibold text-white/85">
                              {language === "ru"
                                ? "Ваш текущий балл и план роста"
                                : language === "en"
                                  ? "Starting score and target"
                                  : "Boshlang'ich ball va maqsad"}
                            </p>
                            <p className="mt-3 break-words text-[11px] leading-relaxed text-white/60">
                              {language === "ru"
                                ? "Вы получаете четкий план: что улучшить, чтобы выйти на 6.5+."
                                : language === "en"
                                  ? "We lock your current level and the gap to 6.5+."
                                  : "Hozirgi daraja va 6.5+ maqsad oralig'ini aniqlaymiz."}
                            </p>
                            <div className="mt-3 flex h-20 items-end rounded-xl bg-gradient-to-br from-primary/35 to-accent/18 px-3 py-2 text-[11px] leading-relaxed text-white/75">
                              {language === "ru"
                                ? "Индивидуальный план роста на 3-6 месяцев."
                                : language === "en"
                                  ? "Individual growth plan for 3-6 months."
                                  : "3-6 oy uchun individual o'sish rejasi."}
                            </div>
                          </div>

                          <div className="rounded-2xl border border-white/10 bg-white/5 p-3 shadow-[0_10px_24px_rgba(0,0,0,0.55)]">
                            <p className="text-xs font-semibold text-white/85">
                              {language === "ru"
                                ? "Что вы получите после диагностики"
                                : language === "en"
                                  ? "Diagnostics summary"
                                  : "Diagnostika xulosasi"}
                            </p>
                            <p className="mt-3 break-words text-[11px] leading-relaxed text-white/60">
                              {language === "ru"
                                ? "Понимаете свой уровень, слабые места и сколько времени нужно, чтобы достичь IELTS 6.5+."
                                : language === "en"
                                  ? "You clearly know where you start and where you are going."
                                  : "Qayerdan boshlash va qayerga chiqish aniq bo'ladi."}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeScreen === 1 && (
                      <div className="space-y-3">
                        <div className="flex items-center justify-between gap-3">
                          <div className="inline-flex h-8 w-40 items-center rounded-xl bg-accent/22 px-3 text-[10px] font-semibold text-white/80 shadow-[0_10px_24px_rgba(0,0,0,0.55)]">
                            {badgeTexts[language].step2}
                          </div>
                          <div className="h-8 w-24 rounded-xl bg-white/6 px-2 text-[10px] leading-tight text-white/65 shadow-[0_10px_24px_rgba(0,0,0,0.55)]">
                            {language === "ru"
                              ? "Прогресс еженедельно"
                              : language === "en"
                                ? "Weekly progress"
                                : "Haftalik progress"}
                          </div>
                        </div>

                        <div className="space-y-2">
                          {[0, 1, 2].map((item) => (
                            <div
                              key={item}
                              className="flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/5 px-3 py-2 shadow-[0_10px_24px_rgba(0,0,0,0.55)]"
                            >
                              <div className="flex items-center gap-2">
                                {(() => {
                                  const Icon = learningIcons[item] ?? BookOpenText;
                                  return (
                                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-white/75">
                                      <Icon size={13} strokeWidth={2.2} />
                                    </span>
                                  );
                                })()}
                                <div>
                                  <p className="text-xs font-semibold text-white/85">
                                    {panelBody.learning[item]?.title}
                                  </p>
                                  <p className="break-words text-[11px] text-white/60">
                                    {panelBody.learning[item]?.text}
                                  </p>
                                </div>
                              </div>
                              <div className="inline-flex h-auto min-h-6 w-20 shrink-0 items-center justify-center rounded-full bg-primary/18 px-2 py-1 text-center text-[10px] leading-tight text-white/70 sm:w-16">
                                {learningStatusTexts[language]}
                              </div>
                            </div>
                          ))}
                        </div>

                        <div className="grid gap-3 sm:grid-cols-[1fr_0.72fr]">
                          <div className="rounded-2xl border border-white/10 bg-primary/22 p-3 shadow-[0_10px_24px_rgba(0,0,0,0.55)]">
                            <p className="text-xs font-semibold text-white/85">
                              {language === "ru"
                                ? "Контроль прогресса"
                                : language === "en"
                                  ? "Progress control"
                                  : "Progress nazorati"}
                            </p>
                            <p className="mt-2 break-words text-[11px] leading-relaxed text-white/65">
                              {language === "ru"
                                ? "После каждого занятия вы получаете проверку и комментарии по ошибкам."
                                : language === "en"
                                  ? "After each lesson you get checks and error feedback."
                                  : "Har darsdan keyin tekshiruv va xatolar bo'yicha fikr olasiz."}
                            </p>
                            <p className="mt-2 break-words text-[11px] leading-relaxed text-white/65">
                              {language === "ru"
                                ? "Вы видите, какие темы уже закрыты и где нужен дополнительный фокус."
                                : language === "en"
                                  ? "You see which topics are already covered and where extra focus is needed."
                                  : "Qaysi mavzular yopilgani va qayerda qo'shimcha e'tibor kerakligi aniq ko'rinadi."}
                            </p>
                          </div>
                          <div className="rounded-2xl border border-white/10 bg-white/5 p-3 shadow-[0_10px_24px_rgba(0,0,0,0.55)]">
                            <p className="text-xs font-semibold text-white/85">
                              {language === "ru"
                                ? "Фокус недели"
                                : language === "en"
                                  ? "Weekly focus"
                                  : "Haftalik fokus"}
                            </p>
                            <p className="mt-2 break-words text-[11px] leading-relaxed text-white/65">
                              {language === "ru"
                                ? "На каждой неделе у вас есть 1-2 приоритетные задачи для ускорения роста балла."
                                : language === "en"
                                  ? "Each week includes 1-2 priority tasks to accelerate your score growth."
                                  : language === "uz"
                                    ? "Har haftada ball o'sishini tezlatish uchun 1-2 ustuvor vazifa bo'ladi."
                                    : ""}
                            </p>
                          </div>
                        </div>

                        <div className="rounded-2xl border border-white/10 bg-white/5 p-3 shadow-[0_10px_24px_rgba(0,0,0,0.55)]">
                          <p className="text-xs font-semibold text-white/85">
                            {language === "ru"
                              ? "Что вы получаете на этом этапе"
                              : language === "en"
                                ? "Stage outcome"
                                : "Bosqich natijasi"}
                          </p>
                          <p className="mt-2 break-words text-[11px] leading-relaxed text-white/60">
                            {language === "ru"
                              ? "Вы видите реальный рост уровня и понимаете, как двигаетесь к IELTS 6.5+ шаг за шагом."
                              : language === "en"
                                ? "Skills improve systematically with visible weekly progress."
                                : "Ko'nikmalar tizimli oshadi va har hafta o'sish ko'rinadi."}
                          </p>
                          <div className="mt-3 flex h-16 items-center justify-center rounded-xl bg-white/6 px-3 py-2 text-center text-[11px] text-white/60">
                            {language === "ru"
                              ? "Каждая неделя = +уверенность, +скорость, +балл."
                              : language === "en"
                                ? "Each week = more confidence, speed, and score."
                                : "Har hafta = ko'proq ishonch, tezlik va ball."}
                          </div>
                        </div>
                      </div>
                    )}

                    {activeScreen === 2 && (
                      <div className="space-y-3">
                        <div className="flex flex-wrap gap-2">
                          <div className="inline-flex h-8 w-28 items-center justify-center rounded-full border border-accent/30 bg-accent/16 px-2 text-[10px] font-semibold text-white/80 shadow-[0_10px_24px_rgba(0,0,0,0.55)]">
                            {language === "ru" ? "Тест 1" : language === "en" ? "Test 1" : "Test 1"}
                          </div>
                          <div className="inline-flex h-8 w-24 items-center justify-center rounded-full border border-white/10 bg-white/5 px-2 text-[10px] font-semibold text-white/70 shadow-[0_10px_24px_rgba(0,0,0,0.55)]">
                            {language === "ru" ? "Тест 2" : language === "en" ? "Test 2" : "Test 2"}
                          </div>
                          <div className="inline-flex h-8 w-24 items-center justify-center rounded-full border border-white/10 bg-white/5 px-2 text-[10px] font-semibold text-white/70 shadow-[0_10px_24px_rgba(0,0,0,0.55)]">
                            {language === "ru" ? "Тест 3" : language === "en" ? "Test 3" : "Test 3"}
                          </div>
                        </div>

                        <div className="space-y-2">
                          {[0, 1, 2].map((item) => (
                            <div
                              key={item}
                              className="flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/5 px-3 py-3 shadow-[0_10px_24px_rgba(0,0,0,0.55)]"
                            >
                              <div className="min-w-0 flex-1">
                                <p className="text-xs font-semibold text-white/85">
                                  {panelBody.practice[item]?.title}
                                </p>
                                <p className="mt-1 break-words text-[11px] leading-relaxed text-white/60">
                                  {panelBody.practice[item]?.text}
                                </p>
                              </div>
                              <div className="inline-flex h-7 w-20 items-center justify-center rounded-xl bg-white/6 px-2 text-[10px] text-white/65">
                                {language === "ru"
                                  ? `Шаг ${item + 1}`
                                  : language === "en"
                                    ? `Step ${item + 1}`
                                    : `Bosqich ${item + 1}`}
                              </div>
                            </div>
                          ))}
                        </div>

                        <div className="grid gap-3 sm:grid-cols-3">
                          <div className="rounded-2xl border border-white/10 bg-primary/18 p-3 shadow-[0_10px_24px_rgba(0,0,0,0.55)]">
                            <p className="text-[11px] leading-relaxed text-white/70">
                              {language === "ru"
                                ? "Вы видите реальный рост балла каждую неделю и понимаете, как приближаетесь к IELTS 6.5+."
                                : language === "en"
                                  ? "Weekly score growth helps you see clear progress toward IELTS 6.5+."
                                  : "Har hafta ball o'sishini ko'rib, IELTS 6.5+ ga yaqinlashayotganingizni tushunasiz."}
                            </p>
                          </div>
                          <div className="rounded-2xl border border-white/10 bg-white/5 p-3 shadow-[0_10px_24px_rgba(0,0,0,0.55)]">
                            <p className="text-xs font-semibold text-white/85">
                              {language === "ru"
                                ? "Анализ ошибок"
                                : language === "en"
                                  ? "Error analysis"
                                  : "Xatolar tahlili"}
                            </p>
                            <p className="mt-2 break-words text-[11px] leading-relaxed text-white/65">
                              {language === "ru"
                                ? "После каждого mock test получаете комментарии преподавателя и чек-лист для исправления."
                                : language === "en"
                                  ? "After each mock test you get teacher feedback and a checklist for improvement."
                                  : "Har mock testdan keyin ustoz fikri va tuzatish uchun aniq chek-list olasiz."}
                            </p>
                          </div>
                          <div className="rounded-2xl border border-white/10 bg-white/5 p-3 shadow-[0_10px_24px_rgba(0,0,0,0.55)]">
                            <p className="text-xs font-semibold text-white/85">
                              {language === "ru"
                                ? "План на неделю"
                                : language === "en"
                                  ? "Weekly plan"
                                  : "Haftalik reja"}
                            </p>
                            <p className="mt-2 break-words text-[11px] leading-relaxed text-white/65">
                              {language === "ru"
                                ? "Понимаете, что тренировать в первую очередь, чтобы стабильно расти к IELTS 6.5+."
                                : language === "en"
                                  ? "You know what to train first to steadily move toward IELTS 6.5+."
                                  : "IELTS 6.5+ sari barqaror o'sish uchun avval nimalarni mashq qilishni aniq bilasiz."}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeScreen === 3 && (
                      <div className="grid gap-3 sm:grid-cols-2">
                        {[0, 1].map((item) => (
                          <div
                            key={item}
                            className="rounded-2xl border border-white/10 bg-white/5 p-3 shadow-[0_10px_24px_rgba(0,0,0,0.55)]"
                          >
                            <div className="flex items-center gap-2">
                              {(() => {
                                const Icon = resultIcons[item] ?? TrendingUp;
                                return (
                                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-white/75">
                                    <Icon size={14} strokeWidth={2.2} />
                                  </span>
                                );
                              })()}
                              <div className="min-w-0 flex-1">
                                <p className="text-xs font-semibold text-white/90">
                                  {panelBody.result[item]?.title}
                                </p>
                                <p className="mt-1 break-words text-[11px] text-white/65">
                                  {panelBody.result[item]?.text}
                                </p>
                              </div>
                            </div>
                            <p className="mt-3 break-words text-[11px] leading-relaxed text-white/60">
                              {language === "ru"
                                ? item === 0
                                  ? "Не хватает структуры, уверенности и понимания формата экзамена."
                                  : "Вы уверенно сдаете экзамен и понимаете, как получать высокий балл без стресса."
                                : language === "en"
                                  ? "Clear progress from baseline to target score."
                                  : "Start darajadan maqsadli ballgacha aniq o'sish."}
                            </p>
                          </div>
                        ))}

                        <div className="rounded-2xl border border-white/10 bg-white/5 p-3 shadow-[0_10px_24px_rgba(0,0,0,0.55)] sm:col-span-2">
                          <div className="flex items-center justify-between">
                            <p className="text-xs font-semibold text-white/85">
                              {language === "ru"
                                ? "Маршрут к 6.5+"
                                : language === "en"
                                  ? "Path to 6.5+"
                                  : "6.5+ yo'li"}
                            </p>
                            <p className="text-[10px] text-white/60">
                              {language === "ru" ? "3-6 мес" : language === "en" ? "3-6 mo" : "3-6 oy"}
                            </p>
                          </div>
                          <div className="mt-3 grid gap-2 sm:grid-cols-3">
                            <div className="inline-flex h-10 items-center justify-center rounded-xl border border-accent/35 bg-accent/16 px-2 text-[10px] font-semibold text-accent">
                              {language === "ru" ? "Старт" : language === "en" ? "Start" : "Start"}
                            </div>
                            <div className="inline-flex h-10 items-center justify-center rounded-xl bg-white/6 px-2 text-[10px] text-white/70">
                              {language === "ru" ? "Прогресс" : language === "en" ? "Progress" : "Progress"}
                            </div>
                            <div className="inline-flex h-10 items-center justify-center rounded-xl bg-white/6 px-2 text-[10px] text-white/70">
                              {language === "ru" ? "Результат" : language === "en" ? "Result" : "Natija"}
                            </div>
                          </div>
                          <div className="mt-3 inline-flex h-12 w-full items-center justify-center rounded-xl bg-accent/14 px-2 text-[11px] font-semibold text-white/75">
                            {language === "ru"
                              ? "Движение к IELTS 6.5+"
                              : language === "en"
                                ? "Moving toward IELTS 6.5+"
                                : "IELTS 6.5+ sari harakat"}
                          </div>
                        </div>
                      </div>
                    )}
                  </motion.div>
                </div>

                <div className="mx-auto mt-3 h-3 w-[32%] rounded-full bg-white/6" />
              </div>
            </motion.div>
          </motion.div>
        </div>

        <p
          id="demo"
          className="mt-4 inline-flex items-center gap-2 text-sm text-white/50"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent/45" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent/70" />
          </span>
          {t.liveDemoNote}
        </p>
      </div>
    </section>
  );
}
