const helpTable = [
  {
    color: "white",
    function: "cl.log(message)",
    description: "Prints white text",
  },
  {
    color: "red",
    function: "cl.error(message)",
    description: "Prints red text",
  },
  {
    color: "yellow",
    function: "cl.warn(message)",
    description: "Prints yellow text",
  },
  {
    color: "blue",
    function: "cl.blue(message)",
    description: "Prints blue text",
  },
  {
    color: "green",
    function: "cl.succeess(message)",
    description: "Prints green text",
  },
  {
    color: "bgWhite",
    function: "cl.bgWhite(message)",
    description: "Prints white background",
  },
  {
    color: "bgBlack",
    function: "cl.bgBlack(message)",
    description: "Prints black background",
  },
  {
    color: "bgRed",
    function: "cl.bgRed(message)",
    description: "Prints red background",
  },
  {
    color: "bgGreen",
    function: "cl.bgGreen(message)",
    description: "Prints green background",
  },
  {
    color: "bgBlue",
    function: "cl.bgBlue(message)",
    description: "Prints blue background",
  },
  {
    color: "bgYellow",
    function: "cl.bgYellow(message)",
    description: "Prints yellow background",
  },
  {
    color: "bgCyan",
    function: "cl.bgCyan(message)",
    description: "Prints cyan background",
  },
  {
    color: "bgGray",
    function: "cl.bgGray(message)",
    description: "Prints gray background",
  },
  {
    color: "bgMagenta",
    function: "cl.bgMagenta(message)",
    description: "Prints magenta background",
  },
  {
    color: "highlight",
    function: "cl.highlight(message)",
    description: "Prints yellow background",
  },
  {
    color: "gray",
    function: "cl.gray(message)",
    description: "Prints gray text",
  },
  {
    color: "yellow",
    function: "cl.yellow(message)",
    description: "Prints yellow text",
  },
  {
    color: "green",
    function: "cl.green(message)",
    description: "Prints green text",
  },
  {
    color: "blue",
    function: "cl.blue(message)",
    description: "Prints blue text",
  },
  { color: "red", function: "cl.red(message)", description: "Prints red text" },
  {
    color: "magenta",
    function: "cl.magenta(message)",
    description: "Prints magenta text",
  },
  {
    color: "cyan",
    function: "cl.cyan(message)",
    description: "Prints cyan text",
  },
  {
    color: "white",
    function: "cl.white(message)",
    description: "Prints white text",
  },
  {
    color: "purple",
    function: "cl.purple(message)",
    description: "Prints purple text",
  },
  {
    color: "random",
    function: "cl.random(message)",
    description: "Prints random color text",
  },
  {
    color: "trace",
    function: "cl.trace(message)",
    description: "Prints trace",
  },
  {
    color: "table",
    function: "cl.table(table)",
    description: "Prints table",
  },
  {
    color: "count",
    function: "cl.count()",
    description:
      "Prints the number of times that this particular call to count() has been called",
  },
  {
    color: "countReset",
    function: "cl.countReset()",
    description: "Prints countReset",
  },
  { color: "group", function: "cl.group", description: "Prints group" },
  {
    color: "groupCollapsed",
    function: "cl.groupCollapsed",
    description: "Prints groupCollapsed",
  },
  { color: "clear", function: "cl.clear()", description: "Clear console" },
];

const COLORS = [
  "\x1b[31m",
  "\x1b[32m",
  "\x1b[34m",
  "\x1b[33m",
  "\x1b[35m",
  "\x1b[36m",
  "\x1b[90m",
  "\x1b[37m",
];

function log(message: string) {
  console.log(message);
}

function error(message: string) {
  red("📕 " + message);
}

function warn(message: string) {
  yellow("📙 " + message);
}

function info(message: string) {
  blue("📘 " + message);
}

function success(message: string) {
  green("📗 " + message);
}

function table(message: Array<any> | Object | string) {
  console.table(message);
}

function trace(message: string) {
  console.trace(message);
}

function clear() {
  console.clear();
}

function count(message: string) {
  console.count(message);
}

function countReset(message: string) {
  console.countReset(message);
}

function group(message: string) {
  console.group(message);
}

function groupCollapsed(message: string) {
  console.groupCollapsed(message);
}

function red(message: string) {
  console.log("\x1b[31m%s\x1b[0m", message);
}

function green(message: string) {
  console.log("\x1b[32m%s\x1b[0m", message);
}

function blue(message: string) {
  console.log("\x1b[34m%s\x1b[0m", message);
}

function yellow(message: string) {
  console.log("\x1b[33m%s\x1b[0m", message);
}

function purple(message: string) {
  console.log("\x1b[35m%s\x1b[0m", message);
}

function magenta(message: string) {
  console.log("\x1b[35m%s\x1b[0m", message);
}

function cyan(message: string) {
  console.log("\x1b[36m%s\x1b[0m", message);
}

function gray(message: string) {
  console.log("\x1b[90m%s\x1b[0m", message);
}

function white(message: string) {
  console.log("\x1b[37m%s\x1b[0m", message);
}

function bgBlack(message: string) {
  console.log("\x1b[40m%s\x1b[0m", message);
}

function bgRed(message: string) {
  console.log("\x1b[41m%s\x1b[0m", message);
}

function bgGreen(message: string) {
  console.log("\x1b[42m%s\x1b[0m", message);
}

function bgBlue(message: string) {
  console.log("\x1b[44m%s\x1b[0m", message);
}

function bgYellow(message: string) {
  console.log("\x1b[43m%s\x1b[0m", message);
}

function bgCyan(message: string) {
  console.log("\x1b[46m%s\x1b[0m", message);
}

function bgGray(message: string) {
  console.log("\x1b[100m%s\x1b[0m", message);
}

function bgWhite(message: string) {
  console.log("\x1b[47m%s\x1b[0m", message);
}

function bgMagenta(message: string) {
  console.log("\x1b[45m%s\x1b[0m", message);
}

function highlight(message: string) {
  bgYellow(message);
}

function random(message: string) {
  const resetColor = "\x1b[0m";
  const randomMessage = message
    .split("")
    .map((letter) => {
      const randomColor = COLORS[Math.floor(Math.random() * COLORS.length)];
      return randomColor + letter + resetColor;
    })
    .join("");
  console.log(randomMessage);
}

function help() {
  console.table(helpTable);
}

export {
  log,
  error,
  warn,
  info,
  success,
  table,
  trace,
  clear,
  count,
  countReset,
  group,
  groupCollapsed,
  red,
  green,
  blue,
  yellow,
  purple,
  magenta,
  cyan,
  gray,
  white,
  highlight,
  bgBlack,
  bgRed,
  bgGreen,
  bgBlue,
  bgYellow,
  bgCyan,
  bgGray,
  bgWhite,
  bgMagenta,
  help,
  random,
};
