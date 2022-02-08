import React from 'react';

const useFirebase = () => {
    const colorTheme = localStorage.getItem('theme');
    return {
        colorTheme
    }
};

export default useFirebase;