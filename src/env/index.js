const envList = {
    dev:{
        baseUrl:''
    },
    test:{
        baseUrl:''
    },
    prod:{
        baseUrl:''
    },
}
let currentEnv = 'dev';

export default envList[currentEnv];