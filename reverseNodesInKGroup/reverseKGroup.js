class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

function reverseKGroup(head, k) {
    if (k === 1) { return head; }
    let tempHead = new Node();
    tempHead.next = head;
    let current = tempHead;
    let tail, count, next;
    while (current.next) {
        head = current.next;
        tail = current.next;
        count = 1;
        while(count < k) {
            if (!tail.next) {
                tail = head;
                count = k - count + 1;
                continue;
            }
            next = tail.next.next;
            tail.next.next = head;
            head = tail.next;
            tail.next = next;
            count++;
        }
        current.next = head;
        current = tail;
    }
    return tempHead.next;
}

module.exports = reverseKGroup;
