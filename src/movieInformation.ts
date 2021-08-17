import { maxSeats } from './constant';
import { day,category, seatsStatus, movieInfo } from './type'

export const movieInformation = (currentState: seatsStatus ,showType: category, date: day) => {

    const { movie } = currentState[date][showType];
    if(movie == "NULL")
        throw new Error("No movie available");
    return { ...currentState, movie: movie };

}

export const recommendation = (currentState: seatsStatus, showType: category, date:day) => {

    const { seats } = currentState[date][showType];

    if( seats < maxSeats ) 
        return { ...currentState, seatAlloted: currentState[date][showType].seats + 1 }
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
                    if(valid && currentState[curr_key][curr_day].seats < maxSeats)
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
                    if(currentState[curr_key][curr_day].seats < maxSeats)
                    {
                        return { ...currentState, recommendation: `Seats are available on ${ curr_key } date and ${ curr_day } show` }
                    }    
                }
            }
        }
    }
    
    throw new Error("No seats available")

}

export const assignMovie = (currentState: seatsStatus, showType: category, date: day, updateMovie: string) => {

    const { movie,seats } = currentState[date][showType];

    if(movie == "NULL" || (movie && seats == 0))
    { 
        return {
            ...currentState,
            updatedMovie: updateMovie
        }
    }
    throw new Error("Cannot change the movie as seats are already reserved");

}

export const listOfAvailableShows = (currentState: seatsStatus, movieToBeSearched: string) => {

    const listOfShows = [];
    let curr_date: day;
    for (curr_date in currentState)
    {
        let curr_show: category;
        for (curr_show in currentState[curr_date])
        {
            const { movie,seats } = currentState[curr_date][curr_show];
            if(seats < maxSeats && movie == movieToBeSearched)
            {
                listOfShows.push(`${ maxSeats-seats } seats are available on ${ curr_date } in ${ curr_show } show`);
            }    
        }
    }
    return listOfShows;
}