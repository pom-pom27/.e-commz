import { categories } from "../../dummyData";
import CategoryItem from "../category-item/CategoryItem";
import "./categories.scss";
interface ICategories {}

const Categories: React.FC<ICategories> = () => {
  return (
    <div className="categories">
      <h2 className="categories-title">Categories</h2>
      {categories.map((category) => (
        <CategoryItem key={category.id} {...category} />
      ))}
    </div>
  );
};

export default Categories;
