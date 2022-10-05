/**
 * @format
 */

import { AppRegistry } from 'react-native';
import './src/i18n';
import { name as appName } from './app.json';
import Router from '/navigation/Router';

AppRegistry.registerComponent(appName, () => Router);
