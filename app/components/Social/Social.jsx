import Container from "../Container";
import Headline from "../Headline/Headline";
import Text from "../Text/Text";
const Social = (props) => {
  const content = props.content;
  return (
    <Container>
      <div>
        <div className="mx-auto max-w-xl text-center">
          <Headline size="h2" color="primary">
            {content.title}
          </Headline>
        </div>
        <div className="w-64 mx-auto relative bg-[#e2e2e2] my-8 h-[2px]" />
        <div className="flex flex-row flex-wrap justify-center">
          <Text text={content.subtitle} />
        </div>
      </div>
    </Container>
  );
};

export default Social;
