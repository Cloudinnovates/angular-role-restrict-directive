# Role Restrict Directive
A directive for angular 1 and angular 2 to restrict content based on user role

## Running the Example
First of all, install all dependencies
```javascript
npm install -g angular-cli && npm install
```
Running the example by typing
```javascript
npm start
```

## Usage
After the proper setup add the directive to any DOM element with the 'allow' attribute.
```html
<p role-restrict allow="role1 role2 role3">only allowed roles will see this paragraph</p>
```