//Enum types
var ResType;
(function (ResType) {
    ResType[ResType["SUCCESS"] = 0] = "SUCCESS";
    ResType[ResType["FAILURE"] = 1] = "FAILURE";
    ResType[ResType["UNAUTHENTICATE"] = 2] = "UNAUTHENTICATE";
    ResType[ResType["FORBIDDEN"] = 3] = "FORBIDDEN";
})(ResType || (ResType = {}));
var response1 = {
    status: 200,
    type: ResType.UNAUTHENTICATE,
    data: 'Test case'
};
console.log(response1);
