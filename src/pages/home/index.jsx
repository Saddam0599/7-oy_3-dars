import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomePage = () => {
  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    dots: true,
    arrows: true,
  };

  return (
    <main>
      <div className="relative ">
        <img
          src="../../../public/Rectangle-64.png"
          alt="Rectangle-64.png"
          className="w-full rounded-[12px]"
        />
        <div className="w-7/12 h-1/12 absolute bottom-[0%] ml-[41vh] backdrop-blur-none p-6 rounded-lg text-center">
          <h3 className="font-aeonik font-medium text-[32px] text-main-white leading-[40px] tracking-[0.01em]">
            Kung Fu Panda 4
          </h3>
          <div className="w-[40%] movie-info flex text-main-white mx-auto font-normal text-[14px] leading-[16.1px] tracking-[0.01em] mt-4 mb-4">
            <h1 className="ml-7">2024</h1>
            <p className="mr-1 ml-1">•</p>
            <p>Комедия</p>
            <p className="mr-1 ml-1">•</p>
            <p className="mr-1 ml-1">1ch 34m</p>
            <p className="mr-1 ml-1">•</p>
            <p>EN</p>
            <p className="mr-1 ml-1">•</p>
            <p>6+</p>
          </div>

          <button className="w-[380px] h-[52px] rounded-[12px] flex items-center justify-center gap-[12px] border mx-auto bg-main-white">
            <img src="../../../public/play.png" alt="play.png" />
            <span className="text-main-redt">Смотреть</span>
          </button>
        </div>
      </div>

      <div className="w-[450px] h-[64px] mx-auto mt-1 mb-[48px] rounded-[12px]">
        <Slider {...settings} className="multiple-items w-full mr-[-100px] h-[64px] text-red-600">
          <div>
            <img
              src="../../../public/slinder.png"
              alt="Rectangle-64.png.png"
              className="w-[108px] h-[64px]"
            />
          </div>
          <div>
            <img
              src="../../../public/slinder1.png"
              alt="Rectangle-64.png.png"
              className="w-[108px] h-[64px] rounded-[12px]"
            />
          </div>
          <div>
            <img
              src="../../../public/slinder2.png"
              alt="Rectangle-64.png.png"
              className="w-[108px] h-[64px] rounded-[12px]"
            />
          </div>
            <div>
              <img
                src="../../../public/slinder3.png"
                alt="Rectangle-64.png.png"
                className="w-[108px] h-[64px] rounded-[12px]"
              />
            </div>
            <div>
              <img
                src="../../../public/slinder4.png"
                alt="Rectangle-64.png.png"
                className="w-[108px] h-[64px] rounded-[12px]"
              />
            </div>
          <div>
            <img
              src="../../../public/slinder5.png"
              alt="Rectangle-64.png.png"
              className="w-[108px] h-[64px] rounded-[12px]"
            />
          </div>
        </Slider>
      </div>
    </main>
  );
};

export default HomePage;
