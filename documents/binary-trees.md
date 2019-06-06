Binary Tree
====


Objectives
----

Efficient search
Find efficient optimal instead of trying all combinations


Construction from array
----

Insert elements in a recursive manner. After each insertion you could rebalance the tree.



Tree invariant
----

A Tree invariant is a property that MUST be kept after any tree rotation. A simple invariant property is the number of elements in the tree : after each rotation
you move elements, but does not add or remove any elements, so the number oof elements remain the same. However depth could change and is not always an invariant.
  

The BST specific invariant is : *

    n.left < n && n < n.right 



Tree rotation
-----


