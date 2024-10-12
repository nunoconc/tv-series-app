import React, {
    createContext,
    FunctionComponent,
    ReactNode,
    useContext,
} from 'react';
import OmbdService from '../services/ombdService';

// This file is responsible for creating the AppContext, which is used to store the OMDB service instance.
//Could be used to store other services, configurations, or global state.

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
