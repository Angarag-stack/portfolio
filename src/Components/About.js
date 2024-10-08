export function About() {
  return (
    <div className="mt-32 bg-gray-50  h-[1454px] md:h-[900px] container mx-auto">
      <div className="flex justify-center">
        <p className=" bg-slate-200  text-gray-600 w-[105px] h-[20px] text-sm rounded-xl text-center  mt-11  md:mb-12 mb-12  ">
          About me
        </p>
      </div>
      <div className="md:flex  md:gap-12 ">
        <div className="flex justify-center md:w-1/2 ">
          <img
            className="w-[280px] h-[360px]   md:w-[400px] md:h-[380px] md:mr-8 mb-20"
            src="About.jpg"
          ></img>
        </div>
        <div className="md:w-1/2 md:mr-20">
          <h1 className="ml-4 text-2xl">Curious about me? Here you have it:</h1>
          <p className="text-base text-gray-600  ml-4 mb-4">
            I'm a designer turned full stack developer, passionate about
            React.js and Node.js. I excel in blending technical and visual
            aspects to craft exceptional digital products, prioritizing user
            experience, precise design, and optimized code.
          </p>
          <p className="text-base text-gray-600 ml-4 mb-4">
            Since starting my web development journey in 2015, I've embraced
            challenges and kept up with the latest tech trends. Now in my early
            thirties, seven years in, I'm building cutting-edge web apps using
            Next.js, TypeScript, Nestjs, Tailwindcss, Supabase, and more.
          </p>
          <p className="text-base text-gray-600 ml-4 mb-4">
            With a progressive mindset, I enjoy the entire product development
            process, from ideation to execution. Off duty, you'll find me on
            Twitter, tracking startup journeys, or unwinding. Follow me for tech
            insights and public project updates on Twitter or GitHub.With a
            progressive mindset, I enjoy the entire product development process,
            from ideation to execution. Off duty, you'll find me on Twitter,
            tracking startup journeys, or unwinding. Follow me for tech insights
            and public project updates on Twitter or GitHub.
          </p>
          <p className="text-base text-gray-600 ml-4 mb-4">
            Finally, some quick bits about me.
          </p>
          <div className="text-base text-gray-600">
            <div className="ml-5">
              <ul className="list-disc ml-4">
                <div className="flex gap-10 mb-3">
                  <li> B.E. in Computer Engineering </li>
                  <li>Avid learner</li>
                </div>
                <li className="mb-4 ">Full time freelancer</li>
              </ul>
            </div>

            <p className="ml-4">
              One last thing, I'm available for freelance work, so feel free to
              reach out and say hello! I promise I don't bite 😉
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
