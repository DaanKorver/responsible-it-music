import { get, writable, type Writable } from 'svelte/store';

interface Note {
	note: string;
}

type Row = Array<Note>;

export const ROW_AMOUNT = 4;
export const ROW_BUTTONS = 16;

interface IAudio {
	notes: Row[];
}

const newRow = () => {
	const row = [];
	for (let j = 0; j < ROW_BUTTONS; j++) {
		row.push({ note: '' });
	}
	return row;
};

const grid = [];
for (let i = 0; i < ROW_AMOUNT; i++) {
	const row = newRow();
	grid.push([...row]);
}

const defaultData: IAudio = {
	notes: grid
};

interface NoteStore {
	subscribe: Writable<IAudio>['subscribe'];
	addRow: () => void;
	removeRow: (rowIndex: number) => void;
	updateNote: (rowIndex: number, index: number, note: string) => void;

	reset: () => void;
	set: (this: void, value: IAudio) => void;
}

function createNotes(): NoteStore {
	const { subscribe, set, update } = writable(defaultData);

	return {
		subscribe,
		addRow: () => {
			update((state) => {
				state.notes = [...state.notes, newRow()];
				return state;
			});
		},
		removeRow: (rowIndex) => {
			update((state) => {
				state.notes.splice(rowIndex, 1);
				return state;
			});
		},
		updateNote: (rowIndex, index, note) => {
			update((state) => {
				state.notes[rowIndex][index].note = note;
				console.log(state);

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
