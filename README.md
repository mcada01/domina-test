# Domina-test
Domina test is a project based on services that allows to manager users and theirs tasks.

System inits with the user creation; so when he loggin and yours info is valid it generate token through JWT.
This token is send into header of the requests to backend for manage the logged user tasks.


### Architecture
-Prueba domina<br>
---domina-api<br>
-----src<br>
-------task<br>
---------dto<br>
---------controller<br>
---------entity<br>
---------module<br>
---------service<br>
-------user<br>
---------dto<br>
---------controller<br>
---------entity<br>
---------module<br>
---------service<br>
-------app.controller<br>
-------app.module<br>
-------app.service<br>
-----.env<br>
-----package.json<br>
---domina-web<br>
-----src<br>
-------components<br>
-------pages<br>
-------servicies<br>
-------App.tsx<br>
-----.env<br>
-----package.json
		


### Prerequisites
* React (https://react.dev/)
* Node (https://nodejs.org/en)



### Installation
Clone the repository:<br>
git clone https://github.com/mcada01/domina-test.git <br>

Front:<br>
1.Change to the repository directory:<br>
cd domina-web <br>
2.Install dependencies:<br>
npm install	<br>
3. Run app:<br>
npm start<br>

Back:<br>
1.Change to the repository directory:<br>
cd domina-api <br>
2.Install dependencies:<br>
npm install	<br>
3. Run app<br>
npm run start:debug

<img src='https://github.com/mcada01/domina-test/blob/f06f6f2c68ac6881120a0420bd8d632c8ecf4c4a/domina-web/src/assets/login.png'/>
<img src='https://github.com/mcada01/domina-test/blob/f06f6f2c68ac6881120a0420bd8d632c8ecf4c4a/domina-web/src/assets/register.png'/>
<img src='https://github.com/mcada01/domina-test/blob/f06f6f2c68ac6881120a0420bd8d632c8ecf4c4a/domina-web/src/assets/viewTasks.png'/>
<img src='https://github.com/mcada01/domina-test/blob/f06f6f2c68ac6881120a0420bd8d632c8ecf4c4a/domina-web/src/assets/addTask.png'/>
<img src='https://github.com/mcada01/domina-test/blob/f06f6f2c68ac6881120a0420bd8d632c8ecf4c4a/domina-web/src/assets/editTask.png'/>
<img src='https://github.com/mcada01/domina-test/blob/f06f6f2c68ac6881120a0420bd8d632c8ecf4c4a/domina-web/src/assets/deleteTask.png'/>
<img src='https://github.com/mcada01/domina-test/blob/f06f6f2c68ac6881120a0420bd8d632c8ecf4c4a/domina-web/src/assets/logout.png'/>


### Backup
Into the file backup_domina is the backup uses to tests.



### API requests
Into the file Domina.postman_collection.json is the collection to import into postman.
