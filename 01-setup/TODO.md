# TODO

## 1. Setup

Install backbone and marionette with their dependencies using bower.

Check that libraries are correctly mounted in index.html.

## 2. Some scripting

### 2.1. Marionette Application

Instanciate a basic Marionette Application that will display the message 'Marionette application started' in console.

### 2.2 Router

Create a Backbone Router instance that will respond to the following routes :

 - inbox
 - compose
 - inbox/id

Test that it works by calling the url http://localhost/<hash> where hash is one of the registered route.

Hint: Do not forget to start your router and history!
Hint: start history when application start
Hint: use `debugger` in your function to test that route handler are triggered
Hint: you can use the console to trigger route change!

### 2.3 Start application on route change

Change the previous code to work differently. Suppose you have multiple module, each module being an application you don't want all your module to be fully instanciated at start. Lazy-loading your application might be a better way.

Which component event should you listen to ?

What's the problem with this approach ? Fix it.

### 2.4 Home route

The application should handle the home route, which is `/`.

Bind home route to `inbox`.

### 2.5 Cleanup index.html

Remove any non script tag in body and add a div with an id `container`.

```html
<div id="container" />
```

### 2.6 Display inbox view

#### 2.6.1 The collection

Given the array of following messages, create a Backbone collection

```js
{
  "messages": [{
    "id": "1fb3ce89-3d96-b346-3d05-c7789659271e",
    "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    "id": "25d86fb7-150b-2b76-f67e-6a186a2076f0",
    "content": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    "id": "2c41d4b1-d63a-236f-cea2-1f5b93f30d0a",
    "content": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  },
  {
    "id": "63e0683a-c066-ac80-53ee-53b9a695690e",
    "content": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  }
]}
```
The message list is available as a string. Add a script tag in `index.html` and add a variable `messages` that will contain the deserialized content of this string:

```text
"{"messages":[{"id":"1fb3ce89-3d96-b346-3d05-c7789659271e","text":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},{"id":"25d86fb7-150b-2b76-f67e-6a186a2076f0","content":"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},{"id":"2c41d4b1-d63a-236f-cea2-1f5b93f30d0a","content":"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."},{"id":"63e0683a-c066-ac80-53ee-53b9a695690e","content":"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}]}"
```

#### 2.6.2 The container

You need to keep a reference on the DOM element you will use to inject all the application interface, in other words, the view rendering.

You can use jQuery to ease the process.

#### 2.6.3 The inbox view

Create an `InboxView` which must extend a Backbone.View. As the view will be a list you should use an `ul` tag.

 * keep it simple for now and only render a string, like `lorem ipsum` to test the whole process,
 * you should change the `inbox` route handler to inject the view into the application container,
 * follow the Backbone convention about the view.render() which return `this`,
 * replace the `container` content using `$.fn.html()`.

#### 2.6.4 Add a link

You should add a link on any message to open the whole message in a new view. The link must follow the format of the message route handler, which is `#inbox/:mid`, where mid must be the `id` of the message.

### 2.7 Display the message

The message schema is now changed for :

```json
{
  "email": "string",
  "avatar": "url",
  "name": "string",
  "uid": "string (uuid)",
  "subject": "string",
  "body": "string",
  "sent": "date"
}
```

Inject some fake data.
```json
{"messages":[{"email":"Javier43@yahoo.com","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/supjoey/128.jpg","name":"Ruby Murazik","uid":"d1cbb11f-5004-4fb1-8133-966161e19c62","subject":"aut placeat numquam consequatur error voluptatem","sent":"2015-03-03T13:29:57.538Z","body":"dicta soluta ut non numquam\\nnihil aliquid consequuntur veritatis\\nqui inventore iure\\nfugit quia quis\\nqui delectus qui labore est commodi eum voluptates occaecati voluptatem"},{"email":"Carley57@yahoo.com","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/Elt_n/128.jpg","name":"Mohamed Flatley","uid":"7bc3d383-276b-41e0-a5b2-399b895b1dad","subject":"sed est praesentium","sent":"2015-05-19T09:22:55.876Z","body":"in facilis temporibus quia laboriosam\\nqui ea enim sit sed exercitationem veniam molestias sapiente architecto\\nconsequuntur totam doloribus\\naut optio tempora qui ipsum quo et ad consequuntur\\nnon quaerat sed iste quos ea assumenda"},{"email":"Virginie_Borer@hotmail.com","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/nickfratter/128.jpg","name":"Samson Volkman","uid":"0bf347ba-e6a1-40db-81fe-800b7d4c2ddc","subject":"recusandae excepturi et architecto qui omnis similique amet quas aliquam","sent":"2014-11-22T22:34:45.687Z","body":"nam ipsa illo est sed consequatur vero eaque\\nmolestias voluptatibus ratione\\naut aut fugiat laborum officiis\\nvoluptas qui exercitationem accusantium qui quas id consequatur\\nrerum ipsam est nihil\\nminima nisi impedit illum voluptatem"},{"email":"Eusebio.Terry@yahoo.com","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/rodnylobos/128.jpg","name":"Raheem Moore","uid":"7b9fd390-d7ea-47d4-8e0a-678587bd6d88","subject":"et repudiandae qui error","sent":"2015-03-14T14:30:17.993Z","body":"eum aut illum rerum nam corrupti exercitationem odio\\nad vel sit molestias\\nconsequatur ex autem quia"},{"email":"Damion.Goyette@yahoo.com","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/xalionmalik/128.jpg","name":"Christophe Rosenbaum","uid":"24089683-04fb-48ac-8562-60029f3c4d1a","subject":"illo doloribus ex enim id quia sit tempora cupiditate animi","sent":"2015-02-22T09:53:37.900Z","body":"qui qui minus iure maxime rem corporis illum\\nut et quo cum blanditiis tempore quos\\neos quia omnis\\nhic tenetur ut nihil"},{"email":"Laury8@yahoo.com","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/kikillo/128.jpg","name":"Myles Runolfsson","uid":"9cf375d4-c2a0-42fd-9db3-08e3049a3559","subject":"odit minus quia sapiente nisi temporibus id neque saepe","sent":"2015-05-11T17:56:51.205Z","body":"vel officiis nobis aut quis\\nqui cumque sit ut voluptas aut\\nrepudiandae mollitia occaecati omnis rerum ab\\nvelit quae culpa\\nvoluptatem quibusdam quae rerum"},{"email":"Dalton.Fisher2@yahoo.com","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/pifagor/128.jpg","name":"Dr. Royal Quigley","uid":"a84d215c-41b6-4571-b5c9-dcc5219cbaf2","subject":"distinctio deleniti corrupti similique quae quidem dicta rerum odio","sent":"2015-07-28T10:54:49.678Z","body":"doloremque numquam eius et unde eos blanditiis illum\\nquos iure quam autem nam ab explicabo voluptatem voluptas consequuntur\\nsit distinctio molestiae eaque et quia reprehenderit laborum"}]}
```

**Note** The message body linefeed is escaped as `JSON.parse` function does not support `\n`.

#### 2.7.1 CSS Framework

Install [`ratchet`](http://goratchet.com)


#### 2.7.2 Adapt the inbox view

Inbox should not display the avatar, subject and body extract, limited to 100 characters.

You have the following template.

```html
<ul class="table-view">
  <li class="table-view-cell media">
    <a class="navigate-right" href="[HREF]">
      <img class="media-object pull-left" src="[AVATAR]">
      <div class="media-body">
        [SUBJECT]
        <p>[BODY EXCERPT]</p>
      </div>
    </a>
  </li>
</ul>
```

Do not forget the className on `ul` element.

#### 2.7.3 Link to model

How to use the model id ? If the model had a `id` attributes it would be better ?

How could it be adapted ?

#### 2.7.4 The message view

Create a new view, `MessageView`, which is a `Backbone.View` and that will display the content of the selected message.

```html
<form class="input-group">
  <div class="input-row">
    <label>From</label>
    <input type="text" readonly>
  </div>
  <div class="input-row">
    <label>Email</label>
    <input type="email" readonly>
  </div>
  <div class="input-row">
    <label>Date</label>
    <input type="text" readonly>
  </div>
  <div class="input-row">
    <label>Subject</label>
    <input type="text" readonly>
  </div>
  <div class="input-row">
    <label>Body</label>
    <textarea rows="5" readonly></textarea>
  </div>
</form>
```

Use a `script` tag as a template loader.

```html
<script type="template/form" id="message-tpl"></script>
```

You will be able to access the template using the DOM id `message-tpl`, and `_.template`.

```js
_.template($('#message-tpl').html())
```

#### 2.7.5 Adapt the route handler

You should be able to modify the route handler to show the message.

#### 2.7.6 Adapt the template

We want the template to display our data. We need to do some string interpolation, using underscore/lodash templating function.


#### 2.7.7 Add a template for the inbox

Remove the string interpolation from the `InboxView` render method.

Hint: Use a template for an item of the inbox!
Hint: beware of the context issue.

### 2.8 Form view

#### 2.8.1 Use a form template

Only email, subject and form elements are needed.

#### 2.8.2 Display the form

#### 2.8.3 Add form buttons

 * `back button` which behave like back button
 * `submit button` which add the form to the collection.

#### 2.8.4 Use Backbone Syphon

Backbone.Syphon is a form serializer and is a great tool to serialize form as an object

#### 2.8.5 Save

If the form is valid, add it to the collection.
