import { ticketBooking } from '../../src/MovieBooking'
import { seatsBooked,seatsStatus } from '../../src/type'

describe("Movie Booking Test", () => {

    const currentState: seatsStatus = {
        "1-08-20": {
            MORNING : 1,
            AFTERNOON : 100,
            EVENING : 0,
            NIGHT : 0
        },
        "2-08-20": {
            MORNING : 67,
            AFTERNOON : 100,
            EVENING : 45,
            NIGHT : 0
        },
        "3-08-20": {
            MORNING : 14,
            AFTERNOON : 10,
            EVENING : 40,
            NIGHT : 40
        },
        "4-08-20": {
            MORNING : 18,
            AFTERNOON : 10,
            EVENING : 90,
            NIGHT : 99
        },
        "5-08-20": {
            MORNING : 98,
            AFTERNOON : 100,
            EVENING : 87,
            NIGHT : 0
        }
    };

    it("should return the seat number booked as output", () => {
        const seatNumber = ticketBooking(currentState, "MORNING", "1-08-20")
        expect(seatNumber).toEqual({
            ...currentState,
            seatAlloted: 2
        })
    })

    it("should generate error if no seat is available", () => {
        expect(() => ticketBooking(currentState, "AFTERNOON", "2-08-20")).toThrow("No seats available");
    })

})