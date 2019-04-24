(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['client-item'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n<div class=\"client col-lg-2 col-md-2 col-sm-3 col-xs-4\">\n	<img class=\"img-responsive\" src=\"cdn/img/clients/";
  if (helper = helpers.img) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.img); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" alt=\"";
  if (helper = helpers.alt) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.alt); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" />\n</div>\n";
  return buffer;
  }

  stack1 = helpers.each.call(depth0, (depth0 && depth0.items), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  });
templates['project-detail'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n			";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.vimeoURLs), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n		";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "";
  buffer += "\n			<div class=\"row video-item\">\n				<div class=\"video-container\">\n					<iframe src=\"//player.vimeo.com/video/"
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "?title=0&amp;byline=0\" width=\"1140\" height=\"641\" frameborder=\"0\" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>\n				</div>\n			</div>\n			";
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n			";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.youtubeURLs), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n		";
  return buffer;
  }
function program5(depth0,data) {
  
  var buffer = "";
  buffer += "\n			<div class=\"row video-item\">\n				<div class=\"video-container\">\n					<iframe width=\"1140\" height=\"641\" src=\"//www.youtube.com/embed/"
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "\" frameborder=\"0\" allowfullscreen></iframe>\n				</div>\n			</div>\n			";
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n					";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.singleImages), {hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n				";
  return buffer;
  }
function program8(depth0,data) {
  
  var buffer = "";
  buffer += "\n					<div class=\"gallery-image col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n						<img class=\"img-responsive\" src=\"cdn/img/slides/"
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "\" />\n					</div>\n					";
  return buffer;
  }

function program10(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n					";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.tiledImages), {hash:{},inverse:self.noop,fn:self.program(11, program11, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n				";
  return buffer;
  }
function program11(depth0,data) {
  
  var buffer = "";
  buffer += "\n					<div class=\"gallery-image col-lg-6 col-md-6 col-sm-6 col-xs-12\">\n						<img class=\"img-responsive\" src=\"cdn/img/slides/"
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "\" />\n					</div>\n					";
  return buffer;
  }

  buffer += "<div id=\"project-title\">\n	<div class=\"container\">\n		<h1 id=\"title\">";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h1>\n		<div class=\"info visible-lg visible-md\">\n			<h4>Client:&nbsp;";
  if (helper = helpers.client) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.client); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "&nbsp;<span class=\"vert-pipe\">|</span>&nbsp;Role:&nbsp;";
  if (helper = helpers.roles) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.roles); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "&nbsp;<span class=\"vert-pipe\">|</span>&nbsp;Media:&nbsp;";
  if (helper = helpers.media) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.media); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h4>\n		</div>\n		<div class=\"info visible-sm\">\n			<h5>Client:&nbsp;";
  if (helper = helpers.client) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.client); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "&nbsp;<span class=\"vert-pipe\">|</span>&nbsp;Role:&nbsp;";
  if (helper = helpers.roles) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.roles); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "&nbsp;<span class=\"vert-pipe\">|</span>&nbsp;Media:&nbsp;";
  if (helper = helpers.media) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.media); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h5>\n		</div>\n		<div class=\"info visible-xs\">\n			<h6>Client:&nbsp;";
  if (helper = helpers.client) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.client); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h6>\n			<h6>Media:&nbsp;";
  if (helper = helpers.media) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.media); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h6>\n			<h6>Role:&nbsp;";
  if (helper = helpers.roles) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.roles); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h6>			\n		</div>\n	</div>\n</div>\n<div id=\"project-gallery\">\n	<div class=\"container\">\n		";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.vimeoURLs), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n		";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.youtubeURLs), {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n		<div class=\"row\">\n			<div id=\"gallery\">\n				";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.singleImages), {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n				";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.tiledImages), {hash:{},inverse:self.noop,fn:self.program(10, program10, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n			</div>\n		</div>\n	</div>\n</div>\n<div id=\"caption\">\n	<div class=\"container\">\n		<h3 class=\"visible-lg visible-md\">";
  if (helper = helpers.blurb) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.blurb); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h3>\n		<h4 class=\"visible-sm\">";
  if (helper = helpers.blurb) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.blurb); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h4>\n		<h5 class=\"visible-xs\">";
  if (helper = helpers.blurb) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.blurb); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h5>\n	</div>\n</div>";
  return buffer;
  });
templates['project-item'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n<a href=\"projects/";
  if (helper = helpers.pretty) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.pretty); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n<div class=\"project col-lg-3 col-md-3 col-sm-4 col-xs-6\">\n	<img class=\"img-responsive\" src=\"cdn/img/thumbs/";
  if (helper = helpers.thumb) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.thumb); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" />\n	<div class=\"project-over\">\n		<div class=\"title-container\">\n			<div class=\"title-text-container\">\n				<h3 class='title'>";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h3>\n				<h4 class='byline'>";
  if (helper = helpers.byline) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.byline); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h4>\n			</div>\n		</div>\n	</div>\n</div>\n</a>\n";
  return buffer;
  }

  stack1 = helpers.each.call(depth0, (depth0 && depth0.items), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  });
})();