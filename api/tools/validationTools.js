const IsString = value => typeof value === "string";

const IsUndefinedOrNull = value => value === null || value === undefined;

const doesContainAlphabetical = value => !(/^[0-9]+$/.test(value));

const IsIranMobile = value => /^(?:98|\+98|0098|0)?9[0-9]{9}$/.test(String(value).toLowerCase());

const IsIranNationalCode = value => {
    const pattern = new RegExp(/^\d{10}$/);
    if (!pattern.test(value)){
        return false;
    }
    var check = +value[9];
    var sum = Array(9).fill().map((_, i) => +value[i] * (10 - i)).reduce((x, y) => x + y) % 11;
    if((sum < 2 && check == sum) || (sum >= 2 && check + sum == 11)){
        return true;
    } 
    else {
        return false;
    }
};

const IsValidPassword = value => value.length >= 8;

const IsValidEmail = value => /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value);

module.exports = {
    IsString,
    IsUndefinedOrNull,
    IsIranNationalCode,
    IsIranMobile,
    doesContainAlphabetical,
    IsValidEmail,
    IsValidPassword,
};
