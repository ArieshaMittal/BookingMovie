import { listOfAvailableShows } from '../../src/movieInformation'
import { currentState } from '../../src/constant'

describe("Movie Schedules Test", () => {

    it("should return all the timings available for a particular movie", () => {
        const movie = listOfAvailableShows(currentState, "Inception")
        expect(movie).toEqual([
            "88 seats are available on 1-08-20 in NIGHT show",
            "11 seats are available on 3-08-20 in AFTERNOON show",
            "20 seats are available on 5-08-20 in EVENING show"
        ])
    })

    it("should return empty list if movie is not available", () => {
        const movie = listOfAvailableShows(currentState, "Interstellar")
        expect(movie).toEqual([])
    })

    it("should return empty list if slot is not available i.e. all seats are booked", () => {
        const movie = listOfAvailableShows(currentState, "Gravity")
        expect(movie).toEqual([])
    })

})