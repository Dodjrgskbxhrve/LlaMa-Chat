export default function EmptyState({ setOpen, setPrompt }) {
  return (
    <div className="mt-12 sm:mt-24 space-y-6 text-gray-400 text-base mx-8 sm:mx-4 sm:text-2xl leading-12">
      <p>
        {" "}
        Кастомизируйте Llama под себя, зайдя в {" "}
        <button
          className="prompt-button inline-flex items-center "
          onClick={() => setOpen(true)}
        >
          настройки.{" "}
        </button>{" "}
      </p>
      <p>
        Я могу{" "}
        <button
          className="prompt-button"
          onClick={() =>
            setPrompt(
              "Объясни мне, как можно контролировать эмоции, при этом не подавляя их глубоко в себе"
            )
          }
        >
          объяснять понятия
        </button>
        , писать{" "}
        <button
          className="prompt-button"
          onClick={() =>
            setPrompt("Напиши мне поэму о развитии машинного обучения")
          }
        >
          текста
        </button>{" "}
        и{" "}
        <button
          className="prompt-button"
          onClick={() =>
            setPrompt(
              "Напиши код на Python, который позвояет пользователю работать с ChatGPT в консольном приложении"
            )
          }
        >
          скрипты
        </button>
        ,{" "}
        <button
          className="prompt-button"
          onClick={() =>
            setPrompt(
              "Ответьте на этот вопрос, основываясь только на представленной здесь информации. Кошки любят собак, а собаки любят кроликов. Кошкам нравится все, что нравится собакам. Мне очень не нравятся кролики. Как кошки относятся к кроликам?"
            )
          }
        >
          решать логические задачки
        </button>
        , или же придумать{" "}
        <button
          className="prompt-button"
          onClick={() =>
            setPrompt(
              "Пожалуйста, предоставьте 10 забавных имен для домашнего пеликана. Пожалуйста, придумайте уникальные эмодзи для каждого имени. Постарайтесь не повторять одни и те же эмодзи. Пусть это будут веселые, красочные и любящие имена."
            )
          }
        >
          имя твоему питомцу.
        </button>{" "}
      </p>
      <p>Начните общение.</p>
    </div>
  );
}
