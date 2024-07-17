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
        this.initSlider();
    }

    updateSlider(){
        const currentImg = `${imagesPath}${images[this.imgIndex]}`;
        console.log(currentImg);
        this.imgDisplayer.src = currentImg;
    }

    createImgSummaries(){
        images.forEach((image, index) => {
            const point = document.createElement('button');
            point.classList.add('slider__images-summary__button');
            if(index == this.imgIndex){
                point.classList.add('current');
            }
            this.imgSummaryContainer.appendChild(point);
        })
    }

    initSlider(){
        this.createImgSummaries();
        this.updateSlider();
    }
}

const orderedSlider = new Slider(0);