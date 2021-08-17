import { day,category, seatsStatus, requestType } from './type'
import { movieInformation,recommendation } from './movieInformation';

export const ticketBooking = (currentState: seatsStatus ,showType: category, date: day, request: requestType) => {

    if(request == "BOOKING")
        return recommendation(currentState,showType,date);    
    else
        return movieInformation(currentState,showType,date);    

}
