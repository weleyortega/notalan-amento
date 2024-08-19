 import {
  asas,
  ball,
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  cameraLogo,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  joseAdv,
  logoAdriel,
  logoJaz,
  logoPullman,
  longLogo,
  midiaMax,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  XuxaoComunic,
  yourlogo,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Home",
    url: "#hero",
  },
  {
    id: "1",
    title: "parceiros",
    url: "#hero",
  },
  {
    id: "2",
    title: "sobre nós",
    url: "#how-to-use",
  },
  {
    id: "3",
    title: "faça parte",
    url: "#roadmap",
  },
  
  {
    id: "5",
    title: "Pré-Save",
    url: "#login",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [XuxaoComunic, asas, logoAdriel, logoPullman, ball, midiaMax, joseAdv, logoJaz,];

export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  file02,
  plusSquare,
  disc02,
  searchMd,
  slack,
];

export const roadmap = [
  {
    id: "0",
    title: "Voice recognition",
    text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Gamification",
    text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Chatbot customization",
    text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Integration with APIs",
    text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "Com o Pré-Save, a música ou o álbum já estará na biblioteca do fã na data de lançamento.";

export const collabContent = [
  {
    id: "0",
    title: "Acesso ao conteúdo",
    text: collabText,
  },
  {
    id: "1",
    title: "Facilita o acesso e compartilhamento.",
  },
  {
    id: "2",
    title: "Aumenta o alcance do lançamento.",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "spotify",
    icon: homeSmile,
    width: 35,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: plusSquare,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 35,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: searchMd,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: recording01,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: file02,
    width: 33,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: "0",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "9.99",
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Fuga Favorita",
    text: "A música Fuga favorita foi criada como uma homenagem e celebração da amizade entre o artista e a atriz, sendo também sua amiga próxima.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: homeSmile,
    imageUrl: benefitImage2,
    
  },
  {
    id: "1",
    title: "Sentido contrário",
    text: "A música sentido contrário, uma colaboração entre três amigos, é uma reflexão emocionante sobre a passagem do tempo e a importância de viver o momento presente",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: homeSmile,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Em breve: proteção",
    text: "A música Proteção é uma poderosa expressão de emoção e superação, inspirada no término de um relacionamento. Embora pareça o desfecho trágico de uma acdente de transito, a canção é baseada em uma historia real",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: homeSmile,
    imageUrl: benefitImage2,
    
  },
  
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "https://www.youtube.com/@notarioficial",
  },
  
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "https://www.instagram.com/notarioficial?igsh=MWxrNGo3emZjZnh3dw==",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "https://www.tiktok.com/@notarioficial?_t=8owIN0jvmZ4&_r=1",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
