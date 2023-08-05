import { useState, useEffect } from 'react';
import { addReservation, getReservations } from '../services/api'; 
import ReservationForm from '../components/ReservationForm';
import SearchBar from '../components/SearchBar';
import ReservationList from '../components/ReservationList';

function Home({ reservations: initialReservations }) {
  const [reservations, setReservations] = useState(initialReservations);

  useEffect(() => {
    fetchReservations();
  }, []);

  const fetchReservations = async () => {
    const res = await getReservations();
    console.log('Fetched reservations:', res.data); // Added logging
    setReservations(res.data);
  }

  const handleNewReservation = async (data) => {
    try {
      console.log('Data submitted:', data); // Added logging
      const reservation = { ...data, number: parseInt(data.number) };
      const response = await addReservation(reservation);
      console.log('API response:', response); 
      fetchReservations();
    } catch (error) {
      console.error('Error adding reservation: ', error);
    }
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

// ... Rest of your code


export async function getServerSideProps() {
  try {
    // Remplacez 'https://api-url/reservations' par l'URL de votre API
    const res = await fetch('http://localhost:3001/reservations');
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
