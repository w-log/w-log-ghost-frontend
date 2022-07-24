import { IGlobal } from '@/interface/Global';
import { createContext, useContext } from 'react';

export const GlobalContext = createContext<IGlobal>({} as IGlobal);

export const useGlobalContext = () => useContext(GlobalContext);
