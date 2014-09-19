Package.describe({
    
    summary: "Perspective page view navigation."
    version: "1.0.0",
    name: "jelena:meteor-perspective-navigation",
    git: "https://github.com/jelenajjo/meteor-perspective-navigation.git"
    
});

Package.onUse(function (api) {
    
    api.addFiles("component.css", "client");
    api.addFiles("modernizr.custom.25376.js", "client");
    api.addFiles("classie.js", "client");
    api.addFiles("menu.js", "client");
    
});