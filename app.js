// 实例化vue对象
new Vue({
  //创建根元素，容器element
  el: '#app',
  //data内的属性内容只作用于#app的内部
  data() {
    return {
      page: 18,
      name: '',
      age: '18',
      job: '',
      selected: '',
      txtInfo: '文字限制1000字',
      age: 8,
      a: 0,
      b: 0
    };
  },
  //方法
  methods: {
    // 增加/减少
    add(inc) {
      this.page += inc;
    },
    subtract(dec) {
      this.page -= dec;
    },
    handleClick() {
      alert("Hello")
    },
    logName() {
      console.log('正在输入名字')
    },
    logAge() {
      console.log('正在输入年龄')
    },
    logNameInfo() {
      alert("请确认输入的名字是否正确")
    },
    logAgeInfo() {
      alert("请确认输入的年龄是否正确")
    },
    getJob() {
      // console.log(this.$refs.name.value);
      this.job = this.$refs.job.value;
    }
  },
  watch: {
    txtInfo(val, oldval) {
      console.log(val, oldval)
    }
  },
  computed: {
    addToA() {
      return this.a + this.age;
    },
    addToB() {
      return this.b + this.age;
    }
  }
});