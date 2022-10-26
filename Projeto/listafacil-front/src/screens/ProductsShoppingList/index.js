import React, {useContext} from "react";
import {FlatList, Text, ToastAndroid, TouchableOpacity, View} from "react-native";
import TabNameView from "../../components/TabNameView";
import styles from "./styles";
import {ProductsContext} from "../../contexts/products";
import {AuthContext} from "../../contexts/auth";
import AddItemList from "../../components/AddItemList";
import {addShoppingListProducts} from "../../services/api/ShoppingList";
import ItemListProduct from "../../components/ItemListProduct";

export default function Index({navigation}){

    const { token } = useContext(AuthContext);
    const { listId, addProduct, delProduct, productsList } = useContext(ProductsContext);

    const add = (product) => {
        addProduct({
            idProd: 0,
            name: product,
            check: false
        });
    }

    const delItem = (product, name) => {
        delProduct(product, name);
    }

    const save = async () => {
        let result = await addShoppingListProducts(token, listId, productsList);
        if (typeof result["shoppingList"] != "undefined") {
            navigation.reset({
                index: 0,
                routes: [{name: "Index"}]
            });
        } else {
            ToastAndroid.show("Não foi possível salvar!", ToastAndroid.SHORT);
        }
    }

    return (
        <View style={styles.container}>
            <TabNameView
                nameView={"Produtos"}
                navigation={navigation}
            />
            <AddItemList
                placeholder={"Ex.: Arroz"}
                actionButton={add}
            />
            <View style={styles.contentData}>
                {productsList.length > 0 ? (
                    <FlatList
                        style={styles.listShopping}
                        data={productsList}
                        renderItem={({item}) => {
                            return (
                                <ItemListProduct
                                    idProd={item['idProd']}
                                    product={item['name']}
                                    action={delItem}
                                />
                            );
                        }}
                    />
                ) : (
                    <Text style={styles.textNoData}>Não existe nenhum item nessa lista!</Text>
                )}
                <TouchableOpacity
                    style={styles.contentButton}
                    onPress={save}
                >
                    <Text style={styles.textButton}>Salvar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}