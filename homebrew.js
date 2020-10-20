import homebrewItemSheet from "./module/sheets/homebrewItemSheet.js";

Hooks.once("init", function(){
    console.log("hombrew | Initialising Homebrew System");

    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("homebrew", homebrewItemSheet, {makeDefault: true});
});