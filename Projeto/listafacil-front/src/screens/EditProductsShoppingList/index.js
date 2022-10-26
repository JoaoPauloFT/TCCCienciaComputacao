import React, {useContext} from "react";
import {FlatList, Text, ToastAndroid, TouchableOpacity, View} from "react-native";
import TabNameView from "../../components/TabNameView";
import styles from "./styles";
import {ProductsContext} from "../../contexts/products";
import {AuthContext} from "../../contexts/auth";
import ItemListProduct from "../../components/ItemListProduct";
import {addShoppingListProducts, DeleteItemShoppingList, DeleteShoppingList} from "../../services/api/ShoppingList";
import AddItemList from "../../components/AddItemList";

export default function Index({navigation}){

    const { token } = useContext(AuthContext);
    const { editList, productsList, listId } = useContext(ProductsContext);

    const delItem = async (product) => {
        let info = await DeleteItemShoppingList(token, listId, product);
        if (info["shoppingList"]) {
            editList(info["shoppingList"]["id"], info["shoppingList"]["ShoppingListProducts"]);
        } else {
            ToastAndroid.show("Não foi possível excluir o item da lista de compra!", ToastAndroid.SHORT);
        }
    }

    const back = () => {
        navigation.reset({
            index:1,
            routes: [{name: "TabMenu"}]
        });
    }

    const add = async (product) => {
        let result = await addShoppingListProducts(token, listId, [{"name": product}]);
        if (typeof result["shoppingList"] != "undefined") {
            editList(result["shoppingList"]["id"], result["shoppingList"]["ShoppingListProducts"]);
        } else {
            ToastAndroid.show("Não foi possível salvar!", ToastAndroid.SHORT);
        }
    }

    return (
        <View style={styles.container}>
            <TabNameView
                nameView={"Lista de Compra"}
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
                                    product={item['name']}
                                    idProd={item['id']}
                                    action={delItem}
                                />
                            );
                        }}
                    />
                ) : (
                    <Text style={styles.textNoData}>Não existe nenhum item nessa lista!</Text>
                )}
            </View>
            <TouchableOpacity
                style={styles.contentButton}
                onPress={back}
            >
                <Text style={styles.textButton}>Voltar</Text>
            </TouchableOpacity>
        </View>
    )
}