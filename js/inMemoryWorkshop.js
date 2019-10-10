let inMemoryWorkshop = [];


function getWorkshopList() {
    return new Promise((resolve, ) => {
        resolve(inMemoryWorkshop);
    });
}

function getWorkshopByName(name) {
    return new Promise((resolve, reject) => {
        if (!name) {
            reject(new Error("name parameter is required"));
        }
        resolve(inMemoryWorkshop.find(workshop => workshop.name === workshop));
    });
}

function addWorkshop(name, description) {
    return new Promise((resolve, reject) => {
        if (!name) {
            reject(new Error("Workshop name required"));
        }
        if (!description) {
            reject(new Error("Workshop description required"));
        }
        inMemoryWorkshop.push({
            name:name,
            description:description
        });
        resolve();
    });
}

function removeWorkshopByName(name) {
    return new Promise((resolve, reject) => {
        reject(new Error("Not implemented"));
    });
}

function updateWorkshop(oldname, newname, newdescription) {
    return new Promise((resolve, reject) => {
        console.log(inMemoryWorkshop);
        if (!oldname) {
            reject(new Error("Old name required to update"));
        }
        const index = inMemoryWorkshop.map(function(x) {return x.name;}).indexOf(oldname);
        if (index > -1) {
            if (newname.length > 0) {
                inMemoryWorkshop.splice(index, 1, { name: newname, description: inMemoryWorkshop[index].description });
            }
            if (newdescription.length > 0) {
                inMemoryWorkshop.splice(index, 1, { name: inMemoryWorkshop[index].name, description: newdescription });
            }
        }
        else
        {
            reject(new Error("Workshop not found"));
        }
        console.log(inMemoryWorkshop);
        resolve();
    });
}

module.exports = {
    getWorkshopList,
    getWorkshopByName,
    addWorkshop,
    removeWorkshopByName,
    updateWorkshop
};