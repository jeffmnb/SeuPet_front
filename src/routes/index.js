import React, { useCallback, useContext, useEffect, useLayoutEffect, useState } from 'react';
import { NavigationContainer, useFocusEffect } from '@react-navigation/native';

import { TabRoutes } from './tab.routes';
import { StackRoutes } from './stack.routes';

import { AuthProvider, userDataStoraged } from '../hooks/Auth';

import { Load } from '../components/Load';

export const Routes = () => {

    const [user, setUser] = useState(undefined);

    useEffect(() => {
        setUser(userDataStoraged);

        setTimeout(() => {
            setUser(userDataStoraged);
        }, 2000);


        if (userDataStoraged != undefined) {
            setUser(true);
        } else {
            setUser(false);
        }

    }, []);

    return (
        <NavigationContainer>
            <AuthProvider>
                {user == undefined ? <StackRoutes /> : user ? <StackRoutes /> : <Load />}
            </AuthProvider>
        </NavigationContainer>
    )
};


export default userDataStoraged;