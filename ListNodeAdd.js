//节点
function LNode(element) {
    this.element = element;   //当前节点的元素
    this.next = null;         //下一个节点链接
}
function findPrev(index) {
    if (this.head.next && index < this.length) {
        let tNode = this.head
        // 取出要删除index位置的前一个
        while (index--) {
            tNode = tNode.next
        }
        return tNode
    }
    return null
}
function insert(lNode, index) {
    if (index) {
        if (tNode = this.findPrev(index)) {
            lNode.next = tNode.next
            tNode.next = lNode
        }

    } else {
        lNode.next = this.head.next
        this.head.next = lNode
    }
    this.length++
}
function remove(index) {
    let lNode
    if (this.head.next) {
        if (index < this.length) {
            lNode = this.head
            // 取出要删除index位置的前一个
            while (index--) {
                lNode = lNode.next
            }
            lNode.next = lNode.next.next
        }
    }
}
function find(index) {

    if (this.head.next && index < this.length) {
        let tNode = this.head.next
        // 取出要删除index位置的前一个
        while (index--) {
            tNode = tNode.next
        }
        return tNode
    }
    return null
}
//链表类
function LList() {
    this.head = new LNode('head');     //头节点
    this.find = find;                   //查找节点
    this.length = 0;                   //查找节点
    this.insert = insert;               //插入节点
    this.remove = remove;               //删除节点
    this.findPrev = findPrev;           //查找前一个节点

}
LList.prototype.toString = function () {
    let tNode = this.head
    const toStrArr = []
    while (this.length--) {
        tNode = tNode.next
        toStrArr.push(tNode.element)
    }
    return toStrArr
}
const lList = new LList()
for (let i = 0; i < 10; i++) {
    lList.insert(new LNode('data' + i))
}
lList.insert(new LNode('datamy'), 1)

console.log(LList.prototype)
console.log(lList)
console.log(lList.toString())
// console.log(lList.head.next,)

// lList.remove(1)
// console.log(lList.head.next,)
// console.log(lList.find(2))
// console.log(LList.prototype.prototype)