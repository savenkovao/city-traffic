import * as angular from "angular";

import { Contribution } from "./contribution.component";

import { routes } from "./contribution.route";

export const ContributionModule: ng.IModule = angular.module("app.states.contribution", [])
    .config(routes)

