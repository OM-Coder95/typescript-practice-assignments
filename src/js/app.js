"use strict";
const cl = console.log;
let student1 = {
    id: 101,
    name: "Rahul",
    age: 22,
    course: "Angular",
    isActive: true
};
cl(student1);
let employee1 = {
    empId: 201,
    name: "Amit",
    salary: 45000,
    department: "IT",
    isPermanent: true
};
cl(employee1.department);
let book1 = {
    id: 301,
    title: "JavaScript Basics",
    author: "John",
    price: 500,
    isAvailable: true
};
let mobile1 = {
    brand: "Samsung",
    model: "Galaxy S25",
    price: 75000,
    color: "Black",
    storage: 256
};
cl(mobile1);
let customer1 = {
    id: 401,
    name: "Priya",
    email: "priya@example.com",
    city: "Pune",
    isVerified: true
};
let laptop1 = {
    brand: "HP",
    ram: 16,
    storage: 512,
    price: 65000,
    inStock: true
};
let movie1 = {
    title: "Dangal",
    rating: 8.5,
    language: "English",
    releaseYear: 2016,
    isReleased: true
};
cl(movie1);
let account1 = {
    accountNumber: 123456,
    holderName: "Rohit",
    balance: 50000,
    accountType: "Salary",
    isActive: true
};
cl(account1);
let course1 = {
    courseName: "MEAN Stack",
    duration: 6,
    fees: 30000,
    technologies: ["MongoDB", "Express", "Angular", "Node.js"]
};
let vehicle1 = {
    brand: "Hyundai",
    model: "Creta",
    price: 1500000,
    fuelType: "Petrol",
    isAvailable: true
};
cl(vehicle1);
let teacher1 = {
    id: 11,
    name: "Sneha",
    subject: "TypeScript",
    experience: 5,
    skills: ["JavaScript", "TypeScript", "Angular"]
};
let order1 = {
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
var userRole;
(function (userRole) {
    userRole["ADMIN"] = "ADMIN";
    userRole["SUPER_ADMIN"] = "SUPER_ADMIN";
    userRole["BUYER"] = "BUYER";
})(userRole || (userRole = {}));
let user1 = {
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
var Color;
(function (Color) {
    Color["Black"] = "Black";
    Color["White"] = "White";
    Color["Blue"] = "Blue";
})(Color || (Color = {}));
var Category;
(function (Category) {
    Category["Electronics"] = "Electronics";
    Category["Fashion"] = "Fashion";
    Category["Sports"] = "Sports";
    Category["Beauty"] = "Beauty";
})(Category || (Category = {}));
let product1 = {
    id: 501,
    name: "Keyboard",
    price: 1500,
    color: Color.Black,
    quantity: 10,
    category: Category.Fashion
};
cl(product1);
// // 15
// let attendance1 = {
//     employeeName: "Vikas",
//     date: "2026-10-23",
//     status: "Present", // possible values: "Present", "Absent", "Leave"
//     workingHours: 8
// };
var AtendanceStatus;
(function (AtendanceStatus) {
    AtendanceStatus["Present"] = "Present";
    AtendanceStatus["Absent"] = "Absent";
    AtendanceStatus["Leave"] = "Leave";
})(AtendanceStatus || (AtendanceStatus = {}));
let attendance1 = {
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
var UserRole;
(function (UserRole) {
    UserRole["admin"] = "ADMIN";
    UserRole["buyer"] = "BUYER";
    UserRole["seller"] = "SELLER";
})(UserRole || (UserRole = {}));
let shoppingUser1 = {
    id: 101,
    name: "Aakash",
    role: UserRole.admin,
    address: {
        city: "Pune",
        state: "Maharashtra",
        pincode: 411001
    }
};
cl(shoppingUser1);
// // 17
// let inventory1 = {
//     productId: 501,
//     name: "Mouse",
//     price: 800,
//     stock: 5,
//     status: "LOW_STOCK", // possible values: "IN_STOCK", "LOW_STOCK", "OUT_OF_STOCK"
// };
var InventoryStatus;
(function (InventoryStatus) {
    InventoryStatus["LOW_STOCK"] = "LOW_STOCK";
    InventoryStatus["IN_STOKE"] = "IN_STOKE";
    InventoryStatus["OUT_OF_STOCK"] = "OUT_OF_STOCK";
})(InventoryStatus || (InventoryStatus = {}));
let inventory1 = {
    productId: 501,
    name: "Mouse",
    price: 800,
    stock: 5,
    status: InventoryStatus.LOW_STOCK,
};
let employeeProfile1 = {
    id: 102,
    name: "Karan",
    email: "karan@example.com",
    phone: "9876543210",
    skills: ["Angular", "RxJS", "TypeScript"],
    experience: 3
};
let cartItem1 = {
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
var Mode;
(function (Mode) {
    Mode["CASH"] = "CASH";
    Mode["UPI"] = "UPI";
    Mode["CARD"] = "CARD";
    Mode["NET_BANKING"] = "NET_BANKING";
})(Mode || (Mode = {}));
var Status;
(function (Status) {
    Status["SUCCESS"] = "SUCCESS";
    Status["FAILED"] = "FAILED";
    Status["PENDING"] = "PENDING";
})(Status || (Status = {}));
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
var PatientStatus;
(function (PatientStatus) {
    PatientStatus["ADMITTED"] = "ADMITTED";
    PatientStatus["DISCHARGED"] = "DISCHARGED";
    PatientStatus["UNDER_TREATMENT"] = "UNDER_TREATMENT";
})(PatientStatus || (PatientStatus = {}));
let patient1 = {
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
var LibraryBookStatus;
(function (LibraryBookStatus) {
    LibraryBookStatus["AVAILABLE"] = "AVAILABLE";
    LibraryBookStatus["ISSUED"] = "ISSUED";
    LibraryBookStatus["LOST"] = "LOST";
})(LibraryBookStatus || (LibraryBookStatus = {}));
let libraryBook1 = {
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
var FoodOrderStatus;
(function (FoodOrderStatus) {
    FoodOrderStatus["PLACED"] = "PLACED";
    FoodOrderStatus["PREPARING"] = "PREPARING";
    FoodOrderStatus["READY"] = "READY";
    FoodOrderStatus["DELIVERED"] = "DELIVERED";
})(FoodOrderStatus || (FoodOrderStatus = {}));
let foodOrder1 = {
    orderId: 7001,
    customerName: "Neha",
    items: ["Pizza", "Burger", "Juice"],
    totalAmount: 650,
    status: FoodOrderStatus.DELIVERED
};
let department1 = {
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
var TravelBookingStatus;
(function (TravelBookingStatus) {
    TravelBookingStatus["BOOKED"] = "BOOKED";
    TravelBookingStatus["CANCELLED"] = "CANCELLED";
    TravelBookingStatus["COMPLETED"] = "COMPLETED";
})(TravelBookingStatus || (TravelBookingStatus = {}));
let travelBooking1 = {
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
var StudentResultStatus;
(function (StudentResultStatus) {
    StudentResultStatus["PASS"] = "PASS";
    StudentResultStatus["FAIL"] = "FAIL";
    StudentResultStatus["ATKT"] = "ATKT";
})(StudentResultStatus || (StudentResultStatus = {}));
let studentResult1 = {
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
var PropertyType;
(function (PropertyType) {
    PropertyType["Flat"] = "Flat";
    PropertyType["House"] = "House";
    PropertyType["Plot"] = "Plot";
})(PropertyType || (PropertyType = {}));
var PropertyStatus;
(function (PropertyStatus) {
    PropertyStatus["Available"] = "Available";
    PropertyStatus["Sold"] = "Sold";
    PropertyStatus["Rented"] = "Rented";
})(PropertyStatus || (PropertyStatus = {}));
let property1 = {
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
var SocialPostVisibility;
(function (SocialPostVisibility) {
    SocialPostVisibility["PUBLIC"] = "PUBLIC";
    SocialPostVisibility["PRIVATE"] = "PRIVATE";
    SocialPostVisibility["FRIENDS"] = "FRIENDS";
})(SocialPostVisibility || (SocialPostVisibility = {}));
let socialPost1 = {
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
var Type;
(function (Type) {
    Type["LIFE"] = "LIFE";
    Type["HEALTH"] = "HEALTH";
    Type["VEHICLE"] = "VEHICLE";
})(Type || (Type = {}));
let insurance1 = {
    policyNumber: "POL1001",
    holderName: "Mahesh",
    type: Type.LIFE,
    premium: 12000,
    coverage: 500000,
    nominee: "Sunita"
};
var EnrollmentStatus;
(function (EnrollmentStatus) {
    EnrollmentStatus["ENROLLED"] = "ENROLLED";
    EnrollmentStatus["COMPLETED"] = "COMPLETED";
    EnrollmentStatus["DROPPED"] = "DROPPED";
})(EnrollmentStatus || (EnrollmentStatus = {}));
let enrollment1 = {
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
var VehicleServiceType;
(function (VehicleServiceType) {
    VehicleServiceType["GENERAL"] = "GENERAL";
    VehicleServiceType["REPAIR"] = "REPAIR";
    VehicleServiceType["OIL_CHANGE"] = "OIL_CHANGE";
})(VehicleServiceType || (VehicleServiceType = {}));
let vehicleService1 = {
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
var OnlineExamStatus;
(function (OnlineExamStatus) {
    OnlineExamStatus["NOT_STARTED"] = "NOT_STARTED";
    OnlineExamStatus["IN_PROGRESS"] = "IN_PROGRESS";
    OnlineExamStatus["SUBMITTED"] = "SUBMITTED";
})(OnlineExamStatus || (OnlineExamStatus = {}));
let onlineExam1 = {
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
var ProjectStatus;
(function (ProjectStatus) {
    ProjectStatus["PLANNED"] = "PLANNED";
    ProjectStatus["ACTIVE"] = "ACTIVE";
    ProjectStatus["COMPLETED"] = "COMPLETED";
})(ProjectStatus || (ProjectStatus = {}));
let project1 = {
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
var Plan;
(function (Plan) {
    Plan["FREE"] = "FREE";
    Plan["BASIC"] = "BASIC";
    Plan["PREMIUM"] = "PREMIUM";
})(Plan || (Plan = {}));
let subscription1 = {
    userId: 101,
    plan: Plan.BASIC,
    startDate: "2026-10-01",
    endDate: "2027-10-01",
    autoRenew: true
};
let warehouse1 = {
    warehouseId: 1,
    name: "Pune Warehouse",
    location: "Pune",
    products: [
        { productId: 101, name: "Laptop", quantity: 20, reorderLevel: 5 },
        { productId: 102, name: "Monitor", quantity: 3, reorderLevel: 10 }
    ]
};
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["PLACED"] = "PLACED";
    OrderStatus["CONFIRMED"] = "CONFIRMED";
    OrderStatus["SHIPPED"] = "SHIPPED";
    OrderStatus["DELIVERED"] = "DELIVERED";
    OrderStatus["RETURNED"] = "RETURNED";
})(OrderStatus || (OrderStatus = {}));
var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus["PENDING"] = "PENDING";
    PaymentStatus["REFUNDED"] = "REFUNDED";
    PaymentStatus["PAID"] = "PAID";
})(PaymentStatus || (PaymentStatus = {}));
let ecomOrder1 = {
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
var StudentStatus;
(function (StudentStatus) {
    StudentStatus["ACTIVE"] = "ACTIVE";
    StudentStatus["INACTIVE"] = "INACTIVE";
    StudentStatus["PLACED"] = "PLACED";
})(StudentStatus || (StudentStatus = {}));
let instituteStudent1 = {
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
var MachineTestStatus;
(function (MachineTestStatus) {
    MachineTestStatus["NOT_ATTENDED"] = "NOT_ATTENDED";
    MachineTestStatus["ATTENDED"] = "ATTENDED";
    MachineTestStatus["NOT_COMPLETED"] = "NOT_COMPLETED";
    MachineTestStatus["COMPLETED_NOT_EXPLAINED"] = "COMPLETED_NOT_EXPLAINED";
    MachineTestStatus["COMPLETED_AND_EXPLAINED"] = "COMPLETED_AND_EXPLAINED";
})(MachineTestStatus || (MachineTestStatus = {}));
var MachineTestPerformance;
(function (MachineTestPerformance) {
    MachineTestPerformance["VERY_POOR"] = "VERY_POOR";
    MachineTestPerformance["POOR"] = "POOR";
    MachineTestPerformance["GOOD"] = "GOOD";
    MachineTestPerformance["VERY_GOOD"] = "VERY_GOOD";
    MachineTestPerformance["EXCELLENT"] = "EXCELLENT";
})(MachineTestPerformance || (MachineTestPerformance = {}));
let machineTest1 = {
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
var PayrollStatus;
(function (PayrollStatus) {
    PayrollStatus["GENERATED"] = "GENERATED";
    PayrollStatus["PAID"] = "PAID";
    PayrollStatus["ON_HOLD"] = "ON_HOLD";
})(PayrollStatus || (PayrollStatus = {}));
let payroll1 = {
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
var LoanApplicationApplicantEmploymentType;
(function (LoanApplicationApplicantEmploymentType) {
    LoanApplicationApplicantEmploymentType["SALARIED"] = "SALARIED";
    LoanApplicationApplicantEmploymentType["SELF_EMPLOYED"] = "SELF_EMPLOYED";
})(LoanApplicationApplicantEmploymentType || (LoanApplicationApplicantEmploymentType = {}));
var LoanApplicationType;
(function (LoanApplicationType) {
    LoanApplicationType["HOME"] = "HOME";
    LoanApplicationType["PERSONAL"] = "PERSONAL";
    LoanApplicationType["EDUCATION"] = "EDUCATION";
})(LoanApplicationType || (LoanApplicationType = {}));
var LoanApplicationStatus;
(function (LoanApplicationStatus) {
    LoanApplicationStatus["APPLIED"] = "APPLIED";
    LoanApplicationStatus["UNDER_REVIEW"] = "UNDER_REVIEW";
    LoanApplicationStatus["APPROVED"] = "APPROVED";
    LoanApplicationStatus["REJECTED"] = "REJECTED";
})(LoanApplicationStatus || (LoanApplicationStatus = {}));
let loanApplication1 = {
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
var ApiResponseDataUserRole;
(function (ApiResponseDataUserRole) {
    ApiResponseDataUserRole["ADMIN"] = "ADMIN";
    ApiResponseDataUserRole["USER"] = "USER";
    ApiResponseDataUserRole["MANAGER"] = "MANAGER";
})(ApiResponseDataUserRole || (ApiResponseDataUserRole = {}));
let apiResponse1 = {
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
var ProjectTaskPriority;
(function (ProjectTaskPriority) {
    ProjectTaskPriority["LOW"] = "LOW";
    ProjectTaskPriority["MEDIUM"] = "MEDIUM";
    ProjectTaskPriority["HIGH"] = "HIGH";
    ProjectTaskPriority["CRITICAL"] = "CRITICAL";
})(ProjectTaskPriority || (ProjectTaskPriority = {}));
var projectTaskStatus;
(function (projectTaskStatus) {
    projectTaskStatus["TODO"] = "TODO";
    projectTaskStatus["IN_PROGRESS"] = "IN_PROGRESS";
    projectTaskStatus["IN_REVIEW"] = "IN_REVIEW";
    projectTaskStatus["DONE"] = "DONE";
})(projectTaskStatus || (projectTaskStatus = {}));
let projectTask1 = {
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
var HotelStatus;
(function (HotelStatus) {
    HotelStatus["RESERVED"] = "RESERVED";
    HotelStatus["CHECKED_IN"] = "CHECKED_IN";
    HotelStatus["CHECKED_OUT"] = "CHECKED_OUT";
    HotelStatus["CANCELLED"] = "CANCELLED";
})(HotelStatus || (HotelStatus = {}));
let hotelBooking1 = {
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
var AdvanceCardDiscountType;
(function (AdvanceCardDiscountType) {
    AdvanceCardDiscountType["PERCENTAGE"] = "PERCENTAGE";
    AdvanceCardDiscountType["FIXED"] = "FIXED";
})(AdvanceCardDiscountType || (AdvanceCardDiscountType = {}));
var AdvancedCardCurrency;
(function (AdvancedCardCurrency) {
    AdvancedCardCurrency["INR"] = "INR";
    AdvancedCardCurrency["USD"] = "USD";
})(AdvancedCardCurrency || (AdvancedCardCurrency = {}));
let advancedCart1 = {
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
};
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
var AuthSessionUserRole;
(function (AuthSessionUserRole) {
    AuthSessionUserRole["ADMIN"] = "ADMIN";
    AuthSessionUserRole["SUPER_ADMIN"] = "SUPER_ADMIN";
    AuthSessionUserRole["USER"] = "USER";
})(AuthSessionUserRole || (AuthSessionUserRole = {}));
var AuthSessionAuthenticationProvider;
(function (AuthSessionAuthenticationProvider) {
    AuthSessionAuthenticationProvider["LOCAL"] = "LOCAL";
    AuthSessionAuthenticationProvider["GOOGLE"] = "GOOGLE";
    AuthSessionAuthenticationProvider["GITHUB"] = "GITHUB";
})(AuthSessionAuthenticationProvider || (AuthSessionAuthenticationProvider = {}));
let authSession1 = {
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
var InsuranceClaimClaimantRelationship;
(function (InsuranceClaimClaimantRelationship) {
    InsuranceClaimClaimantRelationship["SELF"] = "SELF";
    InsuranceClaimClaimantRelationship["SPOUSE"] = "SPOUSE";
    InsuranceClaimClaimantRelationship["CHILD"] = "CHILD";
    InsuranceClaimClaimantRelationship["PARENT"] = "PARENT";
})(InsuranceClaimClaimantRelationship || (InsuranceClaimClaimantRelationship = {}));
var insuranceClaimStatus;
(function (insuranceClaimStatus) {
    insuranceClaimStatus["SUBMITTED"] = "SUBMITTED";
    insuranceClaimStatus["DOCUMENTS_REQUIRED"] = "DOCUMENTS_REQUIRED";
    insuranceClaimStatus["APPROVED"] = "APPROVED";
    insuranceClaimStatus["REJECTED"] = "REJECTED";
    insuranceClaimStatus["SETTLED"] = "SETTLED";
})(insuranceClaimStatus || (insuranceClaimStatus = {}));
let insuranceClaim1 = {
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
var TransactionType;
(function (TransactionType) {
    TransactionType["CREDIT"] = "CREDIT";
    TransactionType["DEBIT"] = "DEBIT";
    TransactionType["TRANSFER"] = "TRANSFER";
})(TransactionType || (TransactionType = {}));
var TransactionAmountCurrency;
(function (TransactionAmountCurrency) {
    TransactionAmountCurrency["INR"] = "INR";
    TransactionAmountCurrency["USD"] = "USD";
    TransactionAmountCurrency["EUR"] = "EUR";
    TransactionAmountCurrency["GBP"] = "GBP";
})(TransactionAmountCurrency || (TransactionAmountCurrency = {}));
let transaction1 = {
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
var employmentDetailsStatus;
(function (employmentDetailsStatus) {
    employmentDetailsStatus["PROBATION"] = "PROBATION";
    employmentDetailsStatus["ACTIVE"] = "ACTIVE";
    employmentDetailsStatus["NOTICE_PERIOD"] = "NOTICE_PERIOD";
    employmentDetailsStatus["RESIGNED"] = "RESIGNED";
})(employmentDetailsStatus || (employmentDetailsStatus = {}));
let hrmsEmployee1 = {
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
var BatchReportResultAttendance;
(function (BatchReportResultAttendance) {
    BatchReportResultAttendance["ATTENDED"] = "ATTENDED";
    BatchReportResultAttendance["ABSENT"] = "ABSENT";
})(BatchReportResultAttendance || (BatchReportResultAttendance = {}));
var BatchReportResultPerformance;
(function (BatchReportResultPerformance) {
    BatchReportResultPerformance["VERY_POOR"] = "VERY_POOR";
    BatchReportResultPerformance["POOR"] = "POOR";
    BatchReportResultPerformance["GOOD"] = "GOOD";
    BatchReportResultPerformance["VERY_GOOD"] = "VERY_GOOD";
    BatchReportResultPerformance["EXCELLENT"] = "EXCELLENT";
})(BatchReportResultPerformance || (BatchReportResultPerformance = {}));
let batchReport1 = {
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
var PricingCurrency;
(function (PricingCurrency) {
    PricingCurrency["INR"] = "INR";
    PricingCurrency["USD"] = "USD";
})(PricingCurrency || (PricingCurrency = {}));
var ProductDiscount;
(function (ProductDiscount) {
    ProductDiscount["PERCENTAGE"] = "PERCENTAGE";
    ProductDiscount["FIXED"] = "FIXED";
})(ProductDiscount || (ProductDiscount = {}));
var ProductInventoryStatus;
(function (ProductInventoryStatus) {
    ProductInventoryStatus["IN_STOCK"] = "IN_STOCK";
    ProductInventoryStatus["LOW_STOCK"] = "LOW_STOCK";
    ProductInventoryStatus["OUT_OF_STOCK"] = "OUT_OF_STOCK";
})(ProductInventoryStatus || (ProductInventoryStatus = {}));
var VariantColor;
(function (VariantColor) {
    VariantColor["Black"] = "Black";
    VariantColor["Blue"] = "Blue";
    VariantColor["White"] = "White";
})(VariantColor || (VariantColor = {}));
var ProductShippingMethods;
(function (ProductShippingMethods) {
    ProductShippingMethods["STANDARD"] = "STANDARD";
    ProductShippingMethods["EXPRESS"] = "EXPRESS";
    ProductShippingMethods["SAME_DAY"] = "SAME_DAY";
})(ProductShippingMethods || (ProductShippingMethods = {}));
var ProductLifecycle;
(function (ProductLifecycle) {
    ProductLifecycle["DRAFT"] = "DRAFT";
    ProductLifecycle["ACTIVE"] = "ACTIVE";
    ProductLifecycle["DISCONTINUED"] = "DISCONTINUED";
})(ProductLifecycle || (ProductLifecycle = {}));
let completeProduct1 = {
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
