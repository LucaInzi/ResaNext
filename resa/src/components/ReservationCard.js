import { Card, Typography, Button } from 'antd';
import Link from 'next/link';

const { Title, Text } = Typography;

function ReservationCard({ reservation }) {
    return (
        <Card title={<Title level={3}>{reservation.name}</Title>}>
            <Text>{reservation.surname}</Text>
            <br />
            <Text>{reservation.date}</Text>
            <br />
            <Text>{reservation.time}</Text>
            <br />
            <Text>{reservation.number} personnes</Text>
            <br />
            <Link href={`/reservation/${reservation.id}`} passHref>
              <Button type="primary">Voir plus</Button>
            </Link>
        </Card>
    );
}

export default ReservationCard;
