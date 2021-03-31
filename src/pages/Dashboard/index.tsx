import React from 'react';
import ContentHeader from '../../components/ContentHeader';
import {Container} from './style';

const Dashboard : React.FC = () => {
    return (
        <Container>
            <ContentHeader title="Dashboard" lineColor="#4E41F0"></ContentHeader>
        </Container>
    );
}

export default Dashboard;