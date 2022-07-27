## Project HEARTBUSTER
This tinder-like app helps its users connect via video and pictures, stylized after BlockBuster video and video-dating services. Working fully, it would allow people to match and message each other.

### ROUTES
| Method | Path                                 | Purpose                                   |
| ------ | ------------------------------------ | ----------------------------------------- |
| GET    | /users                               | Find all users                            |
| GET    | /users/user_id                       | Find specific users                       |
| POST   | /users/                              | Create a user                             |
| DELETE | /users/:id                           | Delete a user                             |
| ------ | ------------------------------------ | ----------------------------------------- |
| GET    | /users/:user_id/messages             | Find all messages for user                |
| GET    | /users/:user_id/messages/:message_id | Get specific message                      |
| POST   | /users/:user_id/message_id           | Post a message                            |
| PUT    | /users/message_id                    | Respond to a message                      |
| DELET  | /users/message_id                    | Delete a message                          |


CONNECTED TO POSTGRES
PORT = 3000

### App 
| Component                 | Purpose                                                                         |
| ------------------------- | ------------------------------------------------------------------------------- |
| chatroom.js             | Chatroom                                                                        |
| datacollection.js       | Input for data colection                                                        |
| datacards.js            | Each user's card                                                                |
| yourprofile.js          | User's profile                                                                  |
| theirprofile.js         | Match's profile                                                                  |


DATABASE CHART GOES HERE
