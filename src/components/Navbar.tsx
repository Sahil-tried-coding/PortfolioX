import { color } from "framer-motion";
import { h1 } from "framer-motion/client";
import { Link } from "react-scroll";
// import {Link} from 'react-scroll'
const Navbar = () => {


  // const handleDownloadResume = () => {
  //   const a = document.createElement("a");
  //   a.href = resume; // Use the imported PDF directly as href
  //   a.download = "Resume.pdf";
  //   document.body.appendChild(a);
  //   a.click();
  //   document.body.removeChild(a);
  // };



  const content = [
    { name: "About", color: "#B56FFA", link: "about" },
    { name: "Skills", color: "#E8B500", link: "skills" },
    { name: "Projects", color: "#6EE7B7", link: "projects" },
  ];
  

  return (
  <div className="w-full overflow-x-hidden h-[90px] flex items-center text-white  justify-end pt-2 px-20">

<div className="w-[462px] flex gap-[32px]">
{
  content.map((item, index) => (
    <div
      key={index}
      className="px-[32px] py-[8px] border-2 rounded-[21px] cursor-pointer transition"
      style={{ borderColor: item.color }}
    >
      <Link
        to={item.link}
        smooth={true}
        duration={500}
        // offset={-100} // adjust based on your navbar height
        className={`cursor-pointer  `}
        // style={}
      >{item.name}</Link>
    </div>
  ))
}

    <div className="rounded-full cursor-pointer border-blue-600 border-2 p-3  ">
        CV
    </div>

</div>

  </div>);
};

export default Navbar;
