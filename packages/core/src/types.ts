import type { Key } from 'node:readline';
import type { Action } from './utils/settings.js';

/**
 * The state of the prompt
 */
export type ClackState = 'initial' | 'active' | 'cancel' | 'submit' | 'error';

/**
 * Typed event emitter for clack
 */
export interface ClackEvents {
	initial: (value?: any) => void;
	active: (value?: any) => void;
	cancel: (value?: any) => void;
	submit: (value?: any) => void;
	error: (value?: any) => void;
	cursor: (key?: Action) => void;
	key: (key: string | undefined, info: Key) => void;
	value: (value?: string) => void;
	confirm: (value?: boolean) => void;
	finalize: () => void;
}

/**
 * Display a value
 */
export interface ValueWithCursorPart {
	text: string;
	type: 'value' | 'cursor_on_value' | 'suggestion' | 'cursor_on_suggestion';
}
