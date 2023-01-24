import SearchModel1 from './models/SearchModel1.js'
import SearchModel2 from './models/SearchModel2.js'
import SearchModel3 from './models/SearchModel3.js'
import SearchModel4 from './models/SearchModel4.js'
import SearchModel5 from './models/SearchModel5.js'
import KeywordModel from './models/KeywordModel.js'
import HistoryModel from './models/HistoryModel.js'

new Vue({
    el: '#app',
    data: {
        query: '',
        submitted: false,
        tabs: ['추천 검색어', '최근 검색어'],
        selectedTab : '',
        keywords: [],
        history: [],
        searchResult: []
    },
    created() {
        this.selectedTab = this.tabs[0]
        this.fetchKeyword()
        this.fetchHistory()
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
        onClickTab(tab) {
            this.selectedTab = tab
        },
        onClickKeyword(keyword){
            this.query = keyword
            if(keyword === "귀여운 명수") this.search1()
            else if(keyword === "까칠한 명수") this.search2()
            else if(keyword === "신이난 명수") this.search3()
            else if(keyword === "현실적 명수") this.search4()
            else if(keyword === "라푼젤 명수") this.search5()
        },
        onClickRemoveHistory(keyword) {
            HistoryModel.remove(keyword)
            this.fetchHistory()
        },
        fetchKeyword(){
            KeywordModel.list().then(data => {
                this.keywords = data
            })
        },
        fetchHistory(){
            HistoryModel.list().then(data => {
                this.history = data
            })
        },
        resetForm() {
            this.query = ''
            this.submitted = false
            this.searchResult = []
        },
        search1() {
            SearchModel1.list().then(data => {
                this.submitted = true
                this.searchResult = data
            })
            HistoryModel.add(this.query)
            this.fetchHistory()
        },
        search2() {
            SearchModel2.list().then(data => {
                this.submitted = true
                this.searchResult = data
            })
            HistoryModel.add(this.query)
            this.fetchHistory()
        },
        search3() {
            SearchModel3.list().then(data => {
                this.submitted = true
                this.searchResult = data
            })
            HistoryModel.add(this.query)
            this.fetchHistory()
        },
        search4() {
            SearchModel4.list().then(data => {
                this.submitted = true
                this.searchResult = data
            })
            HistoryModel.add(this.query)
            this.fetchHistory()
        },
        search5() {
            SearchModel5.list().then(data => {
                this.submitted = true
                this.searchResult = data
            })
            HistoryModel.add(this.query)
            this.fetchHistory()
        }
    }
})