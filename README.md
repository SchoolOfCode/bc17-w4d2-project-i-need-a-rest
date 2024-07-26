# Project I-Need-A-Rest!!

## Prerequisites

- Node.js (https://nodejs.org/)
- npm (comes with Node.js)

## Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/SchoolOfCode/bc17-w4d2-project-i-need-a-rest.git
    cd bc17-w4d2-project-i-need-a-rest
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

## Running the Application

1. **Start the server:**

    ```bash
    npm start
    ```

2. **Verify the server is running:**

    Open your browser or use a tool like `curl` or `Postman` to make a GET request to:

    ```
    http://localhost:3000/
    ```

    You should see a response with status code 200 and the text "Hello World!".

## Usage

| GET  | `localhost:3000/activities/` |
|------|------------------------------|
```json
{
    "success": true,
    "payload": {
        "data": [
            {
                "id": "4b4cb10e-2ed7-432c-96a9-ce5fa1c3e242",
                "activity_submitted": 1721827021395,
                "activity_type": "skiing",
                "activity_duration": "30"
            },
            {
                "id": "be5e80e4-3461-49d8-a1a0-e9c03911cd2b",
                "activity_submitted": 1721827034135,
                "activity_type": "jogging",
                "activity_duration": "34"
            },
            {
                "id": "3fe8ba05-db5a-49a7-984c-7b620f2e99b7",
                "activity_submitted": 1721902510940,
                "activity_type": "jog",
                "activity_duration": "30"
            },
            {
                "id": "066b7b0e-f7f0-4edb-abe5-56aaffe16f12",
                "activity_submitted": 1721902582022,
                "activity_type": "jog",
                "activity_duration": "30"
            }
        ]
    }
}
```

| POST | `localhost:3000/activities/` |
|------|------------------------------|
|`body.activity_type`| `cycling`           |
|`body.activity_duration`|`35`|

```json
{
    "success": true,
    "payload": {
        "data": [
            {
                "id": "4b4cb10e-2ed7-432c-96a9-ce5fa1c3e242",
                "activity_submitted": 1721827021395,
                "activity_type": "skiing",
                "activity_duration": "30"
            },
            {
                "id": "be5e80e4-3461-49d8-a1a0-e9c03911cd2b",
                "activity_submitted": 1721827034135,
                "activity_type": "jogging",
                "activity_duration": "34"
            },
            {
                "id": "3fe8ba05-db5a-49a7-984c-7b620f2e99b7",
                "activity_submitted": 1721902510940,
                "activity_type": "jog",
                "activity_duration": "30"
            },
            {
                "id": "066b7b0e-f7f0-4edb-abe5-56aaffe16f12",
                "activity_submitted": 1721902582022,
                "activity_type": "jog",
                "activity_duration": "30"
            },
            {
                "id": "6ad98827-13ca-4fd0-88ee-e387727ad623",
                "activity_submitted": 1721982799344,
                "activity_type": "cycling",
                "activity_duration": "35"
            }
        ]
    }
}
```

| PUT | `localhost:3000/activities/6ad98827-13ca-4fd0-88ee-e387727ad623` |
|------|------------------------------|
|`body.activity_type`| `running`           |
|`body.activity_duration`|`40`|

```json
{
    "success": true,
    "payload": {
        "id": "6ad98827-13ca-4fd0-88ee-e387727ad623",
        "activity_submitted": 1721982799344,
        "activity_type": "running",
        "activity_duration": "40"
    }
}
```
| DELETE | `localhost:3000/activities/6ad98827-13ca-4fd0-88ee-e387727ad623` |
|------|------------------------------|
|`header.authorization`| `Bearer TEST_TOKEN`           |

```json
{
    "success": true,
    "payload": [
        {
            "id": "6ad98827-13ca-4fd0-88ee-e387727ad623",
            "activity_submitted": 1721982799344,
            "activity_type": "running",
            "activity_duration": "40"
        }
    ]
}
```

