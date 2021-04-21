
const saltSerect = "fli"

export const getDESCtypt = (password) => {
    return saltSerect + window.btoa(password);
}


