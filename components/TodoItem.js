import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, Alert } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { toDoItemStyle } from '../css/style';

function TodoItem( {id, text, done, onToggle, onRemove} )
{
    const remove = () =>
    {
        Alert.alert
        (
             '삭제'
            ,'정말로 삭제하시겠어요?'
            ,[
                {
                     text : '취소'
                    ,onPress : () => {}
                    ,style : 'cancel'
                }
                ,{
                    text : '삭제'
                   ,onPress : () => { onRemove(id) }
                   ,style : 'destructive'
                }
             ]
            ,{
                cancelable : true
                ,onDismiss : () => {}
             }
        );
    }

    return (
       <View style={toDoItemStyle.item}>
            {
                (() =>
                {
                    if( done )
                    {
                        return (
                            <>
                                <TouchableOpacity onPress={ () => onToggle(id) }>
                                    <View style={[toDoItemStyle.circle, toDoItemStyle.filled]}>
                                        <Image source={ require('../assets/icons/check_white/check_white.png') }/>
                                    </View>
                                </TouchableOpacity>
                                <Text style={[toDoItemStyle.text, toDoItemStyle.lineThrough]}>{text}</Text>
                                <TouchableOpacity onPress={ remove }>
                                    <Icon name='delete' size={32} color='red'/>
                                </TouchableOpacity>
                            </>
                        )
                    }
                    else
                    {
                        return (
                            <>
                                <TouchableOpacity onPress={() => onToggle(id) }>
                                    <View style={toDoItemStyle.circle}/>
                                </TouchableOpacity>
                                <Text style={toDoItemStyle.text}>{text}</Text>
                                <View style={toDoItemStyle.removePlaceholder}/>
                            </>
                        )
                    }

                })()
            }
            
       </View>
    )
}



export default TodoItem;