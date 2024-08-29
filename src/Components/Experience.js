export default function Experience() {
  return (
    <div className="mt-32 bg-gray-50  h-[1454px] md:h-[900px] container mx-auto">
      <div className="flex justify-center ">
        <p className="h-[28px] w-[115px] bg-slate-200 text-gray-600 text-center rounded-xl mt-16 mb-4">
          Experience
        </p>
      </div>
      <div className="flex justify-center mb-6">
        <p className="  text-center text-gray-600  w-[300px]">
          Here is a quick summary of my most recent experiences:
        </p>
      </div>
      <div className="bg-white w-[343px] h-[372px]  rounded-xl  mx-auto py-8 px-8">
        <div>
          <img className="w-[90px] h-[28px] mb-4" src="logo-upwork.svg "></img>
          <p className="text-base text-gray-700 ">Nov 2021 - Present</p>
          <p className="text-lg">Sr. Frontend Developer</p>
          <ul className="list-disc">
            <li className="text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </li>
            <li>Ut pretium arcu et massa semper, id fringilla leo semper.</li>
            <li>Sed quis justo ac magna.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
