import { createStackNavigator } from '@react-navigation/stack';

import { AboutPet } from '../pages/AboutPet';
import { SignIn } from '../pages/SignIn';
import { SignUp } from '../pages/SignUp';
import { MyPets } from '../pages/MyPets';
import { Welcome } from '../pages/Welcome';

import { TabRoutes } from './tab.routes';

import { userDataStoraged } from '../hooks/Auth';
import { Load } from '../components/Load';

export const StackRoutes = () => {

    const Stack = createStackNavigator();

    // console.log(userDataStoraged);

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>

            {
                userDataStoraged && <Stack.Screen name='Home ' component={TabRoutes} />

            }


            <Stack.Screen name='Welcome' component={Welcome} />
            <Stack.Screen name='Login' component={SignIn} />
            <Stack.Screen name='SignUp' component={SignUp} />
            <Stack.Screen name='AboutPet' component={AboutPet} />
            <Stack.Screen name='MyPets' component={MyPets} />
            <Stack.Screen name='Home' component={TabRoutes} />
            <Stack.Screen name='CreatePet' component={TabRoutes} />
            <Stack.Screen name='Favorites' component={TabRoutes} />
            <Stack.Screen name='UserConfig' component={TabRoutes} />
            <Stack.Screen name='Load' component={Load} />
        </Stack.Navigator>
    )
};