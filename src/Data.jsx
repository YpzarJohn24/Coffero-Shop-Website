// Features
import certified from "./assets/images/certified.svg";
import coffeeBeans from "./assets/images/coffee-beans.svg";
import coffee from "./assets/images/coffee.svg";
import freeDelivery from "./assets/images/free-delivery.svg";

// Menus
import menu1 from "./assets/images/01.jpg";
import menu2 from "./assets/images/02.jpg";
import menu3 from "./assets/images/03.jpg";
import menu4 from "./assets/images/04.jpg";
import menu5 from "./assets/images/05.jpg";
import menu6 from "./assets/images/06.jpg";
import menu7 from "./assets/images/07.jpg";
import menu8 from "./assets/images/08.jpg";

// Gallery
import gallery1 from "./assets/images/gallery-1.jpg";
import gallery2 from "./assets/images/gallery-2.jpg";
import gallery3 from "./assets/images/gallery-3.jpg";
import gallery4 from "./assets/images/gallery-4.jpg";
import gallery5 from "./assets/images/gallery-5.jpg";

// Offers
import offer1 from "./assets/images/offer-1.jpg";
import offer2 from "./assets/images/offer-2.jpg";

// Testimonials
import testimonial1 from "./assets/images/testimonial-1.jpg";
import testimonial2 from "./assets/images/testimonial-2.jpg";
import testimonial3 from "./assets/images/testimonial-3.jpg";
import testimonial4 from "./assets/images/testimonial-4.jpg";

export const links = [
  {
    name: "Home",
    path: "home",
  },
  {
    name: "About",
    path: "about",
  },
  {
    name: "Features",
    path: "features",
  },
  {
    name: "Menu",
    path: "menu",
  },
  {
    name: "Gallery",
    path: "gallery",
  },
  {
    name: "Chefs",
    path: "team",
  },
  {
    name: "Testimonials",
    path: "testimonials",
  },
];

export const features = [
  {
    id: 1,
    img: freeDelivery,
    title: "Free Shipping",
    description:
      "Enjoy free shipping on all orders with no minimum purchase required.",
  },
  {
    id: 2,
    img: certified,
    title: "Organic Certified",
    description:
      "Our coffee beans are certified organic, ensuring high-quality and environmentally-friendly products.",
  },
  {
    id: 3,
    img: coffee,
    title: "High Quality",
    description:
      "We source only the finest coffee beans from around the world, ensuring a rich and flavorful experience.",
  },
  {
    id: 4,
    img: coffeeBeans,
    title: "Proper Roasting",
    description:
      "Our beans are roasted to perfection by experienced roasters to bring out the best flavor profiles.",
  },
];

export const menu = [
  {
    id: 1,
    img: menu1,
    title: "Espresso",
    description:
      "A classic espresso shot with rich, bold flavors and a velvety crema.",
    price: "$3.00",
  },
  {
    id: 2,
    img: menu2,
    title: "Cappuccino",
    description:
      "A perfect blend of espresso, steamed milk, and frothy foam for a creamy delight.",
    price: "$4.00",
  },
  {
    id: 3,
    img: menu3,
    title: "Latte",
    description:
      "Smooth and creamy, our latte combines espresso with steamed milk and a touch of foam.",
    price: "$4.50",
  },
  {
    id: 4,
    img: menu4,
    title: "Americano",
    description:
      "A strong and bold coffee made by diluting espresso with hot water.",
    price: "$3.50",
  },
  {
    id: 5,
    img: menu5,
    title: "Mocha",
    description:
      "A delicious mix of espresso, steamed milk, and rich chocolate syrup.",
    price: "$5.00",
  },
  {
    id: 6,
    img: menu6,
    title: "Flat White",
    description:
      "A balanced blend of espresso and velvety steamed milk with a thin layer of microfoam.",
    price: "$4.25",
  },
  {
    id: 7,
    img: menu7,
    title: "Macchiato",
    description:
      "A bold espresso with a dollop of steamed milk, creating a strong yet smooth flavor.",
    price: "$3.75",
  },
  {
    id: 8,
    img: menu8,
    title: "Cold Brew",
    description:
      "Smooth and refreshing, our cold brew is steeped for hours to extract the best flavors.",
    price: "$4.00",
  },
];

export const gallery = [
  {
    id: 1,
    img: gallery1,
    title: "Unique Macchiatos",
  },
  {
    id: 2,
    img: gallery2,
    title: "Latte Art Creations",
  },
  {
    id: 3,
    img: gallery3,
    title: "Signature Cappuccinos",
  },
  {
    id: 4,
    img: gallery4,
    title: "Delicious Mochas",
  },
  {
    id: 5,
    img: gallery5,
    title: "Perfect Flat Whites",
  },
];

export const offer = [
  {
    id: 1,
    img: offer1,
    title: "Summer Special",
    discount: "20% Off",
    description:
      "Enjoy a refreshing 20% discount on all iced coffees and cold brews this summer. Stay cool and caffeinated!",
  },
  {
    id: 2,
    img: offer2,
    title: "Buy One, Get One Free",
    discount: "BOGO",
    description:
      "Buy any medium-sized coffee and get another one absolutely free. Bring a friend and share the joy of coffee!",
  },
];

export const testimonials = [
  {
    id: 1,
    img: testimonial1,
    name: "Alice Johnson",
    service: "Customer",
    description:
      "The cappuccino here is simply the best I've ever had. The perfect blend of espresso, steamed milk, and foam!",
  },
  {
    id: 2,
    img: testimonial2,
    name: "Sophie Miller",
    service: "Customer",
    description:
      "I love the cold brew at this coffee shop. It's smooth, refreshing, and just the right amount of strong.",
  },
  {
    id: 3,
    img: testimonial3,
    name: "Emily Davis",
    service: "Customer",
    description:
      "The lattes are amazing! Rich and creamy with beautiful latte art. A true treat every time.",
  },
  {
    id: 4,
    img: testimonial4,
    name: "Olivia Brown",
    service: "Customer",
    description:
      "The espresso here is top-notch. Bold, flavorful, and always served with a smile. Highly recommend!",
  },
];
