import Products from "../products/Products";
import "./filter-list.scss";
interface IFilterList {}

const FilterList: React.FC<IFilterList> = () => {
  return (
    <div className="filter-list">
      <div className="filter">
        <h1>Dresses</h1>
        <div className="filter-row">
          <div className="filter-side">
            <span>Filter Products</span>
            <select name="color" id="color">
              <option disabled selected>
                Color
              </option>
              <option>White</option>
              <option>Black</option>
              <option>Red</option>
              <option>Blue</option>
              <option>Yellow</option>
              <option>Green</option>
            </select>
            <select name="size" id="size">
              <option disabled selected>
                Size
              </option>
              <option>XS</option>
              <option>S</option>
              <option>M</option>
              <option>L</option>
              <option>XL</option>
            </select>
          </div>
          <div className="filter-side">
            <span>Sort Products</span>
            <select className="sort-select" name="order" id="order">
              <option selected>Newest</option>
              <option>Price (low)</option>
              <option>Price (high)</option>
            </select>
          </div>
        </div>
      </div>
      <Products />
    </div>
  );
};

export default FilterList;
