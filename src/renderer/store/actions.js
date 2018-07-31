export const mapActions = {
    login:(params)=>{
        return {
            type:'LOG_IN',
            data:params
        }
    }
}