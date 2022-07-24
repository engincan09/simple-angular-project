import { Id } from './id.model';
import { Dob } from './dob.model';
import { Login } from './login.model';
import { Name } from './name.model';
import { Registered } from './registered.model';
export class ResultModel{
    results:Result[];
    info : Info

}

export class Result{
    gender:string;
    name:Name
    location:Location;
    email:string;
    login:Login;
    dob:Dob;
    registered:Registered;
    phone:string;
    cell:string;
    id:Id;
    nat:string;
}

export class Info{
    seed:string;
    results:number;
    page:number;
    version:number;
}