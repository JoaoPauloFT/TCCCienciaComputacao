import React, {useContext, useRef, useState} from "react";
import {Image, Modal, SafeAreaView, Text, ToastAndroid, TouchableOpacity, View} from "react-native";
import {Camera} from "expo-camera";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import styles from "./styles";
import {ProcessImage} from "../../services/api/Image";
import {addPurchases, addPurchasesProducts} from "../../services/api/Purchases";
import {AuthContext} from "../../contexts/auth";
import {PurchasesContext} from "../../contexts/purchases";
import {ProductsContext} from "../../contexts/products";
import {SmartList} from "../../services/api/SmartList";

export default function Index({navigation, route}){

    const camRef = useRef(null);
    const [loading, setLoading] = useState(false);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [flash, setFlash] = useState("off");
    const [capturedFoto, setCapturedFoto] = useState(null);
    const [openModal, setOpenModal] = useState(false);
    const { token } = useContext(AuthContext);
    const { editPurchase } = useContext(PurchasesContext);
    const { editList } = useContext(ProductsContext);
    const origem = route.params.origem;

    async function takePicture() {
        if (camRef) {
            setLoading(true)
            const data = await camRef.current.takePictureAsync();
            setCapturedFoto(data.uri);
            setOpenModal(true);
            setLoading(false);
        }
    }

    const dataAtual = () => {
        let dataFormatada = new Date();
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

    const precessImage = async () => {
        setOpenModal(false);
        setLoading(true);
        let filename = capturedFoto.split('/').pop();

        let match = /\.(\w+)$/.exec(filename);
        let type = match ? `image/${match[1]}` : `image`;

        // Envia a imagem para o python e traz os produtos reconhecidos
        let result = await ProcessImage(capturedFoto, filename, type);

        console.log(result);

        if (typeof result["error"] == "undefined") {

            // Verifica se é o cadastro de uma compra realizada ou de uma lista de compra
            if (origem == "Purchase") {

                // Cria uma compra realizada
                let resultPurchase = await addPurchases(token, dataAtual());
                if (typeof resultPurchase['id'] != "undefined") {

                    // Popula os produtos reconhecidos em um array padrão
                    let produtos = [];
                    result.forEach((product) => {
                        produtos.push({
                            idProd: 0,
                            name: product['produto']
                        });
                    });

                    // Adiciona esse produtos a compra realizada
                    let resultProduct = await addPurchasesProducts(token, resultPurchase['id'], produtos);
                    if (typeof resultProduct["purchase"] != "undefined") {

                        // Popula o context para visualizar na proxima tela
                        editPurchase(resultProduct["purchase"]["id"], resultProduct["purchase"]["PurchasedProducts"]);
                        navigation.reset({
                            index: 0,
                            routes: [{name: "ViewProductsPurchases"}]
                        });

                    } else {
                        ToastAndroid.show("Não foi possível salvar os produtos na compra!", ToastAndroid.SHORT);
                        navigation.reset({
                            index: 0,
                            routes: [{name: "Index"}]
                        });
                    }

                } else {
                    ToastAndroid.show("Não foi possível criar a compra!", ToastAndroid.SHORT);
                    navigation.reset({
                        index: 0,
                        routes: [{name: "Index"}]
                    });
                }

            } else {

                // Popula os produtos reconhecidos em um array padrão
                let products = [];
                result.forEach((product) => {
                    products.push({
                        name: product['produto']
                    });
                });

                //Envia para o back montar a lista inteligente
                let resultBack = await SmartList(token, products);
                if (typeof resultBack["smartList"] != "undefined") {

                    // Popula o context para visualizar na proxima tela
                    editList(resultBack["smartList"]["id"], resultBack["smartList"]["ShoppingListProducts"]);
                    navigation.reset({
                        index: 0,
                        routes: [{name: "ViewProductsShoppingList"}]
                    });

                } else {
                    ToastAndroid.show("Não foi possível gerar a lista inteligente!", ToastAndroid.SHORT);
                    navigation.reset({
                        index: 0,
                        routes: [{name: "Index"}]
                    });
                }

            }

        } else {
            ToastAndroid.show("Nenhum produto foi identificado!", ToastAndroid.SHORT);
            navigation.reset({
                index: 0,
                routes: [{name: "Index"}]
            });
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            {loading ? (
                <View style={styles.contentLoading}>
                    <Image style={styles.imageLoading} source={require("../../img/carrinhoCompra.png")} />
                    <Text>Carregando...</Text>
                </View>
            ) : (
                <>
                </>
            )}
            <Camera
                style={styles.camera}
                type={type}
                flashMode={flash}
                ref={camRef}
            />
            <View
                style={styles.contentButtons}
            >
                <TouchableOpacity
                    style={styles.buttonFlip}
                    onPress={() => {
                        setType(type === Camera.Constants.Type.back ? Camera.Constants.Type.front : Camera.Constants.Type.back);
                    }}
                >
                    <FontAwesome name="refresh" size={23} color="#9370DB" />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonCapture}
                    onPress={takePicture}
                >
                    <FontAwesome name="camera" size={23} color="white" />
                </TouchableOpacity>
                <TouchableOpacity
                    style={flash === "off" ? styles.buttonFlip : styles.buttonFlipOn}
                    onPress={() => {
                        setFlash(flash === "off" ? "torch" : "off");
                    }}
                >
                    {flash === "off" ? (
                        <FontAwesome name="bolt" size={23} color="#9370DB" />
                    ) : (
                        <FontAwesome name="bolt" size={23} color="#ffffff" />
                    )}
                </TouchableOpacity>
            </View>
            {capturedFoto && (
                <Modal
                    animationType={"slide"}
                    transparent={true}
                    visible={openModal}
                    style={styles.screenModal}
                >
                    <View style={styles.screenModal}>
                        <View style={styles.contentModal}>
                            <Image
                                style={styles.imgPhoto}
                                source={{uri: capturedFoto}}
                            />
                        </View>
                        <TouchableOpacity
                            style={styles.closeButton}
                            onPress={() => {setOpenModal(false)}}
                        >
                            <FontAwesome name="close" size={50} color={"#ffffff"} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.nextButton}
                            onPress={precessImage}
                        >
                            <FontAwesome name="check" size={50} color={"#ffffff"} />
                        </TouchableOpacity>
                    </View>
                </Modal>
            )}
        </SafeAreaView>
    )
}