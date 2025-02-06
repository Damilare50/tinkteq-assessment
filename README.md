# RBAC Assessment

## Description

This project is an assessment of Role-Based Access Control (RBAC) implementation. It demonstrates how to manage user permissions and roles within an application, ensuring that users have appropriate access to resources based on their assigned roles.

## Installation/Setup

- Use the package manager [npm](https://www.npmjs.com/) to install the API.

```bash
npm install
```

- create a `.env` file from `.env.sample` using the following command.

```bash
cp .env.sample .env
```

- Update the `APP_MODE` in the .env file to either of these options:
  _1._ `test`: this uses the in memory mongodb server
  _2._`dev`: the need the MONGO_URI env variable to be set.

- Start the app on port 3000 with:

```bash
npm run start:dev
```

## Documentation

| **Method** | **Endpoint**         | **Description**                        | **Access**              | **Sample cURL**                                                                                                                                                          |
| ---------- | -------------------- | -------------------------------------- | ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `POST`     | `/api/auth/register` | Register a new user                    | Public                  | curl -X POST http://localhost:3000/api/auth/register -H "Content-Type: application/json" -d '{"email":"user@example.com","password":"securePassword123","role":"admin"}' |
| `POST`     | `/api/auth/login`    | Authenticate user and return JWT token | Public                  | curl -X POST http://localhost:3000/api/auth/login -H "Content-Type: application/json" -d '{"email":"user@example.com","password":"securePassword123"}'                   |
| `GET`      | `/api/auth/whoami`   | Get authenticated user details         | All Authenticated Users | curl -X GET http://localhost:3000/api/auth/whoami -H "Authorization: Bearer <JWT_TOKEN>"                                                                                 |
| `GET`      | `/api/admin/*`       | Base admin route                       | Admin only              | curl -X GET http://localhost:3000/api/admin -H "Authorization: Bearer <JWT_TOKEN>"                                                                                       |
| `GET`      | `/api/shipper/*`     | Base shipper route                     | Shipper only            | curl -X GET http://localhost:3000/api/shipper -H "Authorization: Bearer <JWT_TOKEN>"                                                                                     |
| `GET`      | `/api/carrier/*`     | Base carrier route                     | Carrier only            | curl -X GET http://localhost:3000/api/carrier -H "Authorization: Bearer <JWT_TOKEN>"                                                                                     |

## License

[ISC](https://choosealicense.com/licenses/isc/)
