package buildtree;


public class MainTreeNode {


    public static void main(String[] args) {

        Integer[] values = {3, 9, 20, 3, 4, null, null, null, 15, 7};
        TreeNode root = TreeNode.build(values);

        assert root != null;
        System.out.println(root.displayBFS());

        System.out.println(root.displayDFS());

    }


}
