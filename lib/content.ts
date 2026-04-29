export type Channel = "private chat" | "group chat";

export type Recipient = {
  id: string;
  imageUrl: string;
  alt: string;
};

export type MessageSectionData = {
  id: string;
  text: string;
  timestamp: string;
  channel: Channel;
  recipients: Recipient[];
  caption: string;
};

export const topbarIconUrl =
  "https://cdn.wonder.so/images/019db426-5d5c-79ef-9c11-449a728d8d8f/89aa96fb67dd3d82f87cc40a3d3cca31fc68355b694e49be8194edaf42e0cc80.png";

export const heroCopy = {
  brand: "baobae",
  subheading:
    "your personal relationship assistant for less mental load and more quality time.",
  scrollHint: "scroll to explore 👇",
};

const avatarA =
  "https://cdn.wonder.so/images/019db426-5d5c-79ef-9c11-449a728d8d8f/55c526d15411ef4b861136cc6533d209bd2664e3c0219ce3ca74073e425f95da.png";
const avatarB =
  "https://cdn.wonder.so/images/019db426-5d5c-79ef-9c11-449a728d8d8f/725789d460edbc84052ea351fc40ef59d7b372f2de80ef2679d9d75459e7d021.jpg";
const avatarBigA =
  "https://cdn.wonder.so/images/019db426-5d5c-79ef-9c11-449a728d8d8f/e258c4a308a54afbd6072a6e73aaf7e130d874754056c6e0b3fcab1fa68683fe.png";
const avatarBigB =
  "https://cdn.wonder.so/images/019db426-5d5c-79ef-9c11-449a728d8d8f/1a17e59a99a5c452457d64f45c35829a833645c0a190a8ee2c1667077dfedd26.jpg";

export const messageSections: MessageSectionData[] = [
  {
    id: "anniversary",
    text: "Your anniversary is in 6 days 👀 Book that Italian place in North Beach as a surprise?",
    timestamp: "9:15 AM",
    channel: "private chat",
    recipients: [{ id: "one", imageUrl: avatarB, alt: "Recipient avatar 1" }],
    caption:
      "We get it: life is busy. Between work, hobbies, friends -- the small or big moments sometimes almost slip. Baobae catches them before they drop.",
  },
  {
    id: "conversation",
    text: "This week's check-in: you both mentioned wanting to move cities eventually. Have you talked about when?",
    timestamp: "7:00 PM",
    channel: "group chat",
    recipients: [
      { id: "one", imageUrl: avatarA, alt: "Recipient avatar 1" },
      { id: "two", imageUrl: avatarB, alt: "Recipient avatar 2" },
    ],
    caption:
      "Everybody knows it: important conversations get postponed and an originally small topic becomes bigger and bigger. Baobae nudges you to talk early on.",
  },
  {
    id: "date-ideas",
    text: "You both have Sunday free 🎉 Here are 3 date ideas based on what you like.",
    timestamp: "8:30 PM",
    channel: "group chat",
    recipients: [
      { id: "one", imageUrl: avatarA, alt: "Recipient avatar 1" },
      { id: "two", imageUrl: avatarB, alt: "Recipient avatar 2" },
    ],
    caption:
      "Planning dates & finding the time can be exhausting. Baobae gots you, so you can focus on just being present.",
  },
];

export const closing = {
  cta: "Text now",
  words: ["Less", "mental load &", "more", "quality time", "for your relationship"],
  avatars: [avatarBigA, avatarBigB],
};
