function _idToid(object) {
    const obj = object;
    obj.id =object._id;
    delete obj._id;
    console.log('syka', obj)
    return obj;
    // const {_id,...result} = object;
    // result.id = _id
    // console.log('CHANGE',result.id)
    // return result;
}

module.exports = _idToid;