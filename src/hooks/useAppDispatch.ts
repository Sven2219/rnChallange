import { useDispatch } from 'react-redux';

import { AppDispatch } from '/reduxStore/store';

export function useAppDispatch() {
	return useDispatch<AppDispatch>();
}
