import Container from "../Container";
import Headline from "../Headline/Headline";
import Text from "../Text/Text";

export default function Counts(props) {
  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <Container>
        <div className="mx-auto grid grid-cols-1 gap-8 lg:mx-0 lg:max-w-none">
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
          <div class="col-span-1 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            {props.content.counts.map((count, index) => (
              <div
                key={count.title}
                className="flex flex-col h-full col-span-1"
              >
                <div className="flex flex-row items-center gap-8">
                  <span className="large_number">{index + 1}</span>
                  <p className="font-sans text-2xl lg:text-5xl text-gray">
                    {count.title}
                  </p>
                </div>
                <div>
                  <p>
                    <Text text={count.text} />
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
