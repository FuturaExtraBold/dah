var jqDetails = $("#project-detail");

// Load Site Data
function loadSiteData() {
	$.getJSON("cdn/json/project_data.json")
	.done(function(json) {
		buildProjectDetail(json);
	})
	.fail(function(jqxhr, textStatus, error) {
		console.log("Request Failed: " + textStatus + ', ' + error);
	});
}

// Build Project Detail
function buildProjectDetail(data) {
	var currentProject, i, projects, prettyName;
	projects = data.projects;
	for (i in projects) {
		prettyName = projects[i].pretty;
		if (projectID === prettyName) {
			currentProject = projects[i];
			document.title = "David A. Hays Portfolio | " + currentProject.title;
			break;
		}
	}
	compiledTemplate = Handlebars.templates["project-detail"];
	html = compiledTemplate(currentProject);
	jqDetails.html(html);
}

// Document Ready
$(function() {
	loadSiteData();
});
