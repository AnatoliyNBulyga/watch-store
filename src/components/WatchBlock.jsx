import React, { useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Button from './Button';

const typesArray = ['16MB', '32MB'];
const sizesArray = [38, 40, 42, 44];

function WatchBlock({ name, imageUrl, imageUrlHover, sizes, price, id, types, onClickAddWatch, addedCount }) {

  const [activeSize, setActiveSize] = useState(sizes[0]);
  const [activeType, setActiveType] = useState(types[0]);
  const [hover, setHover] = useState(false);
  const onHoverHandler = () => setHover(true);
  const onHoverOffHandler = () => setHover(false);

  const addWatch = () => {
    const obj = {
      id,
      name,
      imageUrl,
      price,
      size: activeSize,
      type: typesArray[activeType]
    }
    onClickAddWatch(obj);
  }

  return (
    <div
      key={`${id}_${name}`}
      className="watch-block"
      onMouseEnter={onHoverHandler}
      onMouseLeave={onHoverOffHandler} >
      <img
        className={"watch-block__image", classNames({
          "hidden": hover
        })}
        src={imageUrl}
        alt={name}
      />
      <img
        className={"watch-block__image", classNames({
          "hidden": !hover
        })}
        src={imageUrlHover}
        alt={name}
      />

      <h4 className="watch-block__title">{name}</h4>
      <div className="watch-block__selector">
        <ul>
          {
            typesArray && typesArray.map((type, i) => {
              return <li
                key={`${type}_${i}`}
                onClick={() => setActiveType(i)}
                className={classNames({
                  'active': activeType === i,
                  'disabled': !types.includes(i)
                })}>{type}</li>
            })
          }
        </ul>
        <ul>
          {
            sizesArray && sizesArray.map((size, i) => {
              return (
                <li
                  key={`${size}_${i}`}
                  onClick={() => setActiveSize(size)}
                  className={classNames({
                    'active': activeSize === size,
                    'disabled': !sizes.includes(size)
                  })} >{size} mm</li>
              )
            })
          }
        </ul>
      </div>
      <div className="watch-block__bottom">
        <div className="watch-block__price">от {price} ₴</div>
        <Button onClick={addWatch} className="button--add" outline>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span>Добавить</span>
          {addedCount && <i>{addedCount}</i>}

        </Button>
      </div>
    </div>
  );
}

WatchBlock.propTypes = {
  name: PropTypes.string,
  imageUrl: PropTypes.string,
  sizes: PropTypes.array,
  price: PropTypes.number,
  id: PropTypes.number,
  types: PropTypes.arrayOf(PropTypes.number),
  isLoaded: PropTypes.bool,
  onAddWatch: PropTypes.func,
  addedCount: PropTypes.number
}

WatchBlock.defaultProps = {
  name: '---',
  imageUrl: '----',
  sizes: [],
  price: 0,
  id: 0,
  types: [],
  isLoaded: false
}

export default WatchBlock
