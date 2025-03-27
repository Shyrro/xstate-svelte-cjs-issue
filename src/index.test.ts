import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/svelte';
import Testable from "./components/Testable.svelte";

describe('sum test', () => {
	it('testable component', () => {
		const { getByTestId } = render(Testable);

		const toggle = getByTestId('broken-test');
		expect(toggle).not.toBeNull();
	});
});
