import Header from "../Headline/Headline";
import Button from "../Button/Button";
export default function Split({ title, text, buttonText, buttonLink }) {
  return (
    <div className="relative flex flex-col md:flex-row justify-center items-center bg-primary lg:bg-white circle space-y-8 md:space-y-0">
      <div className="bg-primary flex-1 mt-8 lg:mt-0 mr-0 md:mr-2 flex flex-col items-center">
        <div className="wagz-container flex flex-col lg:flex-row gap-8 items-center py-0 lg:py-12 cta-section">
          <div className="flex flex-col space-y-4 flex-1 items-center lg:items-start w-full">
            <Header size="h2" color="white">
              {title}
            </Header>
            <p className="circle-text">{text}</p>
            <Button type="button" variant="white" size="large">
              <a href={buttonLink} className="text-primary font-bold text-xl">
                {buttonText}
              </a>
            </Button>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 lg:w-[200px]">
        <div className="">
          <div className="bg-white right-0 left-0 w-[100%] h-[200px] bottom-0 absolute block md:hidden" />
          <div className="relative lg:absolute right-0 lg:right-[-5px] top-0 flex flex-col justify-center items-center circle-height circle-width">
            <img
              class="mx-auto h-full w-full object-cover rounded-full aspect-square shadow-lg overflow-hidden"
              src="https://images.unsplash.com/photo-1520580413066-ac45756bdc71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
