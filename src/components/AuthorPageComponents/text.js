import { FaCode, FaDatabase, FaGithub, FaTelegram } from "react-icons/fa";
import { FaGears } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { IoLanguage } from "react-icons/io5";
import { MdOutlineDesignServices } from "react-icons/md";


export const skillsList = [
  {
    category: "Frontend",
    skills: [
      "HTML",
      "CSS/SCSS",
      "TailwindCSS",
      "Material UI",
      "Vanilla JS",
      "React.JS",
      "React Native",
      "Next.JS",
      "Redux Toolkit",
      "Three.JS",
      "React Three Fiber",
      "React Three Drei",
      "Astro",
    ],
    logo: <FaCode />,
  },
  {
    category: "Backend",
    skills: [
      "Node.JS",
      "Nest.JS",
      "MongoDB",
      "PostgreSQL",
      "Express",
      "Firebase",
    ],
    logo: <FaDatabase />,
  },
  {
    category: "Embedded",
    skills: ["C++", "Arduino"],
    logo: <FaGears />,
  },

  {
    category: "Design",
    skills: ["Figma", "Blender"],
    logo: <MdOutlineDesignServices />,
  },
  {
    category: "Languages",
    skills: ["English (Beginner)", "Ukrainian (Native)"],
    logo: <IoLanguage />,
  },
];

export const contactsList = [
  {
    name: "GitHub",
    link: "https://github.com/TraceOfHumanity",
    logo: <FaGithub />,
  },
  {
    name: "Telegram",
    link: "https://t.me/TraceOfHumanity",
    logo: <FaTelegram />,
  },
  {
    name: "Email",
    link: "mailto:azalexxx02@gmail.com",
    logo: <IoMdMail />,
  },
];
