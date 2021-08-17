import { ticketBooking } from '../../src/MovieBooking'
import { currentState } from '../../src/constant'

describe("Movie Booking Test", () => {

    it("should return the seat number booked as output if seats are available", () => {
        const seatNumber = ticketBooking(currentState, "MORNING", "1-08-20", "BOOKING")
        expect(seatNumber).toEqual({
            ...currentState,
            seatAlloted: 1
        })
    })

    it("should return the recommendation if seat is available in other timing on the same day", () => {
        const seatNumber = ticketBooking(currentState, "AFTERNOON", "5-08-20", "BOOKING")
        expect(seatNumber).toEqual({
            ...currentState,
            recommendation: "Seats are available on 5-08-20 date and EVENING show"
        })
    })

    it("should return the recommendation if seat is available in other timing on the other day", () => {
        const seatNumber = ticketBooking(currentState, "NIGHT", "4-08-20", "BOOKING")
        expect(seatNumber).toEqual({
            ...currentState,
            recommendation: "Seats are available on 5-08-20 date and MORNING show"
        })
    })

    it("should generate error if no seat is available", () => {
        expect(() => ticketBooking(currentState, "NIGHT", "5-08-20", "BOOKING")).toThrow("No seats available");
    })

})