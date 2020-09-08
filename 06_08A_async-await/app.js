

console.log('Send database query...');

// Codul de mai sus este acum rescris sa foloseasca promisiuni
// getCurrentProject(2)
//     .then( project => {
//         console.log('Proiectul curent pentru userul 2: ', project);
//         return getTasksByProjectId(project.id)
//     })
//     .then( tasks => {
//         console.log(`Proiectul current are task-urile: `, tasks);
//         let taskIds = tasks.map(task => task.id);
//         return getTasksHistory(taskIds)
//     })
//     .then( actions => console.log('History: ', actions) )
//     .catch( err => console.log('Eroare: ', err))

// sau daca nu avem nevoie sa intervenim in pasii intermediari
getCurrentProject(2)
    .then( project => getTasksByProjectId(project.id) )
    .then( tasks => getTasksHistory(tasks.map(task => task.id)) )
    .then( actions => console.log('History: ', actions) )
    .catch( err => console.log('Eroare: ', err))


function getCurrentProject(userid) {
    return new Promise((resolve,reject) => {
        // simulam database query
        setTimeout(() => {
            console.log('Running query...');
            resolve({ id: 1, name: 'Project One', userid: userid})
        }, 1500);
    })

}

// 2a
function getTasksByProjectId(projectid) {
    return new Promise((resolve, reject) => {
        // simulam database query
        setTimeout(() => {
            console.log('Get tasks...');
            resolve([
                { id: 101, subject: 'Task One', projectid: projectid},
                { id: 102, subject: 'Task Five', projectid: projectid},
                { id: 103, subject: 'Task Ten', projectid: projectid},
            ]);
        }, 1500);
    });
}

// 3a - callback hell
function getTasksHistory(taskIds) {
    return new Promise((resolve, reject) => {
        // simulam database query
        setTimeout(() => {
            console.log('Get actions...');
            resolve([
                { id: taskIds[0], activity: 'Task One - action 1'},
                { id: taskIds[0], activity: 'Task One - action 2'},
                { id: taskIds[1], activity: 'Task Five - action 1'},
                { id: taskIds[2], activity: 'Task Ten - action 1'},
                { id: taskIds[2], activity: 'Task Ten - action 2'},
            ]);
        }, 1500);
    })
}
