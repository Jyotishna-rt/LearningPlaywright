//private fields -> added by #

class credentials{
      #apikey;

      constructor(user, key){
        this.user = user; //public
        this.#apikey = key;
      }

      getAuthHeader(){
        return "Bearer "+ this.#apikey;
      }
}

let cred = new credentials("admin", "1234567890");
console.log(cred.user);//admin
//console.log(cred.apikey);//undefined
//console.log(cred.#apikey);//SyntaxError: Private field '#apikey' must be declared in an enclosing class
console.log(cred.getAuthHeader());//the only way to access the private field is through a public method of the class  getauthheader()