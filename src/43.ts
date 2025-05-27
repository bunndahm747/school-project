// Importing necessary package(s)
import { Node } from "core-js";

class MyNode {
  constructor(public value: number) {}

  static create(value: number): MyNode {
    return new MyNode(value);
  }
}

// Example usage
const node1 = MyNode.create(5);
console.log(node1); // Output: <MyNode object at 0x1234567890>
