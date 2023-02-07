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
        <div className="pt-16">
          <script src="https://apps.elfsight.com/p/platform.js" defer></script>
          <div className="elfsight-app-0e3e56da-b9e0-48fb-814a-4691006c37d0"></div>
        </div>
      </div>
    </Container>
  );
};

export default Social;
