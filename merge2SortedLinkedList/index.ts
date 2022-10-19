class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

// time complexity: O(n + m)
// space complexity: O(1)
function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  // base case
  if (list1 === null && list2 === null) {
    return null;
  } else if (list1 !== null && list2 === null) {
    return list1;
  } else if (list1 === null && list2 !== null) {
    return list2;
  }

  let head: ListNode;
  let temp: ListNode;

  if (list1!.val < list2!.val) {
    head = temp = new ListNode(list1!.val);
    list1 = list1!.next;
  } else {
    head = temp = new ListNode(list2!.val);
    list2 = list2!.next;
  }

  while (list1 !== null && list2 !== null) {
    if (list1.val < list2.val) {
      temp.next = new ListNode(list1.val);
      list1 = list1.next;
    } else {
      temp.next = new ListNode(list2.val);
      list2 = list2.next;
    }
    temp = temp.next;
  }

  while (list1 !== null) {
    temp.next = new ListNode(list1.val);
    list1 = list1.next;
    temp = temp.next;
  }

  while (list2 !== null) {
    temp.next = new ListNode(list2.val);
    list2 = list2.next;
    temp = temp.next;
  }

  return head;
}
