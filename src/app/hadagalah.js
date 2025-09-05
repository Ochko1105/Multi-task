{
  (" ");
}
<div className="flex">
  <div className="ml-[200px]">
    <div className="h-[500px] w-[400px] bg-gray-800 rounded-2xl ">
      <div className="pt-10 pl-10 flex-col >">
        <h1 className="text-indigo-400">Enterprise</h1>
        <p className="text-gray-400 mt-4">
          <strong className="text-white text-4xl">$99</strong>/month
        </p>
        <p className="text-gray-300 pt-6 pb-4">
          Dedicated support and infrastructure for your company.
        </p>
        <ul className="text-gray-300 pt-2  ">
          {data.map((element, index) => {
            return (
              <li className="flex gap-2 pb-2">
                {" "}
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  data-slot="icon"
                  aria-hidden="true"
                  class="h-6 w-5 flex-none text-indigo-400"
                >
                  <path
                    d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                  ></path>
                </svg>
                {element}
              </li>
            );
          })}
        </ul>
        <div className="">
          <button className=" block rounded-md bg-indigo-500 px-26 py-2.5 text-center text-sm font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 sm:mt-4 ">
            Get strarted today
          </button>
        </div>
      </div>
    </div>
  </div>
  <div className="ml-[100px]">
    <div className="h-[500px] w-[400px] bg-white/2.5 ring-1 rounded-2xl ring-white/10  ">
      <div className="pt-10 pl-10 flex-col >">
        <h1 className="text-indigo-400">Hobby</h1>
        <p className="text-gray-400 mt-4">
          <strong className="text-white text-4xl ">$29</strong>/month
        </p>
        <p className="text-gray-300 pt-6 pb-4">
          The perfect plan if you're just getting started with our product.
        </p>

        <ul className="pt-2 text-gray-300 ">
          {data2.map((element, index) => {
            return (
              <li className="flex gap-2 pb-2">
                {" "}
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  data-slot="icon"
                  aria-hidden="true"
                  class="h-6 w-5 flex-none text-indigo-400"
                >
                  <path
                    d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                  ></path>
                </svg>
                {element}
              </li>
            );
          })}
        </ul>
        <div className="pt-8">
          <button className=" block rounded-md bg-white/10 px-26 py-2.5 text-center text-sm font-semibold text-white hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 sm:mt-4 ">
            Get strarted today
          </button>
        </div>
      </div>
    </div>
  </div>
</div>;
let data = [
  "Unlimited products",
  "Unlimited subscribers",
  " Advanced analytics ",
  " Dedicated support representative",
  ,
  "Marketing automations",
  "Custom integrations",
];
let data2 = [
  "25 products",
  "Up to 10,000 subscribers",
  "Advanced analytics",
  "24-hour support response time",
];
<div className="flex gap-10">
  {data.map((element, index) => {
    return (
      <div className="h-[400px] w-[400px]">
        <div className=" flex  gap-[40px]">
          <Card image={data[index]}></Card>
        </div>
        <div>
          <Describtion title={data2[index]} price={data3[index]}></Describtion>
        </div>
      </div>
    );
  })}
</div>;
let data5 = ["nike.jpg", "nike2.jpg", "nike3.jpg"];
let data6 = ["Snekear", "Puuz", "Zunbee"];
let data3 = ["100'000", "150'000", "175'000"];
<div>
  {" "}
  <div className="h-[9000px] w-[1500px] bg-white ml-30 text-black">
    <Heading></Heading>
    <Header></Header>
    <div className="flex flex-wrap gap-[150px] w-[1500px]">
      {data.map((data) => {
        return (
          <Card
            image={data.image}
            head={data.Head}
            date={data.date}
            describtion={data.Disribtion}
          ></Card>
        );
      })}
    </div>
  </div>
</div>;
let data4 = [
  {
    image: "nike.jpg",
    date: "January 15,2025",
    Head: "Getting Started with Modern Web Development",
    Disribtion:
      "Learn fundamentals of modern web development including React, Next.js,and TypeScript,This comprehensive guide will help you build your first ...",
  },
  {
    image: "nike2.jpg",
    date: "January 12,2025",
    Head: "The art of Clean Code",
    Disribtion:
      "Discover best practices for writing maintainable,readable code that your future self and teammates will thank you for. Clean code is not just about syntax",
  },
  {
    image: "nike3.jpg",
    date: "January 10,2025",
    Head: "Building Responsive Designs",
    Disribtion:
      "Master the techniques for creating websites that look great on all devices.From mobile-first design to advanced CSS Grid layouts.",
  },
  {
    image: "nike.jpg",
    date: "January 15,2025",
    Head: "Getting Started with Modern Web Development",
    Disribtion:
      "Learn fundamentals of modern web development including React, Next.js,and TypeScript,This comprehensive guide will help you build your first ...",
  },
  {
    image: "nike2.jpg",
    date: "January 12,2025",
    Head: "The art of Clean Code",
    Disribtion:
      "Discover best practices for writing maintainable,readable code that your future self and teammates will thank you for. Clean code is not just about syntax",
  },
  {
    image: "nike3.jpg",
    date: "January 10,2025",
    Head: "Building Responsive Designs",
    Disribtion:
      "Master the techniques for creating websites that look great on all devices.From mobile-first design to advanced CSS Grid layouts.",
  },
  {
    image: "nike3.jpg",
    date: "January 10,2025",
    Head: "Building Responsive Designs",
    Disribtion:
      "Master the techniques for creating websites that look great on all devices.From mobile-first design to advanced CSS Grid layouts.",
  },
  {
    image: "nike3.jpg",
    date: "January 10,2025",
    Head: "Building Responsive Designs",
    Disribtion:
      "Master the techniques for creating websites that look great on all devices.From mobile-first design to advanced CSS Grid layouts.",
  },
  {
    image: "nike3.jpg",
    date: "January 10,2025",
    Head: "Building Responsive Designs",
    Disribtion:
      "Master the techniques for creating websites that look great on all devices.From mobile-first design to advanced CSS Grid layouts.",
  },
];
