package tree;

import java.util.ArrayList;
import java.util.List;
import java.util.Stack;

public class DfsRecursiveAndStack {


    public static void main(String[] args) {

        TreeNode root = new TreeNode(0);
        TreeNode a = new TreeNode(34);
        TreeNode b = new TreeNode(14);
        TreeNode c = new TreeNode(44);
        TreeNode d = new TreeNode(64);
        TreeNode e = new TreeNode(3);
        TreeNode f = new TreeNode(30);
        TreeNode g = new TreeNode(39);

        TreeNode bl = new TreeNode(-12);
        TreeNode br = new TreeNode(-40);


        e.addLeft(f);
        e.addRight(g);
        d.addLeft(e);
        c.addRight(d);
        b.addLeft(bl);
        b.addRight(br);
        a.addLeft(b);
        a.addRight(c);
        root.addLeft(a);

        var dfs = new DfsRecursiveAndStack();
        List<Integer> result = dfs.traverseRecursiveDfs(root, new ArrayList<>());
        System.out.println(result);

        List<Integer> resultStack = dfs.traverseStack(root);
        System.out.println(resultStack);

    }


    public List<Integer> traverseRecursiveDfs(TreeNode root, List<Integer> result) {

        if (root == null) {
            return result;
        }

        result.add(root.value);
        traverseRecursiveDfs(root.left, result);
        traverseRecursiveDfs(root.right, result);

        return result;
    }

    public List<Integer> traverseStack(TreeNode root) {

        Stack<TreeNode> stack = new Stack<>();
        List<Integer> result = new ArrayList<>();

        if (root == null) {
            return new ArrayList<>();
        }

        stack.push(root);

        while (!stack.isEmpty()) {

            var current = stack.pop();
            result.add(current.value);

            if (current.right != null) {
                stack.push(current.right);
            }
            if (current.left != null) {
                stack.push(current.left);
            }

        }

        return result;


    }


}
