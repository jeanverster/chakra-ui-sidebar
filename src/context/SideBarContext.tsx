import * as React from 'react';

type SideBarContextType = {
  sideBarOpen: boolean;
  toggleSideBar: () => void;
};

export const SideBarContext = React.createContext<SideBarContextType>({
  sideBarOpen: false,
  toggleSideBar: () => null,
});

export const useSideBarContext = (): SideBarContextType =>
  React.useContext(SideBarContext);

type SideBarProviderProps = {
  children?: React.ReactNode;
};

export const SideBarProvider = ({ children }: SideBarProviderProps) => {
  const [sideBarOpen, setSideBarOpen] = React.useState(false);

  function toggleSideBar() {
    setSideBarOpen(!sideBarOpen);
  }

  return (
    <SideBarContext.Provider value={{ sideBarOpen, toggleSideBar }}>
      {children}
    </SideBarContext.Provider>
  );
};

export const SideBarConsumer = SideBarContext.Consumer;
