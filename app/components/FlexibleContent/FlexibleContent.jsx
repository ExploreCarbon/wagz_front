import TextBlock from "../TextBlock/TextBlock";
import Video from "../Video/Video";

const FlexibleContent = (props) => {
  function renderComponent(data, index) {
    switch (data.__typename) {
      case "Page_Pages_Content_FlexibleContent_Content_ContentBlock":
        return (
          <TextBlock
            key={index}
            title={data?.heading.heading?.heading}
            text={data.text}
            supTitle={data?.heading?.supHeading?.supHeading}
            subTitle={data?.heading?.subHeading?.subHeading}
            titleColor={data?.heading?.heading.color}
            buttons={data?.cta?.cta}
            icons={data?.icons?.icons}
          />
        );
      case "Page_Pages_Content_FlexibleContent_Content_Image":
        return (
          <div className="inset-y-0 right-0 isolate w-full md:block lg:absolute lg:w-1/2">
            <img
              alt=""
              src={data?.image?.largeScreenImage?.mediaItemUrl}
              className="xxl:object-right aspect-square h-full w-full object-contain object-right lg:object-right"
            />
          </div>
        );
      case "Page_Pages_Content_FlexibleContent_Content_Video":
        return <Video key={index} wistiaId={data?.wistiaId} />;
    }
  }
  return (
    <div className="flex flex-col gap-8 py-16 sm:py-32 lg:flex-row">
      {props?.content?.map((data, index) => (
        <div
          className={`w-full lg:w-2/3 ${
            data.__typename ===
              "Page_Pages_Content_FlexibleContent_Content_Image" &&
            "min-h-[500px]"
          }`}
          key={index}
        >
          {renderComponent(data, index)}
        </div>
      ))}
    </div>
  );
};

export default FlexibleContent;
