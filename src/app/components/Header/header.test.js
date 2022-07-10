// src/components/Logo.test.js

import { render } from '@testing-library/react';
import Header from './Header';

test('render test', () => {
	const component = render(<Header />);
	component.getByText(/App de Clima/i);
});
