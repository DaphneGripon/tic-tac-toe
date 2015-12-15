# Roadable

> Roadable API

## Introduction

[Roadable] is a university project, created by DEVEY Anne-Marie, GRIPON Daphne, PREVOT Astrid.
It is a roadtrip planner, available through our web and mobile apps.

## What you need

* An SFTP Client (FileZilla, Cyberduck, etc) : to modiy, add or delete files.
* Postman : to test the API.
* Node
  * mongodb
  * mongoose
  * body-parser
  * express
* MongoDB

## How it works

### How to start the server

* Open the terminal (A)
* Connect to the server using "ssh -L 3306:localhost:3306 roadable@sau.labs.esilv.fr"
* Enter yes
* Enter the password
* Start MongoDB on terminal A (\* instructions to follow)
* Open another terminal (B)
* Go to /node using "cd .. node"
* Type "node try_mgdb.js" to start the Node server

### How to start MongoDB

* You need to specify the path to the database to start MongoDB
* Start from the root of the roadable folder
* Type "mongod --dbpath mongodb/mongodb-linux-x86_64-3.2.0/data"


### Database

Once you have everything set up, you can add, modify or delete requests.
To do you, you need to open your main .js file (currently try_mgdb.js).

There, you can add requests and request methods to add to your API.

To create a table in your database, you need to create a "Schema" (Mongoose).

[General Tutorial](https://github.com/92bondstreet/api-ness/blob/master/presentation.md#build-a-restful-api-with)
[Specific Queries Tutorial](http://mongoosejs.com/docs/queries.html)

### Test

All the requests can be tested using tools (like Postman).
The root url is the following :
> http://node.labs.esilv.fr/api/

Then you add the request name/url at the end.
You can also add a json in the header, to provide information.

![Adding data to your post request using Postman](data/imgs/json_postman.jpg?raw=true "Adding data to your post request using Postman")


#### List of requests

requests | method | implemented | description | parameters | returns
---------- | ----------- | ----------- | ----------- | -----------
/itinerary | GET | false | Computes the right roadtrip itinerary| start & end date, start & end place, profile & preferences | Returns all the checkpoints of the itinerary, including the name, localization, type, and day of the trip.
/users | GET | false | Gets all the users | -- | Returns a JSON containing all the users.
/users | POST | false | Adds a new user | user information (TBD) | Returns the user ID.
/users | DELETE | false | Deletes all the users | -- | Returns a status message.
/users/:user_id | GET | false | Gets a unique user | -- | Returns a json containing a unique user.
/users/:user_id | DELETE | false | Deletes a unique user | -- | Returns a status message.
/users/:user_id | PUT | false | Updates a unique user | -- | Returns a status message.
