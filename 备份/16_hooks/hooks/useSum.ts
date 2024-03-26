import { ref,onMounted,computed } from "vue";

export default function () {
    // 数据
    let sum = ref(0);
    let bigSum = computed(()=>{
        return sum.value * 100;
    })
    // 方法
    function add() {
        sum.value += 1;
    }
    onMounted(()=>{
        sum.value = 1000;
    })
    return {sum,add,bigSum}
}