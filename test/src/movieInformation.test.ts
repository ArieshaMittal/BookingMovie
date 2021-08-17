import { ticketBooking } from '../../src/MovieBooking'
import { currentState } from '../../src/constant'
import { assignMovie } from '../../src/movieInformation'

describe("Movie Information Test", () => {

    it("should return the movie associated with the particular show", () => {
        const movie = ticketBooking(currentState, "MORNING", "2-08-20", "ENQUIRY")
        expect(movie).toEqual({
            ...currentState,
            movie: "3 Idiots"
        })
    })

    it("should throw an error if movie information is not available", () => {
        expect(() => ticketBooking(currentState, "MORNING", "1-08-20", "ENQUIRY")).toThrow("No movie available");
    })

    it("should update the movie if movie is not provided or if movie is provided but seats are not reserved", () => {
        const movie = assignMovie(currentState, "MORNING", "1-08-20", "Inception")
        expect(movie).toEqual({
            ...currentState,
            updatedMovie: "Inception"
        })
    })

    it("should throw error if seats are reserved already", () => {
        expect(() => assignMovie(currentState, "MORNING", "2-08-20", "Inception")).toThrow("Cannot change the movie as seats are already reserved")
    })

})