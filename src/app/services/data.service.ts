import { Injectable } from "@angular/core";
import { InMemoryDbService } from "angular-in-memory-web-api";

@Injectable({
    providedIn: 'root'
})
export class DataService implements InMemoryDbService {
    constructor() {}

    createDb() {
        return {
            users: [
                {
                    id: 1,
                    firstName: 'Manasi',
                    lastName: 'Keskar',
                    domain: 'Software Engineer',
                    active: true
                },
                {
                    id: 2,
                    firstName: 'Nishant',
                    lastName: 'Kulkarni',
                    domain: 'Software Engineer',
                    active: false
                },
                {
                    id: 3,
                    firstName: 'Manasi',
                    lastName: 'Keskar',
                    domain: 'Software Engineer',
                    active: true
                },
                {
                    id: 4,
                    firstName: 'Michael',
                    lastName: 'Kim',
                    domain: 'Software Engineer',
                    active: true
                },
                {
                    id: 5,
                    firstName: 'George',
                    lastName: 'Washington',
                    domain: 'Software Engineer',
                    active: false
                },
                {
                    id: 6,
                    firstName: 'Tricia',
                    lastName: 'Joseph',
                    domain: 'Software Engineer',
                    active: false
                },
                {
                    id: 7,
                    firstName: 'Trupti',
                    lastName: 'Kevadia',
                    domain: 'Software Engineer',
                    active: true
                },
                {
                    id: 8,
                    firstName: 'Jignesh',
                    lastName: 'Shah',
                    domain: 'Software Engineer',
                    active: true
                },
                {
                    id: 9,
                    firstName: 'Veer',
                    lastName: 'Khatri',
                    domain: 'Software Engineer',
                    active: false
                },
                {
                    id: 10,
                    firstName: 'Amanda',
                    lastName: 'Fox',
                    domain: 'Software Engineer',
                    active: true
                },
                {
                    id: 11,
                    firstName: 'Samuel',
                    lastName: 'Jones',
                    domain: 'Software Engineer',
                    active: false
                },
                {
                    id: 12,
                    firstName: 'Jeevan',
                    lastName: 'Kumar',
                    domain: 'Software Engineer',
                    active: true
                },
                {
                    id: 13,
                    firstName: 'Kshitij',
                    lastName: 'Khupse',
                    domain: 'Software Engineer',
                    active: true
                },
                {
                    id: 14,
                    firstName: 'Monali',
                    lastName: 'Patkar',
                    domain: 'Software Engineer',
                    active: false
                },
                {
                    id: 15,
                    firstName: 'Brijesh',
                    lastName: 'Mishra',
                    domain: 'Software Engineer',
                    active: true
                },
                {
                    id: 16,
                    firstName: 'Shyam',
                    lastName: 'Sundar',
                    domain: 'Software Engineer',
                    active: false
                },
                {
                    id: 17,
                    firstName: 'Prisha',
                    lastName: 'Kumar',
                    domain: 'Software Engineer',
                    active: true
                },
                {
                    id: 18,
                    firstName: 'Jayesh',
                    lastName: 'Dhanani',
                    domain: 'Software Engineer',
                    active: false
                },
                {
                    id: 19,
                    firstName: 'Preethi',
                    lastName: 'Keshav',
                    domain: 'Software Engineer',
                    active: true
                },
                {
                    id: 20,
                    firstName: 'Ram',
                    lastName: 'Bharadwaj',
                    domain: 'Software Engineer',
                    active: true
                },
            ],
        };
    }
}