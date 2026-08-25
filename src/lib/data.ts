// 📁 src/lib/data.ts

export const siteConfig = {
  name: "Ritesh Gujarathi",
  fullName: "Ritesh Gujarathi Photography",
  founderName: "Mr. Ritesh Gujarathi",
  tagline: "Timeless Stories, Artfully Captured",
  subTagline: "Candid & Cinematic Wedding Storytellers",
  description: "Specializing in luxury destination weddings, cinematic films, and emotive love stories across Ahilyanagar, Pune, India and worldwide.",
};

export const heroSlides = [
  {
    image: "/images/compressed_DSC07206 copy.jpg",
    title: "Moments That Last Forever",
    subtitle: "Artistic wedding photography preserving your most cherished emotions.",
    location: "The Ritz-Carlton, Pune",
  },
  {
    image: "/images/compressed_DSC07302 copy.jpg",
    title: "Timeless Love Captured on Film",
    subtitle: "Cinematic films crafted with heart, soul, and pure passion.",
    location: "Fateh Garh, Udaipur",
  },
  {
    image: "/images/compressed_DSC07391 copy.jpg",
    title: "Every Glance Tells A Story",
    subtitle: "Unscripted, raw and breathtaking memories for a lifetime.",
    location: "The Golden Leaf Resort, Dhule",
  },
  {
    image: "/images/compressed_DSC07620 copy.jpg",
    title: "Grand Celebrations & Pure Love",
    subtitle: "Capturing the magic and beauty of your sacred vows.",
    location: "JW Marriott, Mumbai",
  },
];

export const founderData = {
  name: "MR. RITESH GUJARATHI",
  title: "FOUNDER, Ritesh Gujarathi Photography",
  image: "/images/ritesh-founder.jpg",
  bioParagraph1: "At the heart of our venture is Mr. Ritesh Gujarathi, a visionary with a keen eye for detail and an unwavering passion for storytelling through the lens. With every click, he aims not just to capture an image, but to freeze a moment in time — a moment filled with emotion, love, joy, or quiet beauty.",
  bioParagraph2: "Founded in 2017, our photography journey began with a simple yet powerful vision: to create timeless, artistic memories that last a lifetime. We are passionate about turning life's most meaningful moments into beautifully captured and filmed stories, stories that evoke emotion, preserve beauty, and exceed expectations.",
  stats: [
    { label: "Weddings Captured", value: "500+" },
    { label: "Years of Passion", value: "8+" },
    { label: "Destination Cities", value: "30+" },
    { label: "Happy Couples", value: "100%" },
  ],
  features: [
    {
      title: "Candid Storytelling",
      desc: "Capturing unposed emotions, teary smiles, and heartfelt glances naturally.",
    },
    {
      title: "Cinematic 4K Films",
      desc: "Shot on cinema-grade cameras with color grading suited for the big screen.",
    },
    {
      title: "Timeless Color Grading",
      desc: "Natural skin tones and warm rich palettes that never look outdated.",
    },
    {
      title: "Complete Dedication",
      desc: "From pre-wedding shoots to heirloom albums, we craft every detail with love.",
    },
  ],
};

export interface Story {
  id: number;
  couple: string;
  location: string;
  venue: string;
  date: string;
  img: string;
  description: string;
  quote: string;
  gallery: string[];
}

export const stories: Story[] = [
  {
    id: 1,
    couple: "Shyam & Sneha",
    location: "Dhule, Maharashtra",
    venue: "The Golden Leaf Resort, Dhule",
    date: "December 2024",
    img: "/images/compressed_DSC07391 copy.jpg",
    description: "Shyam and Sneha met during the lockdown. It was love at first sight for Sneha, culminating in a magnificent celebration filled with music, tears of joy, and fireworks beneath the stars.",
    quote: "A wedding is more than a celebration. It's a beautiful story of love, connection, and new beginnings.",
    gallery: [
      "/images/compressed_DSC07391 copy.jpg",
      "/images/compressed_DSC07396 copy.jpg",
      "/images/compressed_DSC07360 copy.jpg",
      "/images/compressed_DSC07361 copy.jpg",
      "/images/compressed_DSC07363 copy.jpg",
    ],
  },
  {
    id: 2,
    couple: "Mehr & Kashyap",
    location: "Lonavala, Maharashtra",
    venue: "Della Resort, Lonavala",
    date: "November 2024",
    img: "/images/compressed_DSC07218 copy.jpg",
    description: "Kashyap and Mehr had the most unforgettable destination wedding at Della, Lonavala. Surrounded by mist-clad hills, lush greenery, and their closest friends and family.",
    quote: "We capture not just how it looks, but how it feels — timeless moments made eternal.",
    gallery: [
      "/images/compressed_DSC07218 copy.jpg",
      "/images/compressed_DSC07222 copy.jpg",
      "/images/compressed_DSC07226 copy.jpg",
      "/images/compressed_DSC07231 copy.jpg",
      "/images/compressed_DSC07238 copy.jpg",
      "/images/compressed_DSC07243 copy.jpg",
    ],
  },
  {
    id: 3,
    couple: "Komal & Kunal",
    location: "Pune, Maharashtra",
    venue: "The Ritz-Carlton, Pune",
    date: "January 2025",
    img: "/images/compressed_DSC07206 copy.jpg",
    description: "Komal and Kunal's journey feels nothing less than a filmy fairytale. They studied in the same college, parted paths for work, and reconnected to build their forever together.",
    quote: "Every frame crafted with care to preserve your precious moments forever.",
    gallery: [
      "/images/compressed_DSC07206 copy.jpg",
      "/images/compressed_DSC07207 copy.jpg",
      "/images/compressed_DSC07209 copy.jpg",
      "/images/compressed_DSC07211 copy.jpg",
      "/images/compressed_DSC07215 copy.jpg",
    ],
  },
  {
    id: 4,
    couple: "Dhruv & Aanchal",
    location: "Udaipur, Rajasthan",
    venue: "Fateh Garh Palace, Udaipur",
    date: "October 2024",
    img: "/images/compressed_DSC07302 copy.jpg",
    description: "A royal Rajasthani extravaganza on the hilltops of Udaipur with regal architecture, magnificent sunsets, and vibrant folklore dancers.",
    quote: "Royal grandeur meeting intimate vows under the starry Udaipur sky.",
    gallery: [
      "/images/compressed_DSC07302 copy.jpg",
      "/images/compressed_DSC07312 copy.jpg",
      "/images/compressed_DSC07314 copy.jpg",
      "/images/compressed_DSC07317 copy.jpg",
      "/images/compressed_DSC07319 copy.jpg",
    ],
  },
  {
    id: 5,
    couple: "Shivam & Pooja",
    location: "Goa",
    venue: "W Goa, Vagator",
    date: "February 2025",
    img: "/images/compressed_DSC07335 copy.jpg",
    description: "An oceanfront sunset wedding with acoustic music, bohemian floral decor, barefoot dancing on the sand, and unforgettable haldi splashing.",
    quote: "Sunset hues, crashing waves, and two souls promising forever.",
    gallery: [
      "/images/compressed_DSC07335 copy.jpg",
      "/images/compressed_DSC07338 copy.jpg",
      "/images/compressed_DSC07343 copy.jpg",
      "/images/compressed_DSC07350 copy.jpg",
      "/images/compressed_DSC07353 copy.jpg",
    ],
  },
  {
    id: 6,
    couple: "Aditi & Rohan",
    location: "Mumbai, Maharashtra",
    venue: "JW Marriott Sahar, Mumbai",
    date: "December 2024",
    img: "/images/compressed_DSC07620 copy.jpg",
    description: "From an energetic Sangeet night with high-voltage choreography to a serene traditional pheras ritual under an opulent floral mandap.",
    quote: "Where modern elegance blends seamlessly with sacred Vedic traditions.",
    gallery: [
      "/images/compressed_DSC07620 copy.jpg",
      "/images/compressed_DSC07631 copy.jpg",
      "/images/compressed_DSC07649 copy.jpg",
      "/images/compressed_DSC07718 copy.jpg",
      "/images/compressed_DSC07594 copy.jpg",
    ],
  },
];

export interface Film {
  id: number;
  title: string;
  subtitle: string;
  src: string;
  poster: string;
  duration: string;
  category: string;
  description: string;
}

export const films: Film[] = [
  {
    id: 1,
    title: "MUNNAR",
    subtitle: "Prem & Sai | Kerala Hills",
    src: "/videos/film-1.MOV",
    poster: "/images/compressed_DSC01042.jpg",
    duration: "03:45",
    category: "Pre-Wedding",
    description: "A misty, romantic journey amidst the emerald tea plantations and lush hills of Munnar, capturing raw love in nature's lap.",
  },
  {
    id: 2,
    title: "DHRUV & AANCHAL",
    subtitle: "The Royal Udaipur Symphony",
    src: "/videos/film-2.MP4",
    poster: "/images/compressed_DSC07287 copy.jpg",
    duration: "04:12",
    category: "Wedding Film",
    description: "Grand palace celebration with folk melodies, regal royal baraat, emotional vows, and golden hour pheras.",
  },
  {
    id: 3,
    title: "THE NEXT CHAPTER",
    subtitle: "Komal & Kunal | Pune",
    src: "/videos/film-3.MP4",
    poster: "/images/compressed_DSC07329 copy.jpg",
    duration: "03:20",
    category: "Teaser",
    description: "A chic luxury city wedding teaser celebrating contemporary romance, high-energy dancing, and timeless togetherness.",
  },
  {
    id: 4,
    title: "COASTAL PROMISES",
    subtitle: "Shivam & Pooja | Goa",
    src: "/videos/film-4.MP4",
    poster: "/images/compressed_DSC07330 copy.jpg",
    duration: "02:50",
    category: "Wedding Film",
    description: "Golden sunset pheras along the Arabian sea, breezy evening toasts, and joyful celebration under fairy lights.",
  },
  {
    id: 5,
    title: "HALDI CELEBRATION",
    subtitle: "Mehr & Kashyap | Della",
    src: "/videos/film-5.mp4",
    poster: "/images/compressed_DSC07333 copy.jpg",
    duration: "02:15",
    category: "Ceremony",
    description: "Yellow florals, marigold rain, dhol beats, and spontaneous laughter during a joy-filled Haldi morning.",
  },
  {
    id: 6,
    title: "SOULMATES IN DELLA",
    subtitle: "Romantic Escape | Lonavala",
    src: "/videos/film-6.mp4",
    poster: "/images/compressed_DSC07353 copy.jpg",
    duration: "03:05",
    category: "Pre-Wedding",
    description: "Intimate whispers, playful banter, and picturesque landscape views at Della Resorts.",
  },
  {
    id: 7,
    title: "SACRED VOWS",
    subtitle: "Traditional Maharashtrian Lagna",
    src: "/videos/film-7.mp4",
    poster: "/images/compressed_DSC07594 copy.jpg",
    duration: "05:10",
    category: "Feature Film",
    description: "Sanai choughada rhythms, holy agni pradakshina, and tender familial blessings in an authentic traditional wedding.",
  },
  {
    id: 8,
    title: "IN LOVE & WONDER",
    subtitle: "Candid Emotion Highlights",
    src: "/videos/film-8.MP4",
    poster: "/images/compressed_DSC07612 copy.jpg",
    duration: "04:30",
    category: "Highlights",
    description: "Heartfelt tears of the father, the groom's first glance at his bride, and priceless unfiltered emotions.",
  },
  {
    id: 9,
    title: "MEMORIES OF GOLD",
    subtitle: "Shyam & Sneha | Dhule",
    src: "/videos/film-9.MP4",
    poster: "/images/compressed_DSC07741 copy.jpg",
    duration: "02:40",
    category: "Teaser",
    description: "Grand reception fireworks, emotional speeches, and a night filled with pure euphoria.",
  },
  {
    id: 10,
    title: "FOREVER STARTS HERE",
    subtitle: "Showreel & Cinematic Journey",
    src: "/videos/film-10.MP4",
    poster: "/images/compressed_DSC07761 copy.jpg",
    duration: "03:55",
    category: "Showreel",
    description: "A showcase of our finest cinematic frames, capturing heartfelt union across breathtaking Indian destinations.",
  },
];

export interface PortfolioItem {
  id: number;
  title: string;
  category: "Weddings" | "Pre-Wedding" | "Haldi & Mehndi" | "Reception" | "Portraits";
  location: string;
  src: string;
  aspect?: "portrait" | "landscape" | "square";
}

export const portfolioItems: PortfolioItem[] = [
  { id: 1, title: "Royal Couple Portrait", category: "Weddings", location: "Pune", src: "/images/compressed_DSC07206 copy.jpg", aspect: "portrait" },
  { id: 2, title: "Mandap Vows & Flowers", category: "Weddings", location: "Udaipur", src: "/images/compressed_DSC07302 copy.jpg", aspect: "portrait" },
  { id: 3, title: "Joyful Haldi Moments", category: "Haldi & Mehndi", location: "Lonavala", src: "/images/compressed_DSC07335 copy.jpg", aspect: "landscape" },
  { id: 4, title: "Grand Sangeet Night", category: "Reception", location: "Dhule", src: "/images/compressed_DSC07391 copy.jpg", aspect: "landscape" },
  { id: 5, title: "Bridal Glow & Jewelry", category: "Portraits", location: "Mumbai", src: "/images/compressed_DSC07620 copy.jpg", aspect: "portrait" },
  { id: 6, title: "Misty Mountain Romance", category: "Pre-Wedding", location: "Munnar", src: "/images/compressed_DSC01042.jpg", aspect: "landscape" },
  { id: 7, title: "First Dance in Starlight", category: "Reception", location: "Pune", src: "/images/compressed_DSC07218 copy.jpg", aspect: "portrait" },
  { id: 8, title: "Groom Preparation", category: "Portraits", location: "Pune", src: "/images/compressed_DSC07222 copy.jpg", aspect: "portrait" },
  { id: 9, title: "Yellow Petals Shower", category: "Haldi & Mehndi", location: "Goa", src: "/images/compressed_DSC07338 copy.jpg", aspect: "landscape" },
  { id: 10, title: "Intimate Pre-Wedding Gaze", category: "Pre-Wedding", location: "Lonavala", src: "/images/compressed_DSC07353 copy.jpg", aspect: "portrait" },
  { id: 11, title: "Sacred Sindoor Moment", category: "Weddings", location: "Mumbai", src: "/images/compressed_DSC07631 copy.jpg", aspect: "portrait" },
  { id: 12, title: "Bridal Entry Under Phoolon Ki Chaadar", category: "Weddings", location: "Udaipur", src: "/images/compressed_DSC07312 copy.jpg", aspect: "landscape" },
  { id: 13, title: "Sunlit Couple Walk", category: "Pre-Wedding", location: "Pune", src: "/images/compressed_DSC07211 copy.jpg", aspect: "landscape" },
  { id: 14, title: "Mehndi Detailed Art", category: "Haldi & Mehndi", location: "Dhule", src: "/images/compressed_DSC07360 copy.jpg", aspect: "portrait" },
  { id: 15, title: "Celebration Champagne Toast", category: "Reception", location: "Goa", src: "/images/compressed_DSC07343 copy.jpg", aspect: "portrait" },
  { id: 16, title: "Ethereal Bridal Glance", category: "Portraits", location: "Mumbai", src: "/images/compressed_DSC07649 copy.jpg", aspect: "portrait" },
  { id: 17, title: "Baraat Dancing Energy", category: "Weddings", location: "Pune", src: "/images/compressed_DSC07207 copy.jpg", aspect: "landscape" },
  { id: 18, title: "Romantic Palace Corridor", category: "Pre-Wedding", location: "Jaipur", src: "/images/compressed_DSC02586.JPG", aspect: "portrait" },
];

export const portfolioCategories = [
  "All",
  "Weddings",
  "Pre-Wedding",
  "Haldi & Mehndi",
  "Reception",
  "Portraits",
] as const;

export const contactInfo = {
  email: "riteshgujarathi7@gmail.com",
  emails: ["riteshgujarathi7@gmail.com"],
  phone: "+91 93702 43133",
  phones: ["+91 93702 43133"],
  whatsapp: "+919370243133",
  address: "Ahilyanagar & Pune, Maharashtra, India",
  shortAddress: "Ahilyanagar & Pune, Maharashtra, India",
  hours: "Monday - Sunday: 10:00 AM - 8:00 PM (By Appointment)",
  socials: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    youtube: "https://youtube.com",
    whatsapp: "https://wa.me/919370243133",
  },
};

export const enquiryOptions = {
  events: [
    "Haldi",
    "Mehendi",
    "Sangeet",
    "Wedding",
    "Reception",
    "Engagement",
    "Prewedding",
    "Other",
  ],
  services: ["Photography", "Films", "Both"],
  budgetRanges: [
    "₹1,50,000 - ₹2,50,000",
    "₹2,50,000 - ₹4,00,000",
    "₹4,00,000 - ₹6,00,000",
    "₹6,00,000+",
  ],
};

export const testimonials = [
  {
    couple: "Mehr & Kashyap",
    event: "Destination Wedding in Lonavala",
    review: "Ritesh and his team captured our wedding with such perfection! Looking at our photos and wedding film brings back every single emotion. They were unobtrusive yet captured every special moment.",
    rating: 5,
  },
  {
    couple: "Shyam & Sneha",
    event: "Grand Wedding in Dhule",
    review: "The cinematic teaser was like a Bollywood movie trailer! All our family and friends were mesmerized by the quality and attention to detail. Truly the best decision we made.",
    rating: 5,
  },
  {
    couple: "Komal & Kunal",
    event: "Luxury Wedding in Pune",
    review: "Ritesh Gujarathi Photography is world-class. From the pre-wedding shoot in Munnar to the wedding at Ritz-Carlton, their dedication and artistry are unmatched.",
    rating: 5,
  },
];