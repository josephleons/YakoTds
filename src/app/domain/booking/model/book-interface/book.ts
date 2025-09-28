
export interface BookInterface {
    id?;
    booking_status: BookingStatus;
    customer: Customer;
    providerService?: ProviderService;
    service: Service;
}

export interface Address {
    mobile: string;
    location: string;
}

export interface Customer {
    customer_name: string;
    address: Address;
}

export interface ProviderService {
    id: number;
    company_name: string;
}

export interface Service {
    id: number;
    name: string;
}

export interface BookingStatus {
    id: number;
    name: string;
}
