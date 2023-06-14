import { StyleSheet } from 'react-native';

// common
export const commonStyle = StyleSheet.create(
{
    box : 
    {
         width : 64
        ,height : 64
        ,backgroundColor : 'black'
    }
    ,rounded : 
    {
        borderRadius : 16
    }
})

// header
export const headerStyle = StyleSheet.create(
{
    block :
    {
         padding : 16
        ,backgroundColor : '#26a69a'
    }
    ,dateText : 
    {
         fontSize : 24
        ,color : 'white'
    }
})

// AddTodo
export const addToDoStyle = StyleSheet.create(
{
    block :
    {
         backgroundColor : 'white'
        ,height : 64
        ,paddingHorizontal : 16
        ,borderColor : '#bdbdbd'
        ,borderTopWidth : 1
        ,borderBottomWidth : 1
        ,justifyContent : 'center'
        ,alignItems : 'center'
        ,flexDirection : 'row'
    }
    ,input : 
    {
         flex : 1
        ,fontSize : 16
        ,paddingVertical : 8
    }
    ,buttonStyle :
    {
         alignItems : 'center'
        ,justifyContent : 'center'
        ,width : 48
        ,height : 48
        ,backgroundColor : '#26a69a'
        ,borderRadius : 24
    }
    ,circleWrapper :
    {
         overflow : 'hidden'
        ,borderRadius : 24
    }
})

// Empty
export const emptyStyle = StyleSheet.create(
{
    block :
    {
         flex : 1
        ,alignItems : 'center'
        ,justifyContent : 'center'
    }
    ,image : 
    {
         width : 240
        ,height : 179
        ,marginBottom : 16
    }
    ,description : 
    {
         fontSize : 24
        ,color : '#9e9e9e'
    }
})

// TodoList
export const toDoStyle = StyleSheet.create(
{
    list : 
    {
        flex : 1
    }
    ,separator : 
    {
         backgroundColor : '#e0e0e0'
        ,height : 1
    }
})

// toDoItemStyle
export const toDoItemStyle = StyleSheet.create(
{
    item :
    {
         flexDirection : 'row'
        ,padding : 16
        ,alignItems : 'center'
    }
    ,circle : 
    {
         width : 24
        ,height : 24
        ,borderRadius : 12
        ,borderColor : '#26a69a'
        ,borderWidth : 1
        ,marginRight : 16
    }
    ,filled : 
    {
         justifyContent : 'center'
        ,alignItems : 'center'
        ,backgroundColor : '#26a69a'
    }
    ,text :
    {
         flex : 1
        ,fontSize : 16
        ,color : '#212121'
    }
    ,lineThrough : 
    {
         color : '#9e9e9e'
        ,textDecorationLine : 'line-through'
    }
    ,removePlaceholder :
    {
         width : 32
        ,height : 32
    }
})