# Parking App
All example requests are in the Insomnia file

Requirements to execute:
* MongoDB
* yarn

When cloning the repo, run the command: **yarn** to install all dependencies

All request are made on port 5000

Command to execute the application:
* yarn dev

Detailed documentation about the endpoints are in:
https://app.swaggerhub.com/apis-docs/PedroASNegrao/topicos-3_documentacao/1.0.0#/

## Endpoints
## Driver
### POST /driver
Create a new driver

### GET /driver
List all drivers

### PUT /driver/:id
Update a driver

### POST /driver/login
Login as a driver

### DELETE /driver/:id
Delete a driver

## Parking Lot

### GET /parkingLot
List all parking lots

### POST /parkingLot
Create a new parking lot

### GET /parkingLot/:id
Show information about a parking lot

### DELETE /parkingLot/:id
Delete a parking lot

### GET /parkingLot​/parkingSpace​/<parkingLot_id>
Check all parking space data

## Parking Spaces

### GET /parkingSpace/<parkingSpace_id>
Check data about a parking space

### PATCH /parkingSpace/<parkingSpace_id>
Modify data of a parking space

### DELETE ​/parkingSpace​/<parkingSpace_id>
Delete a parking space

### PUT /parkingSpace/<parkingSpace_id>
Add an item to a parking space