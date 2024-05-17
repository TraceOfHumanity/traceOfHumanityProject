import { FaCode, FaDatabase, FaGithub, FaTelegram } from "react-icons/fa";
import { FaGears } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { IoLanguage } from "react-icons/io5";
import { MdOutlineDesignServices } from "react-icons/md";


export const greetingPopupText = {
  title: "Welcome to Trace of Humanity!",
  text: [
    "We are pleased to welcome you to a repository of knowledge where the diversity of information about various spheres of human life is brought together. Here, you can find general information about science, technology, art, culture, history, and much more.",
    "Explore, learn, share your impressions, and broaden your horizons.",
    "Wishing you exciting discoveries and an endless source of learning with 'Trace of Humanity'!",
  ],
};

export const greetingAuthorText = [
  `Hello everyone! My name is Alexander, and I sincerely want to make our
    world a better place. This task requires a lot of effort, but I am
    sure that modern technology gives us incredible opportunities that our
    ancestors could not even imagine. Therefore, we must use these
    opportunities to become more productive and solve the complex issues
    before us.`,
  `Programming and technology are becoming an integral part of life for
    an increasing number of people. This allows us to automate many areas
    of our daily activities, which used to take a lot of time and effort.`,
  `Neural networks, data analytics and process automation give us the
    opportunity to find effective solutions and implement them.`,
  `Thanks to programming, I can confidently say that there are no
    problems that cannot be solved, everything can be solved. The only
    question is how long it will take.`,
  `Learning to program is becoming more and more accessible, thanks to
    open access to educational resources, online courses and programming
    communities. This means that anyone who has the desire can learn to
    code and make their own contribution to creating a better future.`,
  `I believe that cooperation will help us solve even the most difficult
    problems. Together we can make this world a better place for all of us
    and future generations.`,
];

export const skillsList = [
  {
    category: "Frontend",
    skills: [
      "HTML",
      "CSS/SCSS",
      "TailwindCSS",
      "Vanilla JS",
      "React",
      "React Native",
      "Next.JS",
      "Redux Toolkit",
      "Three.JS",
      "R3F",
      "React Three Drei",
      "Astro",
    ],
    // logo: <FaCode />:
  },
  {
    category: "Backend",
    skills: [
      "Node.JS",
      "MongoDB",
      "Express",
      "Firebase",
    ],
    // logo: <FaDatabase />,
  },
  {
    category: "Embedded",
    skills: ["C++", "Arduino"],
    // logo: <FaGears />,
  },

  {
    category: "Design",
    skills: ["Figma", "Blender"],
    // logo: <MdOutlineDesignServices />,
  },
  {
    category: "Languages",
    skills: ["English (Beginner)", "Ukrainian (Native)"],
    // logo: <IoLanguage />,
  },
];

// export const skillsList = [
//   "HTML",
//   "CSS/SCSS",
//   "TailwindCSS",
//   "Material UI",
//   "Vanilla JS",
//   "React.JS",
//   "React Native",
//   "Next.JS",
//   "Redux Toolkit",
//   "Three.JS",
//   "React Three Fiber",
//   "React Three Drei",
//   "Astro",
//   "Node.JS",
//   "Nest.JS",
//   "MongoDB",
//   "PostgreSQL",
//   "Express",
//   "Firebase",
//   "C++",
//   "Arduino",
//   "Figma",
//   "Blender",
//   "English (Beginner)",
//   "Ukrainian (Native)",
// ]

export const contactsList = [
  {
    name: "GitHub",
    link: "https://github.com/TraceOfHumanity",
    // logo: <FaGithub />,
  },
  {
    name: "Telegram",
    link: "https://t.me/TraceOfHumanity",
    // logo: <FaTelegram />,
  },
  {
    name: "Email",
    link: "mailto:azalexxx02@gmail.com",
    // logo: <IoMdMail />,
  },
];
