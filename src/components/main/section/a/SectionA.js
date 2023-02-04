import React, { useState } from "react";

export default function SectionA({ data, children }) {
  const [first, setfirst] = useState("");

  return (
    <div className="max-w-screen-xl mx-auto py-16 flex flex-wrap gap-10 justify-evenly z-20">
      <HeroA></HeroA>
      {[...Array(9)].map((e, i) => (
        <CardA key={e + i}>{e}</CardA>
      ))}
    </div>
  );
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md ">
      <a href="#">
        <img
          className="rounded-t-lg"
          src="/docs/images/blog/image-1.jpg"
          alt=""
        />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
            Noteworthy technology acquisitions 2021
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 ">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
        <a
          href="#"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
        >
          Read more
          <svg
            aria-hidden="true"
            className="w-4 h-4 ml-2 -mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  );
}
export function HeroA() {
  return (
    <div
      className="hero h-[420px] rounded-2xl overflow-hidden"
      style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")` }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold text-white">Hello there</h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <a
            href="/"
            type="button"
            className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 "
          >
            View more
          </a>
        </div>
      </div>
    </div>
  );
}
export function CardA({ data, children }) {
  return (
    <div className="card w-80 bg-base-100 shadow-xl rounded-2xl overflow-hidden">
      <figure>
        <img
          className="h-60"
          src="https://placeimg.com/400/225/arch"
          alt="Shoes"
        />
      </figure>
      <div className="p-4 flex flex-col items-center bg-white">
        <h2 className="card-title text-center">Shoes!</h2>
        <p className="text-center">
          If a dog chews shoes whose shoes does he choose?
        </p>
        <h2 className="card-title text-center">Shoes!</h2>
        <div className="card-actions justify-end">
          {/* <button className="btn btn-primary">Buy Now</button> */}
        </div>
      </div>
    </div>
  );
}

export function Dummy3({ data, children }) {
  const [first, setfirst] = useState("");

  return <div></div>;
}
