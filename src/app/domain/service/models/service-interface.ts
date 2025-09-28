export interface ServiceInterface {
    id: number
    name: string
    description: string
    price: string
    provider: Provider,
    status: Status
}

export interface Provider {
    name: string
    phone: Address
}

export interface Address {
    phone: string
    location: string
}

export class Status {
    name: string
}
