import Container from "../Container";
import Headline from "../Headline/Headline";
import Text from "../Text/Text";

export default function Icons(props) {
  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <Container>
        <div className="mx-auto grid grid-cols-1 gap-8 lg:gap-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="col-span-1">
            {props.content.supHeading.supHeading && (
              <Headline
                size={props.content.supHeading.size}
                extraClass={`supTitle ${props.content.supHeading.color} pb-4`}
              >
                {props.content.supHeading.supHeading}
              </Headline>
            )}
            <Headline
              size={props.content.heading.size}
              extraClass={`supTitle ${props.content.heading.color} pb-4`}
            >
              {props.content.heading.heading}
            </Headline>
            {props.content.subHeading.subHeading && (
              <Headline
                size={props.content.subHeading.size}
                extraClass={`supTitle ${props.content.subHeading.color} pb-4`}
              >
                {props.content.subHeading.subHeading}
              </Headline>
            )}
          </div>
          {props.content.icons.map((icon) => (
            <div key={icon.title} className="flex flex-col h-full col-span-1">
              <div className="mb-0 lg:mb-6 flex flex-col lg:flex-row items-center justify-left gap-8">
                {icon.icon && (
                  <img
                    src={icon.icon?.mediaItemUrl}
                    alt={icon.icon?.altText}
                    className="h-auto w-auto"
                  />
                )}
                <Headline size="h3" color="blended">
                  {icon.title}
                </Headline>
              </div>
              <div className="mt-1 flex-1">
                {icon.text && <Text text={icon.text} />}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
