import Headline from "../Headline/Headline";
import Slider from "react-slick";
export default function Logos(props) {
  const content = props.content;
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: true,
  };
  return (
    <div className="bg-primary overflow-hidden py-8">
      <div className="mx-auto max-w-9xl py-12 px-6 lg:px-8">
        <div className="text-center mx-auto">
          <Headline size="h3" color="white">
            {content.title}
          </Headline>
        </div>
        <Slider {...settings}>
          {content.logos?.map((logo, index) => (
            <div
              key={index}
              className={`flex flex-col items-center justify-center px-8`}
            >
              <img
                className="h-auto w-full lg:w-64"
                src={logo.logo.mediaItemUrl}
                alt={logo.logo.altText}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
