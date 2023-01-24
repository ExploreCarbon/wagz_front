export default function Logos() {
  // list of logos
  const logos = [
    {
      name: "",
      url: "https://cdn.shopify.com/s/files/1/0474/1899/8949/files/PetsPlus-sm.png?v=163129870",
    },
    {
      name: "",
      url: "https://cdn.shopify.com/s/files/1/0474/1899/8949/files/Reviewed_scrolling_logo.png?v=1642602411",
    },
    {
      name: "",
      url: "https://cdn.shopify.com/s/files/1/0474/1899/8949/files/Telecoms_scrolling_logo.png?v=1642602575",
    },
    {
      name: "",
      url: "https://cdn.shopify.com/s/files/1/0474/1899/8949/files/Tech_crunch_scrolling_logo.png?v=1642602627",
    },
    {
      name: "",
      url: "https://cdn.shopify.com/s/files/1/0474/1899/8949/files/JustLuxe-sm.png?v=1639831710",
    },
  ];
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-12 px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5 overflow-hidden">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1"
            >
              <img
                className="h-12 object-contain object-center"
                src={logo.url}
                alt={logo.name}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
