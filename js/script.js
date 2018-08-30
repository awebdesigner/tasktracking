new Vue({
    el:'#app',
    data:{

    },
    methods:{
        showForm: formToShow => {
            let cssClasses = document.querySelector('.right-panel').classList
             document.querySelector('.right-panel').classList.add('reveal-panel')
             setTimeout(() => {
                switch (formToShow) {
                    case 'addToTeam':

                        if (cssClasses.value.includes('reveal-panel')) {
                            document.querySelector('.right-panel .panel-body').innerHTML = document.getElementById('addTeamMate').innerHTML
                            document.getElementById('panel-header-text').innerText = `Add Teammate`

                        } else {
                            document.querySelector('.right-panel .panel-body').innerHTML = document.getElementById('addTeamMate').innerHTML
                            document.getElementById('panel-header-text').innerText = `Add Teammate`
                            document.querySelector('.right-panel').classList.add('reveal-panel')
                        }
                        break;
                    case 'addTask':

                        if (cssClasses.value.includes('reveal-panel')) {
                            document.querySelector('.right-panel .panel-body').innerHTML = document.getElementById('addTask').innerHTML
                            document.getElementById('panel-header-text').innerText = `Add Task`

                        } else {
                            document.querySelector('.right-panel .panel-body').innerHTML = document.getElementById('addTask').innerHTML
                            document.getElementById('panel-header-text').innerText = `Add Task`
                            document.querySelector('.right-panel').classList.add('reveal-panel')
                        }
                        break;
                    case 'addMessage':

                        if (cssClasses.value.includes('reveal-panel')) {
                            document.querySelector('.right-panel .panel-body').innerHTML = document.getElementById('chat').innerHTML
                            document.getElementById('panel-header-text').innerText = `Discussion`

                        } else {
                            document.querySelector('.right-panel .panel-body').innerHTML = document.getElementById('chat').innerHTML
                            document.getElementById('panel-header-text').innerText = `Discussion`
                            document.querySelector('.right-panel').classList.add('reveal-panel')
                        }
                        break;
                    case 'addActivity':
                          if (cssClasses.value.includes('reveal-panel')) {
                              document.querySelector('.right-panel .panel-body').innerHTML = document.getElementById('addActivity').innerHTML
                              document.getElementById('panel-header-text').innerText = `Add Activity(Sub Task)`

                          } else {
                              document.querySelector('.right-panel .panel-body').innerHTML = document.getElementById('addActivity').innerHTML
                              document.getElementById('panel-header-text').innerText = `Add Activity(Sub Task)`
                              document.querySelector('.right-panel').classList.add('reveal-panel')
                          }
                        break;
                    case 'addFile':

                          if (cssClasses.value.includes('reveal-panel')) {
                              document.querySelector('.right-panel .panel-body').innerHTML = document.getElementById('addFiles').innerHTML
                              document.getElementById('panel-header-text').innerText = `Add Files`

                          } else {
                              document.querySelector('.right-panel .panel-body').innerHTML = document.getElementById('addFiles').innerHTML
                              document.getElementById('panel-header-text').innerText = `Add Files`
                              document.querySelector('.right-panel').classList.add('reveal-panel')
                          }
                        break;
                }
             },1000)

        },
        editTask: taskId => {
            alert('Loading '+ taskId + ' to Edit')
        },
        deleteTask: taskId => {
            alert( 'Delete task id:' +taskId )
        },
        closePanel: () => {
            document.querySelector('.right-panel').classList.remove('reveal-panel')
        },
        onSubmit: () => {
            console.log('Submtting')
        },
        handleSubmission: () => {
            console.log('Handling submission')
        }
    }
})

let textarea = document.querySelector('textarea')
textarea.addEventListener('keydown', autosize)

function autosize(){
    let el = this
    setTimeout(() => {
        el.style.cssText = 'height:auto; padding:0'
        // for box-sizing other than "content-box" use:
        // el.style.cssText = '-moz-box-sizing:content-box';
        el.style.cssText = 'height:' + el.scrollHeight + 'px'
    },0)
}