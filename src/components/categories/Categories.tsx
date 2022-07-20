import { categories } from "../../dummyData";
import CategoryItem from "../category-item/CategoryItem";
import "./categories.scss";
interface ICategories {}

const Categories: React.FC<ICategories> = () => {
  return (
    <div className="categories">
      {categories.map((category) => (
        <CategoryItem {...category} />
      ))}
    </div>
  );
};

export default Categories;
