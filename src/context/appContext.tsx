import React, {
    createContext,
    FunctionComponent,
    ReactNode,
    useContext,
} from 'react';
import OmbdService from '../services/ombdService';

interface IAppContext {
    omdbServiceInstance?: OmbdService;
}
const AppContext = createContext<IAppContext>({});

export const useAppContext = () => useContext(AppContext);

export const WithAppContext: FunctionComponent<{
    context: IAppContext;
    children: ReactNode;
}> = ({ children, context }) => {
    return (
        <AppContext.Provider value={context}>{children}</AppContext.Provider>
    );
};
