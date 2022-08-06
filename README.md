# Repo for scraping anime websites

## Prerequisites

you need quickjs to run the javascript code.  

just execute `./install_quickjs.sh`, after the install you should have the `qjs` command available  

q: why quickjs? a: because aniyomi extensions can use quickjs

## 9anime

run `get_scripts.sh` to download the latest `all.js` file from 9anime.  

then, run `qjs find.js` and it should display two strings, the first one is used for "encoding", the second one for "decoding".  

q: how does it work? a: we use a regex to find the variable names, modify the js file to save the variables, and then execute the script with some "dummy code" at the top (`prefix.js`) to make sure it runs until it is done initializing the variables.  

THIS WILL PROBABLY BREAK SOON, MY REGEX MIGHT ALSO BE INVALID FOR A FUTURE VERSION OF `all.js`!!!  

kthxbye

## License

    Copyright (C) 2022 jmir1

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.
