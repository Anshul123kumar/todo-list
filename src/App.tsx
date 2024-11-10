import React from 'react';
import TodoProvider from './context/TodoProvider';
import TodoScreen from './screens/TodoScreen';


function App() {
  return <TodoProvider>
    <TodoScreen />
  </TodoProvider>;
}

export default App;