import { fontFamily } from "@/styles/font-family"
import { View, Text} from "react-native"
import { Steps } from "@/components/steps"
import { Button } from "@/components/button"
import { Welcome } from "@/components/welcome"

export default function Index(){
    return (
        <View style={{ flex:1, padding:40, gap:40 }}>
            <Welcome/>
            <Steps/>

            <Button>
                <Button.Title>Começar aqui</Button.Title>
            </Button>
        </View>
    )
}