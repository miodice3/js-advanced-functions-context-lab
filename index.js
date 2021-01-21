/* Your Code Here */

function createEmployeeRecord(ray){
    return {
        firstName: ray[0],
        familyName: ray[1],
        title: ray[2],
        payPerHour: ray[3],
        timeInEvents: [],
        timeOutEvents: [] }
}

function createEmployeeRecords(ray){
    let returnRay = []
    ray.forEach(function(element){
        returnRay.push(createEmployeeRecord(element))
    })
    return returnRay
}

// timeString:  2014-02-28 1400
function createTimeInEvent(timeString){
    let [date, hour] = timeString.split(' ')
    this.timeInEvents.push({
                type: 'TimeIn',
                hour: parseInt(hour, 10),
                date: date,
            })
    return this
}

function createTimeOutEvent(timeString){
    let [date, hour] = timeString.split(' ')
    this.timeOutEvents.push({
                type: 'TimeOut',
                hour: parseInt(hour, 10),
                date: date,
            })
    return this
}

function hoursWorkedOnDate(timeString){
    let timeIn = this.timeInEvents.find( function(s) {return s.date === timeString}).hour
    let timeOut = this.timeOutEvents.find( function(s) {return s.date === timeString}).hour
    return (timeOut - timeIn)/100
}

function wagesEarnedOnDate(timeString){
    let hours = hoursWorkedOnDate.call(this, timeString)
    let wage = this.payPerHour
    return (hours*wage)
}


//this was flatirons
let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}
//this was flatirons

function findEmployeeByFirstName(rayEmployeeRecords, searchedName){
    if (rayEmployeeRecords.find( function(s){return s.firstName === searchedName})){
        return rayEmployeeRecords.find( function(s){return s.firstName === searchedName})
    } else {
        return undefined
    }
}

function calculatePayroll(rayEmployeeRecords){
    let totalWages = 0

    rayEmployeeRecords.forEach(function(employeeRecord){
        // console.log(employeeRecord)
        totalWages += allWagesFor.call(employeeRecord)
        // console.log("CONSOLE LOGGING THIS: ", this)
        // totalWages += test
    })
    // console.log("TOTAL WAGES CALCULATED: ", totalWages)
    return totalWages
}

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */