export default class ActorModel {
    constructor(plainActor, lname, bdate, img, imdbLink) {
        if (typeof plainActor === 'object') {
            this.firstName = plainActor.fname;
            this.lastName = plainActor.lname;
            this.birthDate = plainActor.bdate;
            this.image = plainActor.img;
            this.imdbLink = plainActor.imdbLink;
            this.age = this.CalcAge();
        }
        else {
            this.firstName = plainActor;
            this.lastName = lname;
            this.birthDate = bdate;
            this.image = img;
            this.imdbLink = imdbLink;
            this.age = this.CalcAge();
        }
    }

    CalcAge = () => {
        var bod = new Date(this.birthDate.split('-')[2], this.birthDate.split('-')[1], this.birthDate.split('-')[0]);
        var diff_ms = Date.now() - bod.getTime();
        var age_dt = new Date(diff_ms);
        return Math.abs(age_dt.getUTCFullYear() - 1970);
    };
}

