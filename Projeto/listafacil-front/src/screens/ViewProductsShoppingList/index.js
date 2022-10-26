import React, {useContext} from "react";
import {FlatList, Text, ToastAndroid, View} from "react-native";
import TabNameView from "../../components/TabNameView";
import styles from "./styles";
import {ProductsContext} from "../../contexts/products";
import {AuthContext} from "../../contexts/auth";
import ItemListProduct from "../../components/ItemListProduct";
import FloatingButtonDelete from "../../components/FloatingButtonDelete";
import {CheckProducts, DeleteShoppingList} from "../../services/api/ShoppingList";
import FloatingButtonEdit from "../../components/FloatingButtonEdit";

export default function Index({navigation}){

    const { token } = useContext(AuthContext);
    const { productsList, listId } = useContext(ProductsContext);

    const selectItem = async (product, status) => {
        let info = await CheckProducts(token, listId, product, status);
        if (info["message"]) {
            ToastAndroid.show(info["message"], ToastAndroid.SHORT);
        } else {
            ToastAndroid.show("Não foi possível checar o item selecionado!", ToastAndroid.SHORT);
            navigation.reset({
                index: 0,
                routes: [{name: "ViewProductsShoppingList"}]
            })
        }
    }

    const delList = async () => {
        let info = await DeleteShoppingList(token, listId);
        if (!info["message"]) {
            navigation.reset({
                index: 0,
                routes: [{name: "TabMenu"}]
            })
        } else {
            ToastAndroid.show("Não foi possível excluir a lista de compra!", ToastAndroid.SHORT);
        }
    }
    const editList = () => {
        navigation.navigate("EditProductsShoppingList");
    }

    return (
        <View style={styles.container}>
            <TabNameView
                nameView={"Lista de Compra"}
                navigation={navigation}
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
                                    action={selectItem}
                                    isCheck={item['check']}
                                    edit={true}
                                />
                            );
                        }}
                    />
                ) : (
                    <Text style={styles.textNoData}>Não existe nenhum item nessa lista!</Text>
                )}
            </View>
            <FloatingButtonDelete
                action={delList}
            />
            <FloatingButtonEdit
                action={editList}
            />
        </View>
    )
}