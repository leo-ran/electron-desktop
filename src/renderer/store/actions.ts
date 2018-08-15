export const mapActions = {
    login: (params: any) => {
        return {
            type: 'LOG_IN',
            data: params
        }
    }
}

