# ExamSpark Landing

Одностраничный Next.js-шаблон (App Router + Tailwind CSS) для продажи сайта учебного центра.

## Локальный запуск

```bash
npm install
npm run dev
```

Приложение откроется на `http://localhost:3000`.

## Настройка EmailJS

1. Откройте `.env.local`.
2. Вставьте свои значения:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

3. В шаблоне EmailJS добавьте переменные, которые отправляет форма:
   - `name`
   - `contact`
   - `user_name`
   - `user_contact`
   - `reply_to`
   - `message`
   - `source`

После изменения `.env.local` перезапустите `npm run dev`.

## Как менять тексты и переводы

Все тексты сайта хранятся в `src/i18n/translations.ts`.

- RU: `translations.ru`
- EN: `translations.en`
- UZ: `translations.uz`

Чтобы изменить контент любой секции (`hero`, `features`, `pricing`, `faq` и т.д.), редактируйте соответствующие поля в этом файле.

## Сборка

```bash
npm run lint
npm run build
```

## Деплой на Vercel

1. Загрузите репозиторий на GitHub/GitLab/Bitbucket.
2. Создайте проект в [Vercel](https://vercel.com/new) и подключите репозиторий.
3. В `Project Settings -> Environment Variables` добавьте:
   - `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
   - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
   - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
4. Нажмите **Deploy**.

После деплоя проверьте:
- страницу `/`
- форму `RegisterForm`
- служебные URL: `/robots.txt` и `/sitemap.xml`
