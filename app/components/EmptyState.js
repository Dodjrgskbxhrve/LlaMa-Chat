export default function EmptyState({ setOpen, setPrompt }) {
  return (
    <div className="mt-12 sm:mt-24 space-y-6 text-gray-400 text-base mx-8 sm:mx-4 sm:text-2xl leading-12">
      <p>
        {" "}
        Настройет чат с Llama 2, изменив {" "}
        <button
          className="prompt-button inline-flex items-center "
          onClick={() => setOpen(true)}
        >
          настройки{" "}
        </button>{" "}
        .
      </p>
      <p>
        Я могу следующее:{" "}
        <button
          className="prompt-button"
          onClick={() =>
            setPrompt(
              "Напиши мне спсоб стать более уверенным."
            )
          }
        >
          Помогать находить ответы
        </button>
        . Писать{" "}
        <button
          className="prompt-button"
          onClick={() =>
            setPrompt("Напиши мне, как создаются нейросети")
          }
        >
          статьи
        </button>{" "}
        или{" "}
        <button
          className="prompt-button"
          onClick={() =>
            setPrompt(
              "Написать скрипт на языке python, который обучает `bert-large` на наборе данных `IMDB`, используя класс Transformers `Trainer` и библиотеку Datasets. У меня есть доступ к четырем GPU, поэтому будем использовать DDP. Пожалуйста, напишите скрипт, а затем расскажите, как запустить его в командной строке."
            )
          }
        >
          коды
        </button>
        .{" "}
        <button
          className="prompt-button"
          onClick={() =>
            setPrompt(
              "Ответьте на этот вопрос, основываясь только на представленной здесь информации. Кошки любят собак, а собаки любят кроликов. Кошкам нравится все, что нравится собакам. Мне очень не нравятся кролики. Как кошки относятся к кроликам?"
            )
          }
        >
          Отвечать на логические вопросы
        </button>
         . {" "}
        <button
          className="prompt-button"
          onClick={() =>
            setPrompt(
              "пожалуйста, предоставьте 10 забавных имен для домашнего пеликана. Пожалуйста, придумайте уникальные эмодзи для каждого имени. Постарайтесь не повторять одни и те же эмодзи. Пусть это будут веселые, красочные и любящие имена."
            )
          }
        >
          Генерировать различные данные.
        </button>{" "}
      </p>
      <p>Начните общение с чат ботом</p>
    </div>
  );
}

