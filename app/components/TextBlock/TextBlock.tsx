import Headline from "../Headline/Headline";
import { Link } from "@remix-run/react";
import Text from "../Text/Text";

type TextBlockProps = {
  icons?: React.ReactNode;
  buttons?: React.ReactNode;
  title?: string;
  supTitle?: string;
  subTitle?: string;
  text?: string;
  titleColor?: "primary" | "secondary" | "black" | "white" | "blended";
  supColor?: "primary" | "secondary" | "black" | "white" | "blended";
  subColor?: "primary" | "secondary" | "black" | "white" | "blended";
};
function TextBlock({
  buttons,
  icons,
  title = "",
  supTitle = "",
  subTitle = "",
  text,
  titleColor = "primary",
  supColor = "black",
  subColor = "black",
}: TextBlockProps): JSX.Element {
  return (
    <div className="text-block flex h-full flex-col justify-center gap-8">
      <div>
        <div className="pb-4">
          {supTitle && (
            <Headline size="h4" extraClass={`supTitle ${supColor} pb-4`}>
              {supTitle}
            </Headline>
          )}
          {title && (
            <Headline size="h1" extraClass={`title ${titleColor}`}>
              {title}
            </Headline>
          )}
          {subTitle && (
            <Headline size="h4" extraClass={`subTitle ${subColor}`}>
              {subTitle}
            </Headline>
          )}
        </div>
        {text && <Text text={text} />}
      </div>
      <div className="icons">
        {icons?.map((icon, index: KeyType) => (
          <div key={index} className="flex flex-col justify-center">
            <img
              src={icon.icon.mediaItemUrl}
              alt={icon.icon.altText}
              className="mx-auto h-16 w-auto pb-2"
            />
            <span>{icon.label}</span>
          </div>
        ))}
      </div>

      <div className="buttons">
        {buttons?.map((button, index: KeyType) => (
          <>
            {button.label && button.url && (
              <Link
                key={index}
                to={button.url}
                className={`button ${button.size} ${button.color}`}
              >
                {button.label}
              </Link>
            )}
          </>
        ))}
      </div>
    </div>
  );
}

export default TextBlock;
