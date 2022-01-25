USE Ecommerce;

CREATE TABLE Customers_jamie (
    CustomerId INT NOT NULL AUTO_INCREMENT,
    FirstName TEXT,
    LastName TEXT,
    Email TEXT,
    PhoneNumber TEXT,
    PRIMARY KEY (CustomerId)
);

CREATE TABLE Address_jamie (
    AddressId INT NOT NULL AUTO_INCREMENT,
    StreetAddress VARCHAR(500),
    City TEXT,
    State TEXT,
    PostalCode TEXT,
    CustomerId INT,
    PRIMARY KEY (AddressId),
    FOREIGN KEY (CustomerId)
        REFERENCES Customers_jamie (CustomerId)
);

CREATE TABLE Product_jamie (
    ProductId INT NOT NULL AUTO_INCREMENT,
    UnitPrice DECIMAL(12 , 2 ),
    Quainity INT,
    Description TEXT,
    ProductName TEXT,
    Location TEXT,
    CustomerId INT,
    PRIMARY KEY (ProductId),
    FOREIGN KEY (CustomerId)
        REFERENCES Customers_jamie (CustomerId)
);

CREATE TABLE Payments_jamie (
    PaymentId INT AUTO_INCREMENT,
    CreditCardNumber VARCHAR(50),
    PaymentStatus TEXT,
    OrderId TEXT,
    CustomerId INT,
    PRIMARY KEY (PaymentId),
    FOREIGN KEY (CustomerId)
        REFERENCES Customers_jamie (CustomerId)
);

CREATE TABLE Orders_jamie (
    OrdersId INT AUTO_INCREMENT,
    TotalAmount DECIMAL(12 , 2 ),
    DeliveryDate DATETIME,
    CustomerId INT,
    PRIMARY KEY (OrdersId),
    FOREIGN KEY (CustomerId)
        REFERENCES Customers_jamie (CustomerId),
    FOREIGN KEY (ProductId)
        REFERENCES Products_jamie (PaymentId)
);

INSERT INTO Customers_jamie (FirstName, LastName, Email, PhoneNumber)
VALUES ("Jamie", "Bunch", "Jamiebunch@ymail.com", "561 867 5309");

SELECT * FROM Customers_jamie