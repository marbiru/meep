// This makes the 'Mee' button print 'Mee's on screen

document.getElementById("mee_button").onclick = print_mee;

function print_mee() {
    document.getElementById("input").innerHTML = document.getElementById("input").innerHTML + ' Mee';
}

// This makes the 'Meep' button print 'Meep' on screen

document.getElementById("meep_button").onclick = print_meep;

function print_meep() {
    document.getElementById("input").innerHTML = document.getElementById("input").innerHTML + ' Meep';
}

// This makes the 'Clear' button, which resests the on-screen mee(p)-sentence

document.getElementById("clear_button").onclick = clear_meeps;

function clear_meeps() {
    document.getElementById("input").innerHTML = '&zwnj;'
}

// a list of english-language sentences 

var translation_list = [
"(a meepless silence)",
"Rosebud....",
"Hello, gorgeous.",
"Well, nobody's perfect.",
"You talkin' to me?",
"Here's looking at you, kid.",
"There's a snake in my boot!",
"A boy's best friend is his mother.",
"Frankly, my dear, I don't give a damn.",
"So I told her, <i>Meep? Mee Mee Mee Meep!</i>",
"This town ain't big enough for the two of us.",
"Louis, I think this is the beginning of a beautiful friendship.",
"All those moments will be lost in time... like tears in rain.",
"Life is like a box of chocolates; never know what you're gonna get.",
"Don't let anyone ever make you feel like you don't deserve what you want."
];

// This initialises the easter-egg counter. Every X translations the translator does something "special", like translating into Beeps instead of into English

var easter_eggs = 0

// This makes the 'Translate' button print an English-language translation of the 'input' field

document.getElementById("translate_button").onclick = print_translation;

function print_translation() {
  //increments the easter_egg counter. Every time someone clicks "translate" the easter_egg counter goes up by one, so that we can make it happen that every X translations the translator does something cool/interesting/different from the norm.
  easter_eggs = easter_eggs + 1;
  var meep_count = document.getElementById("input").innerHTML.split(" ").length - 1;
  //if the input happens to be zero-length then the easter eggs (which manipulate the input text in various ways) wouldn't actually work. Perhaps this can be improved somehow later.
  if (meep_count === 0) {
      document.getElementById("translation").innerHTML = "(a meepless silence)";
  } else if (easter_eggs == 3) {
      //this easter egg just gives you back what you put in but with Meeps turned into Beeps and Mees into Bees
      document.getElementById("translation").innerHTML = document.getElementById("input").innerHTML.replace(/Meep/g, 'Beep').replace(/Mee/g, 'Bee');
  } else if (easter_eggs == 7) {
    //this easter egg just gives back what you put in but with the Mees and Meeps reversed. So e.g. "Meep Mee Mee Meep" would turn into "Mee Meep Meep Mee". Amusingly, the code needs a "placeholder" thingumajig because if you just tell it to replace Meep --> Mee and Mee --> Meep then EVERYTHING ends up as Meep... because all the Meeps get changed to Mees, first, and then everything gets turned back into Meeps! Perhaps there is a better way to write this code so that all substitutions happen simultaneously but I don't know how to do that.
      document.getElementById("translation").innerHTML = document.getElementById("input").innerHTML.replace(/Meep/g, 'Placeholder').replace(/Mee/g, 'Meep').replace(/Placeholder/g, 'Mee');
  // check that input string is not longer than the longest English sentence in our dictionary. If the input string is short enough that we have a suitable translation, just do that translation.
  } else if (meep_count < translation_list.length) {
      document.getElementById("translation").innerHTML = "&nbsp;" + translation_list[meep_count];
  } else {
  // if input string is too long then we just return an error message basically saying "woah, your string is too long". Hopefully the user will then "clear meeps" before continuing
        document.getElementById("translation").innerHTML = "&nbsp;" + "Woah woah woah, that's a bit meeping much.";
      }
  }
