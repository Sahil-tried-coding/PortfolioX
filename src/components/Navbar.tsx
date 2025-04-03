import { color } from "framer-motion";
import { h1 } from "framer-motion/client";

const Navbar = () => {
  const content = [
    { name: "Skills", color: "#E8B500" },
    { name: "Projects", color: "#6EE7B7" },
    { name: "Contact", color: "#B56FFA" },
  ];

  return (
  <div className="w-full overflow-x-hidden h-[90px] flex items-center text-white  justify-end pt-2 px-20">

<div className="w-[462px] flex gap-[32px]">
    {
        content.map((item,index)=>(
            <h1 className={`px-[32px] py-[8px]  border-2  rounded-[21px] cursor-pointer ` } style={{ borderColor: item.color }} key={index}>{item.name}</h1>
        ))
    }
    <div className="rounded-full border-blue-600 border-2 p-3  ">
        CV
    </div>

</div>

  </div>);
};

export default Navbar;
