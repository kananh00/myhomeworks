import React from 'react';
import { Layout } from '../../commons';
import { ProductsList } from './components';

export const Homepage = () => {
    return (
        <Layout>
            <h1 style = {{textAlign: 'center'}}>Our Music Albums</h1>
            <ProductsList />
        </Layout>
    )
}
