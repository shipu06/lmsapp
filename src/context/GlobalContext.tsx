// MyContext.ts
import { createContext } from 'react';

// Define the type for your context
interface AppGlobalContext {
	isDark: boolean;
	setIsDark?: (newData: boolean) => void;
}

// Create the context
const GlobalContext = createContext<AppGlobalContext | undefined>({ isDark: false });

export default GlobalContext;
