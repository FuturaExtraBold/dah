var jqProjectItems = $("#project-items");
var jqProjects;
var jqClientItems = $("#client-items");
var jsonData;
var hoverAnimationTime = 0.2;

// Load Site Data
function loadSiteData() {
  $.getJSON("cdn/json/project_data.json")
    .done(function(json) {
      jsonData = json;
      buildProjectItems(jsonData);
      buildClientItems(jsonData);
    })
    .fail(function(jqxhr, textStatus, error) {
      console.log("Request Failed: " + textStatus + ', ' + error);
    });
}

// Projects
function buildProjectItems(data) {
  var projectItems, compiledTemplate, html;
  projectItems = data.projects;
  compiledTemplate = Handlebars.templates["project-item"];
  html = compiledTemplate({
    items: projectItems
  });
  jqProjectItems.html(html);
  jqProjects = $(".project");
  var overs = $(".project-over");
  var titleContainers = $(".title");
  TweenMax.to(overs, 0, {
    alpha: 0
  });
  TweenMax.to(titleContainers, 0, {
    alpha: 0
  });
  jqProjects.on("mouseenter", ["over"], projectHover);
  jqProjects.on("mouseleave", ["out"], projectHover);
}

function projectHover(event) {
  var project, over, title, byline, isOn, delaySpeed;
  project = $(this);
  over = project.children(".project-over");
  title = over.children(".title-container").children(".title-text-container").children(".title");
  byline = over.children(".title-container").children(".title-text-container").children(".byline");
  if (event.data == "over") {
    isOn = 1;
    delaySpeed = 0;
  } else {
    isOn = 0;
    delaySpeed = 0.1;
  }
  TweenMax.to(over, hoverAnimationTime, {
    alpha: isOn,
    delay: delaySpeed
  });
  TweenMax.to(title, hoverAnimationTime, {
    alpha: isOn,
    delay: delaySpeed
  });
}

// Clients
function buildClientItems(data) {
  var clientItems, compiledTemplate, html;
  clientItems = data.clients;
  compiledTemplate = Handlebars.templates["client-item"];
  html = compiledTemplate({
    items: clientItems
  });
  jqClientItems.html(html);
}

// Document Ready
$(function() {
  loadSiteData();
});
