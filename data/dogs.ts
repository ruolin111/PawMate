export type Dog = {
  id: string;
  name: string;
  age: string;
  breed: string;
  shelter: string;
  saves: number;
  comments: number;
  location: string;
  description: string;
  tags: string[];
  palette: string;
  adopted?: boolean;
};

export const dogs: Dog[] = [
  {
    id: "max",
    name: "Max",
    age: "2yo",
    breed: "lab mix",
    shelter: "Austin Shelter",
    saves: 214,
    comments: 18,
    location: "4.2 miles away · Sacramento, CA",
    description:
      "Max is a friendly lab mix who loves fetch and long walks. He’s been at the shelter for 3 months and is looking for an active family. Great with other dogs.",
    tags: ["Good with kids", "House trained", "High energy"],
    palette: "from-[#D8E9E3] via-[#C6DDD6] to-[#A8C9BE]",
  },
  {
    id: "coco",
    name: "Coco",
    age: "1yo",
    breed: "terrier",
    shelter: "Dallas Shelter",
    saves: 89,
    comments: 9,
    location: "7 miles away · Sacramento, CA",
    description: "Coco is bright, curious, and always ready to make a new friend.",
    tags: ["Small dog", "Playful", "Crate trained"],
    palette: "from-[#F5DCCF] via-[#EBC6B5] to-[#DFA894]",
  },
  {
    id: "bella",
    name: "Bella",
    age: "4yo",
    breed: "shepherd mix",
    shelter: "Houston Shelter",
    saves: 142,
    comments: 12,
    location: "6.1 miles away · Sacramento, CA",
    description: "Bella is calm, loyal, and happiest with her people close by.",
    tags: ["Calm", "Leash trained", "Loyal"],
    palette: "from-[#E6DFC8] via-[#D9CFAC] to-[#CBBE90]",
  },
  {
    id: "rocky",
    name: "Rocky",
    age: "6mo",
    breed: "beagle",
    shelter: "Austin Shelter",
    saves: 57,
    comments: 6,
    location: "3.8 miles away · Sacramento, CA",
    description: "Rocky is an affectionate puppy with a brave little nose for adventure.",
    tags: ["Puppy", "Curious", "Affectionate"],
    palette: "from-[#DCE6F3] via-[#C9D8EA] to-[#ACC5DF]",
  },
  {
    id: "luna",
    name: "Luna",
    age: "3yo",
    breed: "husky mix",
    shelter: "San Antonio Shelter",
    saves: 301,
    comments: 24,
    location: "8.4 miles away · Sacramento, CA",
    description: "Luna has a soft heart, clever eyes, and plenty of trail energy.",
    tags: ["Smart", "Active", "Dog friendly"],
    palette: "from-[#DFD9EC] via-[#CCC2E0] to-[#B4A6D2]",
  },
  {
    id: "duke",
    name: "Duke",
    age: "5yo",
    breed: "boxer mix",
    shelter: "Austin Shelter",
    saves: 76,
    comments: 8,
    location: "4.9 miles away · Sacramento, CA",
    description: "Duke is a gentle goofball who takes his couch time seriously.",
    tags: ["Gentle", "Mellow", "House trained"],
    palette: "from-[#F4D9C6] via-[#E9C4AA] to-[#DDAE8B]",
  },
  {
    id: "daisy",
    name: "Daisy",
    age: "2yo",
    breed: "poodle mix",
    shelter: "Dallas Shelter",
    saves: 118,
    comments: 15,
    location: "5.6 miles away · Sacramento, CA",
    description: "Daisy is gentle, bouncy, and very proud of her excellent manners.",
    tags: ["Gentle", "Low shed", "Good manners"],
    palette: "from-[#F1E2D3] via-[#E7D1BD] to-[#D8BDA4]",
  },
  {
    id: "milo",
    name: "Milo",
    age: "1yo",
    breed: "corgi mix",
    shelter: "Houston Shelter",
    saves: 203,
    comments: 19,
    location: "6.7 miles away · Sacramento, CA",
    description: "Milo brings short legs, big enthusiasm, and world-class tail wags.",
    tags: ["Friendly", "Food motivated", "Playful"],
    palette: "from-[#F3E2B7] via-[#E9CF90] to-[#DAB96C]",
  },
  {
    id: "peanut",
    name: "Peanut",
    age: "7yo",
    breed: "chihuahua mix",
    shelter: "Sacramento Animal Shelter",
    saves: 66,
    comments: 5,
    location: "4.2 miles away · Sacramento, CA",
    description: "Peanut is a tiny professional lap warmer seeking a quiet home.",
    tags: ["Senior", "Lap dog", "Quiet home"],
    palette: "from-[#DCE8D6] via-[#C7DABF] to-[#ADCBA3]",
  },
];

export const shelterDogs = [
  dogs[0],
  dogs[3],
  dogs[6],
  { ...dogs[5], adopted: true },
  dogs[4],
  dogs[7],
  { ...dogs[2], adopted: true },
  dogs[8],
];

export function getDog(id: string) {
  return dogs.find((dog) => dog.id === id);
}
