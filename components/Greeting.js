import React from 'react';
import { View, Text } from 'react-native';

const Greeting = ( props ) =>
(
    <View>
        <Text>
            안녕하세요. {props.name}!
        </Text>
    </View>
)

Greeting.defaultProps = 
{
    name : '기본 이름'
}


export default Greeting;