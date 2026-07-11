// Contoh isi file: data/coworking.js atau disatukan di data/locations.js

export const categories = ["Semua", "Jakarta Selatan", "Jakarta Pusat", "Jakarta Barat"];

export const locations = [
  {
    id: 1,
    city: "Jakarta Selatan", // Akan masuk ke prop 'badge' dan jadi acuan filter
    title: "Menara Rajawali Coworking", // Akan masuk ke prop 'title'
    address: "Jl. Dr. Ide Anak Agung Gde Agung Lot 5.1, Kawasan Mega Kuningan", // Akan masuk ke prop 'description'
    image: "/images/coworking-rajawali.jpg",
    features: ["High-Speed WiFi", "Free Coffee & Tea", "Lounge Area"],
    pricing: {
      price: "Rp 150.000",
      period: "/ hari"
    },
    link: "/coworking/menara-rajawali"
  },
  {
    id: 2,
    city: "Jakarta Selatan",
    title: "Office 8 Coworking",
    address: "Gedung Office 8, Level 18-A. Jalan Senopati No. 8B, SCBD",
    image: "/images/coworking-office8.jpg",
    features: ["High-Speed WiFi", "Free Coffee & Tea", "Pantry"],
    pricing: {
      price: "Rp 150.000",
      period: "/ hari"
    },
    link: "/coworking/office-8"
  },
  {
    id: 3,
    city: "Jakarta Pusat",
    title: "The City Tower Coworking",
    address: "The City Tower Lt. 12 Unit 1N, Jl. MH Thamrin No. 81",
    image: "/images/coworking-city-tower.jpg",
    features: ["High-Speed WiFi", "Free Coffee & Tea", "City View"],
    pricing: {
      price: "Rp 150.000",
      period: "/ hari"
    },
    link: "/coworking/the-city-tower"
  }
];