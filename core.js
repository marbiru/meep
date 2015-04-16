// Re-writing in jQuery

// This makes the 'Mee' button print 'Mee's on screen

$(function() {
    $("#mee_button").click(function(){
        $("#input").append(' Mee');
    });
});

// This makes the 'Meep' button print 'Meep' on screen

$(function() {
    $("#meep_button").click(function(){
        $("#input").append(' Meep');
    });
});

// This makes the 'Clear' button, which resests the on-screen mee(p)-sentence

$(function() {
    $("#clear_button").click(function(){
        $("#input").html('&zwnj;');
    });
});

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

// This initialises the translation counter. Every X translations the translator does something "special", like translating into Beeps instead of into English

var turn_count = 0

// This makes the 'Translate' button print an English-language translation of the 'input' field

document.getElementById("translate_button").onclick = print_translation;

 //if the input happens to be zero-length then the easter eggs (which manipulate the input text in various ways) wouldn't actually work. Perhaps this can be improved somehow later.
function zero_meeps(){
  document.getElementById("translation").innerHTML = "(a meepless silence)";
}

//this easter egg just gives you back what you put in but with Meeps turned into Beeps and Mees into Bees
function first_easter_egg(){
  document.getElementById("translation").innerHTML = document.getElementById("input").innerHTML.replace(/Meep/g, 'Beep').replace(/Mee/g, 'Bee');
}

function second_easter_egg(){
//this easter egg just gives back what you put in but with the Mees and Meeps reversed. So e.g. "Meep Mee Mee Meep" would turn into "Mee Meep Meep Mee". Amusingly, the code needs a "placeholder" thingumajig because if you just tell it to replace Meep --> Mee and Mee --> Meep then EVERYTHING ends up as Meep... because all the Meeps get changed to Mees, first, and then everything gets turned back into Meeps! Perhaps there is a better way to write this code so that all substitutions happen simultaneously but I don't know how to do that.
      document.getElementById("translation").innerHTML = document.getElementById("input").innerHTML.replace(/Meep/g, 'Placeholder').replace(/Mee/g, 'Meep').replace(/Placeholder/g, 'Mee');
}

// this function runs any applicable easter eggs
function run_easter_eggs(){
  if (turn_count === 3) {
    first_easter_egg();
  } else if (turn_count === 7) {
    second_easter_egg();
  } else {
    return;
  }  
}

// these functions handle the "normal" translation cases

function right_length(){
  var meep_count = document.getElementById("input").innerHTML.split(" ").length - 1;
  document.getElementById("translation").innerHTML = translation_list[meep_count];
}

function too_long(){
  // if input string is too long then we just return an error message basically saying "woah, your string is too long". Hopefully the user will then "clear meeps" before continuing
  document.getElementById("translation").innerHTML = "Woah woah woah, that's a bit meeping much.";  
}

function normal_translation(){
  var meep_count = document.getElementById("input").innerHTML.split(" ").length - 1;
  if (meep_count < translation_list.length) {
     right_length();
  } else {
     too_long();
    }
}

function print_translation() {
  var meep_count = document.getElementById("input").innerHTML.split(" ").length - 1;
  turn_count = turn_count + 1;
  //increments the easter_egg counter. Every time someone clicks "translate" the easter_egg counter goes up by one, so that we can make it happen that every X translations the translator does something cool/interesting/different from the norm.
  if (meep_count === 0) {
    zero_meeps();
  } else if (turn_count === 3 || turn_count === 7) {
    run_easter_eggs();
  // check that input string is not longer than the longest English sentence in our dictionary. If the input string is short enough that we have a suitable translation, just do that translation.
  } else  {
   normal_translation();
      }
  }