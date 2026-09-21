import priyansh1 from "../assets/projects/Priyansh/priyansh-1.jpeg";
import shreeAstavinayak1 from "../assets/projects/ShreeAstavinayak/shreeAstavinayak1.jpeg";
import harigram1 from "../assets/projects/Harigram/harigram-1.jpeg";
import harigram2 from "../assets/projects/Harigram/harigram-2.jpeg";

export const BRAND = {
  name: "JASL Realty",
  legalName: "JASL ENTERPRISES",
  slug: "jasl-realty",
  tagline: "Homes in Panvel & New Panvel",
  owner: "SUJAN DUTTA",
  phone: "8446773311",
  altPhone: "9511839356",
  phones: ["8446773311", "9511839356"],
  email: "Sujandutta007@gmail.com",
  website: "jaslrealty.in",
  websiteDisplay: "www.jaslrealty.in",
  websiteUrl: "https://jaslrealty.in",
  rera: "A99000024570",
  address: "PL 5 / 39 / 05, Sector 17, Near CKT School, New Panvel, 410206",
};

export const PROJECT_TYPES = ["1 RK", "1 BHK", "2 BHK"];

export const BUDGETS = [
  "Under ₹30 Lakhs",
  "₹30 - ₹40 Lakhs",
  "₹40 - ₹50 Lakhs",
  "₹50 - ₹70 Lakhs",
  "Above ₹70 Lakhs",
];

export const LOCATIONS = ["New Panvel", "Panvel", "Usarli", "Devad"];

export const AVAILABILITY = ["For Sale", "For Rent"];

export const PROJECTS = [
  {
    id: "priyansh-new-panvel",
    title: "Priyansh",
    location: "Usarli, New Panvel",
    city: "New Panvel",
    state: "Maharashtra",
    type: "1 RK & 1 BHK",
    listingType: "For Sale",
    availabilityNote: "Ready to Move",
    area: "1 RK & 1 BHK",
    price: "₹28 Lakhs onwards",

    // Used for budget filtering
    minPrice: 2800000,
    maxPrice: 3700000,

    approvals: "CIDCO NAINA Approved",
    contact: ["8446773311"],

    description:
      "Priyansh is a CIDCO NAINA-approved, ready-to-move residential project in Usarli, New Panvel. With excellent connectivity to Panvel railway station and convenient access to shopping, transport and major roads, it is a suitable choice for homebuyers and investors.",

    images: [priyansh1],
    videos: [],

    specifications: [
      { label: "Configuration", value: "1 RK & 1 BHK" },
      { label: "1 RK Pricing", value: "₹28 Lakhs — All Inclusive" },
      { label: "1 BHK Pricing", value: "₹37 Lakhs — All Inclusive" },
      { label: "Status", value: "Ready to Move" },
      { label: "Project Type", value: "Residential" },
      { label: "Approval", value: "CIDCO NAINA Approved" },
      { label: "Panvel Railway Station", value: "2 KM" },
    ],

    highlights: [
      "CIDCO NAINA Approved",
      "Ready-to-Move Homes",
      "1 RK & 1 BHK Available",
      "2 KM from Panvel Railway Station",
      "10 Minutes to Orion Mall",
      "Good Road Connectivity",
      "Prime Location in Usarli",
    ],

    features: ["Lift Facility", "24/7 Security", "CCTV Surveillance"],

    suitableFor: [],

    connectivity: [
      "2 KM from Panvel Railway Station",
      "10 Minutes to Orion Mall & Panvel Bus Depot",
      "Smooth Road Connectivity",
    ],

    featured: true,
  },

  {
    id: "shree-astavinayak-new-panvel",
    title: "Shree Astavinayak",
    location: "Devad, New Panvel",
    city: "New Panvel",
    state: "Maharashtra",
    type: "1 BHK & 2 BHK",
    listingType: "For Sale",
    availabilityNote: "Ready to Move",
    area: "1 BHK & 2 BHK",
    price: "₹48 Lakhs onwards",

    // Used for budget filtering
    minPrice: 4800000,
    maxPrice: 7000000,

    approvals: "CIDCO NAINA Approved",
    reraNo: "A99000024570",
    contact: ["+91 8446773311", "+91 9511839356"],

    description:
      "Shree Astavinayak is a CIDCO NAINA-approved, ready-to-move residential project in Devad, New Panvel. Located close to Panvel railway station with convenient access to shopping, transport and major roads, it offers comfortable homes for families and investors.",

    images: [shreeAstavinayak1],
    videos: [],

    specifications: [
      { label: "Configuration", value: "1 BHK & 2 BHK" },
      { label: "1 BHK Pricing", value: "₹48 Lakhs + Government Taxes" },
      { label: "2 BHK Pricing", value: "₹70 Lakhs + Government Taxes" },
      { label: "Status", value: "Ready to Move" },
      { label: "Project Type", value: "Residential" },
      { label: "Approval", value: "CIDCO NAINA Approved" },
      { label: "RERA No.", value: "A99000024570" },
      { label: "Panvel Railway Station", value: "1.5 KM" },
    ],

    highlights: [
      "CIDCO NAINA Approved",
      "Ready-to-Move Homes",
      "1 BHK & 2 BHK Available",
      "1.5 KM from Panvel Railway Station",
      "10 Minutes to Orion Mall",
      "Good Road Connectivity",
      "Prime Location in Devad",
    ],

    features: ["Lift Facility", "24/7 Security", "CCTV Surveillance"],

    suitableFor: [],

    connectivity: [
      "1.5 KM from Panvel Railway Station",
      "10 Minutes to Orion Mall & Panvel Bus Depot",
      "Smooth Road Connectivity",
    ],

    featured: true,
  },

  {
    id: "harigram-panvel",
    title: "Harigram",
    location: "Panvel",
    city: "Panvel",
    state: "Maharashtra",
    type: "1 RK & 1 BHK",
    listingType: "For Sale",
    availabilityNote: "Ready to Move",
    area: "1 RK & 1 BHK",
    price: "₹21.39 Lakhs onwards",

    // Used for budget filtering
    minPrice: 2139792,
    maxPrice: 3844568,

    approvals: "CIDCO / NAINA / RERA Approved",
    projectStructure: "Stilt + 4 Buildings",
    contact: ["+91 8446773311"],

    nearbyFacilities: [
      "Central Bank of India — 2 min walking",
      "Hospital — 200 m",
      "D.A.V. International School, Panvel — 4 km",
      "D-Mart, New Panvel — 5 km",
      "Panvel Railway Station — 5 km",
      "Sharing Auto & Taxi Facility Available",
    ],

    images: [harigram1, harigram2],
    videos: [],

    specifications: [
      { label: "Configuration", value: "1 RK & 1 BHK" },
      { label: "Approvals", value: "CIDCO / NAINA / RERA Approved" },
      { label: "Project Structure", value: "Stilt + 4 Buildings" },
      {
        label: "1 RK",
        value: "392 to 435 sq ft — ₹21,39,792 to ₹23,58,060 — All Inclusive",
      },
      {
        label: "1 BHK",
        value: "565 to 718 sq ft — ₹30,67,940 to ₹38,44,568 — All Inclusive",
      },
      { label: "Status", value: "Ready to Move" },
      { label: "PMAY", value: "Available" },
      { label: "Bank Loan", value: "Nationalized Bank Loan Available" },
    ],

    highlights: [
      "Road Touch Project",
      "Ready-to-Move Homes",
      "CIDCO / NAINA / RERA Approved",
      "1 RK & 1 BHK Available",
      "PMAY Available",
      "Nationalized Bank Loan Available",
    ],

    features: ["Garden", "Lift", "CCTV", "Kids Play Area"],

    suitableFor: [],

    connectivity: [
      "Central Bank of India — 2 min walking",
      "Hospital — 200 m",
      "D.A.V. International School, Panvel — 4 km",
      "D-Mart, New Panvel — 5 km",
      "Panvel Railway Station — 5 km",
      "Sharing Auto & Taxi Facility Available",
    ],

    featured: true,
  },
];

export const listingLabel = (value) => value || "";

export const HUBS = [
  {
    name: "Priyansh",
    region: "Usarli · New Panvel",
    descriptor: "Ready-to-Move 1 RK & 1 BHK Homes",
    image: priyansh1,
  },
  {
    name: "Shree Astavinayak",
    region: "Devad · New Panvel",
    descriptor: "Ready-to-Move 1 BHK & 2 BHK Homes",
    image: shreeAstavinayak1,
  },
  {
    name: "Harigram",
    region: "Panvel · Maharashtra",
    descriptor: "Ready-to-Move 1 RK & 1 BHK Homes",
    image: harigram1,
  },
];
