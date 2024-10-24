import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	name: '',
};

const filtersSlice = createSlice({
	name: 'filters',
	initialState,
	reducers: {
		// Екшен для зміни фільтра
		changeFilter: (state, action) => {
			state.name = action.payload;
		},
	},
});

// Селектор для отримання поточного значення фільтра за ім'ям
export const selectNameFilter = state => state.filters.name;

// Експортуємо редюсер та екшени
export const { changeFilter } = filtersSlice.actions;
export default filtersSlice.reducer;
