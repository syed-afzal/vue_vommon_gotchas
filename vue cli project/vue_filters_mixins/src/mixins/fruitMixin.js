export const fruitMixin = {
  data() {
    return {
      filteredText: '',
      fruits: ['Apple', 'Mango', 'Banana', 'Orange'],
    }
  },
  filters: {
    toUpperCase(value) {
      return value.toUpperCase();
    }
  },
  computed: {
    RE() {
      return new RegExp(this.filteredText, "i")
    },
    filteredFruits() {
      return this.fruits.filter((element) => {
        // if you want to match case-insensitive use these three ways

        //One
        //return element.toLowerCase().match(this.filteredText.toLowerCase())

        //Two
        // let RE = new RegExp(this.filteredText,"i");
        // return element.match(this.RE)

        // Three

        // to make this 3rd way working we also placed regular expression in computed
        // return element.match(this.RE)


        // other-wise
        return element.match(this.filteredText)
      })
    }
  }
};
