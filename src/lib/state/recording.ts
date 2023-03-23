import { writable, type Writable } from 'svelte/store';

export const isRecording: Writable<boolean> = writable(false);
