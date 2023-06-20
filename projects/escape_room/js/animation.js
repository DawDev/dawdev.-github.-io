

export class Animation { // not really reusable, puur in paniek dat ik geen tijd over zou hebben gemaakt.
    constructor (spritesheets, fw, fh, ft, fa) {
        this.spritesheets = spritesheets;
        
        this.frameWidth = fw;
        this.frameHeight = fh;
        this.frameTime = ft;
        this.frameAmount = fa; 
        this.timeSinceLastChange = 0;
        this.currentFrame = 0;
    }

    update(dt) {
        this.timeSinceLastChange += dt;
        if (this.timeSinceLastChange >= this.frameTime) { 
            this.currentFrame++;
            if (this.currentFrame == this.frameAmount) {
                this.currentFrame = 0;
            }
            this.timeSinceLastChange = 0;
        }
        //spreekt beetje voor zich
    }

    draw(ctx, x, y, flip) {
        const img = flip ? this.spritesheets[1] : this.spritesheets[0];
        ctx.drawImage(img, 
            this.frameWidth * this.currentFrame,
            0, this.frameWidth, this.frameHeight,
            x, y, 38, 38);
    }
}