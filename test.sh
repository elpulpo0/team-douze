
#!/bin/bash

# Set image name and container name
IMAGE_NAME="express-react"
CONTAINER_NAME="express-react"

# Step 1: Check if a container with the same name is already running
# if [ "$(docker ps -q -f name=$CONTAINER_NAME)" ]; then
  echo "Stopping and removing existing container with name: $CONTAINER_NAME"
  docker stop $CONTAINER_NAME
  docker rm $CONTAINER_NAME
# fi

# Step 2: Build the Docker image
echo "Building Docker image..."
docker build -f docker/Dockerfile -t $IMAGE_NAME .

# Check if build was successful
if [ $? -ne 0 ]; then
  echo "Error: Docker build failed."
  exit 1
fi
echo "Docker image built successfully: $IMAGE_NAME"

# Step 3: Run the Docker container
echo "Running Docker container..."
docker run --name $CONTAINER_NAME -p 8888:80 -d $IMAGE_NAME

# Check if the container started successfully
if [ $? -ne 0 ]; then
  echo "Error: Docker container failed to start."
  exit 1
fi
echo "Docker container is running with name: $CONTAINER_NAME"
echo "Project running on http://localhost:8888"
