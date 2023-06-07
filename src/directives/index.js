//定义懒加载插件
import { useIntersectionObserver } from "@vueuse/core";
export const lazyPlugin = {
    install(app){
        //懒加载指令逻辑
    
    app.directive('img-lazy',{
        mounted(el,binding){
            //el为该指令绑定的标签
            //binding为指令的值
           const {stop} = useIntersectionObserver(
                el,
                ([{isIntersecting}])=>{
                    // console.log(isIntersecting);
                    if(isIntersecting){
                        //进入市口区域
                        //拿到元素
                        //让img标签的src在图片进入视口时获取值
                        el.src = binding.value
                        stop()
                    }
                }
            )
    
        }
    })
        }
}