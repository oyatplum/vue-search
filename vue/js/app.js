import SearchModel from './models/SearchModel.js'

new Vue({
    el: '#app',
    data: {
        query: '',
        submitted: false,
        searchResult: []
    },
    methods: {
        onSubmit(e) {
            this.search()
        },
        onKeyup() {
            if(!this.query.length) this.onReset()
        },
        onReset(e) {
            this.resetForm()
        },
        resetForm() {
            this.query = ''
            this.submitted = false
            this.searchResult = []
        },
        search() {
            SearchModel.list().then(data => {
                this.submitted = true
                this.searchResult = data
            })
        }
    }
})