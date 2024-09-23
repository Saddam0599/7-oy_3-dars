const Footer = () => {
  return (
    <footer className="container mx-auto w-[1180px] h-[240px] bg-main-language0 text-white p-[30px] rounded-[12px]">
      <div className="flex justify-between">
        <article className="w-1/6 h-full">
          <img src="../../public/LOGOTYPE.png" alt="LOGOTYPE.png" className="w-[55px] h-[36px]"/>
          <article>
            <img src="../../public/play-logo.png" alt="play-logo.png" className="mt-[48px] mb-[8px]"/>
            <img src="../../public/apple-logo.png" alt="apple-logo.png" />
          </article>
        </article>

        <ul >
          <li>
            <h3>О нас</h3>
          </li>
          <li className="flex mt-[15px] gap-2 text-gray-400 font-aeonik text-[12px] hover:text-main-redt hover:underline font-medium">
            <img src="../../public/file-list-2-line.png" alt="file-list-2-line.png" />
            <span>Публичная оферта</span>
          </li>
          <li className="flex mt-[15px] gap-2 text-gray-400 font-aeonik text-[12px] hover:text-main-redt hover:underline font-medium">
            <img src="../../public/advertising.png" alt="advertising.png" />
            <span>Реклама</span>
          </li>
          <li className="flex mt-[15px] gap-2 text-gray-400 font-aeonik text-[12px] hover:text-main-redt hover:underline font-medium">
            <img src="../../public/FAQ.png" alt="FAQ.png" />
            <span>F.A.Q</span>
          </li>
          <li className="flex mt-[15px] gap-2 text-gray-400 font-aeonik text-[12px] hover:text-main-redt hover:underline font-medium">
            <img src="../../public/Contacts.png" alt="Contacts.png" />
            <span>Контакты</span>
          </li>
        </ul>


        <ul >
          <li>
            <h3>Категории</h3>
          </li>
          <li className="flex mt-[15px] gap-2 text-gray-400 font-aeonik text-[12px] hover:text-main-redt hover:underline font-medium">
            <img src="../../public/movie-line.png" alt="movie-line.png" />
            <span>Кино</span>
          </li>
          <li className="flex mt-[15px] gap-2 text-gray-400 font-aeonik text-[12px] hover:text-main-redt hover:underline font-medium">
            <img src="../../public/Theater.png" alt="Theater.png" />
            <span>Театр</span>
          </li>
          <li className="flex mt-[15px] gap-2 text-gray-400 font-aeonik text-[12px] hover:text-main-redt hover:underline font-medium">
            <img src="../../public/Concerts.png" alt="Concerts.png" />
            <span>Концерты</span>
          </li>
          <li className="flex mt-[15px] gap-2 text-gray-400 font-aeonik text-[12px] hover:text-main-redt hover:underline font-medium">
            <img src="../../public/basketball-line.png" alt="basketball-line.png" />
            <span>Спорт</span>
          </li>
        </ul>


        <div className="mr-[4%]">
          <article className="mb-[55%] font-aeonik text-[12px]">
            <h3>Связаться с нами</h3>
            <span className="text-main-redt">+998 (95) 897-33-38</span>
          </article>
          <article className="font-aeonik text-[12px]">
            <h3>Социальные сети</h3>
            <span className="flex gap-4">
              <img src="../../public/instagram-line.png" alt="instagram-line.png" />
              <img src="../../public/facebook-circle-line.png" alt="facebook-circle-line.png" />
              <img src="../../public/youtube-line.png" alt="youtube-line.png" />
            </span>
          </article>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
