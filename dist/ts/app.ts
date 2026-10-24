const cl = console.log;


// // 1
// let student1 = {
//     id: 101,
//     name: "Rahul",
//     age: 22,
//     course: "Angular",
//     isActive: true
// };

interface Student {
    id: number,
    name: string,
    age: number,
    course: string,
    isActive: boolean
}

let student1: Student = {
    id: 101,
    name: "Rahul",
    age: 22,
    course: "Angular",
    isActive: true
};

// 2

// let employee1 = {
//     empId: 201,
//     name: "Amit",
//     salary: 45000,
//     department: "IT", // possible values: "IT", "HR", "Finance", "Marketing"
//     isPermanent: true
// };

type department = "IT" | "HR" | "Finance" | "Marketing";

interface Employee22 {
    empId: number,
    name: string,
    salary: number,
    department: department,
    isPermanent: boolean
}
let employee1: Employee22 = {
    empId: 201,
    name: "Amit",
    salary: 45000,
    department: "IT",
    isPermanent: true
};

// // 3
// let book1 = {
//     id: 301,
//     title: "JavaScript Basics",
//     author: "John",
//     price: 500,
//     isAvailable: true
// };

interface Book {
    id: number,
    title: string,
    author: string,
    price: number,
    isAvailable: boolean
}

let book1 = {
    id: 301,
    title: "JavaScript Basics",
    author: "John",
    price: 500,
    isAvailable: true
};

// // 4
// let mobile1 = {
//     brand: "Samsung",
//     model: "Galaxy S25",
//     price: 75000,
//     color: "Black", // possible values: "Black", "White", "Blue", "Silver"
//     storage: 256
// };

type color = "Black" | "White" | "Blue" | "Silver";

interface Mobile {
    brand: string,
    model: string,
    price: number,
    color: color,
    storage: number
}

let mobile1: Mobile = {
    brand: "Samsung",
    model: "Galaxy S25",
    price: 75000,
    color: "Black",
    storage: 256
}

cl(mobile1)


// // 5
// let customer1 = {
//     id: 401,
//     name: "Priya",
//     email: "priya@example.com",
//     city: "Pune",
//     isVerified: true
// };

interface Customer {
    id: number,
    name: string,
    email: string,
    city: string,
    isVerified: boolean
}

let customer1: Customer = {
    id: 401,
    name: "Priya",
    email: "priya@example.com",
    city: "Pune",
    isVerified: true
};

// // 6
// let laptop1 = {
//     brand: "HP",
//     ram: 16,
//     storage: 512,
//     price: 65000,
//     inStock: true
// };

interface Laptop {
    brand: string,
    ram: number,
    storage: number,
    price: number,
    inStock: boolean
}

let laptop1: Laptop = {
    brand: "HP",
    ram: 16,
    storage: 512,
    price: 65000,
    inStock: true
};



// // 7
// let movie1 = {
//     title: "Dangal",
//     rating: 8.5,
//     language: "Hindi", // possible values: "Hindi", "English", "Marathi", "Tamil"
//     releaseYear: 2016,
//     isReleased: true
// };

type language = "Hindi" | "English" | "Marathi" | "Tamil";

interface Movie {
    title: string,
    rating: number,
    language: language,
    releaseYear: number,
    isReleased: boolean
}

let movie1: Movie = {
    title: "Dangal",
    rating: 8.5,
    language: "English",
    releaseYear: 2016,
    isReleased: true
};

cl(movie1)

// // 8
// let account1 = {
//     accountNumber: 123456,
//     holderName: "Rohit",
//     balance: 50000,
//     accountType: "Savings", // possible values: "Savings", "Current", "Salary"
//     isActive: true
// };

type accountType = 'Savings' | "Current" | "Salary";

interface Account {
    accountNumber: number,
    holderName: "Rohit",
    balance: number,
    accountType: accountType,
    isActive: boolean
}

let account1: Account = {
    accountNumber: 123456,
    holderName: "Rohit",
    balance: 50000,
    accountType: "Salary",
    isActive: true
};

cl(account1);

// // 9
// let course1 = {
//     courseName: "MEAN Stack",
//     duration: 6,
//     fees: 30000,
//     technologies: ["MongoDB", "Express", "Angular", "Node.js"]
// };

interface Course1 {
    courseName: string,
    duration: number,
    fees: number,
    technologies: Array<string>
}

let course1: Course1 = {
    courseName: "MEAN Stack",
    duration: 6,
    fees: 30000,
    technologies: ["MongoDB", "Express", "Angular", "Node.js"]
};


// // 10
// let vehicle1 = {
//     brand: "Hyundai",
//     model: "Creta",
//     price: 1500000,
//     fuelType: "Petrol", // possible values: "Petrol", "Diesel", "Electric", "CNG", "Hybrid"
//     isAvailable: true
// };

type fuelType = "Petrol" | "Diesel" | "electric" | "CNG" | "Hybrid";

interface Vehicle {
    brand: string,
    model: string,
    price: number,
    fuelType: fuelType,
    isAvailable: boolean
}

let vehicle1: Vehicle = {
    brand: "Hyundai",
    model: "Creta",
    price: 1500000,
    fuelType: "Petrol",
    isAvailable: true
};

cl(vehicle1);



// // 11
// let teacher1 = {
//     id: 11,
//     name: "Sneha",
//     subject: "TypeScript",
//     experience: 5,
//     skills: ["JavaScript", "TypeScript", "Angular"]
// };

interface Teacher {
    id: number,
    name: string,
    subject: string,
    experience: number,
    skills: string[]
}

let teacher1: Teacher = {
    id: 11,
    name: "Sneha",
    subject: "TypeScript",
    experience: 5,
    skills: ["JavaScript", "TypeScript", "Angular"]
};

// // 12
// let order1 = {
//     orderId: 1001,
//     amount: 2500,
//     status: "Pending", // possible values: "Pending", "Confirmed", "Delivered", "Cancelled"
//     paymentMode: "UPI" // possible values: "Cash", "UPI", "Card", "NetBanking"
// };

type status = "Pending" | "Confirmed" | "Delivered" | "Cancelled";
type paymentMode = "Cash" | "UPI" | "Card" | "NetBanking";

interface Order {
    orderId: number,
    amount: number,
    status: status,
    paymentMode: paymentMode
}
let order1: Order = {
    orderId: 1001,
    amount: 2500,
    status: "Pending",
    paymentMode: "UPI"
};

cl(order1);


// // 13
// let user1 = {
//     username: "rahul123",
//     email: "rahul@example.com",
//     role: "BUYER", // possible values: "ADMIN", "SUPER_ADMIN", "BUYER"
//     isVerified: true
// };

enum userRole {
    ADMIN = "ADMIN",
    SUPER_ADMIN = "SUPER_ADMIN",
    BUYER = "BUYER"
}

// type role = "ADMIN" | "SUPER_ADMIN" | "BUYER";

interface User {
    username: string,
    email: string,
    role: userRole,
    isVerified: boolean
}

let user1: User = {
    username: "rahul123",
    email: "rahul@example.com",
    role: userRole.BUYER,
    isVerified: true
};

cl(user1);



// // 14
// let product1 = {
//     id: 501,
//     name: "Keyboard",
//     price: 1500,
//     color: "Black", // possible values: "Black", "White", "Blue"
//     quantity: 10,
//     category: "Electronics" // possible values: "Electronics", "Fashion", "Sports", "Beauty"
// };

enum Color {
    Black = "Black",
    White = "White",
    Blue = "Blue"
}

enum Category {
    Electronics = "Electronics",
    Fashion = "Fashion",
    Sports = "Sports",
    Beauty = "Beauty"
}

interface Product {
    id: number,
    name: string,
    price: number,
    color: Color,
    quantity: number,
    category: Category,
}

let product1: Product = {
    id: 501,
    name: "Keyboard",
    price: 1500,
    color: Color.Black,
    quantity: 10,
    category: Category.Fashion
};

cl(product1)

// // 15
// let attendance1 = {
//     employeeName: "Vikas",
//     date: "2026-10-23",
//     status: "Present", // possible values: "Present", "Absent", "Leave"
//     workingHours: 8
// };

enum AtendanceStatus {
    Present = "Present",
    Absent = "Absent",
    Leave = "Leave"
}

interface Attendance {
    employeeName: string,
    date: string,
    status: AtendanceStatus,
    workingHours: number
}

let attendance1: Attendance = {
    employeeName: "Vikas",
    date: "2026-10-23",
    status: AtendanceStatus.Absent,
    workingHours: 8
};

cl(attendance1);



// // 16
// let shoppingUser1 = {
//     id: 101,
//     name: "Aakash",
//     role: "BUYER", // possible values: "ADMIN", "BUYER", "SELLER"
//     address: {
//         city: "Pune",
//         state: "Maharashtra",
//         pincode: 411001
//     }
// };

enum UserRole {
    admin = "ADMIN",
    buyer = "BUYER",
    seller = "SELLER"
}

interface User16 {
    id: number,
    name: string,
    role: UserRole,
    address: object
}

let shoppingUser1: User16 = {
    id: 101,
    name: "Aakash",
    role: UserRole.admin,
    address: {
        city: "Pune",
        state: "Maharashtra",
        pincode: 411001
    }
};

cl(shoppingUser1)



// // 17
// let inventory1 = {
//     productId: 501,
//     name: "Mouse",
//     price: 800,
//     stock: 5,
//     status: "LOW_STOCK", // possible values: "IN_STOCK", "LOW_STOCK", "OUT_OF_STOCK"
// };

enum InventoryStatus {
    LOW_STOCK = "LOW_STOCK",
    IN_STOKE = "IN_STOKE",
    OUT_OF_STOCK = "OUT_OF_STOCK"
}

interface inventory1 {
    productId: number,
    name: string,
    price: number,
    stock: number,
    status: InventoryStatus
}
let inventory1 = {
    productId: 501,
    name: "Mouse",
    price: 800,
    stock: 5,
    status: InventoryStatus.LOW_STOCK,
};



// // 18
// let employeeProfile1 = {
//     id: 102,
//     name: "Karan",
//     email: "karan@example.com",
//     phone: "9876543210",
//     skills: ["Angular", "RxJS", "TypeScript"],
//     experience: 3
// };

interface EmployeeProfile {
    id: number,
    name: string,
    email: string,
    phone: string,
    skills: string[],
    experience: number
}

let employeeProfile1: EmployeeProfile = {
    id: 102,
    name: "Karan",
    email: "karan@example.com",
    phone: "9876543210",
    skills: ["Angular", "RxJS", "TypeScript"],
    experience: 3
};

// // 19
// let cartItem1 = {
//     productId: 1001,
//     productName: "Headphones",
//     price: 2500,
//     quantity: 2,
//     discount: 10
// };

interface CartItem {
    productId: number,
    productName: string,
    price: number,
    quantity: number,
    discount: number
}

let cartItem1: CartItem = {
    productId: 1001,
    productName: "Headphones",
    price: 2500,
    quantity: 2,
    discount: 10
};

// // 20
// let payment1 = {
//     transactionId: "TXN1001",
//     amount: 5000,
//     mode: "UPI", // possible values: "CASH", "UPI", "CARD", "NET_BANKING"
//     status: "SUCCESS", // possible values: "SUCCESS", "FAILED", "PENDING"
//     date: "2026-10-20"
// };

enum Mode {
    CASH = "CASH",
    UPI = "UPI",
    CARD = "CARD",
    NET_BANKING = "NET_BANKING"
}

enum Status {
    SUCCESS = "SUCCESS",
    FAILED = 'FAILED',
    PENDING = "PENDING"
}

interface Payment {
    transactionId: string,
    amount: number,
    mode: Mode,
    status: Status,
    date: string
}

let payment1 = {
    transactionId: "TXN1001",
    amount: 5000,
    mode: Mode.CARD,
    status: Status.PENDING,
    date: "2026-10-20"
};


// // 21
// let patient1 = {
//     patientId: 301,
//     name: "Suresh",
//     age: 45,
//     status: "UNDER_TREATMENT", // possible values: "ADMITTED", "DISCHARGED", "UNDER_TREATMENT"
//     doctor: {
//         name: "Dr. Mehta",
//         specialization: "Cardiology"
//     }
// };

enum PatientStatus {
    ADMITTED = "ADMITTED",
    DISCHARGED = "DISCHARGED",
    UNDER_TREATMENT = "UNDER_TREATMENT"
}

interface Doctor {
    name: string,
    specialization: string
}

interface Patient {
    patientId: number,
    name: string,
    age: number,
    status: PatientStatus,
    doctor: Doctor
}

let patient1: Patient = {
    patientId: 301,
    name: "Suresh",
    age: 45,
    status: PatientStatus.ADMITTED,
    doctor: {
        name: "Dr. Mehta",
        specialization: "Cardiology"
    }
};

// // 22
// let libraryBook1 = {
//     id: 501,
//     title: "Clean Code",
//     author: "Robert Martin",
//     status: "AVAILABLE", // possible values: "AVAILABLE", "ISSUED", "LOST"
//     tags: ["Programming", "Software Design"]
// };

enum LibraryBookStatus {
    AVAILABLE = "AVAILABLE",
    ISSUED = "ISSUED",
    LOST = "LOST"
}
interface LibraryBook {
    id: number,
    title: string,
    author: string,
    status: LibraryBookStatus,
    tags: string[],
}

let libraryBook1: LibraryBook = {
    id: 501,
    title: "Clean Code",
    author: "Robert Martin",
    status: LibraryBookStatus.ISSUED,
    tags: ["Programming", "Software Design"]
};



// // 23
// let foodOrder1 = {
//     orderId: 7001,
//     customerName: "Neha",
//     items: ["Pizza", "Burger", "Juice"],
//     totalAmount: 650,
//     status: "PREPARING", // possible values: "PLACED", "PREPARING", "READY", "DELIVERED"
// };

enum FoodOrderStatus {
    PLACED = "PLACED",
    PREPARING = "PREPARING",
    READY = "READY",
    DELIVERED = "DELIVERED"
}

interface FoodOrder {
    orderId: number,
    customerName: string,
    items: string[],
    totalAmount: number,
    status: FoodOrderStatus
}

let foodOrder1: FoodOrder = {
    orderId: 7001,
    customerName: "Neha",
    items: ["Pizza", "Burger", "Juice"],
    totalAmount: 650,
    status: FoodOrderStatus.DELIVERED
};


// // 24
// let department1 = {
//     departmentId: 10,
//     name: "Development",
//     manager: {
//         name: "Amit",
//         email: "amit@example.com"
//     },
//     employees: [
//         { id: 1, name: "Raj", salary: 40000 },
//         { id: 2, name: "Simran", salary: 45000 }
//     ]
// };

interface Manager {
    name: string,
    email: string
}

interface Employee {
    id: number,
    name: string,
    salary: number
}

interface Department {
    departmentId: number,
    name: string,
    manager: Manager,
    employees: Employee[]
}

let department1: Department = {
    departmentId: 10,
    name: "Development",
    manager: {
        name: "Amit",
        email: "amit@example.com"
    },
    employees: [
        { id: 1, name: "Raj", salary: 40000 },
        { id: 2, name: "Simran", salary: 45000 }
    ]
};

// // 25
// let travelBooking1 = {
//     bookingId: "TR101",
//     passengerName: "Manoj",
//     source: "Pune",
//     destination: "Mumbai",
//     travelDate: "2026-11-10",
//     status: "BOOKED", // possible values: "BOOKED", "CANCELLED", "COMPLETED"
// };

enum TravelBookingStatus {
    BOOKED = "BOOKED",
    CANCELLED = "CANCELLED",
    COMPLETED = "COMPLETED"
}

interface TravelBooking {
    bookingId: string,
    passengerName: string,
    source: string,
    destination: string,
    travelDate: string,
    status: TravelBookingStatus
}

let travelBooking1: TravelBooking = {
    bookingId: "TR101",
    passengerName: "Manoj",
    source: "Pune",
    destination: "Mumbai",
    travelDate: "2026-11-10",
    status: TravelBookingStatus.BOOKED
};

// // 26
// let studentResult1 = {
//     studentId: 101,
//     name: "Pooja",
//     marks: [
//         { subject: "JavaScript", score: 85 },
//         { subject: "TypeScript", score: 90 },
//         { subject: "Angular", score: 78 }
//     ],
//     percentage: 84.33,
//     result: "PASS" // possible values: "PASS", "FAIL", "ATKT"
// };

enum StudentResultStatus {
    PASS = "PASS",
    FAIL = "FAIL",
    ATKT = "ATKT"
}

interface StudentMarks {
    subject: string,
    score: number
}

interface StudentResult {
    studentId: number,
    name: string,
    marks: StudentMarks[],
    percentage: number,
    result: StudentResultStatus
}

let studentResult1: StudentResult = {
    studentId: 101,
    name: "Pooja",
    marks: [
        { subject: "JavaScript", score: 85 },
        { subject: "TypeScript", score: 90 },
        { subject: "Angular", score: 78 }
    ],
    percentage: 84.33,
    result: StudentResultStatus.FAIL
};

// // 27
// let property1 = {
//     propertyId: 201,
//     type: "Flat", // possible values: "Flat", "House", "Plot"
//     price: 4500000,
//     area: 1000,
//     location: {
//         city: "Pune",
//         locality: "Wakad"
//     },
//     status: "Available" // possible values: "Available", "Sold", "Rented"
// };

enum PropertyType {
    Flat = "Flat",
    House = "House",
    Plot = "Plot"
}

interface PropertyLocation {
    city: string,
    locality: string
}

enum PropertyStatus {
    Available = "Available",
    Sold = "Sold",
    Rented = "Rented"
}

interface Property {
    propertyId: number,
    type: PropertyType,
    price: number,
    area: number,
    location: PropertyLocation,
    status: PropertyStatus
}

let property1: Property = {
    propertyId: 201,
    type: PropertyType.House,
    price: 4500000,
    area: 1000,
    location: {
        city: "Pune",
        locality: "Wakad"
    },
    status: PropertyStatus.Rented
};



// // 28
// let socialPost1 = {
//     postId: 100,
//     author: "Ravi",
//     content: "Learning TypeScript",
//     likes: 25,
//     comments: ["Great", "Keep learning"],
//     visibility: "PUBLIC" // possible values: "PUBLIC", "PRIVATE", "FRIENDS"
// };

enum SocialPostVisibility {
    PUBLIC = "PUBLIC",
    PRIVATE = "PRIVATE",
    FRIENDS = "FRIENDS"
}

interface SocialPost {
    postId: number,
    author: string,
    content: string,
    likes: number,
    comments: string[],
    visibility: SocialPostVisibility
}

let socialPost1: SocialPost = {
    postId: 100,
    author: "Ravi",
    content: "Learning TypeScript",
    likes: 25,
    comments: ["Great", "Keep learning"],
    visibility: SocialPostVisibility.PRIVATE
};


// // 29
// let insurance1 = {
//     policyNumber: "POL1001",
//     holderName: "Mahesh",
//     type: "HEALTH", // possible values: "LIFE", "HEALTH", "VEHICLE"
//     premium: 12000,
//     coverage: 500000,
//     nominee: "Sunita"
// };

enum Type {
    LIFE = "LIFE",
    HEALTH = "HEALTH",
    VEHICLE = "VEHICLE"
}

interface Insurance {
    policyNumber: string,
    holderName: string,
    type: Type,
    premium: number,
    coverage: number,
    nominee: string
}

let insurance1: Insurance = {
    policyNumber: "POL1001",
    holderName: "Mahesh",
    type: Type.LIFE,
    premium: 12000,
    coverage: 500000,
    nominee: "Sunita"
};



// // 30
// let enrollment1 = {
//     enrollmentId: 5001,
//     student: {
//         id: 101,
//         name: "Rahul"
//     },
//     course: {
//         id: 201,
//         name: "Angular",
//         fees: 15000
//     },
//     status: "ENROLLED", // possible values: "ENROLLED", "COMPLETED", "DROPPED"
// };

interface EnrollmentStudent {
    id: number,
    name: string
}

interface Course {
    id: number,
    name: string,
    fees: number
}

enum EnrollmentStatus {
    ENROLLED = "ENROLLED",
    COMPLETED = "COMPLETED",
    DROPPED = "DROPPED"
}

interface Enrollment {
    enrollmentId: number,
    student: EnrollmentStudent,
    course: Course,
    status: EnrollmentStatus
}


let enrollment1: Enrollment = {
    enrollmentId: 5001,
    student: {
        id: 101,
        name: "Rahul"
    },
    course: {
        id: 201,
        name: "Angular",
        fees: 15000
    },
    status: EnrollmentStatus.ENROLLED
};

// // 31
// let vehicleService1 = {
//     serviceId: 301,
//     vehicleNumber: "MH12AB1234",
//     serviceType: "GENERAL", // possible values: "GENERAL", "REPAIR", "OIL_CHANGE"
//     cost: 5000,
//     partsUsed: [
//         { name: "Oil Filter", price: 500 },
//         { name: "Engine Oil", price: 1500 }
//     ]
// };

enum VehicleServiceType {
    GENERAL = "GENERAL",
    REPAIR = "REPAIR",
    OIL_CHANGE = "OIL_CHANGE"
}

interface VehicleParts {
    name: string,
    price: number
}

interface VehicleService {
    serviceId: number,
    vehicleNumber: string,
    serviceType: VehicleServiceType,
    cost: number,
    partsUsed: VehicleParts[]
}

let vehicleService1: VehicleService = {
    serviceId: 301,
    vehicleNumber: "MH12AB1234",
    serviceType: VehicleServiceType.GENERAL,
    cost: 5000,
    partsUsed: [
        { name: "Oil Filter", price: 500 },
        { name: "Engine Oil", price: 1500 }
    ]
};


// // 32
// let onlineExam1 = {
//     examId: 901,
//     studentName: "Kavita",
//     durationMinutes: 60,
//     status: "NOT_STARTED", // possible values: "NOT_STARTED", "IN_PROGRESS", "SUBMITTED"
//     questions: [
//         {
//             question: "What is TypeScript?",
//             options: ["Language", "Database", "Browser"],
//             marks: 2
//         }
//     ]
// };

enum OnlineExamStatus {
    NOT_STARTED = "NOT_STARTED",
    IN_PROGRESS = "IN_PROGRESS",
    SUBMITTED = "SUBMITTED"
}

interface OnlineExamQuestion {
    question: string,
    options: Array<string>,
    marks: number
}

interface OnlineExam {
    examId: number,
    studentName: string,
    durationMinutes: number,
    status: OnlineExamStatus,
    questions: OnlineExamQuestion[]
}

let onlineExam1: OnlineExam = {
    examId: 901,
    studentName: "Kavita",
    durationMinutes: 60,
    status: OnlineExamStatus.NOT_STARTED,
    questions: [
        {
            question: "What is TypeScript?",
            options: ["Language", "Database", "Browser"],
            marks: 2
        }
    ]
};

// // 33
// let project1 = {
//     projectId: 1001,
//     projectName: "HRMS",
//     status: "ACTIVE", // possible values: "PLANNED", "ACTIVE", "COMPLETED"
//     teamMembers: [
//         { name: "Amit", role: "Developer" },
//         { name: "Priya", role: "Tester" }
//     ],
//     technologies: ["Angular", "Node.js", "MongoDB"]
// };

enum ProjectStatus {
    PLANNED = "PLANNED",
    ACTIVE = "ACTIVE",
    COMPLETED = "COMPLETED"
}

interface TeamMember {
    name: string,
    role: string,
}

interface Project {
    projectId: number,
    projectName: string,
    status: ProjectStatus,
    teamMembers: TeamMember[],
    technologies: string[]
}

let project1: Project = {
    projectId: 1001,
    projectName: "HRMS",
    status: ProjectStatus.ACTIVE,
    teamMembers: [
        { name: "Amit", role: "Developer" },
        { name: "Priya", role: "Tester" }
    ],
    technologies: ["Angular", "Node.js", "MongoDB"]
};

// // 34
// let subscription1 = {
//     userId: 101,
//     plan: "PREMIUM", // possible values: "FREE", "BASIC", "PREMIUM"
//     startDate: "2026-10-01",
//     endDate: "2027-10-01",
//     autoRenew: true
// };

enum Plan {
    FREE = "FREE",
    BASIC = "BASIC",
    PREMIUM = "PREMIUM"
}

interface Subscription {
    userId: number,
    plan: Plan,
    startDate: string,
    endDate: string,
    autoRenew: boolean
}

let subscription1: Subscription = {
    userId: 101,
    plan: Plan.BASIC,
    startDate: "2026-10-01",
    endDate: "2027-10-01",
    autoRenew: true
};


// // 35
// let warehouse1 = {
//     warehouseId: 1,
//     name: "Pune Warehouse",
//     location: "Pune",
//     products: [
//         { productId: 101, name: "Laptop", quantity: 20, reorderLevel: 5 },
//         { productId: 102, name: "Monitor", quantity: 3, reorderLevel: 10 }
//     ]
// };

interface Products {
    productId: number,
    name: string,
    quantity: number,
    reorderLevel: number
}

interface Warehouse {
    warehouseId: number,
    name: string,
    location: string,
    products: Products[]
}



let warehouse1: Warehouse = {
    warehouseId: 1,
    name: "Pune Warehouse",
    location: "Pune",
    products: [
        { productId: 101, name: "Laptop", quantity: 20, reorderLevel: 5 },
        { productId: 102, name: "Monitor", quantity: 3, reorderLevel: 10 }
    ]
};

// // 36
// let ecomOrder1 = {
//     orderId: "ORD1001",
//     customer: {
//         id: 101,
//         name: "Rahul",
//         email: "rahul@example.com"
//     },
//     items: [
//         { productId: 1, name: "Laptop", price: 60000, quantity: 1 },
//         { productId: 2, name: "Mouse", price: 1000, quantity: 2 }
//     ],
//     shippingAddress: {
//         street: "MG Road",
//         city: "Pune",
//         state: "Maharashtra",
//         pincode: 411001
//     },
//     orderStatus: "CONFIRMED", // possible values: "PLACED", "CONFIRMED", "SHIPPED", "DELIVERED", "RETURNED"
//     paymentStatus: "PAID", // possible values: "PENDING", "PAID", "REFUNDED"
//     couponCode: "SAVE10"
// };

interface EcomOrderCustomer {
    id: number,
    name: string,
    email: string
}

interface Item {
    productId: number,
    name: string,
    price: number,
    quantity: number,
}

interface ShippingAddress {
    street: string,
    city: string,
    state: string,
    pincode: number
}

enum OrderStatus {
    PLACED = "PLACED",
    CONFIRMED = "CONFIRMED",
    SHIPPED = "SHIPPED",
    DELIVERED = "DELIVERED",
    RETURNED = "RETURNED"
}

enum PaymentStatus {
    PENDING = "PENDING",
    REFUNDED = "REFUNDED",
    PAID = "PAID"
}

interface EcomOrder {
    orderId: string,
    customer: EcomOrderCustomer,
    items: Item[],
    shippingAddress: ShippingAddress,
    orderStatus: OrderStatus,
    paymentStatus: PaymentStatus,
    couponCode: string
}

let ecomOrder1: EcomOrder = {
    orderId: "ORD1001",
    customer: {
        id: 101,
        name: "Rahul",
        email: "rahul@example.com"
    },
    items: [
        { productId: 1, name: "Laptop", price: 60000, quantity: 1 },
        { productId: 2, name: "Mouse", price: 1000, quantity: 2 }
    ],
    shippingAddress: {
        street: "MG Road",
        city: "Pune",
        state: "Maharashtra",
        pincode: 411001
    },
    orderStatus: OrderStatus.DELIVERED,
    paymentStatus: PaymentStatus.PAID,
    couponCode: "SAVE10"
};



// // 37
// let instituteStudent1 = {
//     studentId: 101,
//     personalInfo: {
//         fullName: "Aakash Patil",
//         email: "aakash@example.com",
//         phone: "9876543210",
//         address: {
//             city: "Udgir",
//             state: "Maharashtra"
//         }
//     },
//     batch: {
//         batchId: 10,
//         batchName: "Angular Evening Batch",
//         startDate: "2026-11-15"
//     },
//     courses: ["JavaScript", "TypeScript", "Angular"],
//     status: "ACTIVE" // possible values: "ACTIVE", "INACTIVE", "PLACED"
// };

interface StudentAddress {
    city: string,
    state: string
}

interface PersonalInfo {
    fullName: string,
    email: string,
    phone: string,
    address: StudentAddress
}

interface StudentBatch {
    batchId: number,
    batchName: string,
    startDate: string
}

enum StudentStatus {
    ACTIVE = "ACTIVE",
    INACTIVE = "INACTIVE",
    PLACED = "PLACED"
}

interface InstituteStudent {
    studentId: number,
    personalInfo: PersonalInfo,
    batch: StudentBatch,
    courses: string[],
    status: StudentStatus
}

let instituteStudent1: InstituteStudent = {
    studentId: 101,
    personalInfo: {
        fullName: "Aakash Patil",
        email: "aakash@example.com",
        phone: "9876543210",
        address: {
            city: "Udgir",
            state: "Maharashtra"
        }
    },
    batch: {
        batchId: 10,
        batchName: "Angular Evening Batch",
        startDate: "2026-11-15"
    },
    courses: ["JavaScript", "TypeScript", "Angular"],
    status: StudentStatus.INACTIVE
};

// // 38
// let machineTest1 = {
//     testId: 501,
//     testName: "TypeScript Objects",
//     student: {
//         id: 101,
//         name: "Rahul"
//     },
//     facultyName: "Amit",
//     status: "COMPLETED_AND_EXPLAINED", // possible values: "NOT_ATTENDED", "ATTENDED", "NOT_COMPLETED", "COMPLETED_NOT_EXPLAINED", "COMPLETED_AND_EXPLAINED"
//     performance: "VERY_GOOD", // possible values: "VERY_POOR", "POOR", "GOOD", "VERY_GOOD", "EXCELLENT"
//     score: 85,
//     totalMarks: 100,
//     feedback: "Good understanding of interfaces",
//     technologies: ["TypeScript", "JavaScript"]
// };
interface MachineTestStudent {
    id: number,
    name: string
}

enum MachineTestStatus {
    NOT_ATTENDED = "NOT_ATTENDED",
    ATTENDED = "ATTENDED",
    NOT_COMPLETED = "NOT_COMPLETED",
    COMPLETED_NOT_EXPLAINED = "COMPLETED_NOT_EXPLAINED", COMPLETED_AND_EXPLAINED = "COMPLETED_AND_EXPLAINED"
}

enum MachineTestPerformance {
    VERY_POOR = "VERY_POOR",
    POOR = "POOR",
    GOOD = "GOOD",
    VERY_GOOD = "VERY_GOOD",
    EXCELLENT = "EXCELLENT"
}

interface MachineTest {
    testId: number,
    testName: string,
    student: MachineTestStudent,
    facultyName: string,
    status: MachineTestStatus,
    performance: MachineTestPerformance,
    score: number,
    totalMarks: number,
    feedback: string,
    technologies: string[]
}

let machineTest1: MachineTest = {
    testId: 501,
    testName: "TypeScript Objects",
    student: {
        id: 101,
        name: "Rahul"
    },
    facultyName: "Amit",
    status: MachineTestStatus.ATTENDED,
    performance: MachineTestPerformance.VERY_GOOD,
    score: 85,
    totalMarks: 100,
    feedback: "Good understanding of interfaces",
    technologies: ["TypeScript", "JavaScript"]
};

// // 39
// let payroll1 = {
//     employee: {
//         id: 201,
//         name: "Priya",
//         department: "Development",
//         joiningDate: "2024-06-01"
//     },
//     salary: {
//         basic: 40000,
//         hra: 10000,
//         allowances: 5000,
//         deductions: 3000,
//         bonus: 2000
//     },
//     month: "October 2026",
//     status: "GENERATED" // possible values: "GENERATED", "PAID", "ON_HOLD"
// };

interface PayrollEmployee {
    id: number,
    name: string,
    department: string,
    joiningDate: string
}

interface PayrollSalary {
    basic: number,
    hra: number,
    allowances: number,
    deductions: number,
    bonus: number
}

enum PayrollStatus {
    GENERATED = "GENERATED",
    PAID = "PAID",
    ON_HOLD = "ON_HOLD"
}

interface Payroll {
    employee: PayrollEmployee,
    salary: PayrollSalary,
    month: string,
    status: PayrollStatus
}

let payroll1: Payroll = {
    employee: {
        id: 201,
        name: "Priya",
        department: "Development",
        joiningDate: "2024-06-01"
    },
    salary: {
        basic: 40000,
        hra: 10000,
        allowances: 5000,
        deductions: 3000,
        bonus: 2000
    },
    month: "October 2026",
    status: PayrollStatus.ON_HOLD
};

// // 40
// let loanApplication1 = {
//     applicationId: "LN1001",
//     applicant: {
//         name: "Mahesh",
//         age: 35,
//         monthlyIncome: 80000,
//         employmentType: "SALARIED" // possible values: "SALARIED", "SELF_EMPLOYED"
//     },
//     loan: {
//         type: "HOME", // possible values: "HOME", "PERSONAL", "EDUCATION"
//         requestedAmount: 2500000,
//         tenureYears: 20,
//         interestRate: 8.5
//     },
//     documents: [
//         { documentName: "PAN Card", uploaded: true },
//         { documentName: "Salary Slip", uploaded: true },
//         { documentName: "Bank Statement", uploaded: false }
//     ],
//     status: "UNDER_REVIEW" // possible values: "APPLIED", "UNDER_REVIEW", "APPROVED", "REJECTED"
// };

enum LoanApplicationApplicantEmploymentType {
    SALARIED = "SALARIED",
    SELF_EMPLOYED = "SELF_EMPLOYED"
}

interface LoanApplicationApplicant {
    name: string,
    age: number,
    monthlyIncome: number,
    employmentType: LoanApplicationApplicantEmploymentType
}

enum LoanApplicationType {
    HOME = "HOME",
    PERSONAL = "PERSONAL",
    EDUCATION = "EDUCATION"
}

interface LoanApplicationLoan {
    type: LoanApplicationType,
    requestedAmount: number,
    tenureYears: number,
    interestRate: number
}

interface LoanApplicationDocument {
    documentName: string,
    uploaded: boolean
}

enum LoanApplicationStatus {
    APPLIED = "APPLIED",
    UNDER_REVIEW = "UNDER_REVIEW",
    APPROVED = "APPROVED",
    REJECTED = "REJECTED"
}
interface LoanApplication {
    applicationId: string,
    applicant: LoanApplicationApplicant,
    loan: LoanApplicationLoan,
    documents: LoanApplicationDocument[],
    status: LoanApplicationStatus.APPLIED
}

let loanApplication1: LoanApplication = {
    applicationId: "LN1001",
    applicant: {
        name: "Mahesh",
        age: 35,
        monthlyIncome: 80000,
        employmentType: LoanApplicationApplicantEmploymentType.SALARIED,
    },
    loan: {
        type: LoanApplicationType.EDUCATION,
        requestedAmount: 2500000,
        tenureYears: 20,
        interestRate: 8.5
    },
    documents: [
        { documentName: "PAN Card", uploaded: true },
        { documentName: "Salary Slip", uploaded: true },
        { documentName: "Bank Statement", uploaded: false }
    ],
    status: LoanApplicationStatus.APPLIED
};


// // 41
// let apiResponse1 = {
//     success: true,
//     message: "Users fetched successfully",
//     data: {
//         users: [
//             {
//                 id: 1,
//                 name: "Ravi",
//                 role: "ADMIN", // possible values: "ADMIN", "USER", "MANAGER"
//                 permissions: ["READ", "WRITE", "DELETE"]
//             },
//             {
//                 id: 2,
//                 name: "Amit",
//                 role: "USER",
//                 permissions: ["READ"]
//             }
//         ],
//         pagination: {
//             currentPage: 1,
//             pageSize: 10,
//             totalRecords: 2,
//             totalPages: 1
//         }
//     },
//     error: null
// };

enum ApiResponseDataUserRole {
    ADMIN = "ADMIN",
    USER = "USER",
    MANAGER = "MANAGER"
}

interface ApiResponseDataUser {
    id: number,
    name: string,
    role: ApiResponseDataUserRole,
    permissions: Array<string>
}

interface ApiResponsePagination {
    currentPage: number,
    pageSize: number,
    totalRecords: number,
    totalPages: number
}

interface ApiResponseData {
    users: ApiResponseDataUser[],
    pagination: ApiResponsePagination,
}
interface ApiResponse {
    success: boolean,
    message: string,
    data: ApiResponseData,
    error: null
}

let apiResponse1: ApiResponse = {
    success: true,
    message: "Users fetched successfully",
    data: {
        users: [
            {
                id: 1,
                name: "Ravi",
                role: ApiResponseDataUserRole.ADMIN,
                permissions: ["READ", "WRITE", "DELETE"]
            },
            {
                id: 2,
                name: "Amit",
                role: ApiResponseDataUserRole.USER,
                permissions: ["READ"]
            }
        ],
        pagination: {
            currentPage: 1,
            pageSize: 10,
            totalRecords: 2,
            totalPages: 1
        }
    },
    error: null
};


// // 42
// let projectTask1 = {
//     projectId: 101,
//     projectName: "HRMS",
//     tasks: [
//         {
//             taskId: 1,
//             title: "Create Login API",
//             assignedTo: { id: 10, name: "Amit" },
//             priority: "HIGH", // possible values: "LOW", "MEDIUM", "HIGH", "CRITICAL"
//             status: "IN_PROGRESS", // possible values: "TODO", "IN_PROGRESS", "IN_REVIEW", "DONE"
//             dueDate: "2026-11-01"
//         },
//         {
//             taskId: 2,
//             title: "Create Login UI",
//             assignedTo: { id: 11, name: "Priya" },
//             priority: "MEDIUM",
//             status: "TODO",
//             dueDate: "2026-11-05",
//             dependencies: [1]
//         }
//     ]
// };

interface ProjectTaskAssignedTo {
    id: number,
    name: string
}

enum ProjectTaskPriority {
    LOW = "LOW",
    MEDIUM = "MEDIUM",
    HIGH = "HIGH",
    CRITICAL = "CRITICAL"
}

enum projectTaskStatus {
    TODO = "TODO",
    IN_PROGRESS = "IN_PROGRESS",
    IN_REVIEW = "IN_REVIEW",
    DONE = "DONE"
}

interface ProjectTask2 {
    taskId: number,
    title: string,
    assignedTo: ProjectTaskAssignedTo,
    priority: ProjectTaskPriority,
    status: projectTaskStatus,
    dueDate: string,
    dependencies?: Array<number>
}

interface ProjectTask {
    projectId: number,
    projectName: string,
    tasks: ProjectTask2[],
}

let projectTask1: ProjectTask = {
    projectId: 101,
    projectName: "HRMS",
    tasks: [
        {
            taskId: 1,
            title: "Create Login API",
            assignedTo: { id: 10, name: "Amit" },
            priority: ProjectTaskPriority.HIGH,
            status: projectTaskStatus.IN_PROGRESS,
            dueDate: "2026-11-01"
        },
        {
            taskId: 2,
            title: "Create Login UI",
            assignedTo: { id: 11, name: "Priya" },
            priority: ProjectTaskPriority.CRITICAL,
            status: projectTaskStatus.IN_PROGRESS,
            dueDate: "2026-11-05",
            dependencies: [1]
        }
    ]
};

// // 43
// let hotelBooking1 = {
//     bookingId: "HB1001",
//     guest: {
//         name: "Neha",
//         email: "neha@example.com",
//         phone: "9876543210"
//     },
//     hotel: {
//         name: "City Hotel",
//         location: "Mumbai",
//         roomNumber: 205,
//         amenities: ["WiFi", "AC", "Breakfast"]
//     },
//     stay: {
//         checkIn: "2026-11-01",
//         checkOut: "2026-11-04",
//         guests: 2
//     },
//     totalAmount: 15000,
//     status: "RESERVED" // possible values: "RESERVED", "CHECKED_IN", "CHECKED_OUT", "CANCELLED"
// };

interface HospitalGuest {
    name: string,
    email: string,
    phone: string
}

interface HotelInfo {
    name: string,
    location: string,
    roomNumber: number,
    amenities: Array<string>
}

interface HotelStay {
    checkIn: string,
    checkOut: string,
    guests: number
}

enum HotelStatus {
    RESERVED = "RESERVED",
    CHECKED_IN = "CHECKED_IN",
    CHECKED_OUT = "CHECKED_OUT",
    CANCELLED = "CANCELLED"
}

interface HotelBooking {
    bookingId: string,
    guest: HospitalGuest,
    hotel: HotelInfo,
    stay: HotelStay,
    totalAmount: number,
    status: HotelStatus
}

let hotelBooking1: HotelBooking = {
    bookingId: "HB1001",
    guest: {
        name: "Neha",
        email: "neha@example.com",
        phone: "9876543210"
    },
    hotel: {
        name: "City Hotel",
        location: "Mumbai",
        roomNumber: 205,
        amenities: ["WiFi", "AC", "Breakfast"]
    },
    stay: {
        checkIn: "2026-11-01",
        checkOut: "2026-11-04",
        guests: 2
    },
    totalAmount: 15000,
    status: HotelStatus.CHECKED_IN
};

// // 44
// let advancedCart1 = {
//     cartId: "CART101",
//     customerId: 201,
//     items: [
//         {
//             productId: 1,
//             name: "T-Shirt",
//             unitPrice: 799,
//             quantity: 2,
//             options: {
//                 color: "Black",
//                 size: "L"
//             }
//         },
//         {
//             productId: 2,
//             name: "Cap",
//             unitPrice: 399,
//             quantity: 1
//         }
//     ],
//     discount: {
//         type: "PERCENTAGE", // possible values: "PERCENTAGE", "FIXED"
//         value: 10,
//         couponCode: "SAVE10"
//     },
//     shippingFee: 50,
//     currency: "INR" // possible values: "INR", "USD"
// }

interface AdvancedCardItemsOptions {
    color: string,
    size: "L"
}
interface AdvancedCardItems {
    productId: number,
    name: string,
    unitPrice: number,
    quantity: number,
    options?: AdvancedCardItemsOptions
}

enum AdvanceCardDiscountType {
    PERCENTAGE = "PERCENTAGE",
    FIXED = "FIXED"
}

interface AdvanceCardDiscount {
    type: AdvanceCardDiscountType,
    value: number,
    couponCode: string
}

enum AdvancedCardCurrency {
    INR = "INR",
    USD = "USD"
}

interface AdvancedCard {
    cartId: string,
    customerId: number,
    items: AdvancedCardItems[],
    discount: AdvanceCardDiscount,
    shippingFee: number,
    currency: AdvancedCardCurrency
}

let advancedCart1: AdvancedCard = {
    cartId: "CART101",
    customerId: 201,
    items: [
        {
            productId: 1,
            name: "T-Shirt",
            unitPrice: 799,
            quantity: 2,
            options: {
                color: "Black",
                size: "L"
            }
        },
        {
            productId: 2,
            name: "Cap",
            unitPrice: 399,
            quantity: 1
        }
    ],
    discount: {
        type: AdvanceCardDiscountType.FIXED,
        value: 10,
        couponCode: "SAVE10"
    },
    shippingFee: 50,
    currency: AdvancedCardCurrency.INR
}

// // 45
// let authSession1 = {
//     user: {
//         id: 1,
//         username: "admin01",
//         email: "admin@example.com",
//         role: "SUPER_ADMIN" // possible values: "ADMIN", "SUPER_ADMIN", "USER"
//     },
//     authentication: {
//         provider: "LOCAL", // possible values: "LOCAL", "GOOGLE", "GITHUB"
//         accessToken: "sample-access-token",
//         expiresIn: 3600,
//         twoFactorEnabled: true
//     },
//     devices: [
//         {
//             deviceId: "DEV001",
//             deviceName: "Windows Laptop",
//             lastLogin: "2026-10-22",
//             trusted: true
//         }
//     ],
//     lastPasswordChange: "2026-09-01"
// };

enum AuthSessionUserRole {
    ADMIN = "ADMIN",
    SUPER_ADMIN = "SUPER_ADMIN",
    USER = "USER"
}
interface AuthSessionUser {
    id: number,
    username: string,
    email: string,
    role: AuthSessionUserRole
}

enum AuthSessionAuthenticationProvider {
    LOCAL = "LOCAL",
    GOOGLE = "GOOGLE",
    GITHUB = "GITHUB"
}

interface AuthSessionAuthentication {
    provider: AuthSessionAuthenticationProvider,
    accessToken: string,
    expiresIn: number,
    twoFactorEnabled: boolean
}

interface AuthSessionDevice {
    deviceId: string,
    deviceName: string,
    lastLogin: string,
    trusted: boolean
}

interface AuthSession {
    user: AuthSessionUser,
    authentication: AuthSessionAuthentication,
    devices: AuthSessionDevice[],
    lastPasswordChange: string
}

let authSession1: AuthSession = {
    user: {
        id: 1,
        username: "admin01",
        email: "admin@example.com",
        role: AuthSessionUserRole.ADMIN
    },
    authentication: {
        provider: AuthSessionAuthenticationProvider.GITHUB,
        accessToken: "sample-access-token",
        expiresIn: 3600,
        twoFactorEnabled: true
    },
    devices: [
        {
            deviceId: "DEV001",
            deviceName: "Windows Laptop",
            lastLogin: "2026-10-22",
            trusted: true
        }
    ],
    lastPasswordChange: "2026-09-01"
};

// // 46
// let insuranceClaim1 = {
//     claimId: "CL1001",
//     policyNumber: "POL1001",
//     claimant: {
//         name: "Rohit",
//         relationship: "SELF" // possible values: "SELF", "SPOUSE", "CHILD", "PARENT"
//     },
//     claimAmount: 100000,
//     approvedAmount: 80000,
//     incident: {
//         date: "2026-10-01",
//         description: "Hospital admission",
//         location: "Pune"
//     },
//     documents: [
//         { name: "Medical Bills", verified: true },
//         { name: "Discharge Summary", verified: false }
//     ],
//     status: "DOCUMENTS_REQUIRED" // possible values: "SUBMITTED", "DOCUMENTS_REQUIRED", "APPROVED", "REJECTED", "SETTLED"
// };

enum InsuranceClaimClaimantRelationship {
    SELF = "SELF",
    SPOUSE = "SPOUSE",
    CHILD = "CHILD",
    PARENT = "PARENT"
}

interface InsuranceClaimClaimant {
    name: string,
    relationship: InsuranceClaimClaimantRelationship
}

interface InsuranceClaimIncident {
    date: string,
    description: string,
    location: string
}

interface InsuranceClaimDocument {
    name: string,
    verified: boolean
}

enum insuranceClaimStatus {
    SUBMITTED = "SUBMITTED",
    DOCUMENTS_REQUIRED = "DOCUMENTS_REQUIRED",
    APPROVED = "APPROVED",
    REJECTED = "REJECTED",
    SETTLED = "SETTLED"
}

interface InsuranceClaim {
    claimId: string,
    policyNumber: string,
    claimant: InsuranceClaimClaimant,
    claimAmount: number,
    approvedAmount: number,
    incident: InsuranceClaimIncident,
    documents: InsuranceClaimDocument[],
    status: insuranceClaimStatus
}

let insuranceClaim1: InsuranceClaim = {
    claimId: "CL1001",
    policyNumber: "POL1001",
    claimant: {
        name: "Rohit",
        relationship: InsuranceClaimClaimantRelationship.CHILD
    },
    claimAmount: 100000,
    approvedAmount: 80000,
    incident: {
        date: "2026-10-01",
        description: "Hospital admission",
        location: "Pune"
    },
    documents: [
        { name: "Medical Bills", verified: true },
        { name: "Discharge Summary", verified: false }
    ],
    status: insuranceClaimStatus.APPROVED
};

// // 47
// let transaction1 = {
//     transactionId: "TX5001",
//     type: "TRANSFER", // possible values: "CREDIT", "DEBIT", "TRANSFER"
//     amount: {
//         value: 10000,
//         currency: "INR" // possible values: "INR", "USD", "EUR", "GBP"
//     },
//     sender: {
//         accountId: "ACC101",
//         name: "Amit"
//     },
//     receiver: {
//         accountId: "ACC202",
//         name: "Rahul"
//     },
//     timestamp: "2026-10-23T10:30:00",
//     metadata: {
//         source: "Internet Banking",
//         referenceId: "REF1001"
//     }
// };


enum TransactionType {
    CREDIT = "CREDIT",
    DEBIT = "DEBIT",
    TRANSFER = "TRANSFER"
}

enum TransactionAmountCurrency {
    INR = "INR",
    USD = "USD",
    EUR = "EUR",
    GBP = "GBP"
}
interface TransactionAmount {
    value: number,
    currency: TransactionAmountCurrency,

}

interface TransactionSender {
    accountId: string,
    name: string
}

interface TransactionReceiver {
    accountId: string,
    name: string
}

interface TransactionMetadata {
    source: string,
    referenceId: string
}

interface Transaction {
    transactionId: string,
    type: TransactionType,
    amount: TransactionAmount,
    sender: TransactionSender,
    receiver: TransactionReceiver,
    timestamp: string,
    metadata: TransactionMetadata
}

let transaction1: Transaction = {
    transactionId: "TX5001",
    type: TransactionType.CREDIT,
    amount: {
        value: 10000,
        currency: TransactionAmountCurrency.EUR
    },
    sender: {
        accountId: "ACC101",
        name: "Amit"
    },
    receiver: {
        accountId: "ACC202",
        name: "Rahul"
    },
    timestamp: "2026-10-23T10:30:00",
    metadata: {
        source: "Internet Banking",
        referenceId: "REF1001"
    }
};

// // 48
// let hrmsEmployee1 = {
//     employeeId: "EMP1001",
//     personalDetails: {
//         firstName: "Amit",
//         lastName: "Sharma",
//         dateOfBirth: "1995-05-15",
//         contact: {
//             email: "amit@example.com",
//             phone: "9876543210"
//         },
//         address: {
//             current: "Pune, Maharashtra",
//             permanent: "Udgir, Maharashtra"
//         }
//     },
//     employmentDetails: {
//         department: "IT",
//         designation: "Software Developer",
//         joiningDate: "2025-01-10",
//         status: "ACTIVE", // possible values: "PROBATION", "ACTIVE", "NOTICE_PERIOD", "RESIGNED"
//         previousExperience: 2
//     },
//     compensation: {
//         annualCTC: 600000,
//         monthlyGross: 50000,
//         salaryComponents: [
//             { name: "Basic", amount: 25000 },
//             { name: "HRA", amount: 15000 },
//             { name: "Allowance", amount: 10000 }
//         ]
//     },
//     documents: [
//         {
//             documentType: "PAN",
//             fileName: "pan.pdf",
//             uploadedAt: "2025-01-10",
//             verified: true
//         },
//         {
//             documentType: "Degree Certificate",
//             fileName: "degree.pdf",
//             uploadedAt: "2025-01-10",
//             verified: false
//         }
//     ]
// };

interface HrmsEmployeePersonalDetailsContact {
    email: string,
    phone: string
}
interface HrmsEmployeePersonalDetailsAddress {
    current: string,
    permanent: string
}

interface HrmsEmployeePersonalDetils {
    firstName: string,
    lastName: string,
    dateOfBirth: string,
    contact: HrmsEmployeePersonalDetailsContact,
    address: HrmsEmployeePersonalDetailsAddress
}

enum employmentDetailsStatus {
    PROBATION = "PROBATION",
    ACTIVE = "ACTIVE",
    NOTICE_PERIOD = "NOTICE_PERIOD",
    RESIGNED = "RESIGNED"
}

interface employementDetails {
    department: string,
    designation: string,
    joiningDate: string,
    status: employmentDetailsStatus,
    previousExperience: number
}

interface salaryComponents {
    name: string,
    amount: number
}

interface Compensation {
    annualCTC: number,
    monthlyGross: number,
    salaryComponents: salaryComponents[]
}

interface HrmsDocument {
    documentType: string,
    fileName: string,
    uploadedAt: string,
    verified: boolean
}

interface HrmsEmployee {
    employeeId: string,
    personalDetails: HrmsEmployeePersonalDetils,
    employmentDetails: employementDetails,
    compensation: Compensation,
    documents: HrmsDocument[]
}

let hrmsEmployee1: HrmsEmployee = {
    employeeId: "EMP1001",
    personalDetails: {
        firstName: "Amit",
        lastName: "Sharma",
        dateOfBirth: "1995-05-15",
        contact: {
            email: "amit@example.com",
            phone: "9876543210"
        },
        address: {
            current: "Pune, Maharashtra",
            permanent: "Udgir, Maharashtra"
        }
    },
    employmentDetails: {
        department: "IT",
        designation: "Software Developer",
        joiningDate: "2025-01-10",
        status: employmentDetailsStatus.ACTIVE,
        previousExperience: 2
    },
    compensation: {
        annualCTC: 600000,
        monthlyGross: 50000,
        salaryComponents: [
            { name: "Basic", amount: 25000 },
            { name: "HRA", amount: 15000 },
            { name: "Allowance", amount: 10000 }
        ]
    },
    documents: [
        {
            documentType: "PAN",
            fileName: "pan.pdf",
            uploadedAt: "2025-01-10",
            verified: true
        },
        {
            documentType: "Degree Certificate",
            fileName: "degree.pdf",
            uploadedAt: "2025-01-10",
            verified: false
        }
    ]
};

// // 49
// let batchReport1 = {
//     batch: {
//         batchId: 10,
//         batchName: "Angular Evening",
//         faculty: "Amit",
//         students: [
//             { studentId: 1, name: "Rahul", email: "rahul@example.com" },
//             { studentId: 2, name: "Priya", email: "priya@example.com" }
//         ]
//     },
//     test: {
//         testId: 501,
//         title: "TypeScript Interfaces",
//         date: "2026-10-20",
//         totalMarks: 100,
//         technologies: ["TypeScript", "JavaScript"]
//     },
//     results: [
//         {
//             studentId: 1,
//             attendance: "ATTENDED", // possible values: "ATTENDED", "ABSENT"
//             score: 85,
//             performance: "VERY_GOOD", // possible values: "VERY_POOR", "POOR", "GOOD", "VERY_GOOD", "EXCELLENT"
//             codeCompleted: true,
//             explainedToFaculty: true,
//             feedback: "Good problem-solving"
//         },
//         {
//             studentId: 2,
//             attendance: "ABSENT",
//             codeCompleted: false,
//             explainedToFaculty: false
//         }
//     ],
//     summary: {
//         totalStudents: 2,
//         attended: 1,
//         absent: 1,
//         averageScore: 85
//     }
// };

interface BatchReportBatchStudent {
    studentId: number,
    name: string,
    email: string
}

interface BatchReportBatch {
    batchId: number,
    batchName: string,
    faculty: string,
    students: BatchReportBatchStudent[]
}

interface batchReportTest {
    testId: number,
    title: string,
    date: string,
    totalMarks: number,
    technologies: Array<string>
}

enum BatchReportResultAttendance {
    ATTENDED = "ATTENDED",
    ABSENT = "ABSENT"
}

enum BatchReportResultPerformance {
    VERY_POOR = "VERY_POOR",
    POOR = "POOR",
    GOOD = "GOOD",
    VERY_GOOD = "VERY_GOOD",
    EXCELLENT = "EXCELLENT"
}

interface BatchReportResult {
    studentId: number,
    attendance: BatchReportResultAttendance,
    score?: number,
    performance?: BatchReportResultPerformance,
    codeCompleted: boolean,
    explainedToFaculty: boolean,
    feedback?: string
}

interface batchReportSummary {
    totalStudents: number,
    attended: number,
    absent: number,
    averageScore: number
}

interface BatchReport {
    batch: BatchReportBatch,
    test: batchReportTest,
    results: BatchReportResult[],
    summary: batchReportSummary
}

let batchReport1: BatchReport = {
    batch: {
        batchId: 10,
        batchName: "Angular Evening",
        faculty: "Amit",
        students: [
            { studentId: 1, name: "Rahul", email: "rahul@example.com" },
            { studentId: 2, name: "Priya", email: "priya@example.com" }
        ]
    },
    test: {
        testId: 501,
        title: "TypeScript Interfaces",
        date: "2026-10-20",
        totalMarks: 100,
        technologies: ["TypeScript", "JavaScript"]
    },
    results: [
        {
            studentId: 1,
            attendance: BatchReportResultAttendance.ABSENT,
            score: 85,
            performance: BatchReportResultPerformance.EXCELLENT,
            codeCompleted: true,
            explainedToFaculty: true,
            feedback: "Good problem-solving"
        },
        {
            studentId: 2,
            attendance: BatchReportResultAttendance.ABSENT,
            codeCompleted: false,
            explainedToFaculty: false
        }
    ],
    summary: {
        totalStudents: 2,
        attended: 1,
        absent: 1,
        averageScore: 85
    }
};

// // 50
// let completeProduct1 = {
//     id: "PRD1001",
//     name: "Smart Watch",
//     description: "Fitness tracking smart watch",
//     category: {
//         id: 10,
//         name: "Electronics",
//         parentCategory: "Wearables"
//     },
//     pricing: {
//         basePrice: 5000,
//         sellingPrice: 3999,
//         taxPercentage: 18,
//         currency: "INR", // possible values: "INR", "USD"
//         discount: {
//             type: "PERCENTAGE", // possible values: "PERCENTAGE", "FIXED"
//             value: 20,
//             validUntil: "2026-12-31"
//         }
//     },
//     inventory: {
//         sku: "WATCH-BLK-001",
//         stock: 25,
//         warehouseId: 101,
//         status: "IN_STOCK" // possible values: "IN_STOCK", "LOW_STOCK", "OUT_OF_STOCK"
//     },
//     specifications: [
//         { name: "BatteryLife", value: "7 days" },
//         { name: "WaterResistant", value: true },
//         { name: "DisplaySize", value: 1.8 }
//     ],
//     variants: [
//         {
//             variantId: "VAR001",
//             color: "Black", // possible values: "Black", "Blue", "White"
//             priceAdjustment: 0,
//             available: true
//         },
//         {
//             variantId: "VAR002",
//             color: "Blue",
//             priceAdjustment: 200,
//             available: true
//         }
//     ],
//     shipping: {
//         methods: ["STANDARD", "EXPRESS"], // possible values: "STANDARD", "EXPRESS", "SAME_DAY"
//         returnable: true,
//         returnDays: 7
//     },
//     reviews: [
//         {
//             userId: 201,
//             rating: 5,
//             comment: "Excellent product",
//             date: "2026-10-20"
//         },
//         {
//             userId: 202,
//             rating: 4,
//             date: "2026-10-21"
//         }
//     ],
//     lifecycle: "ACTIVE" // possible values: "DRAFT", "ACTIVE", "DISCONTINUED"
// };

interface ProductCategory {
    id: number,
    name: string,
    parentCategory: string
}

enum PricingCurrency {
    INR = "INR",
    USD = "USD"
}

enum ProductDiscount {
    PERCENTAGE = "PERCENTAGE",
    FIXED = "FIXED"
}

interface ProductDiscountDetails {
    type: ProductDiscount,
    value: number,
    validUntil: string
}

interface ProductPricing {
    basePrice: number,
    sellingPrice: number,
    taxPercentage: number,
    currency: PricingCurrency,
    discount: ProductDiscountDetails
}

enum ProductInventoryStatus {
    IN_STOCK = "IN_STOCK",
    LOW_STOCK = "LOW_STOCK",
    OUT_OF_STOCK = "OUT_OF_STOCK"
}

interface ProductInventory {
    sku: string,
    stock: number,
    warehouseId: number,
    status: ProductInventoryStatus
}

interface ProductSpecifications {
    name: string,
    value: any
}

enum VariantColor {
    Black = "Black",
    Blue = "Blue",
    White = "White"
}

interface ProductVariants {
    variantId: string,
    color: VariantColor,
    priceAdjustment: number,
    available: boolean
}

enum ProductShippingMethods {
    STANDARD = "STANDARD",
    EXPRESS = "EXPRESS",
    SAME_DAY = "SAME_DAY"
}

interface ProductShipping {
    methods: ProductShippingMethods[],
    returnable: boolean,
    returnDays: number

}

interface ProductReviews {
    userId: number,
    rating: number,
    comment?: string,
    date: string
}

enum ProductLifecycle {
    DRAFT = "DRAFT",
    ACTIVE = "ACTIVE",
    DISCONTINUED = "DISCONTINUED"
}

interface CompleteProduct {
    id: string,
    name: string,
    description: string,
    category: ProductCategory,
    pricing: ProductPricing,
    inventory: ProductInventory,
    specifications: ProductSpecifications[],
    variants: ProductVariants[],
    shipping: ProductShipping,
    reviews: ProductReviews[],
    lifecycle: ProductLifecycle
}

let completeProduct1: CompleteProduct = {
    id: "PRD1001",
    name: "Smart Watch",
    description: "Fitness tracking smart watch",
    category: {
        id: 10,
        name: "Electronics",
        parentCategory: "Wearables"
    },
    pricing: {
        basePrice: 5000,
        sellingPrice: 3999,
        taxPercentage: 18,
        currency: PricingCurrency.INR,
        discount: {
            type: ProductDiscount.FIXED,
            value: 20,
            validUntil: "2026-12-31"
        }
    },
    inventory: {
        sku: "WATCH-BLK-001",
        stock: 25,
        warehouseId: 101,
        status: ProductInventoryStatus.IN_STOCK
    },
    specifications: [
        { name: "BatteryLife", value: "7 days" },
        { name: "WaterResistant", value: true },
        { name: "DisplaySize", value: 1.8 }
    ],
    variants: [
        {
            variantId: "VAR001",
            color: VariantColor.Blue,
            priceAdjustment: 0,
            available: true
        },
        {
            variantId: "VAR002",
            color: VariantColor.Blue,
            priceAdjustment: 200,
            available: true
        }
    ],
    shipping: {
        methods: [ProductShippingMethods.EXPRESS],
        returnable: true,
        returnDays: 7
    },
    reviews: [
        {
            userId: 201,
            rating: 5,
            comment: "Excellent product",
            date: "2026-10-20"
        },
        {
            userId: 202,
            rating: 4,
            date: "2026-10-21"
        }
    ],
    lifecycle: ProductLifecycle.DISCONTINUED
};

