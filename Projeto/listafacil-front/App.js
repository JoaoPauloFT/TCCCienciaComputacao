import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Login from './src/screens/Login';
import Index from './src/screens/Index';
import UserRegister from './src/screens/UserRegister';
import AuthProvider from "./src/contexts/auth";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} options={{
            headerStyle: {
              backgroundColor: '#CDBCFF',
            },
          }}/>
          <Stack.Screen name="Index" component={Index} options={{ headerShown: false }} />
          <Stack.Screen name="Inscreva-se" component={UserRegister} options={{
            headerStyle: {
              backgroundColor: '#CDBCFF',
            },
            headerShown: false,
          }}/>
        </Stack.Navigator>
      </AuthProvider>
    </NavigationContainer>
  );
}
export default App;
