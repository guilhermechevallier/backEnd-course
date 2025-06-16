function employment (name, job){
    
    return {
        name,
        job,
        getEmployment (){
            return `${this.name} is a ${this.job}`;
        },
        addFunctionary (name, job){
            functionary.push({
                name, job
            });
        }
    }
}


const p0 = employment('John', 'Developer');
const p1 = employment('Jane', 'Designer');
const p2 = employment('Doe', 'Manager');


const functionary = [];

for (let i = 0; i < 2; i++) {
    functionary.push({name: `Functionary ${i}`, job: `Job ${i}`});
    
}


