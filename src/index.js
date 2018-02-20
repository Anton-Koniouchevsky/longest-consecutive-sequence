module.exports = function longestConsecutiveLength(array) {
    let maxLength = 0;
    let objects = {};
    array.forEach(element => {
        if (!objects[element]) {
            if (objects[element - 1] && objects[element + 1]) {
                objects[element] = objects[element - 1] + objects[element + 1] + 1;
                changeLeftValues(element, objects[element]);
                changeRightValues(element, objects[element]);
            } else if (objects[element - 1]) {
                objects[element] = objects[element - 1] + 1;
                changeLeftValues(element, objects[element]);
            } else if (objects[element + 1]) {
                objects[element] = objects[element + 1] + 1;
                changeLeftValues(element, objects[element]);
            } else {
                objects[element] = 1;
            }

            maxLength = maxLength > objects[element] ? maxLength : objects[element];
        }
    });

    return maxLength;

    function changeLeftValues(index, value) {
        while (objects[--index]) {
            objects[index] = value;
        }
    }

    function changeRightValues(index, value) {
        while (objects[++index]) {
            objects[index] = value;
        }
    }
}