function diff_shirt(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "I love TypeScript"; }
    console.log("Shirt size: " + size + " Message: " + message);
}
diff_shirt();
diff_shirt("Medium");
diff_shirt("Small", "I Love JavaScript");
