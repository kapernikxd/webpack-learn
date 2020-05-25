export default class Post {
    constructor(props, img) {
        this.title = props
        this.date = new Date()
        this.img = img
    }

    toString() {
        return(
            JSON.stringify({
            title: this.title,
            date: this.date.toJSON(),
            img: this.img
            })
        )
    }
}