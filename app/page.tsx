"use client";

import { useEffect, useState } from "react";

const asset = (path: string) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;

const works = Array.from({ length: 44 }, (_, index) =>
  asset(`works/work-${String(index + 1).padStart(2, "0")}.jpg`),
);

const featuredOrder = [3, 7, 13, 24, 31, 44, 1, 10, 18, 22, 28, 37];
const featuredWorks = featuredOrder.map((number) => works[number - 1]);
const remainingWorks = works.filter((work) => !featuredWorks.includes(work));
const allWorks = [...featuredWorks, ...remainingWorks];

// Демонстрационные отзывы для черновика. Перед публикацией заменить на реальные.
const reviews = [
  {
    name: "Александр",
    text: "Делали навес вдоль дома. Всё обсудили заранее, по размерам подошло точно. Отдельно понравилось, что после монтажа участок оставили в порядке.",
  },
  {
    name: "Марина",
    text: "Нужен был навес над террасой, чтобы летом можно было сидеть и в дождь. Получилось аккуратно и по цвету хорошо подошло к дому. Спасибо за работу!",
  },
  {
    name: "Сергей",
    text: "Отправил фото места и примерные размеры, дальше всё подсказали. Сделали крепкую конструкцию, ничего не шатается, выглядит добротно.",
  },
  {
    name: "Ольга",
    text: "Заказывали навес на дачу. Я переживала, что конструкция будет выглядеть слишком тяжёлой, но получилось довольно легко и аккуратно. Результатом довольны.",
  },
  {
    name: "Дмитрий",
    text: "Сделали навес для машины. Сроки соблюдены, размеры и цвет заранее согласовали. Уже прошёл сильный дождь — всё отлично, вода уходит как надо.",
  },
  {
    name: "Наталья",
    text: "Хотели закрыть небольшую хозяйственную площадку у дома. Предложили простой и нормальный по цене вариант, без лишних деталей. Именно то, что было нужно.",
  },
  {
    name: "Игорь",
    text: "Обратился по рекомендации соседей. Навес изготовили по нашим размерам, установили ровно и аккуратно. Видно, что человек отвечает за свою работу.",
  },
  {
    name: "Елена",
    text: "Спасибо за навес над входом и частью двора. Стало намного удобнее, особенно в дождливую погоду. Все вопросы решали напрямую, без долгих ожиданий.",
  },
  {
    name: "Андрей",
    text: "Участок непростой, места мало, поэтому стандартный вариант не подходил. По фотографиям предложили решение, потом всё подогнали на месте. Получилось хорошо.",
  },
  {
    name: "Виктория",
    text: "Долго выбирали, кому заказать навес для зоны отдыха. Здесь понравился спокойный подход: всё объяснили, согласовали и сделали без неприятных сюрпризов.",
  },
];

const serviceTypes = [
  {
    number: "01",
    title: "Навесы рядом с домом",
    text: "Пристроенные навесы для входной зоны, двора или пространства вдоль дома. Конструкция может защищать участок от дождя, снега и солнца.",
  },
  {
    number: "02",
    title: "Навесы для террас и зон отдыха",
    text: "Крытые площадки для отдыха, садовой мебели, летней кухни или мангальной зоны. Размер, форма и цвет подбираются индивидуально.",
  },
  {
    number: "03",
    title: "Хозяйственные навесы",
    text: "Навесы для хранения строительных материалов, инструментов, дров, садовой техники и других хозяйственных нужд.",
  },
  {
    number: "04",
    title: "Навесы по индивидуальному проекту",
    text: "Если вам нужна конструкция нестандартной формы или размера, отправьте мне фотографии места установки. Я рассмотрю задачу и предложу подходящий вариант.",
  },
];

const priceFactors = [
  "размеров навеса",
  "формы и сложности конструкции",
  "места установки",
  "выбранных материалов",
  "количества металлических опор",
  "типа кровельного покрытия",
  "необходимости доставки и монтажа",
  "дополнительных пожеланий заказчика",
];

const steps = [
  {
    title: "Вы пишете мне",
    text: "Расскажите, какой навес вам нужен, и отправьте фотографию места установки.",
  },
  {
    title: "Я уточняю детали",
    text: "Мне понадобятся примерные размеры, населённый пункт, назначение навеса и ваши пожелания по внешнему виду.",
  },
  {
    title: "Рассчитываю стоимость",
    text: "После обсуждения конструкции и материалов я сообщаю стоимость в переписке.",
  },
  {
    title: "Согласовываю заказ",
    text: "Перед началом работы согласовываю с вами размеры, форму, цвет, материалы и сроки.",
  },
  {
    title: "Изготавливаю и устанавливаю навес",
    text: "Самостоятельно выполняю изготовление конструкции и монтаж на объекте.",
  },
];

const benefits = [
  "Лично обсуждаю каждый заказ.",
  "Изготавливаю навесы по индивидуальным размерам.",
  "Учитываю особенности дома и участка.",
  "Согласовываю детали до начала работы.",
  "Показываю фотографии реальных выполненных работ.",
  "Работаю без посредников и большой бригады.",
  "Стоимость сообщаю после обсуждения конкретного заказа.",
];

const estimateItems = [
  "Фотографию места установки.",
  "Примерную длину и ширину навеса.",
  "Название города или населённого пункта.",
  "Информацию о том, для чего нужен навес.",
  "Фотографию понравившейся конструкции, если у вас есть пример.",
];

const faqs = [
  {
    question: "Можно ли узнать цену на сайте?",
    answer:
      "Нет, каждый навес рассчитывается индивидуально. Для определения стоимости мне нужно знать размеры, место установки, форму конструкции и выбранные материалы.",
  },
  {
    question: "Можно ли заказать навес по фотографии?",
    answer:
      "Да. Вы можете прислать фотографию понравившегося навеса. Я рассмотрю пример и адаптирую конструкцию под ваше место установки.",
  },
  {
    question: "Можно ли выбрать цвет?",
    answer:
      "Да, доступные варианты цвета металлического каркаса и кровельного покрытия обсуждаются перед началом работы.",
  },
  {
    question: "Вы сами выполняете работу?",
    answer: "Да, я самостоятельно занимаюсь изготовлением и установкой навесов.",
  },
  {
    question: "Что делать, если я не знаю точных размеров?",
    answer:
      "Отправьте фотографии места установки и примерные размеры. Я подскажу, какая дополнительная информация потребуется.",
  },
];

export default function Home() {
  const [showAll, setShowAll] = useState(false);
  const [activeWork, setActiveWork] = useState<number | null>(null);
  const visibleWorks = showAll ? allWorks : featuredWorks;

  useEffect(() => {
    if (activeWork === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveWork(null);
      if (event.key === "ArrowRight") {
        setActiveWork((current) =>
          current === null ? 0 : (current + 1) % allWorks.length,
        );
      }
      if (event.key === "ArrowLeft") {
        setActiveWork((current) =>
          current === null
            ? 0
            : (current - 1 + allWorks.length) % allWorks.length,
        );
      }
    };

    document.body.classList.add("modal-open");
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.classList.remove("modal-open");
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeWork]);

  const openWork = (work: string) => setActiveWork(allWorks.indexOf(work));

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="В начало страницы">
          <span className="brand-mark" aria-hidden="true">
            М
          </span>
          <span>
            <strong>Мастер навесов</strong>
            <small>изготовление • монтаж</small>
          </span>
        </a>
        <nav className="main-nav" aria-label="Основная навигация">
          <a href="#types">Виды</a>
          <a href="#works">Работы</a>
          <a href="#process">Как работаю</a>
          <a href="#faq">Вопросы</a>
        </nav>
        <a className="header-cta" href="#contact">
          Получить расчёт <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className="hero" id="top" aria-labelledby="hero-title">
        <img
          className="hero-image"
          src={asset("works/work-03.jpg")}
          alt="Металлический навес, изготовленный и установленный мастером"
        />
        <div className="hero-shade" />
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-content shell">
          <div className="eyebrow light">
            <span /> Индивидуальные конструкции
          </div>
          <h1 id="hero-title">
            Металлические
            <br />
            <em>навесы</em> под ключ
          </h1>
          <p className="hero-lead">
            Изготавливаю и устанавливаю металлические навесы по индивидуальным
            размерам в <span className="placeholder">Санкт-Петербурге и Ленинградской области</span>.
          </p>
          <p className="hero-copy">
            Для частных домов, дач, террас, зон отдыха и хозяйственных площадок.
            Каждую конструкцию рассчитываю с учётом места установки, размеров и
            пожеланий заказчика.
          </p>
          <div className="hero-actions">
            <a className="button button-accent" href="#contact">
              Получить расчёт <span aria-hidden="true">→</span>
            </a>
            <a className="text-link" href="#works">
              Смотреть работы <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
        <div className="hero-note">
          <span className="hero-note-number">01</span>
          <p>
            Для расчёта достаточно фото места
            <br />и примерных размеров
          </p>
        </div>
        <div className="hero-bottom shell">
          <span>Лично веду каждый заказ</span>
          <span>По индивидуальным размерам</span>
          <span>Без посредников</span>
        </div>
      </section>

      <section className="intro section shell" aria-label="О работе">
        <div className="section-index">/ 01</div>
        <div className="intro-title">
          <div className="eyebrow"><span /> Подход к работе</div>
          <h2>
            Конструкция, которая
            <br />
            <em>подходит именно вашему участку</em>
          </h2>
        </div>
        <div className="intro-copy">
          <p>
            Не подгоняю задачи под один шаблон. Сначала смотрю фотографии места,
            уточняю назначение и размеры, а затем предлагаю подходящий вариант.
          </p>
          <p>
            Чтобы узнать стоимость, напишите мне и отправьте фотографию места
            установки вместе с примерными размерами.
          </p>
        </div>
      </section>

      <section className="types section" id="types" aria-labelledby="types-title">
        <div className="shell">
          <div className="section-heading">
            <div>
              <div className="eyebrow"><span /> Варианты конструкций</div>
              <h2 id="types-title">Какие навесы я изготавливаю</h2>
            </div>
            <p>
              Форма, цвет и материалы подбираются под дом, участок и задачу.
            </p>
          </div>
          <div className="services-grid">
            {serviceTypes.map((service) => (
              <article className="service-card" key={service.number}>
                <div className="service-card-top">
                  <span>{service.number}</span>
                  <div className="canopy-symbol" aria-hidden="true" />
                </div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="works-section section" id="works" aria-labelledby="works-title">
        <div className="shell works-intro">
          <div>
            <div className="eyebrow light"><span /> Портфолио</div>
            <h2 id="works-title">Примеры моих работ</h2>
          </div>
          <div className="works-copy">
            <p>
              Здесь размещены фотографии навесов, которые я изготовил и
              установил. Все фотографии — мои реальные работы.
            </p>
            <p className="muted">
              Открывайте снимки в увеличенном виде. Цены и характеристики не
              указываются, поскольку каждый заказ рассчитывается индивидуально.
            </p>
          </div>
        </div>

        <div className="gallery shell-wide">
          {visibleWorks.map((work, index) => (
            <button
              className={`gallery-card gallery-card-${(index % 6) + 1}`}
              key={work}
              onClick={() => openWork(work)}
              aria-label={`Открыть выполненную работу №${allWorks.indexOf(work) + 1}`}
            >
              <img
                src={work}
                alt={`Металлический навес — выполненная работа №${allWorks.indexOf(work) + 1}`}
                loading={index < 4 ? "eager" : "lazy"}
              />
              <span className="gallery-hover">
                <span>Реальная работа</span>
                <strong>Увеличить ↗</strong>
              </span>
            </button>
          ))}
        </div>

        <div className="gallery-actions shell">
          <button className="button button-outline-light" onClick={() => setShowAll(!showAll)}>
            {showAll ? "Скрыть часть фотографий" : `Показать все ${works.length} работы`}
          </button>
          <a className="button button-accent" href="#contact">
            Хочу похожий навес <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>

      <section className="reviews section" aria-labelledby="reviews-title">
        <div className="shell">
          <div className="reviews-heading">
            <div className="eyebrow"><span /> Отзывы</div>
            <h2 id="reviews-title">Отзывы заказчиков</h2>
          </div>
          <div className="reviews-grid">
            {reviews.map((review) => (
              <article className="review-card" key={review.name}>
                <span className="review-avatar" aria-hidden="true">
                  <svg viewBox="0 0 24 24" focusable="false">
                    <circle cx="12" cy="8" r="4" />
                    <path d="M4.5 21c.5-5 3-7.5 7.5-7.5s7 2.5 7.5 7.5" />
                  </svg>
                </span>
                <div className="review-content">
                  <h3>{review.name}</h3>
                  <div className="review-stars" aria-label="5 из 5 звёзд">★★★★★</div>
                  <p>{review.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pricing section" id="pricing" aria-labelledby="pricing-title">
        <div className="shell pricing-layout">
          <div className="pricing-photo">
            <img src={asset("works/work-31.jpg")} alt="Металлическая конструкция навеса у дома" loading="lazy" />
            <div className="photo-label">
              <span>Индивидуальный проект</span>
              <strong>без шаблонных решений</strong>
            </div>
          </div>
          <div className="pricing-content">
            <div className="eyebrow"><span /> Стоимость</div>
            <h2 id="pricing-title">Индивидуальное изготовление</h2>
            <p className="lead">
              Я не использую одну фиксированную цену для всех заказов.
              Стоимость зависит от:
            </p>
            <ul className="factor-list">
              {priceFactors.map((factor, index) => (
                <li key={factor}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {factor}
                </li>
              ))}
            </ul>
            <p>
              Для предварительного расчёта напишите мне в мессенджер. Я уточню
              необходимые детали и сообщу стоимость в личной переписке.
            </p>
            <a className="button button-dark" href="#contact">
              Обсудить задачу <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      <section className="process section" id="process" aria-labelledby="process-title">
        <div className="shell">
          <div className="section-heading process-heading">
            <div>
              <div className="eyebrow light"><span /> От сообщения до монтажа</div>
              <h2 id="process-title">Как проходит работа</h2>
            </div>
            <p>Понятно и последовательно — все важные детали согласовываем заранее.</p>
          </div>
          <ol className="steps-list">
            {steps.map((step, index) => (
              <li key={step.title}>
                <div className="step-number">{String(index + 1).padStart(2, "0")}</div>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="benefits section" aria-labelledby="benefits-title">
        <div className="shell benefits-layout">
          <div className="benefits-title-wrap">
            <div className="eyebrow"><span /> Прямое общение</div>
            <h2 id="benefits-title">Почему стоит обратиться ко мне</h2>
            <p>
              Вы общаетесь напрямую с мастером, который рассчитывает,
              изготавливает и устанавливает вашу конструкцию.
            </p>
          </div>
          <ul className="benefit-list">
            {benefits.map((benefit, index) => (
              <li key={benefit}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{benefit}</strong>
                <i aria-hidden="true">✓</i>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="estimate section" aria-labelledby="estimate-title">
        <div className="shell estimate-card">
          <div className="estimate-copy">
            <div className="eyebrow dark"><span /> Быстрый старт</div>
            <h2 id="estimate-title">Что отправить для расчёта</h2>
            <p>
              Пяти простых пунктов достаточно, чтобы я быстрее понял задачу и
              подготовил предварительную оценку.
            </p>
            <a className="button button-light" href="#contact">
              Отправить фотографии <span aria-hidden="true">→</span>
            </a>
          </div>
          <ol className="estimate-list">
            {estimateItems.map((item, index) => (
              <li key={item}>
                <span>{index + 1}</span>
                {item}
              </li>
            ))}
          </ol>
          <p className="estimate-footnote">
            После этого я задам уточняющие вопросы и сообщу стоимость в переписке.
          </p>
        </div>
      </section>

      <section className="faq section" id="faq" aria-labelledby="faq-title">
        <div className="shell faq-layout">
          <div className="faq-title-wrap">
            <div className="eyebrow"><span /> Вопросы и ответы</div>
            <h2 id="faq-title">Частые вопросы</h2>
            <p>Если вашего вопроса нет в списке — напишите мне напрямую.</p>
            <a className="text-link dark-link" href="#contact">
              Задать вопрос <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <details key={faq.question} open={index === 0}>
                <summary>
                  <span>{faq.question}</span>
                  <i aria-hidden="true">+</i>
                </summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="contact" id="contact" aria-labelledby="contact-title">
        <div className="contact-photo">
          <img src={asset("works/work-07.jpg")} alt="Готовый металлический навес во дворе дома" loading="lazy" />
        </div>
        <div className="contact-panel">
          <div className="eyebrow light"><span /> Связаться со мной</div>
          <h2 id="contact-title">
            Нужен навес?
            <br />
            <em>Обсудим задачу</em>
          </h2>
          <p className="contact-lead">
            Напишите мне и отправьте фотографию места установки. Я рассмотрю
            задачу, уточню детали и сообщу стоимость индивидуально.
          </p>
          <div className="contact-links">
            <a href="tel:+79022017484" aria-label="Позвонить по телефону +7 902 201-74-84">
              <span>Телефон</span>
              <strong>+7 (902) 201-74-84</strong>
              <i aria-hidden="true">↗</i>
            </a>
            <a href="https://max.ru/" target="_blank" rel="noreferrer" aria-label="Открыть MAX">
              <span>MAX</span>
              <strong>Написать в MAX</strong>
              <i aria-hidden="true">↗</i>
            </a>
          </div>
          <div className="location-line">
            <span aria-hidden="true">⌖</span>
            Работаю в: <strong>Санкт-Петербурге и Ленинградской области</strong>
          </div>
          <a className="button button-accent contact-button" href="https://max.ru/" target="_blank" rel="noreferrer">
            Написать и узнать стоимость <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>

      <footer className="footer">
        <div className="shell">
          <a className="brand footer-brand" href="#top">
            <span className="brand-mark" aria-hidden="true">М</span>
            <span>
              <strong>Мастер навесов</strong>
              <small>изготовление • монтаж</small>
            </span>
          </a>
          <p>Металлические навесы по индивидуальным размерам.</p>
          <a href="#top">Наверх ↑</a>
        </div>
      </footer>

      <a className="mobile-cta" href="#contact">
        Получить расчёт <span aria-hidden="true">→</span>
      </a>

      {activeWork !== null && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Увеличенная фотография выполненной работы"
          onClick={() => setActiveWork(null)}
        >
          <button
            className="lightbox-close"
            onClick={() => setActiveWork(null)}
            aria-label="Закрыть фотографию"
          >
            ×
          </button>
          <button
            className="lightbox-arrow lightbox-prev"
            onClick={(event) => {
              event.stopPropagation();
              setActiveWork((activeWork - 1 + allWorks.length) % allWorks.length);
            }}
            aria-label="Предыдущая фотография"
          >
            ←
          </button>
          <img
            src={allWorks[activeWork]}
            alt={`Металлический навес — выполненная работа №${activeWork + 1}`}
            onClick={(event) => event.stopPropagation()}
          />
          <button
            className="lightbox-arrow lightbox-next"
            onClick={(event) => {
              event.stopPropagation();
              setActiveWork((activeWork + 1) % allWorks.length);
            }}
            aria-label="Следующая фотография"
          >
            →
          </button>
          <div className="lightbox-count">
            {String(activeWork + 1).padStart(2, "0")} / {allWorks.length}
          </div>
        </div>
      )}
    </main>
  );
}
