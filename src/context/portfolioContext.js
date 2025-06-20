import React, { useContext, createContext, useState } from "react";

const portfolioContext = createContext();
export const usePortfolioState = () => useContext(portfolioContext);

export const ContextProvider = ({ children }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);


    return (
        <portfolioContext.Provider value={{ isModalOpen, setIsModalOpen }}>
            {children}
        </portfolioContext.Provider>
    )
};

