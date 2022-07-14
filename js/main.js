// Attraverso l'apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// Generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
// Bonus
// Far comparire gli indirizzi email solamente quando sono stati tutti generati.

const app = new Vue(
    {
        el: '#root',
    data: {
        emails:[],

    },

    methods: {

    },

    created() {
        // Riempi la lista email
        for (let i = 0; i < 10; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(response => {
                this.emails.push(response.data.response);
            })
        }
    }

})
        
        
