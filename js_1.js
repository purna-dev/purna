// const ty = document.getElementById("typ");



//   ty.addEventListener("load",()=>{
//     new TypeIt("ty", {
//         strings: "This is my string!",
//         speed: 75,
//         loop: true
//       }).go();
//   })
  
const a = document.getElementById("about");
const c = document.getElementById("contact");
const a_c = document.getElementById("about-content");
const c_c = document.getElementById("contact-content");


a.addEventListener("click",()=>{
const box = new WinBox({
    title : 'about@purna:~',
    background : '#e75c0c',
    width :'300px',
    height :'380px',
    top: 0,
    right: 50,
    bottom: 0,
    left: 50,
    x:'center',
    y:'center',
    mount:a_c,
    onfocus: function(){
        this.setBackground("#e75c0c");
    },
    onblur: function(){
        this.setBackground("#272727");
    },
});
});

c.addEventListener("click",()=>{
    const box = new WinBox({
        title : 'contact@purna:~',
        background : '#e75c0c',
        width :'300px',
        height :'380px',
        top: 0,
        right: 50,
        bottom: 0,
        left: 50,
        x:'center',
        y:'center',
        mount:c_c,
        onfocus: function(){
            this.setBackground("#e75c0c");
        },
        onblur: function(){
            this.setBackground("#272727");
        },
    });
    });

// c.addEventListener("click",()=>{
//     new WinBox();
// })