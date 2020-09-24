import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings109070Navigator from '../features/Settings109070/navigator';
import UserProfile109063Navigator from '../features/UserProfile109063/navigator';
import Settings109062Navigator from '../features/Settings109062/navigator';
import Settings109060Navigator from '../features/Settings109060/navigator';
import SignIn2109058Navigator from '../features/SignIn2109058/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings109070: { screen: Settings109070Navigator },
UserProfile109063: { screen: UserProfile109063Navigator },
Settings109062: { screen: Settings109062Navigator },
Settings109060: { screen: Settings109060Navigator },
SignIn2109058: { screen: SignIn2109058Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
