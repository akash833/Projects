(function(){
    // Tags
    let image_folder=document.querySelector("#image-folder");
    let show_image=document.querySelector(".show-image");
    let save_slide=document.querySelector("#save-file");
    let all_templates=document.querySelector("#all-templates");
    let select_folder=document.querySelector(".image-folder");
    let overlay1=document.querySelector(".overlay1");
    let overlay2=document.querySelector(".overlay2");
    let overlay3=document.querySelector(".overlay3");
    let new_slide=document.querySelector(".new-slide");
    let show_create_slide=document.querySelector("#create-slide-page");
    let add_slide=document.querySelector(".my-slide");
    let image_url=document.querySelector("#new-image-url");
    let input_title=document.querySelector("#new-title");
    let input_details=document.querySelector("#new-details");
    let save_button=document.querySelector("#save-button");

    let view_image=document.querySelector("#view-image");
   
    
    // storage
    let album=[{
        name:"text",
        image:[]
    }];

    // All_button
    let save=document.querySelector("#save");
    let add=document.querySelector("#add");
    let remove=document.querySelector("#remove");
    let upload=document.querySelector("#upload");
    let dowload=document.querySelector("#dowload");
    let display=document.querySelector("#display");
    let settings=document.querySelector("#settings");
    

    // save.addEventListener("click",save_image);
    add.addEventListener("click",add_folder);
    // remove.addEventListener("click",remove_folder);
    // upload.addEventListener("click",upload_image);
    // dowload.addEventListener("click",dowload_image);
    // display.addEventListener("click",display_slideshow);
    // settings.addEventListener("click",my_settings);
    
    // tags eventlistener
    image_folder.addEventListener("change",handleselect_folder);
    new_slide.addEventListener("click",createslide);
    save_button.addEventListener("click",handle_save_button);

    function createslide(){
        overlay3.style.display="none";
        show_create_slide.style.display="block";

    }

    function handle_save_button(){
        console.log("save button clicked");
        let url=image_url.value;
        let title=input_title.value;
        let details=input_details.value;
        //  alert(url + "  " +title+ "  "+ details);
        let template=all_templates.content.querySelector("#slide");
        let slide=document.importNode(template,true);
        
        slide.querySelector(".title").innerHTML=title;
        slide.querySelector(".details").innerHTML=details;
        slide.querySelector("img").setAttribute("src",url);
        slide.addEventListener("click",handleslideview);

        add_slide.appendChild(slide);
        // slide.dispatchEvent(new Event("click"));
    }

    function handleslideview(){
        console.log("handleclick");
        overlay3.style.display="none";
        show_create_slide.style.display="none";
        view_image.style.display="block";
        
        view_image.innerHTML="";
        
        let view_template=all_templates.content.querySelector("#view-slide");
        let view_slide=document.importNode(view_template,true);
        
        view_slide.querySelector(".view-title").innerHTML=this.querySelector(".title").innerHTML;
        view_slide.querySelector(".view-details").innerHTML=this.querySelector(".details").innerHTML;
        view_slide.querySelector("img").setAttribute("src",this.querySelector("img").getAttribute("src"));

        view_image.appendChild(view_slide);
    }

    function add_folder(){
        console.log("addfolder");
        let folder_name=prompt("Enter the folder name you want to add");
        if(folder_name==null){
           return;
        }
        folder_name=folder_name.trim();
        if(!folder_name){
            alert("Empty name not allowed ");
            return;
        }
        let exists=album.some(a=>a.name==folder_name);
        if(exists){
            alert("folder name is exists. Enter a unique name ");
            return;
        }
        let add_album={
            name:folder_name,
            image:[]
        }
        album.push(add_album);

        let templates_option=all_templates.content.querySelector("[purpose=new-album]");
        let newoption=document.importNode(templates_option,true);
        
        newoption.setAttribute("value",folder_name);
        newoption.innerHTML=folder_name;
        image_folder.appendChild(newoption);    
        
        image_folder.value = folder_name;
        image_folder.dispatchEvent(new Event("change"));
        }
   
    function handleselect_folder(){
        console.log("handle my select");
        if(this.value=="-1"){
            overlay1.style.display="block";
            overlay2.style.display="block";
            overlay3.style.display="none";
        }else{
            overlay1.style.display="none";
            overlay2.style.display="none";
            overlay3.style.display="block";
        }
    }    

   
})();