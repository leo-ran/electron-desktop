export const lazy = {
    inserted(el, bind, vnode) {

        // 检测是否需要lazyload
        if (!bind.value) return;

        // 查看元素偏移是大过 窗口
        if (el.offsetHeioffsetTopght < window.innerHeight && el.offsetLeft < window.innerWidth) {
            // 小于窗口直接显示
            vnode.context.lazyState = true
            return;
        }

        let scrollElements = []

        /**
         * 断言是否为可滚动元素
         */
        function assert(element) {
            if (element.scrollTop > 0 || element.scrollLeft > 0) {
                return true
            } else {
                return false
            }
        }

        /**
         * 遍历所有父元素
         * @param { Element } elm
         */
        function mapScrollElement(elm) {
            // 当前元素的父元素
            const parentElement = elm.parentElement
            if (assert(elm)) { // 直接判断
                scrollElements.push(elm)
            } else { // 通过设置滚动值测试
                elm.scrollTop = elm.scrollLeft = 1
                if (assert(elm)) {
                    // 恢复原状 
                    elm.scrollTop = elm.scrollLeft = 0
                    scrollElements.push(elm)
                }
            }

            // 继续检测父元素
            if (parentElement) mapScrollElement(elm.parentElement)
        }

        // 深度检测所有父元素
        mapScrollElement(el.parentElement)

        // 若无可滚动元素 直接显示
        if (scrollElements.length === 0) {
            vnode.context.lazyState = true
        }

        /**
         * 当图片加载完毕 取消所有事件监听
         */
        function clearEvent(eventName, handler) {
            scrollElements.forEach(iElement => {
                iElement.removeEventListener(eventName, handler)
            })
        }

        /**
         * 检测元素是否在元素中
         */
        function isInScreen(iElement, handler) {
            let validX = false
            let validY = false
            if (el.offsetTop < window.innerHeight) validY = true
            if (el.offsetLeft < window.innerWidth) validX = true
            if (!validX) validX = el.offsetLeft <= iElement.scrollLeft + window.innerWidth
            if (!validY) validY = el.offsetTop <= iElement.scrollTop + window.innerHeight

            if (validX && validY) {
                vnode.context.lazyState = true
                clearEvent('scroll', handler)
            }
        }

        // 遍历所有带滚动的元素监听滚动事件
        scrollElements.forEach(iElement => {
            // 如果可滚动元素是HTML 不能监听scroll事件 让document去监听
            if (iElement.nodeName === 'HTML') iElement = document

            // 事件处理函数
            function handler() {
                isInScreen(iElement, handler)
            }

            // 所有滚动元素监听事件
            iElement.addEventListener('scroll', handler)

            // 默认检测
            isInScreen(iElement, handler)
        })

    }
}

export default {
    lazy
}