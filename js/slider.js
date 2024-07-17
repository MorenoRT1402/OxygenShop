const imagesPath = './res/jpg/'

const images = [
    'iso-republic-coneflower-bee-bright.jpg',
    'iso-republic-monochrome-horse-portrait.jpg',
    'iso-republic-rainbow_birds.jpg'
]

class Slider {

    constructor(mainID){
        this.img = `${imagesPath}${images[mainID]}`;
        this.imgDisplayer = document.getElementById('slider__img-displayer');
        this.imgIndex = mainID;
        this.imgSummaryContainer = document.getElementById('slider__img-summary');
        this.points = [];
        this.initSlider();
    }

    updatePoints(){
        this.points[this.imgIndex].classList.toggle('current');
    }

    updateSlider(){
        const currentImg = `${imagesPath}${images[this.imgIndex]}`;
        this.imgDisplayer.src = currentImg;
        this.updatePoints();
    }

    createImgSummaries(){
        images.forEach(() => {
            const point = document.createElement('button');
            point.classList.add('slider__images-summary__button');

            this.points.push(point);
            this.imgSummaryContainer.appendChild(point);
        })
    }

    initSlider(){
        this.createImgSummaries();
        this.updateSlider();
    }

    move(displacement){
        this.updatePoints();

        this.imgIndex += displacement;
        if(this.imgIndex >= images.length) this.imgIndex = 0;
        if(this.imgIndex < 0) this.imgIndex = images.length -1;

        this.updateSlider();
    }
}

const orderedSlider = new Slider(0);