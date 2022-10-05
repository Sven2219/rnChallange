/**
 * @format
 */

import { AppRegistry } from 'react-native';

import './src/i18n';
import { name as appName } from './app.json';
import App from '/App';

AppRegistry.registerComponent(appName, () => App);
