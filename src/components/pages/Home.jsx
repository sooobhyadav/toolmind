import React from "react";

export default function () {
  let [count, setCount] = React.useState(1);

  let changeCount = () => {
    setCount(count + 1);
  };
  return (
    <>
      <section
  style={{ backgroundImage: "url('/images/hero.jpg')" }}
  className="bg-cover bg-center h-screen flex flex-col justify-center items-center text-white"
>
        <h1 className="text-center text-4xl sm:text-5xl lg:text-6xl font-bold py-8">
          Discover the Future of AI Tools {count}
        </h1>

        <button
          onClick={changeCount}
          className="block mx-auto p-3 bg-red-500 text-white"
        >
          Explore Tools
        </button>

       <p className="text-center max-w-[700px] mt-5 text-sm sm:text-base lg:text-lg px-4">
          Explore powerful AI platforms designed to boost productivity,
          creativity, and smarter decision-making in everyday work.
        </p>
      </section>
      <section className="bg-slate-100 py-16">
        <div className="max-w-[1320px] mx-auto px-4">
          <h2 className="text-center text-5xl font-bold">
            Popular AI Assistants
          </h2>

          <p className="text-center text-gray-600 mt-4 max-w-[700px] mx-auto">
            AI assistants help users generate content, automate tasks, answer
            questions, and improve workflow efficiency.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <ProductCard images="/images/chatgpt.jpg" title="ChatGPT" />
            <ProductCard images="/images/claude.png" title="Claude ai" />
            <ProductCard images="/images/gemini.png" title="Gemini" />
            <ProductCard images="/images/perplexity.png" title="Perplexity" />
          </div>
        </div>

        <div className="max-w-[1320px] mx-auto px-4 mt-24">
          <h2 className="text-center text-5xl font-bold">
            Creative AI Platforms
          </h2>

          <p className="text-center text-gray-600 mt-4 max-w-[700px] mx-auto">
            Creative AI tools help users generate images, videos, designs, and
            visual content within seconds.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <ProductCard images="/images/midjourney.png" title="Midjourney" />
            <ProductCard images="/images/runwayml.png" title="Runway ML" />
            <ProductCard images="/images/canva.png" title="Canva" />
            <ProductCard images="/images/firefly.png" title="Firefly" />
          </div>
        </div>
      </section>
    </>
  );
}

function ProductCard({ images, title }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:scale-105 hover:shadow-2xl duration-300">

      <a href="#">
        <img
          className="w-full h-[250px] sm:h-[300px] object-cover"
          src={images}
          alt={title}
        />
      </a>

      <div className="p-6 text-center">

        <span className="inline-flex items-center bg-red-100 text-red-600 text-xs font-medium px-3 py-1 rounded-full">
          <svg
            className="w-3 h-3 me-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M18.122 17.645a7.185 7.185 0 0 1-2.656 2.495 7.06 7.06 0 0 1-3.52.853 6.617 6.617 0 0 1-3.306-.718 6.73 6.73 0 0 1-2.54-2.266c-2.672-4.57.287-8.846.887-9.668A4.448 4.448 0 0 0 8.07 6.31 4.49 4.49 0 0 0 7.997 4c1.284.965 6.43 3.258 5.525 10.631 1.496-1.136 2.7-3.046 2.846-6.216 1.43 1.061 3.985 5.462 1.754 9.23Z"
            />
          </svg>

          Trending
        </span>

        <h5 className="mt-4 text-xl sm:text-2xl font-bold text-gray-800">
          {title}
        </h5>

        <p className="text-gray-500 mt-3 text-sm sm:text-base">
          Explore the power of modern AI tools and smart assistants.
        </p>

        <a
          href="#"
          className="inline-flex items-center mt-6 text-white bg-red-500 hover:bg-red-600 font-medium rounded-lg text-sm px-5 py-3 duration-300"
        >
          Read more

          <svg
            className="w-4 h-4 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 12H5m14 0-4 4m4-4-4-4"
            />
          </svg>
        </a>

      </div>
    </div>
  );
}