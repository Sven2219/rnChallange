import React from 'react';
import { render } from '@testing-library/react-native';

import RegisterScreen from '/modules/register/RegisterScreen';
import testIds from '/const/testIds';

function RegisterScreenTest() {
	return <RegisterScreen goForward={() => console.log('forward')} />;
}

test('Test setup', () => {
	const { getByTestId } = render(<RegisterScreenTest />);
	const registerText = getByTestId(testIds.registerText);
	expect(registerText);
});
