import React, { useState } from "react";
import { View, Text, FlatList } from "react-native";
import TodoItem from '../components/TodoItem';
import { toDoStyle } from '../css/style';

function TodoList({todos, onToggle, onRemove})
{

    return (
       <FlatList    style={toDoStyle.list}
                    data={todos}
                    renderItem=
                    {
                        ( { item } )  =>
                        (
                            <TodoItem id={item.id} text={item.text} done={item.done} onToggle={onToggle} onRemove={onRemove}/>
                        )
                    }
                    ItemSeparatorComponent={ () => <View style={ toDoStyle.separator }/> }
                    keyExtractor={ item => ( item.id.toString() ) }
       />
    )
}



export default TodoList;