import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import { supabase } from './utils/supabase';

type Todo = {
  id: number;
  title: string;
};

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const getTodos = async () => {
      try {
        const { data, error } = await supabase.from('todos').select('*');

        if (error) {
          console.error('Error fetching todos:', error.message);
          return;
        }

        if (data && data.length > 0) {
          setTodos(data as Todo[]);
        }
      } catch (err) {
        if (err instanceof Error) {
          console.error('Error fetching todos:', err.message);
        } else {
          console.error('Unknown error:', err);
        }
      }
    };

    getTodos();
  }, []);


  return (
    <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', marginTop: 100 }}>
      <Text>Todo List</Text>
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Text>{item.title}</Text>}
      />
    </View>
  );
}
