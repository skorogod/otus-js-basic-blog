function Carousel(t){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2e3;window.addEventListener("load",(function(){this.interval=s;const e=t.querySelectorAll(".carousel__item"),i=t.clientWidth;e.forEach((t=>{t.style.minWidth=`${i}px`})),this.items=document.querySelectorAll(".carousel__item"),this.btnNext=document.querySelector(".carousel__btn.next__btn"),this.btnPrev=document.querySelector(".carousel__btn.prev__btn");let n=0;this.items[1].classList.add("next"),this.items[this.items.length-1].classList.add("prev"),this.prev=function(){n<this.items.length-1?this.items[n+1].classList.remove("next"):this.items[0].classList.remove("next"),this.items[n].classList.add("next"),this.items[n].classList.remove("active"),n-=1,n<0&&(n=this.items.length-1),this.items[n].classList.remove("prev"),this.items[n].classList.add("active"),n>0?this.items[n-1].classList.add("prev"):this.items[this.items.length-1].classList.add("prev")},this.next=function(){n>0?this.items[n-1].classList.remove("prev"):this.items[this.items.length-1].classList.remove("prev"),this.items[n].classList.remove("active"),this.items[n].classList.add("prev"),n+=1,n>this.items.length-1&&(n=0),this.items[n].classList.remove("next"),this.items[n].classList.add("active"),n<this.items.length-1?this.items[n+1].classList.add("next"):this.items[0].classList.add("next")},this.btnNext.addEventListener("click",this.next.bind(this)),this.btnPrev.addEventListener("click",this.prev.bind(this)),setInterval(this.next.bind(this),this.interval)}))}