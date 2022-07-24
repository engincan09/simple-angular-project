import { Timezone } from './timezone.model';
import { Coordinate } from './coordinate.model';
import { Street } from './street.model';
export class Location{
    street:Street;
    city:string;
    state:string;
    country:string;
    postcode:number;
    coordinate:Coordinate;
    timezone:Timezone;
}