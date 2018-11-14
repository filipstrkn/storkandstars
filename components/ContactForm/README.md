# Contact Form Documentation

## Availible components
there are three components that represent the Contact Form itself. There is a component `ContactForm` that is the bridge between Storyblok and the app. Maybe you should know that there is another person in the room the `FormMessage` who speaks to the clients. He likes to be funny and use emojis. And at the end there is the guy that doesn't like talking but he has muscles and does all the heavy lifting. His name is `FormBlock`. Wait! And don't forget the guy that lives on the server. He likes to be on the other side `api/index` and talk to the other guys.


## Server
So how it works on the server. There is a tiny api that sends 'POST' request to the Service API, in our case it is [Fleep.io](https://fleep.io/fleepapi/).


## Front-end
First of all we grab the input values that user insert. We do simple validation of his email with Regular Expresions and that save those values into Vuex store. There is also a state of the entire process. When user is happy what he wants to tell us, he submit and than the show is happening. => We send a request to our api with the sent data => Then our API posts those data to the service API and if that request is processed, its status is saved into the global response object in express. And here I am not sure if this is a good approach. Anyway that status is saved on the vuex store object so we can manipulate with out front-end.


Hopefuly it's not hard to pick up. Enjoy!
