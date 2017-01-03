/**
 * Created by jedrzej on 02.01.17.
 */
var NEWLINE = "\n";
function eachWithIdx(iterable, f) { var i = iterable.iterator(); var idx = 0; while (i.hasNext()) f(i.next(), idx++); }
function mapEach(iterable, f) { var vs = []; eachWithIdx(iterable, function (i) { vs.push(f(i));}); return vs; }
function output() { for (var i = 0; i < arguments.length; i++) { OUT.append(arguments[i]); } }

output("[", NEWLINE);

eachWithIdx(ROWS, function(row) {
    output("[", NEWLINE);
    eachWithIdx(COLUMNS, function(column) {
        output("'", column.name(), "' => '");
        output(FORMATTER.format(row, column));
        output("',", NEWLINE);
    });

    output("],", NEWLINE);
});

output("];   ", NEWLINE);
