import React, { useState } from 'react';
import Onboarding from './component/onboarding';
import { View } from 'react-native';

const OnboardingView = ({ navigation }) => {
    const [currntIndex, setCurrntIndex] = useState();

    const [landingSlider] = useState([
        {
            id: "00",
            Image: require('../../assets/onboarding/onboard01.png'),
            textBold: 'WELCOME TO Monumental habits',
            landindDescription: 'We can help you to be a better version of yourself.',
        },
        {
            id: "01",
            Image: require('../../assets/onboarding/Habits.png'),
            textBold: 'CREATE NEW HABIT EASILY',
            landindDescription: 'We can help you to be a better version of yourself.',
        },
        {
            id: "02",
            Image: require('../../assets/onboarding/Progress.png'),
            textBold: 'KEEP TRACK OF YOUR PROGRESS',
            landindDescription: 'We can help you to be a better version of yourself.',
        },
        {
            id: "03",
            Image: require('../../assets/onboarding/Community Support.png'),
            textBold: 'JOIN A SUPPORTIVE COMMUNITY',
            landindDescription: 'We can help you to be a better version of yourself.',
            type: 'Button'
        },
    ]);

    function onPressStart() {
        navigation.navigate('Home')
    }
    function handleNext() {
        console.log('currntIndex: ', currntIndex);
    }

    return (
        <View style={{ flex: 1 }}>
            <Onboarding
                landingSlider={landingSlider}
                onPressStart={onPressStart}
                handleNext={handleNext}
                setCurrntIndex={setCurrntIndex}
                currntIndex={currntIndex}
            />
        </View>

    )
}
export default OnboardingView;