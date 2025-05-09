const FAQ = () => {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        lineHeight: "1.6",
        maxWidth: "800px",
        margin: "40px auto",
        padding: "20px",
        backgroundColor: "#fefefe",
        color: "#333",
      }}
    >
      <h1 style={{ color: "#5c4d7d", fontSize: "28px" }}>
        Поширені запитання (FAQ)
      </h1>

      <h2 style={{ color: "#5c4d7d", fontSize: "20px", marginTop: "25px" }}>
        1. Що таке “Лапка”?
      </h2>
      <p>
        “Лапка” — це онлайн-платформа для розміщення оголошень про тварин. Тут
        можна знайти нового друга, допомогти тваринам знайти дім або дізнатись
        більше про діяльність притулків.
      </p>

      <h2 style={{ color: "#5c4d7d", fontSize: "20px", marginTop: "25px" }}>
        2. Як розмістити оголошення про тварину?
      </h2>
      <p>
        Для розміщення оголошення необхідно зареєструватися або увійти в акаунт,
        заповнити інформацію про тварину та додати фото.
      </p>

      <h2 style={{ color: "#5c4d7d", fontSize: "20px", marginTop: "25px" }}>
        3. Це безкоштовно?
      </h2>
      <p>
        Так, всі основні функції платформи безкоштовні для користувачів і
        притулків.
      </p>

      <h2 style={{ color: "#5c4d7d", fontSize: "20px", marginTop: "25px" }}>
        4. Як я можу зв’язатися з притулком?
      </h2>
      <p>
        На сторінці кожного притулку є контактна інформація (номер телефону,
        email, адреса). Також можна залишити запит через форму на сайті.
      </p>

      <h2 style={{ color: "#5c4d7d", fontSize: "20px", marginTop: "25px" }}>
        5. Чи перевіряється достовірність оголошень?
      </h2>
      <p>
        Ми застосовуємо модерацію, однак не можемо гарантувати 100%
        достовірність. Закликаємо користувачів бути уважними та обережними при
        комунікації.
      </p>

      <h2 style={{ color: "#5c4d7d", fontSize: "20px", marginTop: "25px" }}>
        6. Як видалити або змінити своє оголошення?
      </h2>
      <p>
        Після входу в акаунт перейдіть до розділу “Мої оголошення” і виберіть
        відповідну дію — редагувати або видалити.
      </p>
    </div>
  );
};

export default FAQ;
