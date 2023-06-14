import React from "react";

import { Image, Text, View } from "react-native";
import { emptyStyle } from '../css/style';

function Empty()
{
    return (
        <View style={emptyStyle.block}>
            <Image  source={ require('../assets/images/young_and_happy.png') } 
                    style={emptyStyle.image} 
                    resizeMode="center"
            />
            <Text style={emptyStyle.description}>
                야호! 할일이 없습니다.
            </Text>
        </View>
    )
}



export default Empty;