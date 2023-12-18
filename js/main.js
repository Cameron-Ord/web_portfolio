

document.addEventListener('DOMContentLoaded', ()=>{

    console.log("HELLO")
    function open_github(){
        window.open('https://github.com/Cameron-Ord');
    }
    
    function open_udr_git(){
        window.open('https://github.com/Cameron-Ord/Underrail-Feat-Calculator');
    }
    
    function open_linkedin(){
        window.open('https://ca.linkedin.com/in/camord34');
    }
    function open_udr_site(){
        window.open('https://featgenerator.cameron-ord.online');
    }
    function scroll_to_proj(){
        const top = document.querySelector('.projects_header');
        if(top){
            console.log('scrollto')
            const element_rect = top.getBoundingClientRect();
            const element_y = window.scrollY + element_rect.top;
            window.scrollTo({
                top:element_y,
                behavior:'smooth',
            });
        }
    }
    
    const base_git_tags = document.querySelectorAll('.view_git_text');
    const linkedin_tag = document.querySelector('.view_linkedin_text');
    const specific_git = document.querySelector('.git_repo_tag');
    const udr_site_tag = document.querySelector('.site_tag');
    const proj_header = document.querySelector('.view_proj_text');
    
    for(let j = 0; j < base_git_tags.length; j++){
        base_git_tags[j].addEventListener('click', open_github);
    }
    
    linkedin_tag.addEventListener('click', open_linkedin);
    specific_git.addEventListener('click', open_udr_git);
    udr_site_tag.addEventListener('click', open_udr_site);
    proj_header.addEventListener('click', scroll_to_proj);
    
    
})