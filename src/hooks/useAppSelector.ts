import { TypedUseSelectorHook, useSelector } from 'react-redux';

import { RootState } from '/reduxStore/store';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
