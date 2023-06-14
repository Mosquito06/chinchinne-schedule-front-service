import React from 'react';
import { commonStyle } from '../css/style';
import { View, Text } from 'react-native';

const Box = ( props ) =>
(
    <>
        <View style={ [ commonStyle.box, commonStyle.rounded] }>
       
        </View>
        <Text>테스트</Text>
    </>
)

export default Box;