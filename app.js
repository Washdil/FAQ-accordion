const allFaqsClikeables = Array.from(
     document.querySelectorAll(".faq__container_item-click")
   );
   const faqsContent = Array.from(
     document.querySelectorAll(".faq__container_item-collapse")
   );
   const faqIcon = Array.from(document.querySelectorAll(".expand"));
   const verticalBar = Array.from(document.querySelectorAll(".vertical-line"));
   
   allFaqsClikeables.map((e, i) => {
     e.addEventListener("click", function () {
       faqsContent[i].classList.toggle("active");
       faqIcon[i].classList.toggle("expand__active");
       verticalBar[i].classList.toggle("rotate");
     });
   });