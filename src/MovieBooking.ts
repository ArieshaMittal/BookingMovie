import { day,category, seatsStatus } from './type'

export const ticketBooking = (currentState: seatsStatus ,showType: category, date: day) => {

    const maxSeats = 100;

    if( currentState[date][showType] < maxSeats ) 
        return { ...currentState, seatAlloted: currentState[date][showType] + 1 }
    else
        throw new Error("No seats available")

}
