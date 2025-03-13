export const regionOptions = [
  { value: "Global", label: "Global" },
  { value: "Africa", label: "Africa" },
  { value: "South America", label: "South America" },
  { value: "North America", label: "North America" },
  { value: "Asia", label: "Asia" },
  { value: "Europe", label: "Europe" },
  { value: "Middle East", label: "Middle East" },
  { value: "Australia & Oceania", label: "Australia & Oceania"},
];

export const ageGroupOptions = [
  {
    value: "13-17 (Teenagers)",
    label: "13-17 (Teenagers)",
    display: "Teenagers",
  },
  { value: "18-24 (Young Adults)", label: "18-24 (Young Adults)", display: "Young Adults" },
  { value: "25-34 (Millennials)", label: "25-34 (Millennials)", display: "Millennials" },
  {
    value: "35-44 (Middle-aged Adults)",
    label: "35-44 (Middle-aged Adults)",
    display: "Middle-aged Adults",
  },
  {
    value: "45-54 (Older Adults)",
    label: "45-54 (Older Adults)",
    display: "Older Adults",
  },
  {
    value: "55+ (Seniors)",
    label: "55+ (Seniors)",
    display: "Seniors",
  },
];

export const adSizeOptions = [
  {
    value: "Instagram post (1:1)",
    label: "Instagram post (1:1)",
    display: "Instagram Post",
    aspectRatio: "w-4 h-4 rounded-[2px]",
  },
  {
    value: "Facebook Ad (4:5)",
    label: "Facebook Ad (4:5)",
    display: "Facebook",
    aspectRatio: "w-[11.43px] h-4 rounded-[2px]",
  },
  {
    value: "Landscape (1.91:1)",
    label: "Landscape (1.91:1)",
    display: "Landscape",
    aspectRatio: "w-[21px] h-[18px] rounded-[2px]",
  },
  {
    value: "LinkedIn Profile Banner (4:1)",
    label: "LinkedIn Profile Banner (4:1)",
    display: "LinkedIn Banner",
    aspectRatio: "w-[16px] h-[16px] rounded-[2px]",
  },
  {
    value: "Company Page Banner (1.91:1)",
    label: "Company Page Banner (1.91:1)",
    display: "Company Banner",
    aspectRatio: "w-[19px] h-[11px] rounded-[2px]",
  },
  {
    value: "Google Ads Leaderboard (8:1)",
    label: "Google Ads Leaderboard (8:1)",
    display: "Leaderboard",
    aspectRatio: "w-[19px] h-[11px] rounded-[2px]",
  },
  {
    value: "Google Ads Skyscraper (1:3.75)",
    label: "Google Ads Skyscraper (1:3.75)",
    display: "Skyscraper",
    aspectRatio: "w-[19px] h-[11px] rounded-[2px]",
  },
];

export const languageOptions = [
  { value: "English", label: "English" },
  { value: "French", label: "French" },
  { value: "Spanish", label: "Spanish" },
  { value: "German", label: "German" },
  { value: "Portuguese", label: "Portuguese" },
  { value: "Arabic", label: "Arabic" },
  { value: "Chinese", label: "Chinese" },
  { value: "Japanese", label: "Japanese" },

];

export const demographicsOptions = [
  { value: "Male", label: "Male" },
  { value: "Female", label: "Female" },
  { value: "Others", label: "Others" },
];



export const mockImages = [
  {
    id: "1",
    image_url:
      "https://2.img-dpreview.com/files/p/E~C1000x0S4000x4000T1200x1200~articles/3925134721/0266554465.jpeg",
    prompt: "A beautiful sunset over the mountains",
    productName: "Sunset Poster",
    adSize: "16:9",
    language: "English",
    ageGroup: ["18-24", "25-34"],
    region: "North America",
  },
  {
    id: "2",
    image_url:
      "https://www.sciencebuddies.org/cdn/Files/20337/5/blobid1712842133382.png",
    prompt: "A cozy coffee shop interior",
    productName: "Coffee Shop Ad",
    adSize: "1:1",
    language: "Spanish",
    ageGroup: ["25-34"],
    region: "Europe",
  },
  {
    id: "3",
    image_url:
      "https://cdn.lucidpic.com/cdn-cgi/image/w=600,format=auto,metadata=none/66c43abe18502.png",
    prompt: "A futuristic cityscape at night",
    productName: "Cityscape Ad",
    adSize: "4:5",
    language: "French",
    ageGroup: ["18-24", "35-44"],
    region: "Asia",
  },
];