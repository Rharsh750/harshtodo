import React, { useRef } from "react";
import {
    ScrollView,
    Text,
    View,
    StatusBar,
    Animated,
    Image,
    useWindowDimensions,
    TouchableOpacity,
} from "react-native";
import styles from './styles';
const images = new Array(3).fill('https://images.unsplash.com/photo-1556740749-887f6717d7e4');
const Onboarding = (props) => {
    const scrollX = useRef(new Animated.Value(0)).current;
    const { width: windowWidth } = useWindowDimensions();
    const sliderRef = useRef();
    return (
        <View style={[styles.container]}>
            <StatusBar
                hidden={false}
                backgroundColor="#E5E5E5"
                translucent={false}
                barStyle="dark-content" 
                networkActivityIndicatorVisible={false}
            />
            <ScrollView
                ref={sliderRef}
                horizontal={true}
                style={styles.scrollViewStyle}
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onScroll={Animated.event([
                    {
                        nativeEvent: {
                            contentOffset: {
                                x: scrollX
                            }
                        }
                    }
                ])}
                scrollEventThrottle={1}
            >
                {props?.landingSlider.map((item, index) => {
                    props.setCurrntIndex(index)
                    return (
                        <View key={index} style={styles.RenderViewStyle}>
                            <View style={styles.MainContain}>
                            <View style={styles.ParagrpghContainer}>
                                    <Text style={styles.mainBoldText}>{item.textBold}</Text>
                                    
                                </View>
                                <View style={styles.ImageContainer}>
                                    <Image resizeMode='contain' style={styles.DeliveryImage} source={item.Image} />
                                </View>
                                <View style={styles.DescriptnView}>
                                        <Text style={styles.DescriptnViewTxt}>{item.landindDescription}</Text>
                                    </View>
                            </View>
                            <View style={{ flexDirection: 'row', paddingHorizontal: 30, justifyContent: 'space-between', alignItems: 'center', position: 'absolute', bottom: 60, width: '100%' }}>
                                {item.type !== 'Button' ?
                                (
                                <>
                                <TouchableOpacity onPress={() => props.onPressStart()}>
                                    <Text style={[styles.nextBtnText, { color: '#573353' }]}>Skip</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => {
                                        if (index <= 1) {
                                            sliderRef.current.scrollTo({ x: index == 0 ? windowWidth : windowWidth * 2, y: 0, animated: true })
                                        } else {
                                            props.onPressStart()
                                        }
                                    }}>
                                    <Text style={styles.nextBtnText}>Next</Text>
                                </TouchableOpacity>
                                </>
                                )
                                : 
                                <TouchableOpacity onPress={() => props.onPressStart()}>
                                    <Text style={[styles.nextBtnText, { color: '#573353' }]}>Skip</Text>
                                </TouchableOpacity>
                                 }
                            </View>
                        </View>
                    );
                })}
            </ScrollView>
            <View style={styles.indicatorContainer}>
                {images.map((image, imageIndex) => {
                    const backgroundColor = scrollX.interpolate({
                        inputRange: [
                            windowWidth * (imageIndex - 1),
                            windowWidth * imageIndex,
                            windowWidth * (imageIndex + 1),
                            windowWidth * (imageIndex + 2),
                        ],
                        outputRange: ['#F9B566', '#573353', '#F9B566', '#F9B566'],
                        extrapolate: "clamp"
                    });
                    return (
                        <Animated.View
                            key={imageIndex}
                            style={[styles.normalDot, { backgroundColor }]}
                        />
                    );
                })}
            </View>
        </View>
    );
}
export default Onboarding;