import React, { useState } from "react";

import { TextInput, View, Image, TouchableOpacity, Platform, TouchableNativeFeedback, Keyboard } from "react-native";
import { addToDoStyle } from '../css/style';

function AddTodo( { onInsert } )
{
    const [text, setText] = useState('');
    
    const onPress = () =>
    {
        onInsert(text);
        setText('');
        Keyboard.dismiss;
    }

    return (
       <View style={addToDoStyle.block}>
            <TextInput  placeholder="할일을 입력하세요." 
                        style={addToDoStyle.input}
                        value={text}
                        onChangeText={setText}
                        onSubmitEditing={onPress}
                        returnKeyType="done"
            />
            {
                (() =>
                {
                    const button =  <View style={addToDoStyle.buttonStyle}>
                                        <Image source={ require('../assets/icons/add_white/add_white.png') }/>
                                    </View>;
                    
                    if( Platform.OS === 'ios' )
                    {
                        return (
                            <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
                                {button}
                            </TouchableOpacity>
                        )            
                    }
                    else if( Platform.OS === 'android' )
                    {
                        return (
                            <View style={addToDoStyle.circleWrapper}>
                                <TouchableNativeFeedback onPress={onPress}>
                                    {button}
                                </TouchableNativeFeedback>
                            </View>
                        )
                    }
                })()
            }
            
            
       </View>
    )
}



export default AddTodo;