interface CarSpecification {
    vehicleType: string;
    colour: string;
    fuel: string;
    transmission: string;
    numberOfDoors: number;
    co2Emissions: string;
    noxEmissions: number;
    numberOfKeys: number;
}

interface CarOwnership {
    logBook: string;
    numberOfOwners: number;
    dateOfRegistration: string;
}

interface CarDetails {
    specification: CarSpecification;
    ownership: CarOwnership;
    equipment: string[];
}

export interface CarPropType {
    make: string;
    model: string;
    engineSize: string;
    fuel: string;
    year: number;
    mileage: number;
    auctionDateTime: string;
    startingBid: number;
    favourite: boolean;
    details: CarDetails;
}
