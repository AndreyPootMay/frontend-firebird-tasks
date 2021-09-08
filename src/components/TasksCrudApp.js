import React from 'react';

// Router
import { AppRouter } from '../router/AppRouter';
import { Footer } from './layout/Footer';

export const TasksCrudApp = () => {
    return (
        <>
            <AppRouter />

            <Footer />
        </>
    )
}
