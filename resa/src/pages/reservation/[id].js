import { Input, Button } from 'antd';
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react';
import { deleteReservation, updateReservation } from '../../services/api';


function Detail({ id, reservationData }) {
    const [reservation, setReservation] = useState(reservationData);
    const [updatedReservation, setUpdatedReservation] = useState(reservationData);
    const [editing, setEditing] = useState(false);
    const router = useRouter();

    const loadReservation = async () => {
        setReservation(reservationData);
        setUpdatedReservation(reservationData);
    }

    useEffect(() => {
        loadReservation();
    }, []);

    const handleUpdate = async () => {
        await updateReservation(id, updatedReservation);
        setEditing(false);
        loadReservation(); // reload the reservation to see the updates
    }

    const handleDelete = async () => {
        if(window.confirm('Are you sure you want to delete this reservation?')) {
            await deleteReservation(id);
            router.push('/');
        }
    }

    if (!reservation) return <div>Loading...</div>;

    return (
        <div>
            {editing ? (
                <>
                    <Input placeholder="Name" value={updatedReservation.name} onChange={e => setUpdatedReservation({...updatedReservation, name: e.target.value})} />
                    <Input placeholder="Surname" value={updatedReservation.surname} onChange={e => setUpdatedReservation({...updatedReservation, surname: e.target.value})} />
                    <Input placeholder="Date" value={updatedReservation.date} onChange={e => setUpdatedReservation({...updatedReservation, date: e.target.value})} />
                    <Input placeholder="Time" value={updatedReservation.time} onChange={e => setUpdatedReservation({...updatedReservation, time: e.target.value})} />
                    <Input placeholder="Number of People" value={updatedReservation.number} onChange={e => setUpdatedReservation({...updatedReservation, number: parseInt(e.target.value)})} />
                </>
            ) : (
                <>
                    <h1>{reservation.name}</h1>
                    <h2>{reservation.surname}</h2>
                    <h2>{reservation.date}</h2>
                    <h2>{reservation.time}</h2>
                    <h2>{reservation.number}</h2>
                </>
            )}
            <Button type="primary" onClick={editing ? handleUpdate : () => setEditing(!editing)}>{editing ? 'Save' : 'Edit'}</Button>
            {editing && <Button danger onClick={handleDelete}>Delete</Button>}
        </div>
    );
}

export async function getServerSideProps(context) {
    const res = await fetch(`http://localhost:3001/reservations/${context.params.id}`);
    const reservationData = await res.json();

    return {
        props: {
            id: context.params.id,
            reservationData
        },
    };
}


export default Detail;