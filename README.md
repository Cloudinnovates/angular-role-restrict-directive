# angular role restrict Directive
A directive for angular 1 and angular 2 to restrict content based on user role

## Using the Directive

### angular 1
Inside the angular1 folder, copy the file role-restrict.js into your project. 
the role-restrict.js file injects the auth-service (check the auth-service.js file). 
You can replace the auth-service service with your own, or build on top of it.

### angular 2
Inside the angular2 folder, copy the file role-restrict.ts into your project. 
the role-restrict.ts file injects the auth-service in the constructor (check the auth-service.ts file). 
You can replace auth-service service with your own, or build on top of it.

After the proper setup add the directive to any DOM element with the 'allow' attribute.
```html
<p role-restrict allow="role1 role2 role3">only allowed roles will see this paragraph</p>
```