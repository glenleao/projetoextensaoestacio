import { StyleSheet, TouchableOpacityProps } from "react-native";
import { colors, fontFamily} from "@/styles/theme"


export const s = StyleSheet.create({
    container:{
        height:56,
        maxHeight: 56,
        backgroundColor: colors.purple.base,
        borderRadius:10,
        alignItems: "center",
        justifyContent: "center",
        flexDirection:"row",
        gap: 14,
    },
    title: {
        color: colors.gray[100],
        fontFamily: fontFamily.semiBold,
        fontSize:16,
    },
})
