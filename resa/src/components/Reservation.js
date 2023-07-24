import React from 'react';
import Link from 'next/link';
import { Typography } from 'antd';

const { Title, Text } = Typography;

function Reservation({reservation}) {
    return (
        <div>
            <Title level={3}>{reservation.name} {reservation.surname}</Title>
            <Text>{reservation.date} at {reservation.time}</Text>
            <Text>Number of people: {reservation.number}</Text>
            <Link href={`/reservation/${reservation.id}`}>Voir plus</Link>
        </div>
    );
}

export default Reservation;
