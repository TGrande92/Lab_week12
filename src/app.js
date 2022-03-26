//part 2
function part_two(select_element) {
    select_element = document.querySelector("div")
    return select_element
}
console.log(part_two())



// //part 3
const students = [
    { name: "Tasha", grades: [ 80, 67, 75, 62 ] },
    { name: "Tuvok", grades: [ 90, 88, 91, 92 ] },
    { name: "Dax", grades: [ 88, 90, 89, 85 ] },
    { name: "Neelix", grades: [ 60, 54, 48, 50 ] }
  ]



function findstudents(students){
    const studentsScholarship = []
    for (let num of students) {
        gradecalc(num,studentsScholarship)
    }
    return studentsScholarship
}     


function gradecalc(num,studentsScholarship){
    let gradeavg = 0
    for (let grade of num.grades){
        gradeavg += grade
    }
    gradeavg = gradeavg / num.grades.length
    if ( gradeavg > 80 ) {
        studentsScholarship.push({"name": num.name, "gradeAvg": gradeavg})
}   return gradeavg
}
function logdict(students){
    console.log(findstudents(students))
}
logdict(students)

//part 4
function darkmode() {
    let element = document.querySelector(".light-theme")
    element.classList.replace('light-theme', 'dark-theme')
}
darkmode()
