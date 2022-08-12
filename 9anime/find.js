import { loadFile, exit } from "std";

let secret0 = "";
let secret1 = "";
const script = loadFile("all.js");
const prefix = loadFile("prefix.js")
var newscript = prefix + script;
const fn_regex = /or(?=:function\(.*?\) {var \w=.*?return .;})/gm
let fn_name = script.match(fn_regex);
const regex = RegExp(String.raw`(?<=this\["${fn_name}"]\().+?(?=,)`, "gm");
let res = [...script.matchAll(regex)];
if (res.length !== 2) {
    console.log("didn't find two matches");
    exit(1);
}
for (var index of [1,0]) {
    let match = res[index][0];
    let varnames = match.split("+");
    for (var varnameindex = 0; varnameindex < varnames.length; varnameindex++) {
        let varname = varnames[varnameindex];
        let search = `${varname}=`;
        // variables are declared on line 2
        let line2index = script.indexOf("\n") + prefix.length;
        let line2 = newscript.substring(line2index + 1);
        let i = line2index + line2.indexOf(search) + search.length;
        let after = newscript.substring(i + 1);
        let j = after.indexOf(";") + i + 1;
        let before = newscript.substring(0, j + 1);
        let after_semicolon = newscript.substring(j + 1);
        newscript = before + `secret${index}=${res[index][0]};` + after_semicolon;
    }
};
try { eval(newscript); } catch(e) {}
console.log("secret 0:", secret0);
console.log("secret 1:", secret1);
let return_object = {cipher: secret0, decipher: secret1};
return_object;
