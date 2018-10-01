import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        return ['Guido van Rossum', 'Yukihiro Matsumoto', 'Linus Torvalds']
    }
});
