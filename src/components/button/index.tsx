import { TouchableOpacity, TouchableOpacityProps, Text, TextProps, ActivityIndicator } from "react-native"
import { s } from "./styles"

import { colors } from "@/styles/theme"
// import { isLoading } from "expo-font"

// type ButtonProps = TouchableOpacityProps & {
//     isLoading?: boolean
// }

function Button({children}:  TouchableOpacityProps) {
    return (
        <TouchableOpacity
        style={s.container}
        activeOpacity={0.8}
        // disabled={isLoading}
    >{children}
    </TouchableOpacity>
)}

function Title({children}: TextProps){
    return <Text style={s.title}>{children}</Text>
}
Button.Title = Title
export { Button }