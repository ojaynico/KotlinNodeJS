if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'KotlinJS'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'KotlinJS'.");
}
var KotlinJS = function (_, Kotlin) {
  'use strict';
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  function main(args) {
    println('Nico');
  }
  _.main_kand9s$ = main;
  main([]);
  Kotlin.defineModule('KotlinJS', _);
  return _;
}(typeof KotlinJS === 'undefined' ? {} : KotlinJS, kotlin);
