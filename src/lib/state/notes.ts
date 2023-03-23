import { get, writable, type Writable } from 'svelte/store';

interface Note {
	note: string;
}

export type Row = {
	notes: Note[];
	pitch: number;
};

export const ROW_AMOUNT = 4;
export const ROW_BUTTONS = 16;

interface IAudio {
	rows: Row[];
}

const newRow = () => {
	const row: Row = { notes: [], pitch: 0 };
	for (let j = 0; j < ROW_BUTTONS; j++) {
		row.notes.push({ note: '' });
	}
	return row;
};

const grid = [];
for (let i = 0; i < ROW_AMOUNT; i++) {
	const row = newRow();
	grid.push(row);
}

const defaultData: IAudio = {
	rows: grid
};

interface NoteStore {
	subscribe: Writable<IAudio>['subscribe'];
	addRow: () => void;
	removeRow: (rowIndex: number) => void;
	updateNote: (rowIndex: number, index: number, note: string) => void;
	updatePitch: (rowIndex: number, pitch: number) => void;

	reset: () => void;
	set: (this: void, value: IAudio) => void;
}

function createNotes(): NoteStore {
	const { subscribe, set, update } = writable(defaultData);

	return {
		subscribe,
		addRow: () => {
			update((state) => {
				state.rows = [...state.rows, newRow()];
				return state;
			});
		},
		removeRow: (rowIndex) => {
			update((state) => {
				state.rows = state.rows.filter((_, index) => index !== rowIndex);

				return state;
			});
		},
		updateNote: (rowIndex, index, note) => {
			update((state) => {
				state.rows[rowIndex].notes[index].note = note;
				return state;
			});
		},
		updatePitch: (rowIndex, pitch) => {
			update((state) => {
				state.rows[rowIndex].pitch = pitch;
				return state;
			});
		},
		reset: () => {
			//
		},
		set
	};
}

export const audio = createNotes();
