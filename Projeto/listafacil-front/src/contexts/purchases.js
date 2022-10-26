import {createContext, useState} from "react";

export const PurchasesContext = createContext({});

function PurchasesProvider({children}) {

    const [products, setProducts] = useState([]);
    const [purchase, setPurchases] = useState("");

    function createPurchase(id) {
        if (id !== '') {
            setPurchases(id);
            setProducts([]);
        }
    }

    function editPurchase(id, prods) {
        if (id !== '') {
            setPurchases(id);
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
        <PurchasesContext.Provider value={{productsList: products, purchaseId: purchase, createPurchase, editPurchase, addProduct, delProduct}}>
            {children}
        </PurchasesContext.Provider>
    )
}

export default PurchasesProvider;