import {
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import { storedProducts } from '../products';

const ProductContext = createContext({});

const ProductProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [detailProduct, setDetailProduct] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cart, setCart] = useState({});
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    setProducts(storedProducts);
  }, []);

  const getProduct = (id) => {
    return products.find((product) => product.id === id) || {};
  };

  const addToCart = (id) => {
    const targetProduct = getProduct(id);
    const productId = targetProduct.id;
    if (!productId) {
      return;
    }
    targetProduct.inCart = true;
    targetProduct.count = 1;
    targetProduct.total = targetProduct.price;

    const cartContent = cart;
    cartContent[productId] = targetProduct;

    setCart(cartContent);
    calcTotal();
  };

  const handleDetail = (id) => {
    const targetProduct = getProduct(id);
    setDetailProduct(targetProduct);
  };

  const calcTotal = () => {
    const total = Object.values(cart).reduce((a, b) => {
      if (!b.total) {
        return a;
      }
      return a + b.total;
    }, 0);
    setCartTotal(total);
  };

  const openModal = () => setIsModalOpen(true);

  const closeModal = () => setIsModalOpen(false);

  const cartIncrement = (id) => {
    const targetProduct = cart[id];
    if (!targetProduct.count || !targetProduct.price) {
      return;
    }
    targetProduct.count++;
    targetProduct.total = targetProduct.price * targetProduct.count;

    const cartContent = cart;
    cartContent[id] = targetProduct;

    setCart(cartContent);
    calcTotal();
  };

  const cartDecrement = (id) => {
    const targetProduct = cart[id];
    if (!targetProduct.count || !targetProduct.price) {
      return;
    }
    targetProduct.count--;

    if (targetProduct.count <= 0) {
      removeItem(id);
      return;
    }

    targetProduct.total = targetProduct.price * targetProduct.count;

    const cartContent = cart;
    cartContent[id] = targetProduct;

    setCart(cartContent);
    calcTotal();
  };

  const removeItem = (id) => {
    const cartContent = cart;
    delete cartContent[id];
    setCart(cartContent);
    calcTotal();

    setProducts((products) => {
      const index = products.indexOf(getProduct(id));
      products[index].inCart = false;
      products[index].count = 0;
      products[index].total = 0;
      return products;
    });

    calcTotal();
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        detailProduct,
        cart,
        isModalOpen,
        cartTotal,
        addToCart,
        handleDetail,
        openModal,
        closeModal,
        cartIncrement,
        cartDecrement,
        removeItem,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

const useProduct = () => {
  const context = useContext(ProductContext);

  if (context === undefined) {
    throw new Error('useProduct must be used within an ProductProvider');
  }

  return context;
};

export { ProductContext, ProductProvider, useProduct };
