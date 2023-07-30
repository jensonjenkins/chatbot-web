# chatbot-web
A full-stack webapp to interact with the transformer-chatbot model.
## Demo
<img src="https://github.com/jensonjenkins/chatbot-web/assets/117452546/92f2ce59-4574-4293-a4ca-0c2c87a0f90a"/>

## Technology
- Frontend: Typescript, React
- Backend: Django
- Model: TensorFlow, Keras

## Installation (To run on a local machine)
1. Clone the repository: 
```bash
git clone https://github.com/jensonjenkins/chatbot-web
```
2. Navigate to the server directory and create the docker image:
```bash
cd server
```
```bash
docker compose up --build
```
3. Run the server inside the docker container:
```bash
docker exec -it {container-id} /bin/bash
```
```bash
python manage.py runserver 0.0.0.0:8000
```
4. Navigate to the client directory and run the client web app:
```bash
npm start
```



