
export interface BookingServiceInterface {
    id?: number;
    name: string;
    description: string;
    status: {
        id: number,
        name: string,
        color: string
    };

}

