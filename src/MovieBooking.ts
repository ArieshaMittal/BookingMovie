import { day,category, seatsStatus, seatsBooked } from './type'

export const ticketBooking = (currentState: seatsStatus ,showType: category, date: day) => {

    const maxSeats = 100;

    if( currentState[date][showType] < maxSeats ) 
        return { ...currentState, seatAlloted: currentState[date][showType] + 1 }
    else
    {
        let curr_key: day;
        for (curr_key in currentState)
        {
            if( curr_key.split('-')[0] < date.split('-')[0] ) 
                continue
            else if( curr_key.split('-')[0] == date.split('-')[0] )
            {
                let curr_day: category;
                let valid = false;
                for (curr_day in currentState[curr_key])
                {
                    if(curr_day == showType)
                    {
                        valid=true;
                        continue;
                    }
                    if(valid && currentState[curr_key][curr_day] < maxSeats)
                    {
                        return { ...currentState, recommendation: `Seats are available on ${ curr_key } date and ${ curr_day } show` }
                    }    
                }
            }
            else
            {
                let curr_day: category;
                for (curr_day in currentState[curr_key])
                {
                    if(currentState[curr_key][curr_day] < maxSeats)
                    {
                        return { ...currentState, recommendation: `Seats are available on ${ curr_key } date and ${ curr_day } show` }
                    }    
                }
            }
        }
    }
        
    throw new Error("No seats available")

}
