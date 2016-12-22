/**
* @Author: RoberCastro
* @Date:   20-12-2016
* @Email:  robertoicastro@gmail.com
* @Last modified by:   robercastro
* @Last modified time: 13-12-2016
*/

export class FireBaseHelper {

  constructor(){

    // Get a reference to the database service
    this.database = firebase.database();
    this.dbData = [];

   }

  addObjectToBase(product){

    // l'envoyer dans la collection "products" sur Firebase
    this.database.ref('localOrder').push(product);
  }

  loadData(){
    return new Promise((resolve, reject)=>{
      this.database.ref('localOrder').on('child_added', (snapshot)=> {
          //console.log('child added-> ', snapshot.val());

          this.dbData.push(snapshot.val());
          // les valeur sont contenu dans snapshot.val()
          // et passée à une fonction pour être traitée plus loin...
          //  displayProductsInList(snapshot)
          resolve(this.dbData)
      });
    })

  }
  
}
