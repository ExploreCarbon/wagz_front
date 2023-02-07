import Header from "../Headline/Headline";
import Button from "../Button/Button";
export default function Split({ title, text, buttonText, buttonLink }) {
  return (
    <div className="circle relative flex flex-col items-center justify-center space-y-8 bg-primary md:flex-row md:space-y-0 lg:bg-white">
      <div className="mt-8 mr-0 flex flex-1 flex-col items-center bg-primary md:mr-2 lg:mt-0">
        <div className="wagz-container cta-section flex flex-col items-center gap-8 py-0 lg:flex-row lg:py-12">
          <div className="flex w-full flex-1 flex-col items-center space-y-4 lg:items-start">
            <Header size="h2" color="white">
              {title}
            </Header>
            <p className="circle-text">{text}</p>
            <Button type="button" variant="white" size="large">
              <a href={buttonLink} className="text-xl font-bold text-primary">
                {buttonText}
              </a>
            </Button>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 lg:w-[200px]">
        <div>
          <div className="absolute right-0 left-0 bottom-0 block h-[200px] w-[100%] bg-white md:hidden" />
          <div className="circle-height circle-width relative right-0 top-0 flex flex-col items-center justify-center lg:absolute lg:right-[-5px]">
            <img
              className="mx-auto aspect-square h-full w-full overflow-hidden rounded-full object-cover shadow-lg"
              src="https://images.unsplash.com/photo-1520580413066-ac45756bdc71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
