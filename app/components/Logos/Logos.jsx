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
    // only show 1 slide on mobile
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <div className="overflow-hidden bg-primary py-8">
      <div className="max-w-9xl mx-auto py-12 px-6 lg:px-8">
        <div className="mx-auto text-center">
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
                className="mx-auto h-auto w-full lg:w-64"
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
