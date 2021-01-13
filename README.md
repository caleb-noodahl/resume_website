# Resume Website

Hey thanks for checking out my github!

This website was a day-project when faced with the realization that I haven't updated my resume in a while and I hate manually modifiying .pdf's.

You can generate your own version with modifications to the configuration file located in : ```webapp\app\config.json```.

## build instructions

_local example:_

Step #1 : Regenerate the js bundle (assumes [browserify](http://browserify.org/) is installed)

```shell

cd C:\Code\resume_website\webapp\app
browserify main.js -o C:\Code\resume_website\webapp\public\src\js\bundle.js

```

Step #2 : Deployment (assumes you've got a [firebase](https://firebase.google.com/) account setup)

```shell
cd C:\Code\resume_website\webapp
firebase deploy

=== Deploying to 'calebwilliams-resume'...

i  deploying hosting
i  hosting[calebwilliams-resume]: beginning deploy...
i  hosting[calebwilliams-resume]: found 3 files in public
+  hosting[calebwilliams-resume]: file upload complete
i  hosting[calebwilliams-resume]: finalizing version...
+  hosting[calebwilliams-resume]: version finalized
i  hosting[calebwilliams-resume]: releasing new version...
+  hosting[calebwilliams-resume]: release complete

+  Deploy complete!

Project Console: https://console.firebase.google.com/project/calebwilliams-resume/overview
Hosting URL: https://calebwilliams-resume.web.app
```

And thats about it! You can observe your changes @ ```webapp\public\index.html```
