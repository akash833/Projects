let path=document.querySelector("#plus");
let imagelistcointainer=document.querySelector(".img-list-cointainer");
let imageshowcointainer=document.querySelector(".img-show-on");
let left=document.querySelector("#left");
let right=document.querySelector("#right");

let newarr=[];
let uniqueid=0;
path.addEventListener("click",function(){
    let imglink=prompt("Enter the image address");
    if(imglink==null || imglink==""){
        alert("Plz Enter the src of image");
        return;
    }else{
        addimagetolistandshow(imglink);
    }
})

function addimagetolistandshow(imglink){
    let previewimg=document.createElement("img");
    previewimg.setAttribute("src",imglink);
    previewimg.setAttribute("cid",uniqueid);
    
    imagelistcointainer.appendChild(previewimg);
    handle_image(previewimg,uniqueid,imglink);
    show_image(imglink,uniqueid);
    uniqueid++;
}

function handle_image(previewimg,uniqueid,imglink){
    let img_identifier_obj={
        link:imglink,
        cid:uniqueid,
    }

    newarr.push(img_identifier_obj);

    let src_image=previewimg.getAttribute("src");
    previewimg.addEventListener("click",function(){
        show_image(src_image,uniqueid);
    })
}

function show_image(src_image,cid){
    let innerhtmlblock=`<img class="final_image" src="${src_image}" cid="${cid}"alt="Image">`
   imageshowcointainer.innerHTML=innerhtmlblock;
}

left.addEventListener("click",function(e){
     if(imageshowcointainer.children.length!=0){
         let c_image=imageshowcointainer.children[0];
         let index=c_image.getAttribute("cid");
         for(let i=0;i<newarr.length;i++){
             if(newarr[i].cid==index){
                let nextind=Math.abs((i-1)%newarr.length);
               show_image(newarr[nextind].link,newarr[nextind].cid);
             }
         }
     }
})


right.addEventListener("click",function(e){
    if(imageshowcointainer.children.length!=0){
        let c_image=imageshowcointainer.children[0];
        let index=c_image.getAttribute("cid");
        for(let i=0;i<newarr.length;i++){
            if(newarr[i].cid==index){
               let nextind=Math.abs((i+1)%newarr.length);
               show_image(newarr[nextind].link,newarr[nextind].cid);
            }
        }
    }
})





