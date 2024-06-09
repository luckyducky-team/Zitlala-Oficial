import Phaser from 'phaser';

export class Welcome extends Phaser.Scene {
    constructor() {
        super({ key: 'Welcome' });
    }
    
    preload() {
        this.load.image('background', 'assets/background.png');
        this.load.image('logo', 'assets/logo.png');
    }
    
    create() {
        this.add.image(400, 300, 'background');
        this.add.image(400, 150, 'logo');
    }
    }