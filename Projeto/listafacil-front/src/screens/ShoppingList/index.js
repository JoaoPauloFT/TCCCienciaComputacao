import React, {useContext, useEffect, useState} from "react";
import {FlatList, Modal, Text, TextInput, ToastAndroid, TouchableOpacity, View} from "react-native";
import TabNameView from "../../components/TabNameView";
import FloatingButton from "../../components/FloatingButton";
import styles from "./styles";
import {ShoppingListByUser} from "../../services/api/User";
import {AuthContext} from "../../contexts/auth";
import ItemList from "../../components/ItemList";
import {addShoppingList, ShoppingListInfo} from "../../services/api/ShoppingList";
import CheckBox from 'expo-checkbox';
import {ProductsContext} from "../../contexts/products";

export default function Index({navigation}){

    const [ShoppingList, setShoppingList] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [title, setTitle] = useState("Nova Lista");
    const [isIntelligentList, setIsIntelligentList] = useState(true);
    const { token } = useContext(AuthContext);
    const { createList, editList } = useContext(ProductsContext);

    const add = () => {
        setOpenModal(true);
    }

    const formataData = (data) => {
        let dataFormatada = new Date(data);
        let day = dataFormatada.getDate();
        let month = dataFormatada.getMonth() + 1;
        if (day < 10) {
            day = "0" + day;
        }
        if (month < 10) {
            month = "0" + month;
        }
        return day + "/" + month + "/" + dataFormatada.getFullYear();
    }

    const create = async () => {
        if (isIntelligentList) {
            navigation.navigate("Camera", {
                origem: "ShoppingList"
            });
            setOpenModal(false);
        } else {
            let result = await addShoppingList(token, title);
            if (typeof result["id"] != "undefined") {
                createList(result["id"]);
                navigation.navigate("ProductsShoppingList");
                setOpenModal(false);
            } else {
                ToastAndroid.show("Não foi possível criar a lista de compra!", ToastAndroid.SHORT);
            }
        }
    }

    async function openList (id) {
        let info = await ShoppingListInfo(token, id);
        if (info["shoppingList"]) {
            let prod = info["shoppingList"]["ShoppingListProducts"];
            let nameProds = [];
            for (let i = 0; i < prod.length; i++) {
                nameProds = [...nameProds, {
                    id: prod[i]["id"],
                    name: prod[i]["name"],
                    check: prod[i]["checked"]
                }];
            }
            editList(id, nameProds);
            navigation.navigate("ViewProductsShoppingList");
        } else {
            ToastAndroid.show("Não foi possível editar a lista de compra!", ToastAndroid.SHORT);
        }
    }

    async function getShoppingList (token) {
        let result = await ShoppingListByUser(token);
        setShoppingList(result);
    }

    useEffect(() => {
        getShoppingList(token);
    }, [])

    return (
        <View style={styles.container}>
            <TabNameView
                nameView={"Lista de Compras"}
                navigation={navigation}
            />
            <View style={styles.contentData}>
                {ShoppingList.length > 0 ? (
                    <FlatList
                        style={styles.listShopping}
                        data={ShoppingList}
                        renderItem={({item}) => {
                            let dataView = formataData(item["createdAt"]);
                            return (
                                <TouchableOpacity
                                    onPress={() => {openList(item["id"])}}
                                >
                                    <ItemList
                                        title={item["title"]}
                                        dateList={dataView}
                                    />
                                </TouchableOpacity>
                            );
                        }}
                    />
                ) : (
                    <Text style={styles.textNoData}>Não existe nenhuma lista de compra cadastrada!</Text>
                )}
            </View>
            <FloatingButton
                action={add}
            />
            {openModal ? (
                <Modal
                    animationType={"slide"}
                    transparent={true}
                    visible={openModal}
                >
                    <View style={styles.contentModal}>
                        <View style={styles.bodyModal}>
                            <Text style={styles.titleModal}>Nova Lista de Compra</Text>
                            <TextInput
                                style={styles.textInput}
                                maxLength={14}
                                value={title}
                                onChangeText={(text) => setTitle(text)}
                            />
                            <View style={styles.contentCheckbox}>
                                <CheckBox
                                    value={isIntelligentList}
                                    onValueChange={(resp) => setIsIntelligentList(resp)}
                                    color={isIntelligentList ? '#CDBCFF' : undefined}
                                />
                                <Text style={styles.textCheckbox}>Lista Inteligente</Text>
                            </View>
                            <View style={styles.buttonModal}>
                                <TouchableOpacity
                                    style={styles.closeButton}
                                    onPress={() => {setOpenModal(false)}}
                                >
                                    <Text style={styles.textButtonModal}>Cancelar</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={styles.closeButton}
                                    onPress={create}
                                >
                                    <Text style={styles.textButtonModal}>Adicionar</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>
            ) : (
                <View>
                </View>
            )}
        </View>
    )
}