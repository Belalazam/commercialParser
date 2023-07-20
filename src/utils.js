


// if its list of string pass just list and 'number' , else just pass list and identifier
export function ListToStringList(list,identifier) {
    var stringList = ""
    list.forEach(element => {
        if(identifier === "number")
        {
            if(element === null || element === undefined || element.length === 0)return;
            stringList+=element + ", "
        }
        else
        {
            if(element[identifier] === null || element[identifier] === undefined || element[identifier].length === 0)return;
            stringList+=element[identifier] + ", "
        }
    });
    return stringList.slice(0,-2);
}