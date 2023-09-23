# Take-home challenge

A web application to search and display movie information

## Installation

Use the package manager [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) to install.

```bash
npm install
```

## Setup
Create a **.env** file at the root of the project and add your "The Movie DB" and assign it your API Read Access Token to the **TMDB_TOKEN** variable:

```bash
TMDB_TOKEN="some_dummy_token"
```

## Usage

To execute run:

```bash
npm run start
```

And then open the loopback address shown in the output in the browser.
For example, if the output looks like:
```

> react-takehome-ts@1.0.0 start
> webpack serve

<i> [webpack-dev-server] Project is running at:
<i> [webpack-dev-server] Loopback: http://localhost:8081/
...
```
Open __http://localhost:8081/__ in your browser