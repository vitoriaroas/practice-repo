/**
Implement a class that would have the following functions:
- add string
- undo
- redo
 */
class UndoRedo {
  constructor() {
    this.undoStack = [];
    this.redoQueue = [];
  }

  currentString() {
    return this.undoStack.toString();
  }
  add(string) {
    this.undoStack.push(string);
  }
  undo() {
    const poppedString = this.undoStack.pop();
    this.redoQueue.push(poppedString);
  }
  redo() {
    const poppedString = this.redoQueue.pop();
    this.undoStack.push(poppedString);
  }
}
const undoRedo = new UndoRedo();
undoRedo.add("hi");
undoRedo.add(" ");
undoRedo.add("my");
undoRedo.add(" ");
undoRedo.add("name");
undoRedo.add(" ");
undoRedo.add("is");
undoRedo.add(" ");
undoRedo.add("princess");
undoRedo.undo();
undoRedo.undo();
undoRedo.redo();
undoRedo.redo();
console.log(undoRedo.currentString());
