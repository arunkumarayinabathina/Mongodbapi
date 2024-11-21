# Product API Documentation

Welcome to the **Product API** documentation. This API allows you to manage products with basic CRUD (Create, Read, Update, Delete) operations. It is built with MongoDB and provides several endpoints to interact with product data.

## Base URL
The base URL is:
https://mongodbapi-71pu.onrender.com
## Endpoints

### 1. **Get All Products**

- **URL**: `/api/products`
- **Method**: `GET`
- **Description**: This endpoint fetches all products from the database.

**Example Request:**

GET https://mongodbapi-71pu.onrender.com/api/products

**Example Response:**

```json
[
  {
    "_id": "673eb4aba386d37e91a8f3d5",
    "name": "bun",
    "quantity": "2",
    "price": 50,
    "__v": 0
  },
  {
    "_id": "673ed575ec10a5624d829c48",
    "name": "gun",
    "quantity": "1",
    "price": 50,
    "__v": 0
  }
]
```

### 2. **Get Single Product**

- **URL**: `/api/products`
- **Method**: `GET`
- **Description**: This endpoint fetches single product from the database.

**Example Request:**

GET https://mongodbapi-71pu.onrender.com/api/products/673ed575ec10a5624d829c48

**Example Response:**

```json
   {
  "_id": "673ed575ec10a5624d829c48",
  "name": "gun",
  "quantity": "1",
  "price": 50,
  "__v": 0
 }

```
### 3. **To Delete Product**

- **URL**: `/api/products/{id}`
- **Method**: `Delete`
- **Description**: This endpoint delete product from the database.

**Example Request:**

GET https://mongodbapi-71pu.onrender.com/api/products/673ed575ec10a5624d829c48

**Example Response:**

```json
 {
  "message": "Product deleted successfully"
 }

```

### 4. **To Add Product**

- **URL**: `/api/products`
- **Method**: `Post`
- **Description**: This endpoint add product to the database.

**Example Request:**

GET https://mongodbapi-71pu.onrender.com/api/products

**Body**
```json
{
  "name":"laptop",
  "quantity":1,
  "price":60000
}
```


### 5. **To Update Product**

- **URL**: `/api/products/{id}`
- **Method**: `Put`
- **Description**: This endpoint updates the existing product from the database.

**Example Request:**

GET https://mongodbapi-71pu.onrender.com/api/products/673eb4aba386d37e91a8f3d5
### You need to provide the data in the body what you want to update
**Example Response:**

```json
{
    "_id": "673eb4aba386d37e91a8f3d5",
    "name": "Mobile",
    "quantity": "1",
    "price": 50,
    "__v": 0
}
```


