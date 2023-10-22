function linkedList() {
  return {
    listHead: null,
    append(value) {
      if (this.listHead == null) {
        this.prepend(value);
      } else {
        let x = this.listHead;
        while (x.nextNode !== null) {
          x = x.nextNode;
        }
        x.nextNode = node(value);
      }
    },
    prepend(value) {
      let x = node(value, this.listHead);
      this.listHead = x;
    },
    size() {
      let num = 0;
      let x = this.listHead;
      while (x !== null) {
        x = x.nextNode;
        num++;
      }
      return num;
    },
    head() {
      return this.listHead;
    },
    tail() {
      let x = this.listHead;
      while (x.nextNode !== null) {
        x = x.nextNode;
      }
      return x;
    },
    at(index) {
      let num = 1;
      let x = this.listHead;
      while (num !== index) {
        x = x.nextNode;
        num++;
      }
      return x;
    },
    pop() {
      const x = this.listHead;
      while (x.nextNode.nextNode !== null) {
        x = x.nextNode;
      }
      x.nextNode = null;
    },
    contains(node) {
      let x = this.listHead;
      while (x.nextNode !== null && x.value !== node) {
        x = x.nextNode;
      }
      if (x.value == node) {
        return true;
      } else if (x.nextNode == null) {
        return false;
      }
    },
    find(node) {
      let x = this.listHead;
      let index = 1;
      while (x.value !== node && x.nextNode !== null) {
        x = x.nextNode;
        index++;
      }
      if (x.value == node) {
        return index;
      } else if (x.nextNode == null) {
        return null;
      }
    },
    toString() {
      let x = this.listHead;
      let result = "";
      while (true) {
        if (x.nextNode == null) {
          result = result.concat(`(${x.value}) -> `);
          return result.concat("null");
        } else {
          result = result.concat(`(${x.value}) -> `);
          x = x.nextNode;
        }
      }
    },
    insertAt(val, index) {
      let num = 1;
      let x = this.listHead;
      while (num !== index - 1) {
        x = x.nextNode;
        num++;
      }
      let y = x.nextNode;
      let newNode = node(val, y);
      x.nextNode = newNode;
    },
    removeAt(index) {
      let num = 1;
      let x = this.listHead;
      while (num !== index - 1) {
        x = x.nextNode;
        num++;
      }
      let y = x.nextNode.nextNode;
      x.nextNode = y;
    },
  };
}
function node(value = null, nextNode = null) {
  return { value: value, nextNode: nextNode };
}

const newList = linkedList();

newList.append("test1");
newList.append("test2");
newList.append("test3");
console.log(newList.listHead);
console.log(newList.toString());
console.log(newList.size());
newList.prepend("test4");
console.log(newList.toString());
console.log(newList.head());
console.log(newList.tail());
console.log(newList.at(2));
console.log(newList.contains("test2"));
console.log(newList.contains("test5"));
console.log(newList.find("test2"));
console.log(newList.toString());
newList.insertAt("test5", 2);
console.log(newList.toString());
newList.removeAt(3);
console.log(newList.toString());
