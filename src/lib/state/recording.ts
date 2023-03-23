import { writable, type Writable } from 'svelte/store';

export const isRecording: Writable<boolean> = writable(false);
export const isRecordingModal: Writable<boolean> = writable(false);
