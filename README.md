Este proyecto es una API REST hecha con Node.js, Express y Mongo
Permite manejar usuarios, servicios y turnos con operaciones básicas como crear, ver, editar y eliminar datos

Tecnologías
Node.js
Express
MongoDB
Mongoose
dotenv
cors
bcrypt
JWT
Estructura
proyecto-crud-mongodb/
├── app.js
├── .env
├── package.json
└── src/
    ├── models/
    ├── controllers/
    ├── services/
    ├── routes/
    ├── config/
    └── middleware/
Modelos
Usuario
{
  "email": "usuario@mail.com",
  "password": "123456"
}
Servicio
{
  "name": "Corte de pelo",
  "description": "Servicio básico",
  "price": 1500
}
Turno
{
  "date": "2026-04-20",
  "user": "ID_USUARIO",
  "service": "ID_SERVICIO"
}
Instalación
npm install
npm run dev
Variables de entorno
PORT=3000
MONGO_URI=mongodb://localhost:27017/turnos_db
JWT_SECRET=supersecreto
Endpoints
Usuarios
POST /api/users/register
POST /api/users/login
Servicios
GET /api/services
GET /api/services/:id
POST /api/services
PUT /api/services/:id
DELETE /api/services/:id
Turnos
GET /api/appointments
GET /api/appointments/:id
POST /api/appointments
PUT /api/appointments/:id
DELETE /api/appointments/:id
Seguridad
bcrypt
JWT
dotenv
