function parseValue(val) {
    if (val === "") return null;

    try {
        return JSON.parse(val);
    } catch (e) {
        // do nothing, this is just a short way to extract values like:
        // true, false, [Numbers], etc.
        return val;
    }
}

exports.parse = function (input) {
    var output = {};

    input.split(/[\r\n]+/g).forEach(function (line) {
        if (line[0] === "#" || line.indexOf("=") < 0) return; // just a comment

        var parts = line.split("="),
            key   = parts[0].trim(),
            val   = parts[1].trim();

        if (!key) return;

        output[key] = parseValue(val);
    });

    return output;
};

function stringifyValue(val) {
    var type = typeof val;

    if (val === null) {
        return "";
    } else if (type === "boolean" || type === "number") {
        return JSON.stringify(val);
    } else {
        return val;
    }
}

exports.stringify = function (input) {
    var output = [], key;

    for (key in input) {
        if (input.hasOwnProperty(key)) {
            output.push(key + "=" + stringifyValue(input[key]));
        }
    }

    return output.join("\n");
};
