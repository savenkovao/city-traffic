export class ContributionController {
    static $inject = [];
    constructor() { }
}
export const Contribution = {
    selector: "contribution",
    controller: ContributionController,
    controllerAs: "Contribution",
    template: require("./contribution.html"),
};