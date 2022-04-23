import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Home } from '../pages/Home';
import { Favorites } from '../pages/Favorites';
import { CreatePet } from '../pages/CreatePet';

import { Foundation } from '@expo/vector-icons';
import { Platform, Text, View } from 'react-native';
import theme from '../theme';
import { RFValue } from 'react-native-responsive-fontsize';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { MaterialIcons, Ionicons, FontAwesome5 } from '@expo/vector-icons';
import { UserConfig } from '../pages/UserConfig';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { StackRoutes } from './stack.routes';
import { AboutPet } from '../pages/AboutPet';


export const TabRoutes = () => {

    const Tab = createBottomTabNavigator();

    return (
        <>
            <Tab.Navigator screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: theme.colors.BlueGreen,
                tabBarHideOnKeyboard: true,
                tabBarStyle: {
                    height: Platform.OS == 'android' ? heightPercentageToDP('8') : getBottomSpace() + heightPercentageToDP('7.5')
                }
            }}>

                <Tab.Screen name=' ' component={Home} options={{
                    tabBarIcon: ({ color }) => (
                        <View style={{ top: heightPercentageToDP('1'), width: widthPercentageToDP('10'), alignItems: 'center' }}>
                            <Foundation name="home" size={heightPercentageToDP('3.6')} color={color} />
                            <Text style={{ fontFamily: theme.fonts.Text, color: theme.colors.grayDark, fontSize: RFValue(11), marginTop: RFValue(2.7) }}>Início</Text>
                        </View>
                    )
                }} />

                <Tab.Screen name='   ' component={CreatePet} options={{
                    tabBarIcon: ({ color }) => (
                        <View style={{ top: heightPercentageToDP('1'), alignItems: 'center', width: widthPercentageToDP('15') }}>
                            <Ionicons name="md-add-circle" size={heightPercentageToDP('3.6')} color={color} />
                            <Text style={{ fontFamily: theme.fonts.Text, color: theme.colors.grayDark, fontSize: RFValue(10.5) }}>Add Pet</Text>
                        </View>
                    )
                }} />

                <Tab.Screen name='  ' component={Favorites} options={{
                    tabBarIcon: ({ color }) => (
                        <View style={{ top: heightPercentageToDP('1'), alignItems: 'center', width: widthPercentageToDP('15') }}>
                            <MaterialIcons name="favorite" size={heightPercentageToDP('3.6')} color={color} />
                            <Text style={{ fontFamily: theme.fonts.Text, color: theme.colors.grayDark, fontSize: RFValue(10.5), marginTop: RFValue(2) }}>Favoritos</Text>
                        </View>
                    )
                }} />

                <Tab.Screen name='    ' component={UserConfig} options={{
                    tabBarIcon: ({ color }) => (
                        <View style={{ top: heightPercentageToDP('1'), alignItems: 'center', width: widthPercentageToDP('15') }}>
                            <FontAwesome5 name="user-alt" size={heightPercentageToDP('2.9')} color={color} />
                            <Text style={{ fontFamily: theme.fonts.Text, color: theme.colors.grayDark, fontSize: RFValue(10.5), marginTop: RFValue(4) }}>Config</Text>
                        </View>
                    )
                }} />

            </Tab.Navigator>

        </>
    )
};