#!/bin/bash

# Static deployment script for Netlify

echo "Building static version of penomovu bio website..."

# Navigate to client directory
cd client

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
    echo "Installing dependencies..."
    npm install
fi

# Build the static site
echo "Building for production..."
npm run build

echo "Static build complete!"
echo "The build output is in client/dist/"
echo ""
echo "To deploy to Netlify:"
echo "1. Push your code to GitHub"
echo "2. Connect your GitHub repo to Netlify"
echo "3. Set build command: 'cd client && npm install && npm run build'"
echo "4. Set publish directory: 'client/dist'"
echo "5. Deploy!"