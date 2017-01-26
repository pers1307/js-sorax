var string, newString;

string = 'Sometimes the same is different';

newString = string
    .replace('is', 'is not')
    .toUpperCase()
    .slice(10);

console.log(newString);

var Vec2 = function (x, y) {
    this.x = x;
    this.y = y;
};

/**
 * @param vec
 *
 * @returns {Vec2}
 */
Vec2.prototype.add = function (vec) {
    this.x += vec.x;
    this.y += vec.y;

    return this;
};

var world = {
    gravity: new Vec2(0, 1)
};

var object = {
    position : new Vec2(10, 20),
    speed : new Vec2(1, 3),
    update: function () {
        this.position // Вызов метода в цепочке
            .add(this.speed)
            .add(world.gravity)
    }
};

console.log(object.position);
object.update();
console.log(object.position);