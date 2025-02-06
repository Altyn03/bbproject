import { RootState } from '@/app/providers/StoreProvider';
import { useSelector } from 'react-redux';

export const useTypedSelector = useSelector.withTypes<RootState>();
