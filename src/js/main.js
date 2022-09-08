var reportsWidget = {
  options: {
    containerSelector: ".reports",
    template:
      "{{#.}}" +
      '<article class="reports_item">' +
      '<a href="{{cover}}" target="_blank">' +
      '<img class="reports_cover" src="{{cover}}" alt="{{title}} Cover"/>' +
      "</a>" +
      '<footer class="reports_docs">' +
      "{{#documents}}" +
      '<div class="reports_inline">' +
      '<h3 class="reports_title">' +
      '<a href="{{url}}" target="_blank">{{title}}</a>' +
      "</h3>" +
      '<h3 class="reports_file">&nbsp({{ file_size}} {{file_type}})' +
      "</h3>" +
      "</div>" +
      "{{/documents}}" +
      "</footer>" +
      "</article>" +
      "{{/.}}"
  },

  init: function() {
    this.renderReports(reportData || [])
  },

  renderReports: function(reports) {
    var inst = this,
      options = inst.options

    $(options.containerSelector).html(
      Mustache.render(options.template, reports)
    )
  }
}

reportsWidget.init()
