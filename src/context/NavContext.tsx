import { createContext, useState } from "react";

interface ProviderValue {
    activeNavLinkId: string;
    setActiveNavLinkId?: React.Dispatch<React.SetStateAction<string>>;
}
const defaultNavContextState = {
	activeNavLinkId: "",
	setActiveNavLinkId: () => {}
}

export const NavContext = createContext<ProviderValue>(defaultNavContextState);

const NavProvider = ({ children }) => {
	const [activeNavLinkId, setActiveNavLinkId] = useState('');

	const providerValue = {
		activeNavLinkId,
		setActiveNavLinkId,
	};

	return (
		<NavContext.Provider value={providerValue}>{children}</NavContext.Provider>
	);
};

export default NavProvider;