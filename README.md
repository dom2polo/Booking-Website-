# Booking Website for Massage Therapy 


## Description 
CSCI 414 Project repository is a school project distinguished by its exceptional database design, using both relational and NoSQL databases with minimal redundancy.


## Booking Website 
Navigate through the Home tab for a serene introduction, manage your reservations effortlessly in the My Booking tab, 
and instantly book your next moment of relaxation with the Book Now tab. Crafted with HTML, CSS, and JavaScript for a visually engaging experience, 
our website leverages the power of both relational and NoSQL databases, including MongoDB, to ensure a smooth and personalized journey in the realm of massage therapy.


Language/Software
    - NoSQL
    - HTML, CSS, JS

## Features 
Tabs/Pages: 
- Home
    - Book Now 
        - link 
    - Brief Info
        - Welcoming Notes
    - Contact Us 
        - phone
        - email
        - location 
    - Opening Hours 
        - date and availability 
- My Booking 
    - Details about client's selection
    - Confirmation 
            - with all client and service selection 
            - get notified 
Book Now: 
    - Offer services 
        - Descriptions
        - Services
            - 30 min for $35 
            - 1 hr for $65 
            - 90 min for $95 
            - 2 hr for $135 
        - Provider (who you will be having the session with)
        - Time 
            - available time 
        - Client Info 
            - Name, Email, phone

## Relational Database Schema:
Table: Clients
  - ClientID (Primary Key)
  - Name (first, last)
  - Phone
  - Email

Table: Services
  - ServiceID (Primary Key)
  - Description
  - Price

Table: Providers
  - ProviderID (Primary Key)
  - Name (fist, last)

Table: Bookings
  - BookingID (Primary Key)
  - ClientID (Foreign Key referencing Clients)
  - ServiceID (Foreign Key referencing Services)
  - ProviderID (Foreign Key referencing Providers)
  - Date (dd/mm/yyyy)
  - Time
  - Note

## NoSQL Database Schema (for unstructured data):
- Clients collection:
  ```{sql}
  {
  "_id": ObjectId("..."),
  "name": {
    "first": "John",
    "last": "Doe"
  },
  "phone": "123-456-7890",
  "email": "john.doe@example.com"
  }
``
- Service collection:
  ```{sql}
    {
      "_id": ObjectId("..."),
      "description": "1 Hour Massage",
      "price": 50.00
    }
``
- Providers  collection:
  ```{sql}
    {
      "_id": ObjectId("..."),
      "name": {
        "first": "Jane",
        "last": "Smith"
      }
    }
``

Booking Collection
  ```{sql}
    {
      "_id": ObjectId("..."),
      "clientID": ObjectId("..."),   // Reference to the Clients collection
      "serviceID": ObjectId("..."),  // Reference to the Services collection
      "providerID": ObjectId("..."), // Reference to the Providers collection
      "date": "2023-01-01",
      "time": "10:00 AM",
      "note": "Special request for the service",
    }
```


## Relational Database Queries   
  - Get client details for a booking 
    ```{sql}
    SELECT Clients.Name, Clients.Email, Clients.Phone
    FROM Clients
    JOIN Bookings ON Clients.ClientID = Bookings.ClientID
    WHERE Bookings.BookingID = [BookingID];
    ```

  - Get all bookings with service details:
    ```{sql}
    SELECT Bookings.BookingID, Clients.Name, Services.Description, Providers.Name, Bookings.Time, Bookings.ConfirmationStatus
    FROM Bookings
    JOIN Clients ON Bookings.ClientID = Clients.ClientID
    JOIN Services ON Bookings.ServiceID = Services.ServiceID
    JOIN Providers ON Bookings.ProviderID = Providers.ProviderID;
    ```

## NoSQL Database Queries   
  - Get opening hours
    ```{sql}
    db.OpeningHours.find();
    ```
  - Get contact information
    ```{sql}
    db.ContactInfo.find();
    ```
  - Get home content
    ```{sql}
    db.HomeContent.find();
    ```


