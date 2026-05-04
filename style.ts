import { Button, Dimensions, StyleSheet } from 'react-native';
import { themes } from '../../global/themes';



export const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    boxTop: {
        height: Dimensions.get('window').height / 3,
        width: '100%',
        //backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',

    },
    boxMid: {
        height: Dimensions.get('window').height / 4,
        width: '100%',
        backgroundColor: themes.colors.background,
        paddingHorizontal: 37,
    },
    boxBottom: {
        height: Dimensions.get('window').height / 3,
        width: '100%',
        backgroundColor: themes.colors.background,
        alignItems: 'center',
    },
    logo: {
        width: 200,
        height: 200,
    },
    text: {
        fontWeight: 'bold',
        marginTop: 1,
        fontSize: 18,
    },
    titleInput: {
        marginLeft: 5,
        color: themes.colors.lightGray,
        marginTop: 20,
    },
    BoxInput: {
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderRadius: 40,
        marginTop: 10,
        flexDirection: 'row',
    },
    input: {
        height: '100%',
        width: '100%',
        backgroundColor: themes.colors.primary,
        borderRadius: 40,
    },
    Button: {
        width: 250,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: themes.colors.primary,
        borderRadius: 40,
        shadowColor: '#0000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    },
    textButton: {
        fontSize: 16,
        color: 'white',
    }
})
export default style;