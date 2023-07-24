import axios from 'axios';

const API_URL = 'http://localhost:3001';

export function getReservations() {
    return axios.get(`${API_URL}/reservations`);
}

export function getReservation(id) {
    return axios.get(`${API_URL}/reservations/${id}`);
}

export function updateReservation(id, data) {
    return axios.put(`${API_URL}/reservations/${id}`, data);
}

export function deleteReservation(id) {
    return axios.delete(`${API_URL}/reservations/${id}`);
}

export function addReservation(data) {
    return axios.post(`${API_URL}/reservations`, data);
}