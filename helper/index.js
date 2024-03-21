const helper = {
    formatCode(value1, value2) {
        if (value2 == 1) {
            return `${value1}W`;
        } else if (value2 == 2) {
            return `${value1}M`;
        }
    },
};

module.exports = helper;
