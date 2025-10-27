# Use official Node image
FROM node:16

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy rest of the app
COPY . .

# Expose port 5000
EXPOSE 5000

# Start the server
CMD ["npm", "start"]