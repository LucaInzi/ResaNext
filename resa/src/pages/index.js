import { useState } from 'react';
import ReservationForm from '../components/ReservationForm';
import SearchBar from '../components/SearchBar';
import ReservationList from '../components/ReservationList';

function Home({ reservations: initialReservations }) {
  const [reservations, setReservations] = useState(initialReservations);

  const handleNewReservation = (data) => {
    // Vous pourriez vouloir faire une requête POST à votre API ici pour ajouter la nouvelle réservation au serveur
    // Pour l'instant, nous allons simplement ajouter la nouvelle réservation à l'état local
    setReservations(oldReservations => [...oldReservations, data]);
  }

  return (
    <div>
      <h1>Reservations</h1>
      <ReservationForm onSubmit={handleNewReservation} />
      <SearchBar />
      <ReservationList reservations={reservations} />
    </div>
  );
}

export async function getServerSideProps() {
  try {
    const res = await fetch('https://api-url/reservations');
    if (!res.ok) {
      throw new Error(`Fetch failed with status: ${res.status}`);
    }
    const data = await res.json();

    return {
      props: {
        reservations: data,
      },
    };
  } catch (error) {
    console.error('Fetch error: ', error.message);
    return {
      props: {
        reservations: [],
      },
    };
  }
}

export default Home;
