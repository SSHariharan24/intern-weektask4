
async function FunctionA() {
    return "Result from FunctionA";
}
function FunctionB() {
    return FunctionA().then(resultA => {
        return `FunctionB received: ${resultA}`;
    });
}
FunctionB().then(result => {
    console.log(result);
});
