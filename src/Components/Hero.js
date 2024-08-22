export function Hero() {
  return (
    <div>
      {" "}
      <img src="profile.png" />
      <p className=" text-4xl mt-12"> Hi, I’m Tom 👋</p>
      <p className="text-base text-slate-600">
        I specialize in full stack development, particularly with React.js and
        Node.js. My main goal is to create exceptional digital experiences that
        are fast, visually appealing, and accessible to everyone. With over 7
        years of experience in web development, I continue to find joy in
        crafting innovative solutions and designs.
      </p>
      <div className="flex mt-12">
        <img src="location.svg"></img>
        <p>Ulaanbaatar, Mongolia</p>
      </div>
      <div className="flex">
        <img src="dot.svg"></img>
        <p> Available for new projects</p>
      </div>
    </div>
  );
}
