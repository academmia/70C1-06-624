

console.log('Send database query...');

// 1 - ES5
// getCurrentProject(2, function(project){
//     console.log('Proiectul curent pentru userul 2: ', project);
// });

// 2 - ES6
getCurrentProject(2, (project) => {
    console.log('Proiectul curent pentru userul 2: ', project);
    // 2b
    console.log('Start getting tasks...');
    getTasksByProjectId(project.id, (tasks) => {
        console.log(`Proiectul ${project.name} are task-urile: `, tasks);
        // 3b
        let taskIds = tasks.map(task => task.id);
        getTasksHistory(taskIds, (actions) => {
            console.log('History: ', actions)
        } )
    });
});

function getCurrentProject(userid, cb) {
    // simulam database query
    setTimeout(() => {
        console.log('Running query...');
        cb({ id: 1, name: 'Project One', userid: userid})
    }, 1500);
}


// 2a
function getTasksByProjectId(projectid, cb) {
    // simulam database query
    setTimeout(() => {
        console.log('Get tasks...');
        cb([
            { id: 101, subject: 'Task One', projectid: projectid},
            { id: 102, subject: 'Task Five', projectid: projectid},
            { id: 103, subject: 'Task Ten', projectid: projectid},
        ]);
    }, 1500);
}

// 3a - callback hell
function getTasksHistory(taskIds, cb) {
        // simulam database query
        setTimeout(() => {
            console.log('Get actions...');
            cb([
                { id: taskIds[0], activity: 'Task One - action 1'},
                { id: taskIds[0], activity: 'Task One - action 2'},
                { id: taskIds[1], activity: 'Task Five - action 1'},
                { id: taskIds[2], activity: 'Task Ten - action 1'},
                { id: taskIds[2], activity: 'Task Ten - action 2'},
            ]);
        }, 1500);
}
