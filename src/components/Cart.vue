<template>
  <div>
    <table class="gridtable">
      <tr>
        <th>Name</th>
        <th>Quantity</th>
        <th>(Standard)Price(USD)</th>
        <th>Sub-total(USD)</th>
        <th>operation</th>
      </tr>
      <tr v-for="item in orderByProductList" :key="item.id">
        <td>{{ item.name }}</td>
        <!-- <td>{{ item.qty }}</td> -->
        <td>
          <input
            type="number"
            v-model="item.qty"
            min="0"
            @change="reduceNum(item.id, item.qty)"
          />
        </td>
        <td>{{ item.price }}</td>
        <td>{{ item.price * item.qty }}</td>
        <td class="detele" @click="delteProduct(item.id)">删除</td>
      </tr>
      <tr>
        <td colspan="4" style="text-align: right; font-weight: 700">Total</td>
        <td style="font-weight: 700">USD {{ total }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      productList: [
        { id: 1, name: "Chicken Wing", category: "Food", qty: 3, price: 10 },
        { id: 2, name: "Pizza", category: "Food", qty: 1, price: 50 },
        { id: 3, name: "Hamburger", category: "Food", qty: 1, price: 12 },
        { id: 4, name: "Coca Cola", category: "Drink", qty: 2, price: 5 },
        { id: 5, name: "Orange Juice", category: "Drink", qty: 1, price: 15 },
        { id: 6, name: "Potato Chips", category: "Snack", qty: 1, price: 8 },
      ],
    }
  },
  methods: {
    // 删除指定商品
    delteProduct (id) {
      this.productList = this.productList.filter((item) => item.id != id)
    },
    // 商品数小于0
    reduceNum (id, num) {
      num <= 0 ? this.productList = this.productList.filter(item => item.id != id) : null
    },
    sortBy (list, key) {
      return list.sort((a, b) => a[key] - b[key])
    }
  },
  computed: {
    // 商品总价格
    total () {
      let prices = 0
      this.productList.forEach((item) => {
        prices += item.qty * item.price
      })
      return prices
    },
    // 商品排序
    orderByProductList () {
      return this.sortBy(this.productList, 'name')
    }
  }

}
</script>

<style scoped>
table {
  text-align: center;
  width: 70%;
  margin: 0 auto;
}
table.gridtable {
  font-size: 11px;
  color: #333333;
  border-width: 1px;
  border-color: #666666;
  border-collapse: collapse;
}
table.gridtable th {
  border-width: 1px;
  padding: 8px;
  border-style: solid;
  border-color: #666666;
  background-color: #dedede;
}
table.gridtable td {
  border-width: 1px;
  padding: 8px;
  border-style: solid;
  border-color: #666666;
  background-color: #ffffff;
}
.detele {
  color: red;
  cursor: pointer;
}
</style>
