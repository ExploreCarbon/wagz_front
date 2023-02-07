import Container from "../Container";
import Headline from "../Headline/Headline";
import Text from "../Text/Text";
import { Link } from "@remix-run/react";
import { Fragment, useState } from "react";

export default function Icons(props) {
  // state for whats selected
  // use the first icon as default
  const [selectedIcon, setSelectedIcon] = useState(
    props.content.icons[0].title
  );

  const content = props.content;

  // change selectedIcon
  const changeSelectedIcon = (icon) => {
    setSelectedIcon(icon);
  };

  // component to return information on icon
  const IconInfo = ({ icon }) => {
    return (
      <Fragment>
        <Headline size="h3" color="blended">
          {icon.title}
        </Headline>
        <Text text={icon.text} />
        {icon.cta && icon.cta.label && (
          <div>
            <Link to={icon?.cta?.url} className={`button large primary`}>
              {icon.cta?.label}
            </Link>
          </div>
        )}
      </Fragment>
    );
  };
  return (
    <div
      className={`${
        content.structure === "box"
          ? "bg-linear py-24 sm:py-32"
          : "bg-gray-50 relative"
      }`}
    >
      <Container>
        {content.structure === "box" ? (
          <div>
            <div className="mx-auto max-w-xl pb-8 text-center">
              <Headline size="h2" color="white">
                {content.heading.heading}
              </Headline>
              {content.text && (
                <>
                  <div className="relative mx-auto my-8 h-[2px] w-64 bg-[#e2e2e2]" />
                  <div className="flex flex-row flex-wrap justify-center text-white">
                    <Text text={content.text} />
                  </div>
                </>
              )}
            </div>

            <div className="mx-auto mt-8 max-w-7xl rounded-xl bg-white py-8">
              <ul className="relative grid h-full grid-flow-row grid-cols-1 gap-8 p-8 lg:grid-flow-col lg:grid-cols-4">
                {content.icons.map((icon) => (
                  <div key={icon.title} className="flex justify-center">
                    <div className="grid grid-flow-row auto-rows-fr grid-rows-3">
                      <div className="mx-auto mb-2 h-20">
                        <img
                          src={icon.icon.mediaItemUrl}
                          alt={icon.icon.altText}
                          className="h-[4rem] w-auto"
                        />
                      </div>
                      <div className="flex flex-col pb-4 text-center">
                        <p class="flex-1 font-sans text-black">{icon.title}</p>
                        <div className="">
                          <div className="relative mx-auto my-2 h-[4px] w-32 bg-[#93d500]"></div>
                        </div>
                      </div>
                      <div className="relative row-span-1 lg:row-span-2">
                        {icon.text && <Text text={icon.text} />}
                      </div>
                    </div>
                  </div>
                ))}
              </ul>
              {content.cta && content.cta.label && (
                <div className="flex w-full flex-col justify-center">
                  <Link
                    to={content?.cta?.url}
                    className={`button xLarge ${content.cta?.color} mx-auto`}
                  >
                    {content.cta?.label}
                  </Link>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div>
            {/*   
            <div>
              <div className="pb-8">
                {content.supHeading.supHeading && (
                  <Headline
                    size={content.supHeading.size}
                    extraClass={`supTitle ${content.supHeading.color} pb-4`}
                  >
                    {content.supHeading.supHeading}
                  </Headline>
                )}
                {content.heading.heading && (
                  <Headline
                    size={content.heading.size}
                    extraClass={`supTitle ${content.heading.color} pb-4`}
                  >
                    {content.heading.heading}
                  </Headline>
                )}
                {content.subHeading.subHeading && (
                  <Headline
                    size={content.subHeading.size}
                    extraClass={`supTitle ${content.subHeading.color} pb-4`}
                  >
                    {content.subHeading.subHeading}
                  </Headline>
                )}
              </div>

              <div>
                <div className="flex w-full flex-row gap-8 rounded-lg bg-primary/75 px-4 py-8">
                  {content.icons.map((icon) => (
                    <div
                      key={icon.title}
                      className={`icon-selector z-[2] flex flex-1 cursor-pointer flex-col items-center justify-center py-4 ${
                        selectedIcon === icon.title &&
                        " selected rounded-lg bg-white"
                      } `}
                      onClick={() => setSelectedIcon(icon.title)}
                    >
                      <div className="flex h-16 w-16 items-center justify-center text-center lg:w-32">
                        <img
                          src={icon.icon.mediaItemUrl}
                          alt=""
                          className="h-12 w-auto"
                        />
                      </div>
                      <div className="mx-auto mt-2 flex flex-1 flex-col justify-center px-4">
                        <p
                          className={`text-center font-sans  font-bold ${
                            selectedIcon === icon.title && "text-primary-dark"
                          }`}
                        >
                          {icon.tabTitle}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mx-auto max-w-7xl">
                <div className="flex w-full flex-row items-center justify-center">
                  <div className="w-full transition  duration-150 ease-in-out lg:w-2/3">
                    {content.icons.map((icon) => (
                      <div
                        key={icon.title}
                        className={`flex w-5/6 flex-col gap-8 ${
                          selectedIcon === icon.title ? "flex" : " hidden"
                        } `}
                        onClick={() => setSelectedIcon(icon.title)}
                      >
                        <Headline size="h3" color="blended">
                          {icon.title}
                        </Headline>
                        <Text text={icon.text} />
                        {icon.cta && icon.cta.label && (
                          <div>
                            <Link
                              to={icon?.cta?.url}
                              className={`button large primary`}
                            >
                              {icon.cta?.label}
                            </Link>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="w-full flex-1 lg:w-1/3">
                    <div className="mx-auto flex max-w-lg justify-center">
                      {content.icons.map((icon) => (
                        <div
                          key={icon.title}
                          className={`min-h-[200px] w-full py-8 ${
                            selectedIcon === icon.title ? "block" : " hidden"
                          }`}
                        >
                          <img
                            alt=""
                            src={icon?.image?.mediaItemUrl}
                            className="aspect-square h-full w-full object-contain object-center"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              </div>
              */}
            <div className="">
              {(content.heading.heading ||
                content.subHeading.subHeading ||
                content.subHeading.supHeading) && (
                <div className="pb-8">
                  {content.supHeading.supHeading && (
                    <Headline
                      size={content.supHeading.size}
                      extraClass={`supTitle ${content.supHeading.color} pb-4`}
                    >
                      {content.supHeading.supHeading}
                    </Headline>
                  )}
                  {content.heading.heading && (
                    <Headline
                      size={content.heading.size}
                      extraClass={`supTitle ${content.heading.color} pb-4`}
                    >
                      {content.heading.heading}
                    </Headline>
                  )}
                  {content.subHeading.subHeading && (
                    <Headline
                      size={content.subHeading.size}
                      extraClass={`supTitle ${content.subHeading.color} pb-4`}
                    >
                      {content.subHeading.subHeading}
                    </Headline>
                  )}
                </div>
              )}

              <div className="flex flex-row justify-center">
                <div className="w-full xl:w-2/3">
                  <div className="relative grid grid-flow-row gap-8 border-b-0 px-4 lg:grid-flow-col lg:border-b-2">
                    {content.icons.map((icon) => (
                      <div
                        key={icon.title}
                        className={`fancy-icon  ${
                          selectedIcon === icon.title && " selected"
                        }`}
                      >
                        <div
                          key={icon.title}
                          className={`z-[2] flex flex-1 cursor-pointer flex-row items-center justify-center gap-8 pb-4 lg:flex-col lg:gap-1 lg:py-4 ${
                            selectedIcon === icon.title &&
                            " selected rounded-lg bg-white"
                          } `}
                          onClick={() => changeSelectedIcon(icon.title)}
                        >
                          <div className="h-12 w-32 items-center justify-center text-center lg:flex lg:h-16 lg:w-auto">
                            <img
                              src={icon.icon.mediaItemUrl}
                              alt=""
                              className="mx-auto h-12 w-auto "
                            />
                          </div>
                          <div className="mx-auto flex flex-1 flex-row items-center justify-center">
                            <p
                              className={`flex-1 text-center font-sans font-bold ${
                                selectedIcon === icon.title &&
                                "text-primary-dark"
                              }`}
                            >
                              {icon.tabTitle}
                            </p>
                            <div className="block justify-center lg:hidden">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="h-6 w-6"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div
                          className={`${
                            selectedIcon === icon.title
                              ? "flex flex-col pb-4 lg:hidden"
                              : "hidden"
                          } `}
                        >
                          <IconInfo icon={icon} />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="hidden w-full flex-row items-center justify-center lg:flex">
                    <div className="mx-auto w-5/6  pt-8  transition duration-150 ease-in-out">
                      {content.icons.map((icon) => (
                        <div
                          key={icon.title}
                          className={`flex flex-col gap-8 ${
                            selectedIcon === icon.title ? "flex" : " hidden"
                          } `}
                          onClick={() => setSelectedIcon(icon.title)}
                        >
                          <IconInfo icon={icon} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div class="hidden min-h-[600px] w-1/3 xl:block">
                  {content.icons.map((icon) => (
                    <div
                      key={icon.title}
                      className={`inset-y-0 right-0 isolate  w-full md:block lg:absolute lg:w-1/3 ${
                        selectedIcon === icon.title ? "block" : " hidden"
                      }`}
                    >
                      <img
                        alt=""
                        src={`https://dev-wagz.pantheonsite.io/wp-content/uploads/2023/01/collar_app.webp`}
                        className="xxl:object-right aspect-square h-full w-full object-contain object-right lg:object-right"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </Container>
    </div>
  );
}
