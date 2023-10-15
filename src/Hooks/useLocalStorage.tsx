import { useState } from "react";

type TUseLocalStorageReturn = [string | null, (newValue: string | null) => void];

// Custom Hook
export const useLocalStorage = (keyName: string): TUseLocalStorageReturn => {
    /* Initial Value From LocalStorage, In Case Page Is Refreshed */
    // Return value from LocalStorage if present, else return default value
    const getUserFromLocalStorageOrNull = (defaultValue: null = null) => {
        try {
            const value = window.localStorage.getItem(keyName);
            if (value) {
                return JSON.parse(value);
            } else {
                window.localStorage.setItem(keyName, JSON.stringify(defaultValue));
                return defaultValue;
            }
        } catch (err) {
            return defaultValue;
        }
    };

    const [storedLocalUser, setStoredLocalUser] = useState<string | null>(
        getUserFromLocalStorageOrNull()
    );

    const setValue = (newValue: string | null) => {
        try {
            window.localStorage.setItem(keyName, JSON.stringify(newValue));
        } catch (err) {
            console.log(`🚀 ~ file: useLocalStorage.tsx:22 ~ setValue ~ err:`, err);
        }
        setStoredLocalUser(newValue);
    };

    return [storedLocalUser, setValue];
};
