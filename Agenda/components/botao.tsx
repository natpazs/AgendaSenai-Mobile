import { StyleSheet, Text, TouchableOpacity } from "react-native"
import { LinkProps } from "expo-router/build/link/Link"
import { Link } from "expo-router/build/link/Link"


interface LinkButtonProps extends LinkProps {
    texto: string;
}

export default function Botao({texto, ...props}:LinkButtonProps){
    const style = StyleSheet.create({
        botao:{
            width: 250,
            height: 47,
            backgroundColor: "#9B0000",
            color:"#ffffff",
            borderRadius: 5,
            alignSelf: "center",
            justifyContent:"center",
            marginStart: 0,
            marginTop: 25,
            marginBottom: 8
        },
        cor:{
            alignSelf:"center",
            color:"#ffffff",
            fontSize: 14
          }
        
        
    })
    return(
        <Link {...props} asChild>
            <TouchableOpacity style={style.botao}>
                <Text style={style.cor}>{texto}</Text>
            </TouchableOpacity>
        </Link>
    )
}
