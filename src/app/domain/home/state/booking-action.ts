export namespace BookingServiceAction {

    export class getBookingService {
        static readonly type = '[BookingService] Booking';
        constructor() { }
    }
    export class ViewServiceBooking {
        static readonly type = '[BookingService] View';
        constructor(public id: number) { }
    }
}