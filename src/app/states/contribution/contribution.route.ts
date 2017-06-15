import { ContributionController as Contribution } from "./contribution.component";

export const routes = ($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider) => {
    $urlRouterProvider.otherwise("/");
    $stateProvider.state("app.contribution", {
        url: "/contribution",
        parent: "app",
        template: require("./contribution.html"),
        controller: Contribution,
        controllerAs: "Contribution"
    });
};