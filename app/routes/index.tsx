import { graphqlClient, PAGE_QUERY } from "../lib/apollo";
import { useLoaderData } from "@remix-run/react";
import Container from "../components/Container";
import Hero from "../components/Hero/Hero";
import FlexibleContent from "../components/FlexibleContent/FlexibleContent";
import Text from "../components/Text/Text";
import Icons from "../components/Icons/Icons";
import Logos from "../components/Logos/Logos";
import Counts from "../components/Counts/Counts";
import Social from "../components/Social/Social";
import Headline from "../components/Headline/Headline";
import Slider from "../components/Slider/Slider";
import { Link } from "@remix-run/react";

export const loader = async () => {
  const slug = "/";
  const { data, error } = await graphqlClient.query({
    query: PAGE_QUERY,
    variables: { slug },
  });
  if (error) {
    throw error;
  }
  return { data };
};
export default function Index() {
  const loaderData = useLoaderData();
  const data = loaderData.data.nodeByUri;

  function renderComponent(page, index: KeyType) {
    switch (page.__typename) {
      case "Page_Pages_Content_HeroImage":
        return (
          <div key={index} className="relative">
            <div className="callout">
              <div className="flex flex-col items-center justify-center gap-4 px-8 text-center">
                <span className="title">Bundle & Save</span>
                <span className="text">
                  Find the option that best fits your lifestyle.
                </span>
              </div>
            </div>
            <Hero
              largeScreenImage={page.image?.largeScreenImage?.mediaItemUrl}
              mediumScreenImage={page.image?.largeScreenImage?.mediaItemUrl}
              smallScreenImage={page.image?.largeScreenImage?.mediaItemUrl}
              alt={page?.altText}
            >
              <Container>
                <div className={`homepage-hero w-full md:w-1/2 xl:w-3/5`}>
                  {page.contentBlock?.heading && (
                    <Headline
                      size="h1"
                      extraClass={`title ${page.contentBlock?.heading?.color}  ${page.contentBlock?.heading?.size}`}
                    >
                      {page.contentBlock?.heading?.heading}
                    </Headline>
                  )}
                  {page.contentBlock?.text && (
                    <div className="text pt-8">
                      <Text text={page.contentBlock?.text} />
                    </div>
                  )}
                  <div className="flex flex-col justify-start gap-8 pt-8 lg:flex-row">
                    {page.contentBlock?.cta?.cta &&
                      page.contentBlock?.cta?.cta?.map((cta, index) => {
                        return (
                          <Link
                            key={index}
                            to={cta?.url}
                            className={`button ${cta?.size} ${cta?.color}`}
                          >
                            {cta?.label}
                          </Link>
                        );
                      })}
                  </div>
                </div>
              </Container>
            </Hero>
          </div>
        );
      case "Page_Pages_Content_Icons":
        return (
          <div
            key={index}
            className={`${page.paddingTop} ${page.paddingBottom} relative`}
          >
            <Icons content={page} />
          </div>
        );
      case "Page_Pages_Content_LogoScroller":
        return (
          <div
            key={index}
            className={`${page.paddingTop} ${page.paddingBottom}`}
          >
            <Logos content={page} />
          </div>
        );
      case "Page_Pages_Content_SocialFeed":
        return (
          <div
            key={index}
            className={`${page.paddingTop} ${page.paddingBottom}`}
          >
            <Social content={page} />
          </div>
        );
      case "Page_Pages_Content_CountingBlocks":
        return (
          <div
            key={index}
            className={`${page.paddingTop} ${page.paddingBottom}`}
          >
            <Counts content={page} />
          </div>
        );
      case "Page_Pages_Content_Separator":
        return (
          <div className="relative" key={index}>
            <hr />
          </div>
        );
      case "Page_Pages_Content_Slider":
        return (
          <div
            key={index}
            className={`relative ${page.paddingTop} ${page.paddingBottom}`}
          >
            <div className="relative">
              <Slider content={page} />
            </div>
          </div>
        );
      case "Page_Pages_Content_FlexibleContent":
        return (
          <div
            key={index}
            className={`relative ${page.paddingTop} ${page.paddingBottom}`}
          >
            <Container>
              <FlexibleContent content={page.content} />
            </Container>
          </div>
        );
    }
  }
  return (
    <div className="w-full">
      {data.pages.content.map((page, index: KeyType) => {
        return renderComponent(page, index);
      })}
    </div>
  );
}
