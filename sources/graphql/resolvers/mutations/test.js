import validate from "type-valid";
const argValidation = (args, validationTypes) => {
    let newArgs = [];
    const names = Object.keys(validationTypes);
    names.forEach(name => newArgs.push({
        name,
        param: args[name],
        type: validationTypes[name]
    }));
    const result = validate({ args: newArgs });
    return result;
}
const test = async (obj, args, context) => {
    let validationTypes = {
        id: {
            isUUID: true
        }
    }
    const isValid = argValidation(args, validationTypes);
    if(!isValid.result) {
        return {
            message: isValid.error,
            code: 400
        };
    }
    return {
        message: "Böyle bir grup bulunamadı.",
        code: 400
    };
}
export default test;