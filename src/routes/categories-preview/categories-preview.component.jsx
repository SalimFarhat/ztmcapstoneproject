import {
  CategoryPreviewContainer,
  Title,
  Preview,
} from './categories-preview.styles';

import ProductCard from '../../components/product-card/product-card.component';

const CategoriesPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <Title to={title}>{title.toUpperCase()}</Title>
      </h2>
      <Preview>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Preview>
    </CategoryPreviewContainer>
  );
};

export default CategoriesPreview;


// const CategoriesPreview = () => {
//     const categoriesMap = useSelector(selectCategoriesMap);
//     return (
//         <Fragment>
//           {Object.keys(categoriesMap).map((title) => {
//             const products = categoriesMap[title];
//             return <CategoryPreview key={title} title={title} products={products}/>
// })}
//         </Fragment>
//       );
//     };

// export default CategoriesPreview;
