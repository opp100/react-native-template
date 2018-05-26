/*
 * Created on Sun May 06 2018
 *
 * Copyright (c) 2018 Youke Xiang
 */
import {StyleSheet, Dimensions, Platform} from 'react-native';
import {ColorConfig} from './Constraints';

const {height, width} = Dimensions.get('screen');

let _height = height;
let _width = width;
let _screenSize;
/**
 * Put all styles here , and you will get dynamic dimension
 * @param {int} height Height of screen
 * @param {int} width Width of screen
 * @return {object} object for stylesheet
 */
const styles = (theme = 'default', height = _height, width = _width) => {
    const colorSet = ColorConfig.get(theme);
    
    return {
        container: {
            flex: 1,
            backgroundColor: colorSet.background
        },
        center: {
            justifyContent: 'center',
            alignItems: 'center',
            alignContent: 'center'
        },
        flexBox: {
            flex: 1
        },
        header: {
            backgroundColor: colorSet.primary
        },
        headerTitle: {
            fontSize: Platform.OS === 'ios' ? parseInt(_screenSize / 39) : parseInt(_screenSize / 45),
            fontWeight: Platform.OS === 'ios' ? '400' : '200',
            color: colorSet.textLight,
            textAlign: Platform.OS === 'ios' ? 'center' : 'left',
            marginHorizontal: parseInt(_screenSize / 40)
        },
        loadingText: {
            fontSize: parseInt(_screenSize / 30),
            color: colorSet.textDark
        },
        titleText: {
            fontSize: parseInt(_screenSize / 38),
            color: colorSet.textDark,
            marginVertical: parseInt(height / 60),
            marginHorizontal: parseInt(width / 60)
        },
        drawerLabel: {
            fontSize: parseInt(_screenSize / 40),
            color: colorSet.textDark,
            margin: parseInt(height / 60)
        },
        textLight: {
            color: colorSet.textLight
        },
        textDark: {
            color: colorSet.textDark
        },
        textSmall: {
            fontSize: parseInt(_screenSize / 40)
        },
        textMedium: {
            fontSize: parseInt(_screenSize / 35)
        },
        textLarge: {
            fontSize: parseInt(_screenSize / 30)
        },
        textCenter: {
            textAlign: 'center',
            justifyContent: 'center',
            alignSelf: 'center'
        },
        spaceLeft: {
            marginLeft: parseInt(width / 50)
        },
        btnActive: {
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
            paddingHorizontal: parseInt(width / 30),
            paddingVertical: parseInt(height / 100),
            backgroundColor: 'transparent',
            borderRadius: parseInt(height / 100)
        },
        btnDisabled: {
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
            paddingHorizontal: parseInt(width / 30),
            paddingVertical: parseInt(height / 100),
            backgroundColor: '#aaa',
            borderRadius: parseInt(height / 100)
        },
        row: {
            flexDirection: 'row'
        },
        tabLabel: {
            textAlign: 'center',
            backgroundColor: 'transparent',
            fontSize: parseInt(_screenSize / 80),
            marginBottom: 1.5
        },
        tabBar: {
            backgroundColor: '#F7F7F7', // Default background color in iOS 10
            borderTopWidth: StyleSheet.hairlineWidth,
            borderTopColor: 'rgba(0, 0, 0, .3)',
            flexDirection: 'row'
        },
        tabBarIcon: {
            height: parseInt(height / 28),
            margin: parseInt(_screenSize / 150)
        },
        tabBarIconText: {
            fontSize: parseInt(height / 28)
        }
    };
};

class MyStyleSheet {
    /**
     * @return {object} react native stylesheet
     */
    static get(theme) {
        return StyleSheet.create(styles(theme));
    }
    /**
     * @param  {object} {height,width} A object contains height and width
     */
    static set Dimensions({height, width, screenSize}) {
        _height = height;
        _width = width;
        _screenSize = screenSize;
        styles(undefined, height, width);
    }
}

export default MyStyleSheet;
