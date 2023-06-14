import React from 'react';
import { Text, View, StatusBar } from 'react-native';
import { headerStyle } from '../css/style';

function DateHead ( {date} )
{
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    
    const formatted = `${year}년 ${month}월 ${day}일`;

    return (
        <>
            <StatusBar backgroundColor={"#26a69a"} barStyle={'light-content'}/>
            <View style={headerStyle.block}>
                <Text style={headerStyle.dateText}>
                    { formatted }
                </Text>
            </View>
        </>
    )
}

export default DateHead;