import Headline from "../Headline/Headline";
export default function Logos(props) {
  const content = props.content;
  return (
    <div className="bg-primary overflow-hidden">
      <div className="mx-auto max-w-7xl py-12 px-6 lg:px-8">
        <div className="text-center mx-auto mt-8">
          <Headline size="h3" color="white">
            {content.title}
          </Headline>
        </div>
        <div className="scroll-parent">
          <div className="scroll-element primary flex flex-row">
            {content.logos?.map((logo, index) => (
              <div
                key={index}
                className={`flex flex-col items-center justify-center px-4 w-full lg:w-1/4`}
              >
                <img
                  className="h-auto w-full lg:w-36"
                  src={logo.logo.mediaItemUrl}
                  alt={logo.logo.altText}
                />
              </div>
            ))}
          </div>
          <div className="scroll-element secondary flex flex-row">
            {content.logos?.map((logo, index) => (
              <div
                key={index}
                className={`flex flex-col items-center justify-center px-4 w-full lg:w-1/4`}
              >
                <img
                  className="h-auto w-full lg:w-36"
                  src={logo.logo.mediaItemUrl}
                  alt={logo.logo.altText}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
