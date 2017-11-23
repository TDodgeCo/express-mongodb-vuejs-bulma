# todo-express-mvc-api
A RESTful todo API built with express and mongoose using the MVC architecture. I use this for testing and learning frontend technologies. 

## Assumptions
mongodb is installed locally

## Installation

Clone this repo

cd into the directory

run `npm install`

run `npm install -g nodemon`

run `cd frontend && npm install`

run `cd .. && nodemon server.js`

## State Management and API calls:
All API calls are made through the vuex store. State is derived from the Home.vue component, and passed down as props to a few child components.

## Application structure:

### App.vue
Holds the router-view

### Home.vue
Home component for the app.Houses the header, the main TaskList.vue component and the CreateTask.vue component. Also responsible for setting the initial state of the application through it’s sole mounted function.

### CreateTask.vue
A modal form that allows the user to create a new task. Emits the closeCreateModal function to Home.vue.

### TaskList.vue
Displays the actual task list, pulled from the vuex store as a computed property: mapState([‘tasks’]). Houses the UpdateTodo.vue component which takes 3 props: taskId, title and description.

### UpdateTodo.vue
Houses the Update and Delete functionality of the app. Allows for completing tasks, updating existing task fields, and soft deleting the task. This is also the parent component for UpdateTask.vue, which takes the same 3 props.

### UpdateTask.vue
Creates a modal for updating the contents of an existing Todo Task. Takes the same 3 props as UpdateTodo.vue. Emits the closeModal functionality to UpdateTodo.vue.

