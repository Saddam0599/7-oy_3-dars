import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("Ру");

  const languages = [
    { code: "ru", label: "Ру", flag: "RU.png" },
    { code: "en", label: "Ан", flag: "EN.png" },
    { code: "uz", label: "Уз", flag: "UZ.png" },
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectLanguage = (language) => {
    setSelectedLanguage(language.label);
    setIsOpen(false);
  };

  return (
    <header className="w-[85%] mx-auto h-[80px flex mb-2">
      <img
        src="../../public/LOGOTYPE–BILETICK.png"
        alt="LOGOTYPE–BILETICK.png"
        className="w-[122px] h-[32px] mt-6 "
      />
      <nav className="w-full flex items-center px-6 py-3 border-gray-200">
        <ul className="flex text-main-white font-poppins mr-[13%] ml-[28%]">
          <li className="w-[80px] h-[48px] flex flex-col items-center justify-center hover:bg-main-language">
            <img
              src="../../public/tv-2-fill.png"
              alt="tv-2-fill.png"
              className="w-[24px] h-[24px]"
            />
            <span className="w-[45px] h-[14px] hover:text-main-language1 font-medium text-[12px] leading-[14px] tracking-[0.01em] text-center">Афиша</span>
          </li>
          <li className="w-[80px] h-[48px] flex flex-col items-center justify-center hover:bg-main-language">
            <img
              src="../../public/tablet-line.png"
              alt="tablet-line.png"
              className="w-[24px] h-[24px] hover:bg-main-redt"
            />
            <span className="w-[45px] h-[14px] hover:text-main-language1 font-medium text-[12px] leading-[14px] tracking-[0.01em] text-center">Сеансы</span>
          </li>
          <li className="w-[80px] h-[48px] flex flex-col items-center justify-center hover:bg-main-language">
            <img
              src="../../public/coupon-3-line.png"
              alt="coupon-3-line.png"
              className="w-[24px] h-[24px] hover:bg-main-redt"
            />
            <span className="w-[45px] h-[14px] hover:text-main-language1 font-medium text-[12px] leading-[14px] tracking-[0.01em] text-center">Билеты</span>
          </li>
          <li className="w-[80px] h-[48px] flex flex-col items-center justify-center hover:bg-main-language">
            <img
              src="../../public/search-line.png"
              alt="search-line.png"
              className="w-[24px] h-[24px] hover:bg-main-redt"
            />
            <span className="w-[45px] h-[14px] hover:text-main-language1 font-medium text-[12px] leading-[14px] tracking-[0.01em] text-center">Поиск</span>
          </li>
        </ul>

        <div className="flex items-center gap-[20px]">
          <div className="relative w-[92px]">
            <div
              className="flex items-center w-[92px] h-[48px] bg-main-language hover:bg-main-language0 rounded-[12px] cursor-pointer"
              onClick={toggleDropdown}
            >
              <img
                src={`../../public/${
                  languages.find((l) => l.label === selectedLanguage).flag
                }`}
                className="w-[22px] h-[22px] ml-3 mr-[1.5px rounded-full]"
                alt="language-flag"
              />
              <span className="text-main-white ml-1 mr-4 hover:text-main-language1 font-medium text-[14px] leading-[16px] tracking-[0.01em]">{selectedLanguage}</span>
              <img className="w-3 h-2" src="../../public/vector-language.png" alt="vector-language.png" />
            </div>
            {isOpen && (
              <ul className="absolute mt-2 w-[92px] bg-main-language rounded-[12px] shadow-lg z-10">
                {languages.map((language) => (
                  <li
                    key={language.code}
                    className="w-full h-[48px] flex items-center justify-center text-main-white cursor-pointer hover:bg-blue-500 hover:text-main-language1"
                    onClick={() => handleSelectLanguage(language)}
                  >
                    {language.label}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <button className="w-[180px] h-[56px] bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-9 rounded-[12px]">
            Войти
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
