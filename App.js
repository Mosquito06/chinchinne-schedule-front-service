import React, { useState } from 'react';
//import Greeting from './components/Greeting';
//import Box from './components/Box';
import DateHead from './components/DateHead';
import AddTodo from './components/AddTodo';
import Empty from './components/Empty';
import TodoList from './components/TodoList';
import { SafeAreaView, Text, View, KeyboardAvoidingView, Platform } from 'react-native';

const App = () =>
{
    const today = new Date();
    
    const [todos, setTodos] = useState(
        [
             {id : 1, text : '작업환경 설정', done : true}
            ,{id : 2, text : '리액트 네이티브 기초 공부', done : false}
            ,{id : 3, text : '투두리스트 만들어보기', done : false}
        ]
    )

    const onInsert = ( text ) =>
    {
        const nextId = todos.length > 0 ? Math.max(...todos.map( todo => todo.id )) + 1 : 1;

        const todo = 
        {
             id : nextId
            ,text : text
            ,done : false
        }

        setTodos(todos.concat(todo));
    }

    const onToggle = id =>
    {
        const nextTodos = todos.map( todo => 
        {
            return todo.id === id ? { ...todo, done : !todo.done } : todo;
        })

        setTodos(nextTodos);
    }

    const onRemove = id =>
    {
        const nextTodos = todos.filter( todo => todo.id !== id );
        setTodos(nextTodos);
    }

    return (
        <SafeAreaView style={{ flex : 1, backgroundColor : 'white' }}>
            {/* <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={{flex : 1}}> */}
            <KeyboardAvoidingView behavior={Platform.select({ios : 'padding'})} style={{flex : 1}}>
                <DateHead date={today}/>
                {
                    (() =>
                    {
                        if( todos.length === 0 )
                        {
                            return <Empty />;
                        }
                        else 
                        {
                            return <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove}/>
                        }

                    })()
                }
                <AddTodo onInsert={onInsert}/>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default App;
