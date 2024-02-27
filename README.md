# Translator Service

This is a simple Express.js server application that translates text into French using the Translator For You library. It provides an API endpoint to translate text and a test endpoint to check if the server is running.

## Getting Started

To get started with this application, follow the instructions below.

### Prerequisites

Make sure you have Node.js and npm (Node Package Manager) installed on your system.

### Installation

1. Clone the repository to your local machine:

   ```bash
   git clone <repository-url>


2. Navigate to the project directory:

   ```bash
    cd translator-service
3. Install dependencies:

   ```bash
    npm install
4. To start the server, run the following command:

   ```bash
    npm start

### Endpoints
POST /translate: Translate text into French. Send a JSON object with the text you want to translate in the request body. Example:

```bash
{
  "text": "Hello, world!"
}

GET /test: Test endpoint to check if the server is running. Access this endpoint to receive a "Ok server is running" message.

