const xml2js = require("xml2js");
// xml to object
const parseString = xml2js.parseString;
const xml = "<?xml version='' encoding='utf-8' ?><vxml><form name='11'><block><s>this is a sentence</s></block></form></vxml>";
parseString(xml, function (err, result) {
    console.log(JSON.stringify(result));
});
// object to xml
const Builder = xml2js.Builder;
const obj = {
    vxml: {
        form: [
            {
                $: {name: 11},
                block: [
                    {s: ["this is a sentence"]}
                ]
            }
        ]
    }
};
const myBuilder = new Builder();
const toxml = myBuilder.buildObject(obj);
console.log(toxml);
