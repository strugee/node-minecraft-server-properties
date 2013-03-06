# node-minecraft-server-properties

An API for parsing and stringifying the Minecraft server.properties file format

## Installation

    npm install --save minecraft-server-properties

## Usage

    var properties = require("minecraft-server-properties");

**properties.parse(input)**

 * **input**: `String` The contents of a server.properties file
 * **RETURNS**: `Object` Hash of properties

**properties.stringify(input)**

 * **input**: `Object` Hash of properties
 * **RETURNS**: `String` String to be written as a server.properties file

## Developers

Install dependencies

    npm install

Run tests

    ./node_modules/.bin/mocha

Submit patches as Github PRs
