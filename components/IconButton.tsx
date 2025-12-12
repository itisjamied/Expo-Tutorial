import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Pressable, StyleSheet, Text } from "react-native";

type Props = {
    icon: keyof typeof MaterialIcons.glyphMap;
    label: string
    OnPress?: () => void;
}

export default function IconButton({OnPress, icon, label}:Props){
    return(
        <Pressable style={styles.iconButton} onPress={OnPress}>
            <MaterialIcons name={icon} size={24} color='#fff' />
            <Text style={styles.iconButtonLabel}>{label}</Text>
        </Pressable>
    )
}


const styles = StyleSheet.create({
iconButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconButtonLabel: {
    color: '#fff',
    marginTop: 12,
  },

});