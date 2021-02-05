const axios = require('axios');
const PersonDictionary = require('../utils/personDictionary');

class Person {
  static async allfromSwapi(page = '1'){
    const { data } = await axios.get('https://swapi.py4e.com/api/people?page='+page);

    let new_people = {};
    new_people['recuento'] = data['count'];
    new_people['siguiente'] = data['next'];
    new_people['anterior'] = data['previous'];
    new_people['resultados'] = [];

    data['results'].forEach( element => {
      new_people['resultados'].push( PersonDictionary.mapFromENtoES( element ) );
    });
    return new_people;
  }

  static async getByIdfromSwapi(personId){
    const { data } = await axios.get('https://swapi.py4e.com/api/people/'+ personId);

    return PersonDictionary.mapFromENtoES( data );
  }
}

module.exports = Person;