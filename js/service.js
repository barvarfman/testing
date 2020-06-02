'use strict'

var gProjects = [];
var gPortfolio = [];

function _createProject(id, name, title, desc, url, publishedAt, labels) {
    return {
        id: id,
        name: name,
        title: title,
        desc: desc,
        url: url,
        publishedAt: publishedAt,
        labels: labels
    }
}

function createProjects(id, name, title, desc, url, publishedAt, labels) {
    gProjects.push(_createProject(id, name, title, desc, url, publishedAt, labels))
}

function getProjects() {
    return gProjects;
}



function getProject(projectId) {
    var project = gProjects.filter(function (project) {
        if (project.id === projectId) return project;
    });
    return project[0];
}
////////Portfolio:

function _createPortfolio(id, name, title,url) {
    return {
        id: id,
        name: name,
        title: title,
        url: url
        //desc: desc,
        // publishedAt: publishedAt,
        // labels: labels
    }
}

function createPortfolios(id, name, title, desc, url, publishedAt, labels) {
    gPortfolio.push(_createPortfolio(id, name, title, desc, url, publishedAt, labels))
}

function getPortfolios() {
    return gPortfolio;
}



function getPortfolio(PortfolioId) {
    var Portfolio = gPortfolio.filter(function (Portfolio) {
        if (Portfolio.id === PortfolioId) return Portfolio;
    });
    return Portfolio[0];
}

