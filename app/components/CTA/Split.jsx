import Header from "../Headline/Headline";
import Button from "../Button/Button";
export default function Split({
  title,
  text,
  subTitle,
  buttonText,
  buttonLink,
}) {
  return (
    <div className="relative overflow-hidden bg-primary">
      <div className="h-56 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
        <img
          className="h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1422565096762-bdb997a56a84"
          alt=""
        />
      </div>
      <div className="relative mx-auto max-w-7xl py-12 px-6 lg:px-8 lg:py-16">
        <div className="md:ml-auto md:w-1/2 md:pl-10">
          {subTitle && (
            <Header extraclassName="pb-2" size="h3" color="white">
              {subTitle}
            </Header>
          )}
          <Header size="h1" color="white">
            {title}
          </Header>
          <p className="mt-3 text-lg text-white">{text}</p>
          {buttonText && (
            <div className="mt-8">
              <div className="inline-flex rounded-md shadow">
                <Button variant="white">
                  <a href={buttonLink} className="font-bold text-primary">
                    {buttonText}
                  </a>
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
