
//class become gneric when we add <T> after the class name
class TestDataStorae<T>{
    private item : T[] = [];

    addItem(item: T) :void{
        this.item.push(item);
    }

    getFirstItem() : T{
            return this.item[0]!;
    }

    getAllItems() : T[]{
        return this.item;
    }

    count():number{
        return this.item.length;
    }
}

let codeStore = new TestDataStorae<string>();
let numberStore = new TestDataStorae<number>();

codeStore.addItem("login");
codeStore.addItem("signup");
numberStore.addItem(202);
numberStore.addItem(400);
numberStore.addItem(500);

console.log("first code:", codeStore.getFirstItem());
console.log("all codes:", codeStore.getAllItems());
console.log("number of codes:", codeStore.count());