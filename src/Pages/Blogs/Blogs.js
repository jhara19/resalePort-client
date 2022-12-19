import React, { useState } from "react";
import { FaUserAlt } from "react-icons/fa";

const Blogs = ({setShow, setBlogDetails}) => {

  const blogInfo = [
    {
      question:
        "What are the different ways to manage a state in a React application?",
      answer: [
        "When we talk about state in our applications, it’s important to be clear about what types of state actually matter.There are four main types of state you need to properly manage in your React apps:",
        <>
          <ul>
            <li>Local state</li>
            <li>Global state</li>
            <li>Server state</li>
            <li>URL state</li>
          </ul>
          <p>Let's cover each of these in detail:</p>
        </>,
        <>
          <p>
            Local (UI) state – Local state is data we manage in one or another
            component. Local state is most often managed in React using the
            useState hook.
          </p>
          <p>
            Global (UI) state – Global state is data we manage across multiple
            components. Global state is necessary when we want to get and update
            data anywhere in our app, or in multiple components at least.
          </p>
          <p>
            Server state – Data that comes from an external server that must be
            integrated with our UI state. Server state is a simple concept, but
            can be hard to manage alongside all of our local and global UI
            state.
          </p>
          <p>
            URL state – Data that exists on our URLs, including the pathname and
            query parameters.
          </p>
        </>,
      ],
      author: "Mohammad Rakib",
      date: "Sep 17, 2022",
    },
    {
      question: "How does prototypical inheritance work?",
      answer: [
        <p>
          In JavaScript, objects have a special hidden property [[Prototype]]
          (as named in the specification), that is either null or references
          another object. That object is called “a prototype”:
        </p>,
        <p>
          When we read a property from object, and it’s missing, JavaScript
          automatically takes it from the prototype. In programming, this is
          called “prototypal inheritance”. And soon we’ll study many examples of
          such inheritance, as well as cooler language features built upon it.
          <br />
          The property [[Prototype]] is internal and hidden, but there are many
          ways to set it.
        </p>,
        <p>
          The Prototypal Inheritance is a feature in javascript used to add
          methods and properties in objects. It is a method by which an object
          can inherit the properties and methods of another object.
          Traditionally, in order to get and set the [[Prototype]] of an object,
          we use Object. getPrototypeOf and Object.
        </p>,
      ],
      author: "Steve Jobs",
      date: "Nov 23, 1998",
    },
    {
      question: "What is a unit test? Why should we write unit tests?",
      answer: [
        <p>
          A unit test is a way of testing a unit - the smallest piece of code
          that can be logically isolated in a system. In most programming
          languages, that is a function, a subroutine, a method or property. The
          isolated part of the definition is important.
        </p>,
        <p>
          <span className="font-semibold underline">
            Reasone to write Unit Testing:
          </span>
          <br />
          For Test-Driven Development (TDD), you write unit tests before writing
          any implementation. This makes your implementation details in your
          code shorter and easier to understand. In this instance, the best time
          to write unit tests is immediately. For others, most developers write
          unit tests after the code's been written.
        </p>,
      ],
      author: "Harry Potter",
      date: "Oct 12, 2005",
    },
    {
      question: "React vs. Angular vs. Vue?",
      answer: [
        <p>
          One of the main reasons for the popularity of React is that it works
          very efficiently with the DOM. Vue also uses the virtual DOM, but
          compared to React, Vue has better performance and stability. According
          to this data, Vue and React's performance difference is subtle since
          it is only a few milliseconds.
        </p>,
        <p>
          <span className="font-semibold underline">Angular vs React</span>
          <br />
          If the choice you’re making is based on Angular vs React alone, then
          you’ll simply need to consider the pros and cons discussed for those
          libraries in this post. But overall, keep in mind that both libraries
          can be used for mobile and web apps, while Angular is generally better
          for more complex apps that are enterprise-ready. React often requires
          extra modules and components, which keeps the core library small, but
          means there’s extra work involved when incorporating outside tools.
          Angular, on the other hand, is more of a full-fledged solution that
          doesn’t require extras like React often does, though it does have a
          steeper learning curve for its core compared to React.
        </p>,
        <p>
          <span className="font-semibold underline">React vs Vue</span>
          <br />
          Vue might be the best choice if you’re a newer developer and not as
          familiar with advanced JavaScript concepts, while React is quite well
          suited for experienced programmers and developers who have worked with
          object-oriented JavaScript, functional JavaScript, and similar
          concepts.
        </p>,
        <p>
          <span className="font-semibold underline">Angular vs Vue</span>
          <br />
          In most cases, you probably wouldn’t be deciding between only Angular
          and Vue. They are vastly different libraries with very different
          feature sets and learning curves. Vue is the clear choice for less
          experienced developers, and Angular would be preferred for those
          working on larger apps. A large library like Angular would require
          more diligence in keeping up with what’s new, while Vue would be less
          demanding in this regard and the fact that the two most recent major
          releases of Vue are in separate repositories helps.
        </p>,
      ],
      author: "Mohammad Rakib",
      date: "Jan 05, 2021",
    },
  ];
  
  return (
    <div>
      {blogInfo.map((blog) => (
        <>
          <div
            data-aos="zoom-in-right"
            data-aos-duration="1500"
            className="mt-24 text-gray-100"
          >
            <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm bg-slate-800">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-400">{blog.date}</span>
                <button
                  href=" "
                  className="px-2 py-1 font-bold rounded bg-slate-500 text-gray-900"
                >
                  Javascript
                </button>
              </div>
              <div className="mt-3">
                <h1 className="text-2xl font-bold">{blog.question}</h1>
                <p className="mt-2">{blog.answer[0]}</p>
              </div>
              <div className="flex items-center justify-between mt-4">
                <button
                  className="hover:underline text-violet-400"
                  onClick={() => {
                    setShow(true);
                    setBlogDetails(blog.answer);
                  }}
                >
                  Read more
                </button>
                <div>
                  <p className="flex items-center cursor-pointer">
                    <FaUserAlt />
                    <span className="ml-2 hover:underline text-gray-400">
                      {blog.author}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      ))}
      {/* <div className="mt-24 text-gray-100">
        <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm bg-slate-800">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-400">Jun 1, 2020</span>
            <button
              href=" "
              className="px-2 py-1 font-bold rounded bg-slate-500 text-gray-900"
            >
              Javascript
            </button>
          </div>
          <div className="mt-3">
            <h1 className="text-2xl font-bold">
              Nos creasse pendere crescit angelos etc
            </h1>
            <p className="mt-2">
              Tamquam ita veritas res equidem. Ea in ad expertus paulatim
              poterunt. Imo volo aspi novi tur. Ferre hic neque vulgo hae athei
              spero. Tantumdem naturales excaecant notaverim etc cau perfacile
              occurrere. Loco visa to du huic at in dixi aër.
            </p>
          </div>
          <div className="flex items-center justify-between mt-4">
            <button
              className="hover:underline text-violet-400"
              onClick={()=>{
                setShow(true)
                setBlogDetails('My name is rakib')
              }}
            >
              Read more
            </button>
            <div>
              <p className="flex items-center cursor-pointer">
                <img
                  src="https://source.unsplash.com/50x50/?portrait"
                  alt="avatar"
                  className="object-cover w-10 h-10 mx-4 rounded-full bg-gray-500"
                />
                <span className="hover:underline text-gray-400">
                  Leroy Jenkins
                </span>
              </p>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Blogs;
