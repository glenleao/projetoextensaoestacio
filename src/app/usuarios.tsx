
import {View, Text } from "react-native"
import {Container, TitleList, List, RowData, InfoData, ValueData, BtnView } from "@/styles/custom_adm"

export default function Usuarios(){

    return (
        <Container>
            <TitleList>Usuários</TitleList>

            <List>

                <RowData>
                    <InfoData>
                        <ValueData>GLen Leao</ValueData>
                    </InfoData>
                    <BtnView>
                        Detalhes
                    </BtnView>
                </RowData>
            </List>
        </Container>
    )
}