import "./category-item.scss";
interface ICategoryItem {
  id: number;
  img: string;
  title: string;
}

const CategoryItem: React.FC<ICategoryItem> = ({ id, title, img }) => {
  return (
    <div className="category-item">
      <img loading="lazy" src={img} alt={`${title} image`} />
      <div className="detail">
        <h2 className="title">{title}</h2>
      </div>
    </div>
  );
};

// const CategoryItem: React.FC<ICategoryItem> = ({ id, title, img }) => {
//   return (
//     <div className="category-item">
//       <img src={img} alt={`${title} image`} />
//       <div className="detail">
//         <h2 className="title">{title}</h2>
//         <button>SHOP NOW</button>
//       </div>
//     </div>
//   );
// };

export default CategoryItem;
