import { ref, reactive ,onMounted} from "vue";
import axios from "axios";

export default function (){
    // 数据
    let dogList = reactive([
        "https://images.dog.ceo/breeds/pembroke/n02113023_1144.jpg"
    ]);
    // 方法
    async function addDog() {
        try {
            let result = await axios.get("https://dog.ceo/api/breed/pembroke/images/random")
            dogList.push(result.data.message);
        } catch (error) {
            alert(error)
        }
    }
    onMounted(()=>{
        addDog()
    }) 


    // 向外部提供东西
    return{dogList,addDog}
}