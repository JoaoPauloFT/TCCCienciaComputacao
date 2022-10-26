import {createContext, useState} from "react";

export const ProductsContext = createContext({});

function ProductsProvider({children}) {

    const [products, setProducts] = useState([]);
    const [list, setList] = useState("");

    function createList(idList) {
        if (idList !== '') {
            setList(idList);
            setProducts([]);
        }
    }

    function editList(idList, prods) {
        if (idList !== '') {
            setList(idList);
            setProducts(prods);
        }
    }

    function addProduct(prod) {
        if (prod !== '') {
            setProducts((oldProducts) => {
                return [...oldProducts, prod];
            });
        }
    }

    function delProduct(prod, name) {
        if (prod !== '') {
            if (prod != 0) {
                setProducts((oldProducts) => {
                    for (var i = 0; i < products.length; i++) {
                        if (prod == products[i]["idProd"]) {
                            oldProducts.splice(i, 1);
                        }
                    }
                    return [...oldProducts];
                });
            } else {
                setProducts((oldProducts) => {
                    for (var i = 0; i < products.length; i++) {
                        if (name == products[i]["name"]) {
                            oldProducts.splice(i, 1);
                        }
                    }
                    return [...oldProducts];
                });
            }
        }
    }

    return(
        <ProductsContext.Provider value={{productsList: products, listId: list, createList, editList, addProduct, delProduct}}>
            {children}
        </ProductsContext.Provider>
    )
}

export default ProductsProvider;