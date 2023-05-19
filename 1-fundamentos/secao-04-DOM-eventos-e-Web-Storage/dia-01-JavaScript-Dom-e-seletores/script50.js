const randomIndex = (number) => Math.floor(Math.random() * number);

const students33 = {
studentsInfo: [
{
    student : 'Bruno',
    projetos : randomIndex(11),
},
{
    student: 'Maria',
    projetos: randomIndex(11),
}
]}

console.log(students33);