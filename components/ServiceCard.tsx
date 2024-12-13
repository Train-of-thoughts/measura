import React from "react";
import { View, FlatList, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import EditIcon from "../assets/images/ServiceCardIcon.png";

type Item = {
    id: string;
    conditions: string[];
    price: number;
};

type Props = {
    list: Item[];
};

export default function ServiceCard({ list }: Props) {
    return (
        <View style={styles.container}>
            <FlatList
                data={list}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (

                    <View style={styles.card}>
                        <View style={styles.cardTextContainer}>
                            {item.conditions.map((condition, idx) => (
                                <Text key={idx} style={styles.text}>
                                    + {condition}
                                </Text>
                            ))}
                            <Text style={styles.text}>{item.price}₴</Text>
                        </View>


                        <Link href={`/services/${item.id}/edit`}>
                            <TouchableOpacity>
                                <Image source={EditIcon} style={styles.icon} />
                            </TouchableOpacity>
                        </Link>
                    </View>
                )}
                ItemSeparatorComponent={() => <View style={styles.separator} />}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    card: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 25,
        paddingHorizontal: 20,
        backgroundColor: "#FFF",
        borderRadius: 10,
        shadowColor: "rgba(0, 0, 0, 0.15)",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.4,
        shadowRadius: 4,
        elevation: 5,
    },
    separator: {
        height: 20,
    },
    cardTextContainer: {
        flexDirection: "column",
        flex: 1,
    },
    text: {
        color: "#333",
        fontSize: 16,
        fontWeight: "400",
        fontFamily: "GeologicaRegular",
        fontStyle: "normal",
    },
    icon: {
        width: 25,
        height: 25,
        resizeMode: "contain",
    },
});
