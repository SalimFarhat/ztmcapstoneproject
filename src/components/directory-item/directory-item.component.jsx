import {BackgroundImage, Body, DirectoryItemContainer} from './directory-item.styles.jsx';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



const DirectoryItem = ({category}) => {
    const {imageUrl, title} = category;
    const navigate = useNavigate();
    // const onNavigateHandler = () => navigate(route);

    return(
        <DirectoryItemContainer>
        <BackgroundImage imageUrl={imageUrl} />
  <Body>
    <Link to={`/shop/${title}`}>
    <h2>{title}</h2>
    <p>Shop Now</p>
    </Link>
  </Body>
</DirectoryItemContainer>

    
    )
}

export default DirectoryItem;

