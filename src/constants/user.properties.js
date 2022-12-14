const doctorPropeties = [
    'specialization',
    'appointment_fee',
    'daily_token_numbers'
];

const userProperties = [
    'name',
    'email',
    'dateOfBirth',
    'address',
    'gender',
    'role'
];

const patientProperties = [
    'diagnosis'
];

const USER_TYPES = [
    'ADMIN',
    'DOCTOR',
    'PATIENT',
    'EMPLOYEE'
]

module.exports = {
    doctorPropeties,
    userProperties,
    patientProperties,
    USER_TYPES,
};