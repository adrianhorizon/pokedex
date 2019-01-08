# pokdedex

This project explains how to run a react application in `docker(https://www.docker.com/)`.

## Build docker image
`docker build . -t pokedex`
## Run docker container
`docker run -p 8000:80 pokedex` and Navigate to `http://localhost:8000/`

## Development server

Run `npm start` for a dev sever. Navigate to `http://localhost:3000/`. The app will automatically reload if you change any of the source files inside `app directory`.

## Build
 * Run `npm run build` to build the project. The build artifacts will be stored in the `build/` directory.
