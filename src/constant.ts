import { seatsStatus } from './type'

export const maxSeats = 100;

export const currentState: seatsStatus = {
    "1-08-20": {
        MORNING : {
            seats: 0, movie: "NULL"
        },
        AFTERNOON : {
            seats: 100, movie: "3 Idiots"
        },
        EVENING : {
            seats: 12, movie: "3 Idiots"
        },
        NIGHT : {
            seats: 12, movie: "Inception"
        }
    },
    "2-08-20": {
        MORNING : {
            seats: 12, movie: "3 Idiots"
        },
        AFTERNOON : {
            seats: 12, movie: "3 Idiots"
        },
        EVENING : {
            seats: 12, movie: "3 Idiots"
        },
        NIGHT : {
            seats: 12, movie: "3 Idiots"
        }
    },
    "3-08-20": {
        MORNING : {
            seats: 12, movie: "3 Idiots"
        },
        AFTERNOON : {
            seats: 89, movie: "Inception"
        },
        EVENING : {
            seats: 12, movie: "3 Idiots"
        },
        NIGHT : {
            seats: 12, movie: "3 Idiots"
        }
    },
    "4-08-20": {
        MORNING : {
            seats: 45, movie: "3 Idiots"
        },
        AFTERNOON : {
            seats: 18, movie: "3 Idiots"
        },
        EVENING : {
            seats: 12, movie: "3 Idiots"
        },
        NIGHT : {
            seats: 100, movie: "Inception"
        }
    },
    "5-08-20": {
        MORNING : {
            seats: 96, movie: "3 Idiots"
        },
        AFTERNOON : {
            seats: 100, movie: "3 Idiots"
        },
        EVENING :{
            seats: 80, movie: "Inception"
        },
        NIGHT : {
            seats: 100, movie: "Gravity"
        }
    }
};