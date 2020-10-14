import React from "react";
import PropTypes from 'prop-types';


const Categories = React.memo(function({items, activeCategory, onClickCategory}) {
  
 
    return (
        <div className="categories">
            <ul>
                {
                    items && items.map( (item, index) =>
                        <li
                            className={activeCategory === index ? 'active' : '' }
                            onClick={() => onClickCategory(index)}
                            key={`${item}_${index}`} >{item}</li>
                    )
                }
            </ul>
        </div>
    );
 });

 export default Categories;

 Categories.propTypes = {
    items: PropTypes.arrayOf(PropTypes.string).isRequired, 
    onClickCategory: PropTypes.func.isRequired, 
    activeCategory: PropTypes.number
 }
 
 Categories.defaultProps = {
     items: [],
     activeCategory: 0
 }