import axios from 'axios';

const httpClient = axios.create({
    baseURL: 'http://127.0.0.1:8000'
})

export default {
    allIngatlanok() {
        return httpClient.get('/ingatlanok');
    },
    ujIngatlan(ingatlan) {
        return httpClient.post('/new-ingatlan', ingatlan);
    },
    deleteIngatlanok() {
        return httpClient.delete('/delete-ingatlan');
    }
}