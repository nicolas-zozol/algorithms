package tree;

public class TreeNode {
    int value;
    TreeNode left;
    TreeNode right;

    public TreeNode(int value) {
        this.value = value;
    }

    public TreeNode(int value, TreeNode left, TreeNode right) {
        this.value = value;
        this.left = left;
        this.right = right;
    }

    public void addLeft(TreeNode left) {
        this.left = left;
    }

    public void addRight(TreeNode right) {
        this.right = right;
    }
}
