var axios = require('axios');

module.exports = function(id){
    axios.get('/api/' + id).then(() => {
        return {items: [ {'object': 1}, {'object': 2} ]};
    });
};


//i want to see if axios return the right results.
//if I call this, what I need is a stub for what the path returns?
