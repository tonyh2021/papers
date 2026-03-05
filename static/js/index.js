Handlebars.registerHelper("eq", function (a, b) {
  return a === b;
});
Handlebars.registerHelper("hasItems", function (arr) {
  return arr && arr.length > 0;
});
Handlebars.registerHelper("hasEqualContribution", function (authors) {
  return authors && authors.some((a) => a.equal_contribution);
});

$(document).ready(function () {
  // Get the template source
  const source = $("#paper-template").html();

  // Compile the template
  const template = Handlebars.compile(source);

  // Render the template with the paper data
  const html = template({ paper: paper });

  // Insert the rendered HTML into the page
  $("#content").html(html);

  // Initialize navbar burger functionality after rendering
  $(".navbar-burger").click(function () {
    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");
  });

  document
    .querySelector('meta[name="description"]')
    .setAttribute("content", paper.metadata.description);
  document
    .querySelector('meta[name="keywords"]')
    .setAttribute("content", paper.metadata.keywords);
  document.title = paper.metadata.title;
});
