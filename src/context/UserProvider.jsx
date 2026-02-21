import React, { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    const onSubmit = async (data) => {

        // Fake delay for enhanced user experience
        await new Promise((resolve) => setTimeout(resolve, 2500));

        const trimmedData = {};

        // Trim text fields
        for (const [key, value] of Object.entries(data)) {
            trimmedData[key] = typeof value === 'string' ? value.trim() : value;
        }

        // Photo conversion
        if (data.favPhoto && data.favPhoto[0]) {
            const photo = data.favPhoto[0];
            const reader = new FileReader();

            reader.onload = () => {
                trimmedData.photo = reader.result;
                localStorage.setItem('formData', JSON.stringify(trimmedData));
                navigate('/confirmation');
                setUser(trimmedData)
            };

            reader.readAsDataURL(photo);

        } else {
            localStorage.setItem('formData', JSON.stringify(trimmedData));
            console.log('✅ Saved without photo!', trimmedData);
        }
    };

    return (
        <UserContext.Provider value={{ onSubmit, user }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    return useContext(UserContext);
};

export default UserProvider;
