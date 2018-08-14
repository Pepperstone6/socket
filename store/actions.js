export function verify(){
    return new Promise((resolve, reject) => {
      this.$http.post('/api/verify')
    })
}