import { createContext, useState, type FC, type ReactNode } from "react";

// 1. Define the context interface
interface ContextProps {
  count: number;
  increment: () => void;
  decrement: () => void;
}

// 2. Create the context with default values
export const MyContext = createContext<ContextProps>({
  count: 0,
  increment: () => {},
  decrement: () => {},
});

// 3. Props type for the provider
interface ProviderProps {
  children: ReactNode;
}

// 4. The provider component
export const MyProvider: FC<ProviderProps> = ({ children }) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count +1);
  };

  const decrement = () => {
    setCount(count- 1);
  };

  return (
    <MyContext.Provider value={{ count, increment, decrement }}>
      {children}
    </MyContext.Provider>
  );
};
