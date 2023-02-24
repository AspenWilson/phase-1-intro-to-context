// Your code here
function createEmployeeRecord (array) {
    let emplRecordObj = {
        'firstName': array[0],
        'familyName': array[1],
        'title': array[2],
        'payPerHour':array[3],
        'timeInEvents': [],
        'timeOutEvents':[]
    }
    return emplRecordObj
}

function createEmployeeRecords(employeeRecords) {
        return employeeRecords.map(employee => createEmployeeRecord(employee))
}

function createTimeInEvent(employeeRecordObj,dateStamp) {
    let dateArr = dateStamp.split(' ')
    let timeInEvent= 
{
        'type': 'TimeIn',
        'hour': parseInt(dateArr[1]),
        'date': dateArr[0]
    }
employeeRecordObj.timeInEvents.push(timeInEvent)   
return employeeRecordObj
}

function createTimeOutEvent(employeeRecordObj,dateStamp) {
    let dateArr = dateStamp.split(' ')
    let timeOutEvent= {
        'type': 'TimeOut',
        'hour': parseInt(dateArr[1]),
        'date': dateArr[0]
    }
    employeeRecordObj.timeOutEvents.push(timeOutEvent)   
    return employeeRecordObj
}

function hoursWorkedOnDate (employeeRecordObj,date) {
    let timeIn = employeeRecordObj.timeInEvents.find(e => {
     return e.date === date
    })
    let timeOut = employeeRecordObj.timeOutEvents.find(e => {
        return e.date === date
    })
    let outTime = timeOut.hour
    let inTime = timeIn.hour
    let sumHours = (outTime - inTime)/100
        return sumHours
    }

function wagesEarnedOnDate(employeeRecordObj,date) {
    let hoursWorkd = hoursWorkedOnDate(employeeRecordObj,date)
    let result = hoursWorkd * employeeRecordObj.payPerHour
    return result
}

function allWagesFor (employeeRecordObj) {
    let sum = 0
    for (let i=0; i< employeeRecordObj.timeInEvents.length; i++) {
        const payPerDay = wagesEarnedOnDate(employeeRecordObj, employeeRecordObj.timeInEvents[i].date);
    sum += payPerDay;
    }
    return sum
}

function calculatePayroll (emplArr) {
    let payroll = [];

    emplArr.forEach(employee => {
        payroll.push(allWagesFor(employee)) 
    });

    return payroll.reduce((previousValue, currentValue) => previousValue + currentValue)
}

