const showSidebarBtn = document.getElementById('show-sidebar-btn');
const sideBar = document.getElementById('sidebar');

showSidebarBtn.addEventListener('click',function (){
    if(sideBar.classList.contains('show-sidebar')){
        sideBar.classList.remove('show-sidebar');
        showSidebarBtn.classList.remove('fa-minus-circle')
        showSidebarBtn.classList.add('fa-plus-circle')
    }else{
        sideBar.classList.add('show-sidebar');
        showSidebarBtn.classList.remove('fa-plus-circle')
        showSidebarBtn.classList.add('fa-minus-circle')
    }
})
