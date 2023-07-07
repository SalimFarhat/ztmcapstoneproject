import './category.styles.scss';
import { useParams } from 'react-router-dom';
import { useState, useEffect, Fragment } from 'react';
import { useSelector } from 'react-redux';
import { selectCategoriesMap, selectIsLoading } from '../../store/categories/category.selector';

// import { CategoriesContext } from '../../contexts/categories.context';
import ProductCard from '../../components/product-card/product-card.component';
import Spinner from '../../components/spinner/spinner.component';


const Category = () => {
    const {category} = useParams();
    const categoriesMap = useSelector(selectCategoriesMap)
    // const isLoading = useSelector(selectIsLoading);
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
        console.log("effect fired 2")
        setProducts(categoriesMap[category])

    },[category, categoriesMap])
    
    return(
        <Fragment>
            
            <h2 className='category-title'>{category.toUpperCase()}</h2>
                <div className='category-container'>
                {products &&
                    products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                        ))
                }
            </div>
            

        </Fragment>
    
    )

}

export default Category;