'use strict';

QUnit.module('Тестируем функцию inverse', function () {
    QUnit.test('Функция работает с пустым массивом', function (assert) {
        assert.deepEqual(inverse([]), []);
    });

    QUnit.test('Функция работает с массивом длины один', function (assert) {
        assert.deepEqual(inverse([1]), [1]);
        assert.deepEqual(inverse(['a']), ['a']);
        assert.deepEqual(inverse([null]), [null]);
        assert.deepEqual(inverse([false]), [false]);
    });

    QUnit.test('Функция работает, если в неё передан только массив', function (assert) {
        assert.deepEqual(inverse([1, 2, 3, 4, 5]), [5, 4, 3, 2, 1]);
        assert.deepEqual(inverse(['a', 'b', 'c', 'd', 'e']), ['e', 'd', 'c', 'b', 'a']);
        assert.deepEqual(inverse([null, false, 0, Infinity, '']), ['', Infinity, 0, false, null]);
    });

    QUnit.test('Функция не переставляет первые элементы массива', function (assert) {
        assert.deepEqual(inverse([1, 2, 3, 4, 5], 0), [5, 4, 3, 2, 1]);
        assert.deepEqual(inverse([1, 2, 3, 4, 5], 1), [1, 5, 4, 3, 2]);
        assert.deepEqual(inverse([1, 2, 3, 4, 5], 2), [1, 2, 5, 4, 3]);
        assert.deepEqual(inverse([1, 2, 3, 4, 5], 5), [1, 2, 3, 4, 5]);
        assert.deepEqual(inverse([1, 2, 3, 4, 5], 15), [1, 2, 3, 4, 5]);
    });

    QUnit.test('Функция не переставляет последние элементы массива', function (assert) {
        assert.deepEqual(inverse([1, 2, 3, 4, 5], 0), [5, 4, 3, 2, 1]);
        assert.deepEqual(inverse([1, 2, 3, 4, 5], -1), [4, 3, 2, 1, 5]);
        assert.deepEqual(inverse([1, 2, 3, 4, 5], -2), [3, 2, 1, 4, 5]);
        assert.deepEqual(inverse([1, 2, 3, 4, 5], -5), [1, 2, 3, 4, 5]);
        assert.deepEqual(inverse([1, 2, 3, 4, 5], -15), [1, 2, 3, 4, 5]);
    });

    // Т.к. основные моменты уже протестированы, но небходимо все равно написать несколько своих тестов, то
    // решил написать это:

    QUnit.test('Инвертирует массив из трех чисел', function (assert) {
        assert.deepEqual(inverse([1, 2, 3]), [3, 2, 1], 'inverse([1, 2, 3]) equals to [3, 2, 1]');
        assert.deepEqual(inverse([1, 2, 3, 4]), [4, 3, 2, 1], 'inverse([1, 2, 3]) equals to [3, 2, 1]');
    });

    QUnit.test('Инвертирует массив кроме начала', function (assert) {
        assert.deepEqual(inverse([1, 2, 3, 4, 5], 1), [1, 5, 4, 3, 2],
            'inverse([1, 2, 3, 4, 5], 5) equals to [1, 5, 4, 3, 2]');
        assert.deepEqual(inverse([1, 2, 3, 4, 5], 2), [1, 2, 5, 4, 3],
            'inverse([1, 2, 3, 4, 5], 5) equals to [1, 2, 5, 4, 3]');
        assert.deepEqual(inverse([1, 2, 3, 4, 5], 3), [1, 2, 3, 5, 4],
            'inverse([1, 2, 3, 4, 5], 5) equals to [1, 2, 3, 5, 4]');
        assert.deepEqual(inverse([1, 2, 3, 4, 5], 4), [1, 2, 3, 4, 5],
            'inverse([1, 2, 3, 4, 5], 5) equals to [1, 2, 3, 4, 5]');
        assert.deepEqual(inverse([1, 2, 3, 4, 5], 5), [1, 2, 3, 4, 5],
            'inverse([1, 2, 3, 4, 5], 5) equals to [1, 2, 3, 4, 5]');
    });

    QUnit.test('Инвертирует массив кроме конца', function (assert) {
        assert.deepEqual(inverse([1, 2, 3, 4, 5], -1), [4, 3, 2, 1, 5],
            'inverse([1, 2, 3, 4, 5], 5) equals to [4, 3, 2, 1, 5]');
        assert.deepEqual(inverse([1, 2, 3, 4, 5], -2), [3, 2, 1, 4, 5],
            'inverse([1, 2, 3, 4, 5], 5) equals to [3, 2, 1, 4, 5]');
        assert.deepEqual(inverse([1, 2, 3, 4, 5], -3), [2, 1, 3, 4, 5],
            'inverse([1, 2, 3, 4, 5], 5) equals to [2, 1, 3, 4, 5]');
        assert.deepEqual(inverse([1, 2, 3, 4, 5], -4), [1, 2, 3, 4, 5],
            'inverse([1, 2, 3, 4, 5], 5) equals to [1, 2, 3, 4, 5]');
        assert.deepEqual(inverse([1, 2, 3, 4, 5], -5), [1, 2, 3, 4, 5],
            'inverse([1, 2, 3, 4, 5], 5) equals to [1, 2, 3, 4, 5]');
    });

    QUnit.test('Не меняет массив при неверных пределах', function (assert) {
        assert.deepEqual(inverse([1, 2, 3], 4), [1, 2, 3],
            'inverse([1, 2, 3], 4) equals to [1, 2, 3]');
        assert.deepEqual(inverse([1, 2, 3], -4), [1, 2, 3],
            'inverse([1, 2, 3], -4) equals to [1, 2, 3]');
    });
});