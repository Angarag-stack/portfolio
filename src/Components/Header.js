import Kebab from "../pages/icons/kebab";
import IconButton from "@/pages/icons/IconButton";
export const Header = () => {
  return (
    <div className="border border-solid flex justify-between p-4 container mx-auto">
      <p className="text-4xl">TOM</p>
      <HeaderMenuItems />
      <div className="lg:hidden">
        <Kebab />
      </div>
    </div>
  );
};

const HeaderMenuItems = () => {
  return (
    <div className="border border-solid hidden lg:flex items-center gap-x-6">
      <p>About</p>
      <p>Testimonials</p>
      <p>Contact</p>
      <p>About</p>
      <IconButton />
      <button className="bg-black text-white rounded-lg py-1.5 px-4">
        Downoad CV
      </button>
    </div>
  );
};
