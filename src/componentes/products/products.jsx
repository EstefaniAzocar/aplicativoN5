import React, { useContext } from "react";
import CartContext from "../../context/cartContext";
import styles from "./styles.module.scss";

const Products = () => {
  /* Traemos del context la funcion para agregar un producto */
  const { addItemToCart, products } = useContext(CartContext);

  return (
    <div className={styles.store}>
      <h1>Tienda Stefany</h1>
      <div className={styles.productsContainer}>
        {products &&
          products.map((product, i) => (
            <div key={i} className={styles.product}>
              <img src={product.img} alt={product.name} />
              <div>
                <p>
                  {product.name} - ${product.price}
                </p>
              </div>
              {!product.inCart ? (
                <button onClick={() => addItemToCart(product)}>
                  Agregar
                </button>
              ) : (
                <button>En el carrito</button>
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Products;