function validateAnswer(data) {
    let err = {};
    const           {society, lonely, drink, hash, feel, relation, economy, community, contribute, smoke, snus, sex, deny} = data;
    const params =  {society, lonely, drink, hash, feel, relation, economy, community, contribute, smoke, snus, sex, deny} ;    
    
    // console.log('params', params);

    Object.keys(params).forEach(key=> {
        let value = params[key];    

        if ( !( !isNaN(parseFloat(value)) && isFinite(value) ) )    err[key] = "Not a number";
        if ( value < 1 || value > 10 )                              err[key] = "Does not match the range [1..10]";             
    })

    err = Object.keys(err).length ? err : ""; 
        
    return {err, params}
}

module.exports = { validateAnswer }

