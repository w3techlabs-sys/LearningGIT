import webImg from "../assets/web.webp";
import ecommerceImg from "../assets/ecommerce.webp";
import marketingImg from "../assets/marketing.webp";

const servicesData = [
  {
    id: 1,
    title: "Web Development",
    description:
      "Modern, scalable, high-performance websites and web apps.",
    image: webImg,
    icon: "💻",
    points: [
      "Fully Responsive",
      "Modern UI Design",
      "SEO Friendly",
    ],
    buttonText: "Discover More",
  },
  {
    id: 2,
    title: "E-Commerce",
    description:
      "Professional online stores built for conversion and growth.",
    image: ecommerceImg,
    icon: "🛒",
    points: [
      "Payment Gateway",
      "Inventory Management",
      "Fast Checkout",
    ],
    buttonText: "Discover More",
  },
  {
    id: 3,
    title: "Digital Marketing",
    description:
      "Data-driven marketing strategies that increase reach and sales.",
    image: marketingImg,
    icon: "📈",
    points: [
      "Social Campaigns",
      "Paid Ads",
      "Lead Generation",
    ],
    buttonText: "Discover More",
  },
];

export default servicesData;