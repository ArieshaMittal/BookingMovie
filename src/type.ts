export type category = "MORNING" | "AFTERNOON" | "EVENING" | "NIGHT" ;
export type day = "1-08-20" | "2-08-20" | "3-08-20" | "4-08-20" | "5-08-20" ;

export type seatsBooked = {
    [key in category] : number;
}

export type seatsStatus = {
    [key in day] : seatsBooked;
}