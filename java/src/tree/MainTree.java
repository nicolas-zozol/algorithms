package tree;

import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;
import java.util.Queue;

public class MainTree {

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

        var list = new MainTree().atLevelBFS(root);
        System.out.printf("%n %n");

        System.out.println(list);

    }


    List<List<Integer>> atLevelBFS(TreeNode root) {

        Queue<TreeNode> q = new LinkedList<>();
        List<List<Integer>> result = new ArrayList<>();
        if (root == null) {
            return result;
        }

        q.add(root);

        while (!q.isEmpty()) {

            int levelSize = q.size();
            List<Integer> levelList = new ArrayList<>();

            for (int i = 0; i < levelSize; i++) {
                var current = q.poll();
                assert current != null;
                levelList.add(current.value);

                if (current.left != null) {
                    q.add(current.left);
                }
                if (current.right != null) {
                    q.add(current.right);
                }


            }
            result.add(levelList);


        }

        return result;


    }


    void simpleTraverse(TreeNode root) {
        Queue<TreeNode> queue = new LinkedList<>();
        queue.add(root);
        while (!queue.isEmpty()) {

            var item = queue.poll();

            // Do something with queue
            System.out.printf("%d ", item.value);


            if (item.left != null) {
                queue.add(item.left);
            }
            if (item.right != null) {
                queue.add(item.right);
            }
        }
    }

}
