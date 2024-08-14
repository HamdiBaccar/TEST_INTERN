import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity, Text, StyleSheet,Image ,View} from 'react-native';

const BackButton = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image style={styles.buttonStyle} resizeMode="contain" source={require('../../assets/Arrow---Left-2.png')}/>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    buttonStyle: {
        height : 18,
        width : 10,
        marginLeft : 27,
        marginTop : 10, 
    },
    container : {
        backgroundColor : 'white'
    },
});

export default BackButton;
