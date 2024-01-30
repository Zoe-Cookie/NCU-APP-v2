/*NavigationContainer.tsx*/
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import CreateEventScreen from './screens/CreateEventScreen';
import EventMainScreen from './screens/EventMainScreen';
import SaleAddScreen from './screens/SaleAddScreen';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SaleAddScreen"
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name="EventMainScreen" component={EventMainScreen} />
        <Stack.Screen name="CreateEventScreen" component={CreateEventScreen} />
        <Stack.Screen name="SaleAddScreen" component={SaleAddScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
