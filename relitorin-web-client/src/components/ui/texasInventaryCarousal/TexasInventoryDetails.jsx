import { useParams } from "react-router-dom";
import slides from "../../hero/heroData";

const ProductDetails = () => {
  const { texasId } = useParams();
  const product = slides.find((item) => item.id === parseInt(texasId));

  if (!product) {
    return <h2>Product not found!</h2>;
  }

  return (
    <div>
      <h1>{product.header}</h1>
      <img src={product.image} alt={product.header} />
      <p>{product.buttonLabel}</p>
      <a href={product.link}>Learn More</a>
    </div>
  );
};

export default ProductDetails;
