export default class Actor {
    constructor(fname, lname, bdate, img, imdbLink) {
        console.log(img)
        this.firstName = fname;
        this.lastName = lname;
        this.birthDate = bdate;
        this.image = img;
        this.imdbLink = imdbLink;
        this.age = this.CalcAge();
        
    }

    CalcAge = ()=>{ 
        console.log(this.birthDate);
        var bod = new Date(this.birthDate.split('-')[2],this.birthDate.split('-')[1],this.birthDate.split('-')[0]);
        var diff_ms = Date.now() - bod.getTime();
        var age_dt = new Date(diff_ms); 
    return Math.abs(age_dt.getUTCFullYear() - 1970);
};
}

