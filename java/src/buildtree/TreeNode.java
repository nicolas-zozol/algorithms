package buildtree;

import java.util.LinkedList;

public class TreeNode {

    TreeNode left;
    TreeNode right;
    int value;


    public TreeNode(int value) {
        this.value = value;
    }

    static public TreeNode build(Integer[] array) {

        if (array == null) {
            throw new RuntimeException("fail");
        }
        if (array.length == 0) {
            return null;
        }
        var root = new TreeNode(array[0]);

        var queue = new LinkedList<TreeNode>();
        queue.add(root);

        int size = array.length;

        for (int i = 1; i < array.length; i++) {
            var current = queue.poll();
            assert current != null;

            if (array[i] != null) {
                current.left = new TreeNode(array[i]);
                queue.add(current.left);
            }
            i++;

            if (i < size && array[i] != null) {
                current.right = new TreeNode(array[i]);
                queue.add(current.right);
            }

        }

        return root;

    }

    public String displayDFS() {
        StringBuilder result = new StringBuilder();
        result = dfsRecursive(this, result);
        return result.toString();

    }

    private StringBuilder dfsRecursive(TreeNode node, StringBuilder result) {

        if (node == null) {
            return result;
        }

        result.append(node.value).append(" ");

        dfsRecursive(node.left, result);
        dfsRecursive(node.right, result);
        return result;


    }


    public String displayBFS() {
        StringBuilder result = new StringBuilder();

        var queue = new LinkedList<TreeNode>();
        queue.add(this);

        while (!queue.isEmpty()) {
            var current = queue.poll();
            result.append(current.value).append(" ");

            if (current.left != null) {
                queue.add(current.left);
            }
            if (current.right != null) {
                queue.add(current.right);
            }

        }
        return result.toString();


    }


}
