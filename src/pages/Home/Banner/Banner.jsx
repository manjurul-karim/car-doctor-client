
import banner1 from "../../../assets/images/banner/1.jpg";
import banner2 from "../../../assets/images/banner/2.jpg";
import banner3 from "../../../assets/images/banner/3.jpg";
import banner4 from "../../../assets/images/banner/4.jpg";
import banner5 from "../../../assets/images/banner/5.jpg";
import banner6 from "../../../assets/images/banner/6.jpg";
import BannerTextAndButton from "./BannerTextAndButton";

const Banner = () => {
  return (
    <div className="carousel w-full h-[600px] ">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={banner1} className="w-full rounded-lg" />
        <BannerTextAndButton></BannerTextAndButton>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
        <a href="#slide6" className="btn bg-orange-600 btn-circle mr-5">
          ❮
        </a>
        <a href="#slide2" className="btn bg-orange-600 btn-circle">
          ❯
        </a>
      </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={banner2} className="w-full rounded-lg" />
        <BannerTextAndButton></BannerTextAndButton>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
        <a href="#slide1" className="btn bg-orange-600 btn-circle mr-5">
          ❮
        </a>
        <a href="#slide3" className="btn bg-orange-600 btn-circle">
          ❯
        </a>
      </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={banner3} className="w-full rounded-lg" />
        <BannerTextAndButton></BannerTextAndButton>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
        <a href="#slide2" className="btn bg-orange-600 btn-circle mr-5">
          ❮
        </a>
        <a href="#slide4" className="btn bg-orange-600 btn-circle">
          ❯
        </a>
      </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={banner4} className="w-full rounded-lg" />
        <BannerTextAndButton></BannerTextAndButton>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
        <a href="#slide3" className="btn bg-orange-600 btn-circle mr-5">
          ❮
        </a>
        <a href="#slide5" className="btn bg-orange-600 btn-circle">
          ❯
        </a>
      </div>
      </div>
      <div id="slide5" className="carousel-item relative w-full">
        <img src={banner5} className="w-full rounded-lg" />
        <BannerTextAndButton></BannerTextAndButton>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
        <a href="#slide4" className="btn bg-orange-600 btn-circle mr-5">
          ❮
        </a>
        <a href="#slide6" className="btn bg-orange-600 btn-circle">
          ❯
        </a>
      </div>
      </div>
      <div id="slide6" className="carousel-item relative w-full">
        <img src={banner6} className="w-full rounded-lg" />
       <BannerTextAndButton></BannerTextAndButton>
       <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
        <a href="#slide5" className="btn bg-orange-600 btn-circle mr-5">
          ❮
        </a>
        <a href="#slide1" className="btn bg-orange-600 btn-circle">
          ❯
        </a>
      </div>
      </div>
    </div>
  );
};

export default Banner;
