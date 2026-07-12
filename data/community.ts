import type { StaticImageData } from "next/image";
import classImage from "./images/community/class.png";
import crateImage from "./images/community/crate.png";
import hikeImage from "./images/community/hike.png";
import leashImage from "./images/community/leash.png";
import parkImage from "./images/community/park.png";
import walkerImage from "./images/community/walker.png";

export type CommunityType = "meetup" | "playdate" | "gear" | "service";

export type CommunityPost = {
  id: string;
  type: CommunityType;
  label: string;
  title: string;
  summary: string;
  distance: string;
  location: string;
  description: string;
  detail: string;
  hostLabel: string;
  host: string;
  action: string;
  palette: string;
  image?: StaticImageData;
};

export const communityPosts: CommunityPost[] = [
  {
    id: "weekend-hike",
    type: "meetup",
    label: "Meetup",
    title: "Weekend hike with dogs",
    summary: "Sat, 9am",
    distance: "1.2mi away",
    location: "Land Park trailhead, Sacramento, CA · 1.2mi away",
    description:
      "An easy 3 mile loop trail, all dog sizes welcome. Bring water and a leash for the first stretch near the road.",
    detail: "Sat, Jul 11, 9:00am · 14 going",
    hostLabel: "Hosted by",
    host: "Land Park Dog People",
    action: "RSVP",
    palette: "from-[#C6DDD6] to-[#8EBBAE]",
    image: hikeImage,
  },
  {
    id: "dog-crate",
    type: "gear",
    label: "Gear for sale",
    title: "Dog crate, like new",
    summary: "$25",
    distance: "2mi away",
    location: "2mi away · Sacramento, CA",
    description:
      "Large size crate, used for about 6 months, no damage. Great for a lab sized dog or bigger.",
    detail: "$25 · Listed 2 days ago",
    hostLabel: "Seller",
    host: "Priya",
    action: "Message seller",
    palette: "from-[#F3D3BF] to-[#DF9F83]",
    image: crateImage,
  },
  {
    id: "small-dog-playdate",
    type: "playdate",
    label: "Playdate",
    title: "Small dog park meetup",
    summary: "Today, 5pm",
    distance: "0.8mi away",
    location: "McKinley dog park, Sacramento, CA · 0.8mi away",
    description:
      "Casual playdate for pups under 25lbs. Hosted by a regular at the park. Happens most weekdays around this time.",
    detail: "Today, 5:00pm · 6 going · Small dogs only",
    hostLabel: "Host",
    host: "Jamie and Coco",
    action: "Join playdate",
    palette: "from-[#D9D2E9] to-[#AA9BCB]",
    image: parkImage,
  },
  {
    id: "dog-walker",
    type: "service",
    label: "Service",
    title: "Dog walker available",
    summary: "$15/walk",
    distance: "1.5mi away",
    location: "1.5mi away · Sacramento, CA",
    description:
      "Experienced with large breeds, insured and background checked. Can do 30 or 60 minute walks.",
    detail: "$15/walk · 4.9 rating · 32 reviews",
    hostLabel: "Provider",
    host: "Marcus T",
    action: "Book a walk",
    palette: "from-[#F1E0A8] to-[#D9BC5C]",
    image: walkerImage,
  },
  {
    id: "puppy-training",
    type: "meetup",
    label: "Meetup",
    title: "Puppy training class",
    summary: "Sun, 10am",
    distance: "3.1mi away",
    location: "Southside Park · 3.1mi away",
    description: "A relaxed social training hour for pups under one year old.",
    detail: "Sun, 10:00am · 9 going",
    hostLabel: "Hosted by",
    host: "Good Dog Club",
    action: "RSVP",
    palette: "from-[#CBDFE6] to-[#8CB8C7]",
    image: classImage,
  },
  {
    id: "leash-harness",
    type: "gear",
    label: "Gear for sale",
    title: "Leash and harness set",
    summary: "$12",
    distance: "0.5mi away",
    location: "Midtown · 0.5mi away",
    description: "Barely used medium harness with matching six-foot leash.",
    detail: "$12 · Listed today",
    hostLabel: "Seller",
    host: "Morgan",
    action: "Message seller",
    palette: "from-[#D8E4CC] to-[#9CBC81]",
    image: leashImage,
  },
];

export function getCommunityPost(id: string) {
  return communityPosts.find((post) => post.id === id);
}
