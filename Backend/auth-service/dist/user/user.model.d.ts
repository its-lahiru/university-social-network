export declare class User {
    id: string;
    firstName: string;
    lastName: string;
    faculty: Faculty;
    email: string;
    username: string;
    password: string;
}
export declare enum Faculty {
    APPLIED = "APPLIED_SCIENCES",
    MANAGEMENT = "MANAGEMENT_STUDIES",
    AGRICULTURE = "AGRICULTURE",
    GEOMATICS = "GEOMATICS",
    SOCIAL = "SOCIAL SCIENCES",
    TECHNOLOGY = "TECHNOLOGY",
    MEDICAL = "MEDICAL"
}
