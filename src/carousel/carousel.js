function Carousel(element, interval=2000){
    window.addEventListener('load', function() {

        this.interval = interval;

        const carouselItems = element.querySelectorAll('.carousel__item');
    
        const itemWidth = element.clientWidth;
    
        carouselItems.forEach(element => {
            element.style.minWidth = `${itemWidth}px`  
        });

        this.items = document.querySelectorAll('.carousel__item');
        this.btnNext = document.querySelector('.carousel__btn.next__btn');
        this.btnPrev = document.querySelector('.carousel__btn.prev__btn');

        let index = 0;

        this.items[1].classList.add('next');
        this.items[this.items.length - 1].classList.add('prev')

        this.prev = function() {
            if (index < (this.items.length - 1)) {
                this.items[index+1].classList.remove('next');
            }

            else {
                this.items[0].classList.remove('next');
            }

            this.items[index].classList.add('next');
            this.items[index].classList.remove('active');

            index --;

            if (index < 0) {
                index = this.items.length - 1
            };

            this.items[index].classList.remove('prev')
            this.items[index].classList.add('active')

            if (index > 0) {
                this.items[index-1].classList.add('prev')
            }

            else {
                this.items[this.items.length-1].classList.add('prev');
            }
        };

        this.next = function() {
            if (index > 0) {
                this.items[index - 1].classList.remove('prev');
            }
            
            else {
                this.items[this.items.length - 1].classList.remove('prev');
            }

            this.items[index].classList.remove('active');
            this.items[index].classList.add('prev')
            
            index ++;

            if (index > (this.items.length - 1)) {
                index = 0;
            }

            this.items[index].classList.remove('next')
            this.items[index].classList.add('active');
            
            if(index < this.items.length-1) {
                this.items[index+1].classList.add('next');
            }

            else {
                this.items[0].classList.add('next')
            }
        };

        this.btnNext.addEventListener('click', this.next.bind(this));
        this.btnPrev.addEventListener('click', this.prev.bind(this));

        setInterval(this.next.bind(this), this.interval);
            
    })
}
