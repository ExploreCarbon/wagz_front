import { useState } from "react";
import TextBlock from "../TextBlock/TextBlock";
import Container from "../Container";

const Slider = (props) => {
  const content = props.content.slide;
  // select which slide to use
  const [selectedSlide, setSelectedSlide] = useState(content[0]);
  // handle slide change forward
  const handleSlideChangeForward = () => {
    const currentIndex = content.indexOf(selectedSlide);
    const nextSlide = content[currentIndex + 1];
    if (nextSlide) {
      setSelectedSlide(nextSlide);
    } else {
      setSelectedSlide(content[0]);
    }
  };
  // handle slide change backward
  const handleSlideChangeBackward = () => {
    const currentIndex = content.indexOf(selectedSlide);
    const nextSlide = content[currentIndex - 1];
    if (nextSlide) {
      setSelectedSlide(nextSlide);
    } else {
      setSelectedSlide(content[content.length - 1]);
    }
  };
  return (
    <div className="slider-background relative flex flex-col bg-primary pt-8 lg:bg-transparent lg:pt-0">
      <Container>
        {content.map((item) => {
          return (
            <div
              key={item}
              className={`grid-flow-row grid-cols-1 gap-16 lg:min-h-[800px] lg:grid-flow-col lg:grid-cols-2 lg:gap-32 ${
                selectedSlide === item ? "grid" : "hidden"
              }`}
            >
              <div className="relative z-[1] ">
                <img
                  alt=""
                  src={item?.image?.image?.largeScreenImage?.mediaItemUrl}
                  className="aspect-square h-full w-full object-contain object-center"
                />
              </div>
              <div className="slider-text z-[1]">
                <TextBlock
                  title={item.content?.heading.heading?.heading}
                  text={item.content.text}
                  supTitle={item.content?.heading?.supHeading?.supHeading}
                  subTitle={item.content?.heading?.subHeading?.subHeading}
                  titleColor={item.content?.heading?.heading.color}
                  supColor={item.content?.heading?.supHeading?.color}
                  subColor={item.content?.heading?.subHeading?.color}
                  buttons={item.content?.cta?.cta}
                  icons={item.content?.icons?.icons}
                />
              </div>
            </div>
          );
        })}
      </Container>
      <div className="">
        <div
          className="absolute left-0 top-[50%] h-full cursor-pointer"
          onClick={handleSlideChangeForward}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            class="h-12 w-12 cursor-pointer text-white"
          >
            <path
              strokeLinecap="round"
              strokeLineJoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </div>
        <div
          className="absolute right-0 top-[50%] z-[1] h-full cursor-pointer"
          onClick={handleSlideChangeBackward}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-12 w-12 cursor-pointer text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Slider;
