const say = new Map();

say.set("dog", "woof");
say.set("cat", "meow");

for (const [key] of say){
    console.log(`${key} goes ${key}`);
}

console.log(say.get("dog"));