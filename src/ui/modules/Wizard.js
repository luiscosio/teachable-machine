// Copyright 2017 Google Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/* eslint-disable consistent-return, callback-return, no-case-declarations */
import GLOBALS from './../../config.js';
import TweenLite from 'gsap';

class Wizard {
    constructor() {

        this.steps = [];
        this.steps.push({
            startTime: 0,
            stopTime: 10.4,
            triggers: [
            {
                startTime: 0,
                stopTime: 4.4,
                event: () => {
                    this.setText('Este experimento le permite explorar cómo funciona el aprendizaje automático.');

                }
            },
            {
                startTime: 4.5,
                stopTime: 10.4,
                event: () => {
                    this.setText('Usted puede enseñar a la máquina usando su cámara, y hacer que responda de manera divertida.');
                }
            }
            ]
        });

        this.steps.push({
            startTime: 10.5,
            stopTime: 14,
            waitForEvent: true,
            triggers: [
            {
                startTime: 10.5,
                stopTime: 14,
                event: () => {
                    /*eslint-disable */
                    if (!GLOBALS.browserUtils.isMobile && !GLOBALS.isCamGranted) {
                        this.setText('Primero, haga clic en permitir para encender su cámara.');
                    }else {
                        this.play(2);
                    }
                    /* eslint-enable */
                }
            },
            {
                startTime: 10.5,
                stopTime: 14,
                event: () => {
                    GLOBALS.camInput.start();
                }
            }
            ]
        });


        this.steps.push({
            startTime: 14.3,
            stopTime: 45.1,
            waitForEvent: true,
            triggers: [
            {
                startTime: 14.3,
                stopTime: 18,
                event: () => {
                    this.setText('Aquí está su entrada. Deberías verte a ti mismo.');
                    GLOBALS.inputSection.enable();
                    GLOBALS.inputSection.highlight();

                    GLOBALS.learningSection.dim();
                    GLOBALS.outputSection.dim();
                }

            },
            {
                startTime: 18.7,
                stopTime: 22.5,
                event: () => {
                    this.setText('Aquí hay tres clases: verde, morado, naranja.');
                    GLOBALS.inputSection.dehighlight();
                    GLOBALS.inputSection.dim();
                    GLOBALS.learningSection.undim();
                    GLOBALS.outputSection.dim();
                    if (GLOBALS.browserUtils.isMobile) {
                        TweenLite.to(window, 0, {scrollTo: 385});
                    }
                }

            },
            {
                startTime: 19.9,
                stopTime: 20.8,
                event: () => {
                    GLOBALS.learningSection.highlightClass(0);
                }
            },
            {
                startTime: 20.8,
                stopTime: 21.5,
                event: () => {
                    GLOBALS.learningSection.dehighlightClass(0);
                    GLOBALS.learningSection.highlightClass(1);
                }
            },
            {
                startTime: 21.5,
                stopTime: 22.5,
                event: () => {
                    GLOBALS.learningSection.dehighlightClass(0);
                    GLOBALS.learningSection.dehighlightClass(1);
                    GLOBALS.learningSection.highlightClass(2);
                }
            },
            {
                startTime: 22.5,
                stopTime: 22.9,
                event: () => {
                    GLOBALS.learningSection.dehighlightClass(2);
                }
            },
            {
                startTime: 22.9,
                stopTime: 25.9,
                event: () => {
                    this.setText('Aquí está la salida, donde la máquina responde.');
                    if (GLOBALS.browserUtils.isMobile) {
                        TweenLite.to(window, 0, {scrollTo: 660});
                    }
                    GLOBALS.inputSection.dim();
                    GLOBALS.learningSection.dim();
                    GLOBALS.outputSection.undim();
                    GLOBALS.outputSection.highlight();
                }
            },
            {
                startTime: 25.9,
                stopTime: 33.6,
                event: () => {
                    GLOBALS.outputSection.dehighlight();
                    this.setText('Está configurado para responder con uno de estos GIF. También puede hacer que responda con sonidos o voz.');
                }
            },
            {
                startTime: 33.6,
                stopTime: 37.6,
                event: () => {
                    GLOBALS.inputSection.undim();
                    GLOBALS.inputSection.enable();
                    GLOBALS.learningSection.undim();
                    GLOBALS.learningSection.enable();
                    GLOBALS.outputSection.undim();
                    this.setText('Primero, vamos a enseñarle a responder con el GIF de gato cuando haces algo.');
                }
            },
            {
                startTime: 37.6,
                stopTime: 45,
                event: () => {
                    this.setText('Haga algo como poner su mano (vea el ejemplo anterior) y mantenga este botón verde durante un par de segundos.');
                    if (GLOBALS.browserUtils.isMobile) {
                        TweenLite.to(window, 0, {scrollTo: 175});
                    }
                }
            },
            {
                startTime: 39.6,
                stopTime: 45.1,
                event: () => {
                    GLOBALS.inputSection.showGif(0);
                }
            },
            {
                startTime: 43.1,
                stopTime: 45.1,
                event: () => {
                    window.addEventListener('class-trained', this.classTrainedEvent);
                    GLOBALS.learningSection.enableClass(0);
                    GLOBALS.learningSection.highlightClass(0);
                }
            }
            ]
        });


this.steps.push({
    startTime: 45.4,
    stopTime: 74.6,
    waitForEvent: true,
    triggers: [
    {
        startTime: 45.4,
        stopTime: 49,
        event: () => {
            this.setText('Ahora debe ver la barra verde y el GIF de gato.');
        }
    },
    {
        startTime: 49,
        stopTime: 53.899999999999994,
        event: () => {
            this.setText('Pero si te mueves, verás que siempre se está mostrando no importa qué.');
        }
    },
    {
        startTime: 49.899999999999996,
        stopTime: 53.899999999999994,
        event: () => {
            GLOBALS.inputSection.showGif(1);
        }
    },
    {
        startTime: 53.89,
        stopTime: 58.9,
        event: () => {
            GLOBALS.inputSection.hideGif(1);
            this.setText('Eso es porque la máquina está mirando su entrada, y escoge qué clase parece más similar.');
        }
    },
    {
        startTime: 58.9,
        stopTime: 67.2,
        event: () => {
            this.setText('Pero ya que solo has entrenado a la clase verde, siempre escoge esa. Es por eso por lo que necesitas enseñarle una segunda clase.');
        }
    },
    {
        startTime: 67.2,
        stopTime: 74.6,
        event: () => {
            this.setText('Así que siéntese allí con la mano hacia abajo, y mantener este botón púrpura durante un par de segundos.');
        }
    },
    {
        startTime: 67.2,
        stopTime: 74.6,
        event: () => {
            GLOBALS.inputSection.showGif(2);
        }
    },
    {
        startTime: 69.2,
        stopTime: 74.6,
        event: () => {
            GLOBALS.learningSection.enableClass(1);
            GLOBALS.learningSection.highlightClass(1);
        }
    }
    ]
});


this.steps.push({
    startTime: 74.9,
    stopTime: 84.2,
    waitForEvent: true,
    triggers: [
    {
        startTime: 74.99999999999999,
        stopTime: 84.2,
        event: () => {
            this.setText('Ahora, mueva su mano arriba y abajo. Usted debe ver el GIF de gato cuando su mano está arriba, y el GIF de perro cuando está abajo. Inténtalo.');
            GLOBALS.inputSection.hideGif(2);
        }
    },
    {
        startTime: 74.99999999999999,
        stopTime: 84.2,
        event: () => {
            GLOBALS.inputSection.showGif(3);

        }
    },
    {
        startTime: 74.99999999999999,
        stopTime: 84.2,
        event: () => {
            window.addEventListener('class-triggered', this.classTriggered.bind(this));
            GLOBALS.outputSection.startWizardMode();

        }
    }
    ]
});


this.steps.push({
    startTime: 84.2,
    stopTime: 108.9,
    waitForEvent: true,
    triggers: [
    {
        startTime: 84.2,
        stopTime: 87.6,
        event: () => {
            GLOBALS.inputSection.hideGif(3);
            this.setText('¡Estupendo! Parece que está funcionando.');
        }
    },
    {
        startTime: 87.6,
        stopTime: 91.2,
        event: () => {
            this.setText('El botón naranja funciona de la misma manera.');
            GLOBALS.learningSection.enableClass(2);
            GLOBALS.learningSection.highlightClass(2);
        }
    },
    {
        startTime: 91.3,
        stopTime: 95.2,
        event: () => {
            GLOBALS.learningSection.dehighlightClass(2);
            this.setText('Las x son para restablecer sus clases para enseñarles algo nuevo.');
        }
    },
    {
        startTime: 92.3,
        stopTime: 95.2,
        event: () => {
            GLOBALS.learningSection.dehighlightClass(2);
            GLOBALS.learningSection.highlightClassX(0);
        }
    },
    {
        startTime: 95.3,
        stopTime: 97.3,
        event: () => {
            GLOBALS.learningSection.dehighlightClassX(0);
            GLOBALS.outputSection.highlight();
            this.setText('Y prueba las otras salidas aquí.');
            if (GLOBALS.browserUtils.isMobile) {
                TweenLite.to(window, 0, {scrollTo: 660});
            }
        }
    },
    {
        startTime: 97.4,
        stopTime: 101.9,
        event: () => {
            GLOBALS.outputSection.dehighlight();
            this.setText('Ahora, comienza a jugar. Enseñe a su máquina lo que quiera.');
        }
    },
    {
        startTime: 102,
        stopTime: 108,
        event: () => {
            this.setText('A continuación, encontrará algunas ideas para probar cosas y enlaces para obtener más información.');
        }
    },
    {
        startTime: 108,
        stopTime: 108.9,
        event: () => {
            this.setText('');
            this.skip();
            gtag('event', 'wizard_finish');            
        }
    }
    ]
});

this.steps.push({
    startTime: 131,
    stopTime: 138.8,
    waitForEvent: true,
    triggers: [
    {
        startTime: 131,
        stopTime: 138.8,
        event: () => {
            this.setText('Su máquina funcionará mejor con al menos 30 ejemplos por clase. Trate de grabar un poco más.');
        }
    }
    ]
});

this.steps.push({
    startTime: 125.5,
    stopTime: 130.8,
    waitForEvent: true,
    triggers: [
    {
        startTime: 125.5,
        stopTime: 130.8,
        event: () => {
            this.activateWebcamButton.style.display = 'block';
            this.setText('Parece que la cámara no funciona. Podría ser el navegador o la configuración de la cámara.');
        }
    }
    ]
});

this.wizardRunning = false;
this.currentIndex = 0;

this.timer = document.querySelector('.wizard__timer');
this.timerFill = this.timer.querySelector('.wizard__timer-fill');
this.percentage = 0;
this.duration = 0;
this.baseTime = 0;
this.currentTime = 0;

this.stopTime = 0;
this.audio = new Audio();
this.loadedEvent = this.loaded.bind(this);
this.audio.addEventListener('canplaythrough', this.loadedEvent);
this.audio.src = 'assets/wizard/voice-over-es.mp3';

this.wizardWrapper = document.querySelector('.wizard__wrapper');
this.bar = document.querySelector('#wizard');
this.machine = document.querySelector('.machine');
this.textContainer = this.bar.querySelector('.wizard__text-inner');
this.soundButton = this.bar.querySelector('.wizard__sound-button');
this.soundIcon = this.soundButton.querySelector('.wizard__sound-icon');
this.skipButton = this.bar.querySelector('.wizard__skip-button');

this.skipButton.addEventListener('click', this.skip.bind(this));
this.soundButton.addEventListener('click', this.toggleSound.bind(this));

this.classTrainedEvent = this.classTrained.bind(this);

this.numTriggered = 0;
this.lastClassTriggered = null;

this.activateWebcamButton = document.getElementById('input__media__activate');
this.activateWebcamButton.style.display = 'none';
if (this.activateWebcamButton) {
  this.activateWebcamButton.addEventListener('click', () => {
    location.reload();
});
}


this.resizeEvent = this.size.bind(this);
this.scrollEvent = this.scroll.bind(this);
window.addEventListener('resize', this.resizeEvent);
window.addEventListener('scroll', this.scrollEvent);


this.resizeEvent();
this.scrollEvent();
}

stickBar() {
    this.bar.classList.add('wizard--fixed');
    this.stickyBar = true;
}

unstickBar() {
    this.bar.classList.remove('wizard--fixed');
    this.stickyBar = false;
}

size() {
    this.wizardWrapper.style.height = this.bar.offsetHeight + 'px';

    if (this.machine.offsetHeight + this.bar.offsetHeight - window.pageYOffset > window.innerHeight) {
        this.stickBar();
    }else if (this.stickyBar) {
        this.unstickBar();
    }
}

scroll() {
    if (this.machine.offsetHeight + this.bar.offsetHeight - window.pageYOffset <= window.innerHeight) {
        this.unstickBar();
    }else {
        this.stickBar();
    }
}


classTriggered(event) {
    let id = event.detail.id;

    if (id !== this.lastClassTriggered) {
        this.lastClassTriggered = id;
        this.numTriggered += 1;
    }

    if (this.numTriggered > 4 && !this.triggerTimer) {
        GLOBALS.outputSection.stopWizardMode();
        this.triggerTimer = setTimeout(() => {
            this.play(5);
        }, 1500);
    }
}

classTrained(event) {
    let id = event.detail.id;
    let numSamples = event.detail.numSamples;

    if (numSamples < 30) {
        this.play(6);
    }

    if (id === 'green' && numSamples >= 30) {
        GLOBALS.learningSection.dehighlightClass(0);
        GLOBALS.inputSection.hideGif(0);
        this.play(3);
    }

    if (id === 'purple' && numSamples >= 30) {
        GLOBALS.learningSection.dehighlightClass(1);
        GLOBALS.inputSection.hideGif(1);
        this.play(4);
        window.removeEventListener('class-trained', this.classTrainedEvent);
    }
}

toggleSound(event) {
    event.preventDefault();
    if (this.muted) {
        this.unmute();
    }else {
        this.mute();
    }
}

ended() {
    this.playing = false;
    this.stopAudioTimer();


    switch (this.currentIndex) {
        case 0:
        let that = this;

        if (localStorage.getItem('webcam_status') === null) {
            this.play(1);
            this.webcamEvent = this.webcamStatus.bind(this);
            window.addEventListener('webcam-status', this.webcamEvent);
        }else if (localStorage.getItem('webcam_status') === 'granted') {
            GLOBALS.camInput.start();
            this.play(2);
        }else if (localStorage.getItem('webcam_status') === 'denied') {
            this.play(7);

        }
        break;

        default:
        break;
    }
}


timeUpdate() {
    if (this.audio.currentTime > (this.currentStep.stopTime) && this.playing === true) {
        this.audio.pause();
        this.ended();
    }

    if (this.currentStep) {
        if (this.currentStep.waitForEvent) {
            this.waitingForEvent = true;
        }

        this.currentStep.triggers.forEach((step) => {
            if (this.audio.currentTime >= step.startTime && this.audio.currentTime <= step.stopTime && step.playing !== true) {
                step.playing = true;
                if (step.event) {
                    this.currentTrigger = step;
                    step.event();
                }
            }
        });
    }


    let percentage = (this.audio.currentTime - this.baseTime) / this.duration;
    if (percentage > 1) {
        percentage = 0;
        this.timer.style.opacity = 0;
    }else {
        this.timer.style.opacity = 1;
        this.timerFill.style.width = 80 * percentage + 'px';
    }

    this.audioTimer = requestAnimationFrame(this.timeUpdate.bind(this));

}

play(index) {
    this.currentIndex = index;
    this.currentStep = this.steps[index];
    this.audio.currentTime = this.currentStep.startTime;
    this.playing = true;
    this.audio.play();
}

touchPlay() {
    this.audio.play();
    this.audio.pause();
}

loaded() {
    this.audio.removeEventListener('canplaythrough', this.loadedEvent);
}

startAudioTimer() {
    this.stopAudioTimer();
    this.audioTimer = requestAnimationFrame(this.timeUpdate.bind(this));
}

stopAudioTimer() {
    if (this.audioTimer) {
        cancelAnimationFrame(this.audioTimer);
    }
}

mute() {
    this.audio.muted = true;
    this.muted = true;
    this.soundIcon.classList.remove('wizard__sound-icon--on');
}

unmute() {
    this.audio.muted = false;
    this.muted = false;
    this.soundIcon.classList.add('wizard__sound-icon--on');
}

setText(message, isTip) {
    let text = message;
    this.textContainer.textContent = message;

    if (message.length > 0) {
        this.timerFill.style.width = 0 + 'px';
        if (this.currentTrigger) {
            this.baseTime = this.currentTrigger.startTime;
            this.duration = this.currentTrigger.stopTime - this.baseTime;
        }
    }
}


clear() {
    this.textContainer.textContent = '';
}

webcamStatus(event) {
    let that = this;
    if (event.detail.granted === true) {
        localStorage.setItem('webcam_status', 'granted');
        this.play(2);
        window.removeEventListener('webcam-status', this.webcamEvent);
    }else {
        localStorage.setItem('webcam_status', 'denied');
        this.play(7);
    }
}

start() {
    let that = this;
    this.wizardRunning = true;
    this.soundButton.style.display = 'block';
    this.play(0);
    this.startAudioTimer();
    GLOBALS.launchScreen.destroy();
    gtag('event', 'wizard_start');        
}

startCamera() {
    GLOBALS.camInput.start();
}

skip(event) {
    if (event) {
        event.preventDefault();
        gtag('event', 'wizard_skip_mid');        
    }

    if (this.wizardRunning) {
        TweenLite.to(this.wizardWrapper, 0.3, {
            height: 0,
            onComplete: () => {
                this.wizardWrapper.style.display = 'none';
            }
        });
    }else {
        this.wizardWrapper.style.display = 'none';
    }

    this.stopAudioTimer();
    this.audio.pause();
    this.clear();
    this.skipButton.style.display = 'none';
    this.soundButton.style.display = 'none';
    window.removeEventListener('class-trained', this.classTrainedEvent);
    setTimeout(() => {
        GLOBALS.camInput.start();
    }, 500);
    GLOBALS.inputSection.enable();
    GLOBALS.learningSection.enable();
    GLOBALS.learningSection.enableClass(0);
    GLOBALS.learningSection.enableClass(1);
    GLOBALS.learningSection.enableClass(2);
    GLOBALS.learningSection.dehighlight();
    GLOBALS.learningSection.dehighlightClass(0);
    GLOBALS.learningSection.dehighlightClass(1);
    GLOBALS.learningSection.dehighlightClass(2);
    GLOBALS.inputSection.hideGif(0);
    GLOBALS.inputSection.hideGif(1);
    GLOBALS.inputSection.hideGif(2);
    GLOBALS.inputSection.hideGif(3);
    GLOBALS.outputSection.enable();

    window.removeEventListener('resize', this.resizeEvent);
    window.removeEventListener('scroll', this.scrollEvent);
}

}

export default Wizard;
/* eslint-enable consistent-return, callback-return, no-case-declarations */