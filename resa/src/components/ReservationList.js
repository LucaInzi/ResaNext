import React from 'react';
import { Row, Col } from 'antd';
import ReservationCard from './ReservationCard';

function ReservationList({ reservations }) {
    return (
        <Row gutter={16}>
            {reservations.map((reservation, index) => 
                <Col xs={24} sm={12} md={8} key={index}>
                    <ReservationCard reservation={reservation} />
                </Col>
            )}
        </Row>
    );
}

export default ReservationList;
