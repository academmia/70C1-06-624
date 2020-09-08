

const currentProject = getCurrentProject(2);
console.log(currentProject);

function getCurrentProject(userid) {
    // simulam databse query
    setTimeout(()=>{
        console.log('Running query...');
        return { id: 1, name: 'Project One', userid: userid};
    }, 1500);

    return { id: 10, name: 'Project Ten', userid: userid}
}
