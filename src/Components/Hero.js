export function Hero() {
  return (
    <div className="container mx-auto md:flex md:flex-row-reverse md:gap-12 ">
      <div className="md:w-1/2">
        <img
          className="w-60 h-64 mt-16  ml-auto mr-auto md:w-72 md:h-80 md:mr-20"
          src="profile.png"
        />
      </div>
      <div className="md:w-1/2 md:ml-20">
        <p className="text-4xl mt-12 ml-4 md:text-5xl"> Hi, I’m Tom 👋</p>
        <p className="text-base text-slate-600 ml-4 ">
          I specialize in full stack development, particularly with React.js and
          Node.js. My main goal is to create exceptional digital experiences
          that are fast, visually appealing, and accessible to everyone. With
          over 7 years of experience in web development, I continue to find joy
          in crafting innovative solutions and designs.
        </p>
        <div className="flex mt-12  gap-2 mb-2 ">
          <img className=" ml-4 w-6 h-6 " src="location.svg"></img>
          <p>Ulaanbaatar, Mongolia</p>
        </div>
        <div className="flex items-center ml-6 gap-2">
          <img className=" w-2 h-2 " src="dot.svg"></img>
          <p> Available for new projects</p>
        </div>
        <div className="flex mt-12 ml-2 p-1.5 gap-1">
          <img src="cat.svg"></img>
          <img src="fly.svg"></img>
          <img src="circleButton.svg"></img>
        </div>
      </div>
    </div>
  );
}
