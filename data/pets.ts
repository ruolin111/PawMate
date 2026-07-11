export type Pet = {
  id: string;
  name: string;
  breed: string;
  age: string;
  chats: string[];
  color: string;
};

export const pets: Pet[] = [
  {
    id: "biscuit",
    name: "Biscuit",
    breed: "Golden retriever",
    age: "3yo",
    chats: ["Feeding schedule", "Walk schedule", "Vet visit notes"],
    color: "bg-[#E8B77D]",
  },
  {
    id: "coco",
    name: "Coco",
    breed: "Mini schnauzer",
    age: "5yo",
    chats: ["Feeding schedule", "Walk schedule", "Vet visit notes"],
    color: "bg-[#A9BEC6]",
  },
];
