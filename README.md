# webcomponent-redux

Basic app using **web components** and **redux**.
Following a tutorial to learn.

Dependencies:
* Browser-sync (watch changes)
* Redux (control state)
* Snowpack (download js dependencies)
* Lit-html (render a template)
* Google Redux Devtool (show state in browser)

Run app: 

`browser-sync start --server src --files src`

Run app as SPA, add to command: `--single=true`

Run tests:

`browser-sync src -f 'src' 'test'  -b 'google chrome' --index 'test.html' --no-notify`