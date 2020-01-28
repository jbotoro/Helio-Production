import React from 'react';
import './HomePage.styles.scss'
import Directory from '../../components/directory/directory.component'
import { HomePageContainer } from './HomePage.styles'

const HomePage = () => (
    <HomePageContainer>
       <Directory />
    </HomePageContainer>
)

export default HomePage;