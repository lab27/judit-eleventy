console.log('swup', Swup);
console.log('thing!');

const currentYear = new Date().getFullYear()
console.log(currentYear);

swup.on('pageView', function (event) {
    console.log('page View', event)
});