import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import ProductTile from './ProductTile';

const ProductGrid = () => {
  const { products, loading, error } = useSelector(
    (state) => state.productList
  );

  return (
    <div>
      {loading ? (
        <h2 className="p-12 m-24">Loading...</h2>
      ) : error ? (
        <h3>{error}</h3>
      ) : (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto pt-4 pb-16 sm:pb-24 lg:pb-32 lg:max-w-none">
            <h2 className="text-2xl font-bold pt-4 pb-4 text-gray-900">
              Ponudba Krem
            </h2>
            <p className="pt-4">
              Dolor magna eget est lorem. Proin libero nunc consequat interdum
              varius sit amet mattis. Sed risus ultricies tristique nulla
              aliquet enim tortor at auctor. Laoreet id donec ultrices tincidunt
              arcu.
            </p>

            <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
              {(products || []).map(({ image, name, category, price, _id }) => (
                <ProductTile
                  key={image}
                  name={name}
                  image={image}
                  category={category}
                  price={price}
                  id={_id}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductGrid;
