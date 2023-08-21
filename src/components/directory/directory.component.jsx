import DirectoryItem from "../directory-item/directory-item.component";

import { DirectoryContainer } from "./directory.styles";

const categories = [
  {
    id: 1,
    title: "Bvlgari",
    imageUrl:
      "https://exclusivelines.lk/wp-content/uploads/2023/03/OMNIALANDIA-AMETHYST.png",
    route: "shop/bvlgari",
  },
  {
    id: 2,
    title: "Giorgio Armani",
    imageUrl:
      "https://exclusivelines.lk/wp-content/uploads/2023/03/SI-PASSIONE-ECLAT-1-1.png",
    route: "shop/giorgio-armani",
  },
  {
    id: 3,
    title: "Montblanc",
    imageUrl: "https://exclusivelines.lk/wp-content/uploads/2023/03/EMBLEM.png",
    route: "shop/montblanc",
  },
  {
    id: 4,
    title: "Tom Ford",
    imageUrl:
      "https://exclusivelines.lk/wp-content/uploads/2023/03/BLACK-ORCHID-PARFUM-min-1.png",
    route: "shop/tom-ford",
  },
  {
    id: 5,
    title: "Lacoste",
    imageUrl:
      "https://exclusivelines.lk/wp-content/uploads/2023/03/Eau-de-Lacoste-L.12.12-pour-Lui-French-Panache.png",
    route: "shop/lacoste",
  },
];

const Directory = () => {
  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </DirectoryContainer>
  );
};

export default Directory;
