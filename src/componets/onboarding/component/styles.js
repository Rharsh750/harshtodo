import { StyleSheet, Dimensions } from 'react-native';
import { normalizeHeight } from '../../../../component/scaleFontSize';
const { width, height } = Dimensions.get('window');
const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E5E5E5'
    },
    RenderViewStyle: {
        height: height,
        width: width,
    },
    MainContain: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '80%'
    },
    ImageContainer: {
        flex: 4,
        justifyContent: 'flex-end',
        width: '100%',
        alignItems: 'center',
    },
    DeliveryImage: {
        width: width / 1,
        height: height / 1.8
    },
    ParagrpghContainer: {
        flex: 2,
        paddingTop: 35,
        paddingHorizontal: 50,
        width: '100%',
        alignItems: 'center',
    },
    mainBoldText: {
        fontSize: 25,
        textAlign: 'center',
        color: '#573353',
        fontWeight: 'bold'
    },
    DescriptnView: {
        padding: 20,
        paddingTop: 15
    },
    DescriptnViewTxt: {
        color: "#FC9D45",
        fontSize: 20,
        textAlign: 'center',
        lineHeight: 20
    },
    normalDot: {
        height: 8,
        width: 8,
        bottom: 15,
        borderRadius: 4,
        backgroundColor: "#ffffff",
        marginHorizontal: 4
    },
    indicatorContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        bottom: 50
    },
    nextBtnText: {
        fontSize: 14,
        color: '#573353',
        fontWeight: '900'
    }
})
export default Styles;